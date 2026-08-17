/**
 * MonoCode — Módulo de Autenticação (Supabase Auth)
 *
 * Login social nativo do Supabase (Google / Discord):
 *   Auth.loginWithGoogle() / Auth.loginWithDiscord()
 *     -> supabase.auth.signInWithOAuth (redirect para o provedor)
 *     -> volta em login.html com a sessão na URL (#access_token=...)
 *     -> Auth.completeOAuthLogin() detecta e completa a sessão
 *
 * Usuários aparecem no dashboard: Authentication -> Users.
 * Perfis/dados ficam nas tabelas public.* (schema.sql + migrate-to-auth.sql).
 */

import { createClient } from '@supabase/supabase-js';
import { Storage } from './storage.js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

class AuthManager {
  constructor() {
    this.isAuthenticated = false;
    this._pendingSession = false;
  }

  /**
   * Deve ser chamado no load de login.html / main.js:
   * detecta o retorno do OAuth (#access_token=...), persiste a sessão
   * com o Supabase e monta o usuário local.
   */
  async completeOAuthLogin() {
    if (this.isAuthenticated) return Storage.getUser();

    const { data, error } = await supabase.auth.getSession();

    if (error || !data?.session) {
      this.isAuthenticated = false;
      return null;
    }

    this._pendingSession = true;
    const authUser = data.session.user;

    const meta = authUser.raw_user_meta_data || {};
    const appMeta = authUser.raw_app_meta_data || {};
    const provider = appMeta.provider || meta.provider || 'email';

    const fullName =
      meta.full_name || meta.name || meta.user_name ||
      (authUser.email ? authUser.email.split('@')[0] : 'Usuário MonoCode');

    const avatarUrl = meta.avatar_url || meta.picture || meta.avatar || null;

    // Tenta carregar username/avatar customizados salvos no profile
    let username = null;
    let customAvatar = null;
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', authUser.id)
        .maybeSingle();
      username = profile?.username || null;
      customAvatar = profile?.avatar_url || null;
    } catch { /* profile pode não existir ainda */ }

    const displayName = username || fullName.trim();

    const userData = {
      id: authUser.id,
      name: displayName,
      username: username || null,
      email: authUser.email || '',
      avatarText: displayName.trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'MC',
      avatarUrl: customAvatar || avatarUrl,
      role: 'Estudante',
      provider,
      joinedDate: (authUser.created_at || new Date().toISOString()).split('T')[0]
    };

    // Sessão nova (usuário diferente do logado antes) = estado zerado
    const previous = Storage.getUser();
    if (!previous || previous.id !== userData.id) {
      Storage.startNewSession(userData);
    }

    this.isAuthenticated = true;
    this._pendingSession = false;
    return userData;
  }

  /**
   * Restaura sessão salva (refresh de página) — sem trocar de aba,
   * o Supabase persiste a sessão no localStorage do navegador.
   */
  async restoreSession() {
    if (this.isAuthenticated) return Storage.getUser();
    return this.completeOAuthLogin();
  }

  /** Inicia login social via Supabase Auth. */
  loginWithGoogle() {
    return this._signInWithOAuth('google');
  }

  loginWithDiscord() {
    return this._signInWithOAuth('discord');
  }

  async _signInWithOAuth(provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/login.html`,
      },
    });
    if (error) {
      console.error(`[auth] falha ao iniciar OAuth ${provider}:`, error.message);
      throw error;
    }
  }

  /** Encerra a sessão local e no Supabase. */
  async logout() {
    this.isAuthenticated = false;
    await supabase.auth.signOut().catch(() => {});
    Storage.clearSession();
    window.location.href = 'login.html';
  }

  // =====================================================================
  // USERNAME + AVATAR
  // =====================================================================

  static USERNAME_RE = /^[a-z0-9_.]{3,20}$/;
  static AVATAR_MAX_BYTES = 10 * 1024 * 1024; // 10 MB
  static AVATAR_MIME = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/avif'];

  /**
   * Define o username do usuário (único, 3-20 chars, a-z 0-9 _ .).
   * Retorna { ok, error? }.
   */
  async setUsername(username) {
    const clean = String(username || '').trim().toLowerCase();
    if (!AuthManager.USERNAME_RE.test(clean)) {
      return { ok: false, error: 'Usuário inválido: use 3-20 caracteres (letras minúsculas, números, _ e .)' };
    }

    const { error } = await supabase
      .from('profiles')
      .update({ username: clean })
      .eq('id', Storage.getUser().id);

    if (error) {
      const msg = error.code === '23505' || /duplicate|unique/i.test(error.message)
        ? 'Este nome de usuário já está em uso.'
        : 'Não foi possível salvar o nome de usuário.';
      return { ok: false, error: msg };
    }

    Storage.updateUser({ username: clean, name: clean });
    return { ok: true };
  }

  /**
   * Envia uma foto/gif (até 10MB) para o bucket avatars/<user_id>/,
   * atualiza profiles.avatar_url e devolve a URL pública.
   * Retorna { ok, url?, error? }.
   */
  async uploadAvatar(file) {
    if (!file) return { ok: false, error: 'Nenhum arquivo selecionado.' };
    if (file.size > AuthManager.AVATAR_MAX_BYTES) {
      return { ok: false, error: 'Arquivo muito grande. Limite: 10 MB.' };
    }
    if (!AuthManager.AVATAR_MIME.includes(file.type)) {
      return { ok: false, error: 'Formato não suportado. Use PNG, JPG, GIF, WebP ou AVIF.' };
    }

    const user = Storage.getUser();
    const ext = file.name.split('.').pop().toLowerCase() || 'png';
    const path = `${user.id}/avatar-${Date.now()}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from('avatars')
      .upload(path, file, { contentType: file.type, upsert: false });

    if (upErr) return { ok: false, error: 'Falha no envio: ' + upErr.message };

    const { data } = supabase.storage.from('avatars').getPublicUrl(path);
    const url = `${data.publicUrl}?v=${Date.now()}`;

    const { error: dbErr } = await supabase
      .from('profiles')
      .update({ avatar_url: url })
      .eq('id', user.id);

    if (dbErr) return { ok: false, error: 'Enviado, mas falha ao salvar no perfil.' };

    Storage.updateUser({ avatarUrl: url });
    return { ok: true, url };
  }
}

export const Auth = new AuthManager();
