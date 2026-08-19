/**
 * MonoCode — Controlador de Progresso, Perfil, Dashboard e Configurações
 */

import { Storage } from './storage.js';
import { COURSES_DATA } from './data/coursesData.js';
import { UI, ICONS } from './ui.js';
import { Auth } from './auth.js';

/**
 * Renderiza o Dashboard do Usuário
 */
export function renderDashboard() {
  const container = document.getElementById('dashboard-container');
  if (!container) return;

  const user = Storage.getUser();
  const stats = Storage.getStats();
  const progress = Storage.getProgress();
  const activities = Storage.getActivityLog();

  // Obter dados do curso atual
  const currentCourse = COURSES_DATA.find(c => c.id === progress.currentCourseId) || COURSES_DATA[0];
  const currentCourseProg = Storage.getCourseProgress(currentCourse.id);

  // Encontrar lição pendente
  let nextLesson = currentCourse.modules[0]?.lessons[0];
  for (const mod of currentCourse.modules) {
    for (const l of mod.lessons) {
      if (!Storage.isLessonCompleted(currentCourse.id, l.id)) {
        nextLesson = l;
        break;
      }
    }
    if (nextLesson && !Storage.isLessonCompleted(currentCourse.id, nextLesson.id)) break;
  }

  // Cursos recomendados (outros cursos não concluídos)
  const recommendedCourses = COURSES_DATA
    .filter(c => c.id !== currentCourse.id)
    .slice(0, 3);

  container.innerHTML = `
    <!-- Saudação e Banner Superior -->
    <div class="dashboard-welcome-banner">
      <div class="welcome-text">
        <h1>Olá, ${user.name.split(' ')[0]}</h1>
        <p>Continue aprendendo de onde parou e mantenha sua constância diária de estudos.</p>
      </div>
      <div class="dashboard-quick-actions">
        <a href="courses.html" class="btn btn-secondary">Explorar Cursos</a>
        <a href="exercises.html" class="btn btn-primary">Praticar Exercícios</a>
      </div>
    </div>

    <!-- Estatísticas Gerais -->
    <div class="stats-summary-grid">
      <div class="stat-widget-card">
        <div class="stat-widget-header">
          <span class="stat-widget-label">Cursos Iniciados</span>
          <span class="stat-widget-icon">${ICONS.code}</span>
        </div>
        <div class="stat-widget-value">${stats.coursesStarted}</div>
        <div class="stat-widget-sub">Trilhas em andamento</div>
      </div>

      <div class="stat-widget-card">
        <div class="stat-widget-header">
          <span class="stat-widget-label">Lições Concluídas</span>
          <span class="stat-widget-icon">${ICONS.book}</span>
        </div>
        <div class="stat-widget-value">${stats.lessonsCompleted}</div>
        <div class="stat-widget-sub">Aulas finalizadas</div>
      </div>

      <div class="stat-widget-card">
        <div class="stat-widget-header">
          <span class="stat-widget-label">Exercícios Resolvidos</span>
          <span class="stat-widget-icon">${ICONS.terminal}</span>
        </div>
        <div class="stat-widget-value">${stats.exercisesCompleted}</div>
        <div class="stat-widget-sub">Desafios práticos</div>
      </div>

      <div class="stat-widget-card">
        <div class="stat-widget-header">
          <span class="stat-widget-label">Progresso Geral</span>
          <span class="stat-widget-icon">${ICONS.award}</span>
        </div>
        <div class="stat-widget-value">${stats.overallPercentage}%</div>
        <div class="stat-widget-sub">Da trilha completa</div>
      </div>
    </div>

    <!-- Seção "Continuar Aprendendo" -->
    <div class="continue-learning-section">
      <div class="section-label-header">
        <h2>Continuar Aprendendo</h2>
        <span class="badge">Curso Atual</span>
      </div>

      <div class="continue-card">
        <div class="continue-info">
          <div class="continue-lang-badge">
            <span>Trilha Ativa</span> • <span>${currentCourse.language}</span>
          </div>
          <h3 class="continue-title">${currentCourse.name}</h3>
          <p class="continue-desc">Próxima lição: <strong>${nextLesson.title}</strong> — ${nextLesson.summary}</p>
        </div>

        <div class="continue-progress-block">
          <div class="progress-header-stats">
            <span>Progresso Geral</span>
            <span class="progress-number">${currentCourseProg}%</span>
          </div>
          <div class="progress-track" style="height: 8px;">
            <div class="progress-fill" style="width: ${currentCourseProg}%;"></div>
          </div>
          <div class="continue-action-row">
            <a href="lesson.html?course=${currentCourse.id}&lesson=${nextLesson.id}" class="btn btn-primary btn-lg w-full">
              Continuar (${nextLesson.title}) ${ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Colunas Principais: Recomendados e Atividade Recente -->
    <div class="dashboard-columns-grid">
      <!-- Cursos Recomendados -->
      <div>
        <div class="section-label-header">
          <h2>Cursos Recomendados</h2>
          <a href="courses.html" style="font-size: 0.85rem; color: var(--text-muted);">Ver todos ${ICONS.arrowRight}</a>
        </div>

        <div class="recommended-courses-list">
          ${recommendedCourses.map(course => `
            <div class="rec-course-card">
              <div class="rec-course-top">
                <div class="rec-course-tags">
                  <span class="badge">${course.language}</span>
                  <span class="badge badge-level">${course.level}</span>
                </div>
                <h3 class="rec-course-title">${course.name}</h3>
                <p class="rec-course-desc">${course.shortDesc}</p>
              </div>
              <div class="rec-course-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${course.modules.length} Módulos</span>
                <a href="course.html?id=${course.id}" class="btn btn-secondary btn-sm">Ver Trilha</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Atividade Recente -->
      <div class="recent-activity-panel">
        <div class="section-label-header" style="margin-bottom: 8px;">
          <h2>Atividade Recente</h2>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Histórico</span>
        </div>

        <div class="activity-timeline">
          ${activities.length > 0 ? activities.map(act => `
            <div class="activity-item">
              <div class="activity-item-dot"></div>
              <div class="activity-item-content">
                <div class="activity-item-title">${act.title}</div>
                <div class="activity-item-meta">${act.courseName} • ${act.date}</div>
              </div>
            </div>
          `).join('') : `
            <p style="font-size: 0.85rem; color: var(--text-muted);">Nenhuma atividade registrada recentemente.</p>
          `}
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderiza a Página de Perfil
 */
export function renderProfilePage() {
  const container = document.getElementById('profile-container');
  if (!container) return;

  const user = Storage.getUser();

  container.innerHTML = `
    <div class="profile-header-card">
      <div class="profile-user-left">
        <div class="profile-avatar-wrap">
          ${user.avatarUrl
            ? `<img src="${user.avatarUrl}" alt="Avatar" class="profile-avatar-large profile-avatar-img" referrerpolicy="no-referrer">`
            : `<div class="profile-avatar-large">${user.avatarText || 'MC'}</div>`}
          <button type="button" class="profile-avatar-edit" id="btn-change-avatar" title="Trocar foto de perfil (PNG, JPG, GIF, WebP — até 10MB)">
            ${ICONS.user}
          </button>
          <input type="file" id="avatar-file-input" accept="image/png,image/jpeg,image/gif,image/webp,image/avif" hidden>
        </div>
        <div class="profile-user-info">
          <h1 id="profile-display-name">${UI.escapeHTML(user.name)}</h1>
          <div class="profile-user-email">${user.username ? '@' + UI.escapeHTML(user.username) + ' • ' : ''}${UI.escapeHTML(user.email)}</div>
          <div class="profile-meta-tags">
            <span class="badge">${user.role || 'Estudante'}</span>
            <span class="badge badge-level">Membro desde ${user.joinedDate}</span>
          </div>
        </div>
      </div>

      <div class="profile-actions-right">
        <button type="button" class="btn btn-secondary" id="btn-edit-username">
          ${ICONS.user} ${user.username ? 'Trocar @usuário' : 'Escolher @usuário'}
        </button>
        <a href="settings.html" class="btn btn-secondary">
          ${ICONS.settings} Configurações
        </a>
        <button type="button" class="btn btn-ghost" id="profile-logout-btn">
          ${ICONS.logout} Sair
        </button>
      </div>
    </div>

    <!-- Editor inline de @usuário -->
    <div class="username-editor" id="username-editor" hidden>
      <div class="username-editor-field">
        <span class="username-at">@</span>
        <input type="text" id="username-input" class="input-field" placeholder="seu_usuario"
               maxlength="20" spellcheck="false" autocomplete="off">
      </div>
      <button type="button" class="btn btn-primary btn-sm" id="username-save">Salvar</button>
      <button type="button" class="btn btn-ghost btn-sm" id="username-cancel">Cancelar</button>
      <span class="username-editor-error" id="username-editor-error"></span>
    </div>
  `;

  document.getElementById('profile-logout-btn')?.addEventListener('click', () => {
    Auth.logout();
  });

  // --- Upload de avatar (PNG/JPG/GIF/WebP/AVIF até 10MB) ---
  const avatarInput = document.getElementById('avatar-file-input');
  document.getElementById('btn-change-avatar')?.addEventListener('click', () => avatarInput?.click());

  avatarInput?.addEventListener('change', async () => {
    const file = avatarInput.files?.[0];
    if (!file) return;

    const editBtn = document.getElementById('btn-change-avatar');
    editBtn.disabled = true;
    UI.showToast('Enviando imagem...', 'info', 2000);

    const result = await Auth.uploadAvatar(file);
    if (result.ok) {
      UI.showToast('Foto de perfil atualizada!', 'info');
      setTimeout(() => window.location.reload(), 700);
    } else {
      UI.showToast(result.error || 'Falha no envio.', 'info', 5000);
      editBtn.disabled = false;
      avatarInput.value = '';
    }
  });

  // --- Editor inline de username (sem prompt do navegador) ---
  const usernameEditor = document.getElementById('username-editor');
  const usernameInput = document.getElementById('username-input');
  const usernameError = document.getElementById('username-editor-error');

  document.getElementById('btn-edit-username')?.addEventListener('click', () => {
    usernameEditor.hidden = false;
    usernameError.textContent = '';
    usernameInput.value = Storage.getUser().username || '';
    usernameInput.focus();
  });

  function closeUsernameEditor() {
    usernameEditor.hidden = true;
    usernameError.textContent = '';
  }

  document.getElementById('username-cancel')?.addEventListener('click', closeUsernameEditor);

  usernameInput?.addEventListener('input', () => {
    usernameInput.value = usernameInput.value.toLowerCase().replace(/[^a-z0-9_.]/g, '');
    usernameError.textContent = '';
  });

  usernameInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('username-save')?.click();
    if (e.key === 'Escape') closeUsernameEditor();
  });

  document.getElementById('username-save')?.addEventListener('click', async () => {
    const saveBtn = document.getElementById('username-save');
    saveBtn.disabled = true;
    saveBtn.textContent = 'Salvando...';

    const result = await Auth.setUsername(usernameInput.value);
    if (result.ok) {
      UI.showToast('Nome de usuário atualizado!', 'info');
      renderProfilePage();
    } else {
      usernameError.textContent = result.error || 'Não foi possível alterar.';
      saveBtn.disabled = false;
      saveBtn.textContent = 'Salvar';
    }
  });
}

