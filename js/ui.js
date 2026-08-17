/**
 * MonoCode — Utilitários de Interface de Usuário (UI)
 * Gerencia Navbar, Footer, Mobile Menu, Toasts e Ícones Monocromáticos SVG.
 */

import { Storage } from './storage.js';
import { Auth } from './auth.js';
import { initGlobalSearch, searchInstance } from './search.js';

export const ICONS = {
  logo: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  award: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  terminal: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  checkCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  settings: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  logout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
  flame: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
};

class UIManager {
  constructor() {
    this.toastContainer = null;
    this._initToastContainer();
  }

  _initToastContainer() {
    let container = document.getElementById('monocode-toasts');
    if (!container && typeof document !== 'undefined') {
      container = document.createElement('div');
      container.id = 'monocode-toasts';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    this.toastContainer = container;
  }

  showToast(message, type = 'info', duration = 3500) {
    if (!this.toastContainer) this._initToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    let iconSvg = ICONS.checkCircle;
    if (type === 'award') iconSvg = ICONS.award;

    toast.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span class="toast-msg">${this.escapeHTML(message)}</span>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  renderNavbar(activePage = 'home') {
    const navEl = document.getElementById('navbar-container');
    if (!navEl) return;

    const user = Storage.getUser();
    const stats = Storage.getStats();
    const isLogged = Auth.isAuthenticated;

    navEl.innerHTML = `
      <header class="navbar-wrapper">
        <div class="navbar-inner container">
          <div class="navbar-left">
            <a href="index.html" class="navbar-logo" title="MonoCode">
              <span class="logo-icon">${ICONS.logo}</span>
              <span class="logo-text">MonoCode</span>
            </a>
            
            <nav class="navbar-links">
              <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
              <a href="courses.html" class="nav-link ${activePage === 'courses' ? 'active' : ''}">Cursos</a>
              <a href="exercises.html" class="nav-link ${activePage === 'exercises' ? 'active' : ''}">Exercícios</a>
              <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
            </nav>
          </div>

          <div class="navbar-right">
            <button type="button" class="btn-search-trigger" id="global-search-trigger" title="Buscar no MonoCode (Ctrl+K)">
              <span class="search-trigger-icon">${ICONS.search}</span>
              <span class="search-trigger-text">Buscar...</span>
              <kbd class="search-trigger-kbd">Ctrl K</kbd>
            </button>

            ${isLogged ? `
              <div class="nav-user-menu">
                <button type="button" class="nav-user-avatar-btn" id="user-menu-btn" aria-label="Menu do usuário">
                  ${user.avatarUrl
                    ? `<img src="${this.escapeHTML(user.avatarUrl)}" alt="" class="nav-avatar-img" referrerpolicy="no-referrer">`
                    : `<span class="nav-avatar-text">${user.avatarText || 'MC'}</span>`}
                </button>
                <div class="nav-user-dropdown" id="user-dropdown">
                  <div class="dropdown-header">
                    <span class="dropdown-user-name">${user.name}</span>
                    <span class="dropdown-user-email">${user.email}</span>
                  </div>
                  <div class="dropdown-divider"></div>
                  <a href="dashboard.html" class="dropdown-item">
                    ${ICONS.book} <span>Dashboard</span>
                  </a>
                  <a href="profile.html" class="dropdown-item">
                    ${ICONS.user} <span>Perfil & Conquistas</span>
                  </a>
                  <a href="settings.html" class="dropdown-item">
                    ${ICONS.settings} <span>Configurações</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <button type="button" class="dropdown-item btn-logout" id="logout-trigger">
                    ${ICONS.logout} <span>Sair</span>
                  </button>
                </div>
              </div>
            ` : `
              <div class="nav-auth-buttons">
                <a href="login.html" class="btn btn-ghost">Entrar</a>
                <a href="courses.html" class="btn btn-primary">Começar agora</a>
              </div>
            `}

            <button type="button" class="btn-mobile-toggle" id="mobile-menu-toggle" aria-label="Abrir menu mobile">
              ${ICONS.menu}
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Drawer Navigation -->
      <div class="mobile-drawer" id="mobile-drawer">
        <div class="mobile-drawer-header">
          <div class="navbar-logo">
            <span class="logo-icon">${ICONS.logo}</span>
            <span class="logo-text">MonoCode</span>
          </div>
          <button type="button" class="btn-drawer-close" id="mobile-drawer-close">
            ${ICONS.close}
          </button>
        </div>
        <div class="mobile-drawer-links">
          <a href="index.html" class="drawer-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="dashboard.html" class="drawer-link ${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
          <a href="courses.html" class="drawer-link ${activePage === 'courses' ? 'active' : ''}">Cursos</a>
          <a href="exercises.html" class="drawer-link ${activePage === 'exercises' ? 'active' : ''}">Exercícios</a>
          <a href="profile.html" class="drawer-link ${activePage === 'profile' ? 'active' : ''}">Perfil</a>
          <a href="settings.html" class="drawer-link ${activePage === 'settings' ? 'active' : ''}">Configurações</a>
        </div>
        <div class="mobile-drawer-footer">
          ${isLogged ? `
            <button type="button" class="btn btn-secondary w-full" id="mobile-logout-btn">Encerrar Sessão</button>
          ` : `
            <a href="login.html" class="btn btn-secondary w-full">Entrar</a>
            <a href="courses.html" class="btn btn-primary w-full">Começar agora</a>
          `}
        </div>
      </div>
    `;

    this._bindNavbarEvents();
    initGlobalSearch();
  }

  _bindNavbarEvents() {
    const searchTrigger = document.getElementById('global-search-trigger');
    if (searchTrigger) {
      searchTrigger.addEventListener('click', () => {
        const search = initGlobalSearch();
        search.open();
      });
    }

    // Dropdown do usuário
    const userBtn = document.getElementById('user-menu-btn');
    const userDropdown = document.getElementById('user-dropdown');
    if (userBtn && userDropdown) {
      userBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
      });

      document.addEventListener('click', () => {
        userDropdown.classList.remove('active');
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-trigger');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    const handleLogout = () => {
      Auth.logout(); // async: limpa sessão Supabase + localStorage e redireciona
    };
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (mobileLogoutBtn) mobileLogoutBtn.addEventListener('click', handleLogout);

    // Mobile Drawer
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const drawerClose = document.getElementById('mobile-drawer-close');
    const drawer = document.getElementById('mobile-drawer');
    if (mobileToggle && drawer) {
      mobileToggle.addEventListener('click', () => drawer.classList.add('active'));
    }
    if (drawerClose && drawer) {
      drawerClose.addEventListener('click', () => drawer.classList.remove('active'));
    }
  }

  renderFooter() {
    const footerEl = document.getElementById('footer-container');
    if (!footerEl) return;

    footerEl.innerHTML = `
      <footer class="mono-footer">
        <div class="footer-inner container">
          <div class="footer-brand">
            <a href="index.html" class="navbar-logo">
              <span class="logo-icon">${ICONS.logo}</span>
              <span class="logo-text">MonoCode</span>
            </a>
            <p class="footer-tagline">Plataforma 100% voluntária e sem fins lucrativos: programadores de todo o mundo doam tempo e conhecimento para que aprender a programar seja gratuito.</p>
          </div>

          <div class="footer-nav-groups">
            <div class="footer-col">
              <span class="footer-heading">PLATAFORMA</span>
              <a href="courses.html">Todos os Cursos</a>
              <a href="exercises.html">Exercícios Interativos</a>
              <a href="dashboard.html">Meu Dashboard</a>
            </div>
            <div class="footer-col">
              <span class="footer-heading">LINGUAGENS</span>
              <a href="course.html?id=javascript">JavaScript</a>
              <a href="course.html?id=python">Python</a>
              <a href="course.html?id=typescript">TypeScript</a>
              <a href="course.html?id=html">HTML</a>
              <a href="course.html?id=css">CSS</a>
              <a href="course.html?id=react-native">React Native</a>
              <a href="course.html?id=c">Linguagem C</a>
              <a href="course.html?id=cpp">C++</a>
              <a href="course.html?id=csharp">C# (.NET)</a>
              <a href="course.html?id=sql">SQL</a>
            </div>
            <div class="footer-col">
              <span class="footer-heading">LEGAL & RECURSOS</span>
              <a href="#sobre">Sobre o MonoCode</a>
              <a href="https://github.com/" target="_blank" rel="noopener">Seja um voluntário</a>
              <a href="#termos">Termos de Uso</a>
              <a href="#privacidade">Privacidade</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom container">
          <p>© 2026 MonoCode Inc. Todos os direitos reservados. Interface 100% monocromática. Projeto voluntário e sem fins lucrativos.</p>
          <div class="footer-meta-badge">DARK MODE STRICT</div>
        </div>
      </footer>
    `;
  }

  escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

export const UI = new UIManager();
