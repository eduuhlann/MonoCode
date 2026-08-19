/**
 * MonoCode — Controlador de Lições e Documentação Interativa
 */

import { COURSES_DATA } from './data/coursesData.js';
import { Storage } from './storage.js';
import { UI, ICONS } from './ui.js';

export function renderLessonPage() {
  const sidebarContainer = document.getElementById('lesson-sidebar-container');
  const mainContainer = document.getElementById('lesson-main-container');
  if (!sidebarContainer || !mainContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('course') || 'javascript';
  const lessonId = urlParams.get('lesson') || 'js-intro';

  const course = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];

  // Encontrar lição atual, anterior e próxima
  let allLessons = [];
  course.modules.forEach(m => {
    m.lessons.forEach(l => {
      allLessons.push({ ...l, moduleId: m.id, moduleTitle: m.title });
    });
  });

  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const currentLesson = currentIndex !== -1 ? allLessons[currentIndex] : allLessons[0];
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Registrar curso atual no storage
  Storage.setCurrentCourseAndLesson(course.id, currentLesson.id);

  // 1. Renderizar Sidebar
  sidebarContainer.innerHTML = `
    <div class="sidebar-course-meta">
      <a href="course.html?id=${course.id}" class="sidebar-back-link">
        ${ICONS.arrowLeft} Grade do Curso
      </a>
      <h2 class="sidebar-course-title">${course.name}</h2>
      <div>
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 6px;">
          <span>Progresso</span>
          <span>${Storage.getCourseProgress(course.id)}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${Storage.getCourseProgress(course.id)}%;"></div>
        </div>
      </div>
    </div>

    <div class="sidebar-syllabus">
      ${course.modules.map(mod => `
        <div>
          <div class="sidebar-module-title">${mod.title}</div>
          <div class="sidebar-lessons-list">
            ${mod.lessons.map(l => {
              const isComp = Storage.isLessonCompleted(course.id, l.id);
              const isCur = l.id === currentLesson.id;
              let symbol = '○';
              if (isComp) symbol = '✓';
              else if (isCur) symbol = '●';

              return `
                <a href="lesson.html?course=${course.id}&lesson=${l.id}" class="sidebar-lesson-item ${isCur ? 'active' : ''}">
                  <span class="sidebar-item-status">${symbol}</span>
                  <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l.title}</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // 2. Renderizar Conteúdo Principal da Aula
  mainContainer.innerHTML = `
    <div class="lesson-breadcrumbs">
      <a href="courses.html">Cursos</a>
      <span>/</span>
      <a href="course.html?id=${course.id}">${course.name}</a>
      <span>/</span>
      <span>${currentLesson.moduleTitle}</span>
    </div>

    <div class="lesson-header">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span class="badge">${course.language}</span>
        <span class="badge badge-level">${course.level}</span>
      </div>
      <h1>${currentLesson.title}</h1>
      <p class="lesson-summary-lead">${currentLesson.summary}</p>
    </div>

    <article class="lesson-article">
      ${currentLesson.content}
    </article>

    <!-- Navegação Inferior -->
    <div class="lesson-nav-footer">
      ${prevLesson ? `
        <a href="lesson.html?course=${course.id}&lesson=${prevLesson.id}" class="btn btn-secondary">
          ${ICONS.arrowLeft} Anterior: ${prevLesson.title}
        </a>
      ` : `<div></div>`}

      <button type="button" class="btn btn-primary" id="btn-complete-lesson">
        ${Storage.isLessonCompleted(course.id, currentLesson.id) ? '✓ Aula Concluída' : 'Marcar como Concluída'}
      </button>

      ${nextLesson ? `
        <a href="lesson.html?course=${course.id}&lesson=${nextLesson.id}" class="btn btn-secondary">
          Próxima: ${nextLesson.title} ${ICONS.arrowRight}
        </a>
      ` : `
        <a href="exercises.html?lang=${course.language}" class="btn btn-secondary">
          Exercícios do Módulo ${ICONS.arrowRight}
        </a>
      `}
    </div>
  `;

  // Ação de Conclusão da Aula
  const completeBtn = document.getElementById('btn-complete-lesson');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const isNew = Storage.completeLesson(course.id, currentLesson.id, currentLesson.title);
      completeBtn.textContent = '✓ Aula Concluída';
      if (isNew) {
        UI.showToast(`Lição "${currentLesson.title}" concluída!`, 'check');
        // Atualizar status na sidebar
        renderLessonPage();
      } else {
        UI.showToast('Esta aula já está marcada como concluída.', 'info');
      }
    });
  }
}
