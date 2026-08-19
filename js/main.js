/**
 * MonoCode — Ponto de Entrada Principal
 * Inicializa componentes compartilhados (Navbar, Footer, Busca)
 */

import { UI } from './ui.js';
import { Auth } from './auth.js';

const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const protectedPages = ['dashboard.html', 'profile.html', 'settings.html'];

async function boot() {
  // Restaura sessão do Supabase (refresh de página / retorno do OAuth)
  await Auth.restoreSession();

  // Páginas protegidas: sem sessão ativa, manda para a tela de entrada
  if (protectedPages.includes(currentPath) && !Auth.isAuthenticated) {
    window.location.href = 'login.html';
    return;
  }

  let activeNav = 'home';
  if (currentPath.includes('dashboard')) activeNav = 'dashboard';
  else if (currentPath.includes('course')) activeNav = 'courses';
  else if (currentPath.includes('exercise')) activeNav = 'exercises';
  else if (currentPath.includes('profile')) activeNav = 'profile';

  UI.renderNavbar(activeNav);
  UI.renderFooter();
}

boot();
