-- ============================================================================
-- MonoCode — Migração para Supabase Auth (versão idempotente)
-- Execute no SQL Editor DEPOIS de supabase/schema.sql.
-- Segura para rodar mais de uma vez.
--
-- Conecta public.profiles a auth.users: cada login social passa a criar o
-- usuário no Supabase Auth (Authentication -> Users) e o perfil aqui.
-- ============================================================================

-- 0. Limpa vestígios de tentativas anteriores da migração antiga
drop table if exists public.profiles_new cascade;

-- 1. Remove perfis órfãos (criados pelo fluxo antigo, sem conta no Auth)
delete from public.profiles p
where not exists (select 1 from auth.users u where u.id = p.id);

-- 2. Vincula profiles.id a auth.users.id (deleta tudo em cascata se a conta sair)
alter table public.profiles
  drop constraint if exists profiles_id_auth_fkey;

alter table public.profiles
  add constraint profiles_id_auth_fkey
  foreign key (id) references auth.users(id) on delete cascade;

-- 3. Provider 'email' passa a ser permitido no check
alter table public.profiles drop constraint if exists profiles_provider_check;
alter table public.profiles
  add constraint profiles_provider_check
  check (provider in ('google', 'discord', 'email'));

-- 4. Backfill: cria profile para quem já existe no auth.users
insert into public.profiles (id, provider, provider_id, name, email, avatar_url)
select
  u.id,
  case coalesce(u.raw_app_meta_data->>'provider', u.raw_user_meta_data->>'provider', 'email')
    when 'google' then 'google'
    when 'discord' then 'discord'
    else 'email'
  end,
  coalesce(
    u.raw_user_meta_data->>'provider_id',
    u.raw_user_meta_data->>'sub',
    u.id::text
  ),
  coalesce(
    u.raw_user_meta_data->>'full_name',
    u.raw_user_meta_data->>'name',
    split_part(coalesce(u.email, 'usuario'), '@', 1)
  ),
  u.email,
  nullif(coalesce(u.raw_user_meta_data->>'avatar_url', u.raw_user_meta_data->>'picture', ''), '')
from auth.users u
on conflict (id) do nothing;

-- 5. Índices
create index if not exists idx_profiles_email on public.profiles (email);
create unique index if not exists idx_profiles_provider_pid
  on public.profiles (provider, provider_id)
  where provider_id is not null;

-- 6. Cria/atualiza profile automaticamente quando um usuário nasce no Auth
create or replace function public.handle_new_auth_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  prov text;
  pid  text;
  full_name text;
  avatar text;
begin
  prov := coalesce(new.raw_user_meta_data->>'provider', new.raw_app_meta_data->>'provider', 'email');
  if prov not in ('google', 'discord', 'email') then prov := 'email'; end if;

  pid := coalesce(
    new.raw_user_meta_data->>'provider_id',
    new.raw_user_meta_data->>'sub',
    new.raw_user_meta_data->>'user_id',
    new.id::text
  );

  full_name := coalesce(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    split_part(coalesce(new.email, 'usuario'), '@', 1)
  );

  avatar := coalesce(
    new.raw_user_meta_data->>'avatar_url',
    new.raw_user_meta_data->>'picture',
    new.raw_user_meta_data->>'avatar'
  );

  insert into public.profiles (id, provider, provider_id, name, email, avatar_url)
  values (new.id, prov, pid, full_name, new.email, nullif(avatar, ''))
  on conflict (id) do update
    set name = excluded.name,
        email = excluded.email,
        avatar_url = excluded.avatar_url,
        updated_at = now();

  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_auth_user();

drop trigger if exists on_auth_user_updated on auth.users;
create trigger on_auth_user_updated
  after update on auth.users
  for each row execute function public.handle_new_auth_user();

-- 7. RLS: cada usuário lê/altera apenas o PRÓPRIO perfil
alter table public.profiles enable row level security;

drop policy if exists "profiles: leitura própria" on public.profiles;
create policy "profiles: leitura própria"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles: atualização própria" on public.profiles;
create policy "profiles: atualização própria"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 8. RLS nas tabelas de dados: cada usuário vê só o que é dele
drop policy if exists "progresso próprio" on public.user_progress;
create policy "progresso próprio"
  on public.user_progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "lições próprias" on public.completed_lessons;
create policy "lições próprias"
  on public.completed_lessons for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "exercícios próprios" on public.completed_exercises;
create policy "exercícios próprios"
  on public.completed_exercises for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "inscrições próprias" on public.course_enrollments;
create policy "inscrições próprias"
  on public.course_enrollments for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "atividades próprias" on public.activity_log;
create policy "atividades próprias"
  on public.activity_log for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "conquistas desbloqueadas próprias" on public.unlocked_achievements;
create policy "conquistas desbloqueadas próprias"
  on public.unlocked_achievements for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "rascunhos próprios" on public.code_drafts;
create policy "rascunhos próprios"
  on public.code_drafts for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "config próprias" on public.user_settings;
create policy "config próprias"
  on public.user_settings for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