/**
 * Renderiza a Página de Configurações
 */
export function renderSettingsPage() {
  const container = document.getElementById('settings-container');
  if (!container) return;

  const user = Storage.getUser();
  const settings = Storage.getSettings();

  container.innerHTML = `
    <div class="courses-header" style="margin-bottom: 32px;">
      <h1>Configurações da Conta</h1>
      <p>Gerencie preferências do editor, dados de progresso e informações de perfil.</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
      <!-- Perfil -->
      <div class="mono-card">
        <h3 style="margin-bottom: 16px;">Dados de Perfil</h3>
        <form id="form-update-profile">
          <div class="input-group">
            <label class="input-label">Nome Completo</label>
            <input type="text" id="setting-name" class="input-field" value="${user.name}" />
          </div>
          <div class="input-group">
            <label class="input-label">E-mail</label>
            <input type="email" id="setting-email" class="input-field" value="${user.email}" />
          </div>
          <div class="input-group">
            <label class="input-label">Biografia / Ocupação</label>
            <input type="text" id="setting-bio" class="input-field" value="${user.bio || ''}" />
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top: 8px;">Salvar Alterações</button>
        </form>
      </div>

      <!-- Preferências do Editor -->
      <div class="mono-card">
        <h3 style="margin-bottom: 16px;">Preferências do Editor de Código</h3>
        <form id="form-update-editor">
          <div class="input-group">
            <label class="input-label">Tamanho da Fonte (px)</label>
            <input type="number" id="setting-font-size" class="input-field" value="${settings.editorFontSize}" min="12" max="24" />
          </div>
          <div class="input-group">
            <label class="input-label">Tamanho do Tab (espaços)</label>
            <select id="setting-tab-size" class="input-field">
              <option value="2" ${settings.editorTabSize === 2 ? 'selected' : ''}>2 Espaços (Padrão)</option>
              <option value="4" ${settings.editorTabSize === 4 ? 'selected' : ''}>4 Espaços</option>
            </select>
          </div>
          <div class="input-group">
            <label class="input-label">Tema da Interface</label>
            <input type="text" class="input-field" value="Dark Monochrome Strict (Inalterável)" disabled />
          </div>
          <button type="submit" class="btn btn-secondary" style="margin-top: 8px;">Atualizar Editor</button>
        </form>
      </div>

      <!-- Gerenciamento de Dados -->
      <div class="mono-card" style="grid-column: 1 / -1;">
        <h3 style="margin-bottom: 16px;">Dados & Portabilidade</h3>
        <p style="margin-bottom: 20px;">Você pode exportar todo o seu progresso em formato JSON para backup ou reiniciar seu aprendizado.</p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary" id="btn-export-data">
            Exportar Progresso (JSON)
          </button>
          <button type="button" class="btn btn-secondary" id="btn-reset-data" style="color: #AAAAAA;">
            Redefinir Todo o Progresso
          </button>
        </div>
      </div>
    </div>
  `;

  // Formulário Perfil
  document.getElementById('form-update-profile')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('setting-name').value;
    const email = document.getElementById('setting-email').value;
    const bio = document.getElementById('setting-bio').value;

    Storage.updateUser({ name, email, bio });
    UI.showToast('Perfil atualizado com sucesso!', 'info');
  });

  // Formulário Editor
  document.getElementById('form-update-editor')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const editorFontSize = parseInt(document.getElementById('setting-font-size').value, 10);
    const editorTabSize = parseInt(document.getElementById('setting-tab-size').value, 10);

    Storage.updateSettings({ editorFontSize, editorTabSize });
    UI.showToast('Configurações do editor salvas!', 'info');
  });

  // Exportar dados
  document.getElementById('btn-export-data')?.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(Storage.exportJSON());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `monocode_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    UI.showToast('Backup exportado com sucesso!', 'info');
  });

  // Resetar
  document.getElementById('btn-reset-data')?.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja redefinir todo o progresso no MonoCode? Esta ação não pode ser desfeita.')) {
      Storage.resetAll();
      UI.showToast('Progresso redefinido para o padrão.', 'info');
      setTimeout(() => window.location.reload(), 800);
    }
  });
}
