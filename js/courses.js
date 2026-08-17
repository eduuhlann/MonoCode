/**
 * MonoCode — Controlador de Cursos e Catálogo
 */

import { COURSES_DATA } from './data/coursesData.js';
import { Storage } from './storage.js';
import { UI, ICONS } from './ui.js';

export function renderCoursesCatalog() {
  const container = document.getElementById('courses-catalog-container');
  if (!container) return;

  const searchInput = document.getElementById('courses-search-input');
  const filterPills = document.querySelectorAll('.filter-pill');

  let currentLevelFilter = 'all';
  let currentSearchQuery = '';

  function filterAndRender() {
    const filtered = COURSES_DATA.filter(course => {
      const matchesLevel = currentLevelFilter === 'all' || course.levelTag === currentLevelFilter || course.levelTag === 'all';
      const q = currentSearchQuery.toLowerCase();
      const matchesSearch = !q || 
        course.name.toLowerCase().includes(q) || 
        course.language.toLowerCase().includes(q) || 
        course.description.toLowerCase().includes(q) ||
        course.tags.some(t => t.toLowerCase().includes(q));

      return matchesLevel && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="mono-card text-center" style="grid-column: 1 / -1; padding: 48px 24px; text-align: center;">
          <h3>Nenhum curso encontrado</h3>
          <p style="margin-top: 8px;">Tente ajustar o termo de pesquisa ou os filtros de nível.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(course => {
      const progress = Storage.getCourseProgress(course.id);
      const isStarted = Storage.getProgress().startedCourses.includes(course.id);
      const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

      return `
        <div class="course-full-card" id="course-card-${course.id}">
          <div class="course-card-top">
            <div class="course-meta-tags">
              <span class="badge">${course.language}</span>
              <span class="badge badge-level">${course.level}</span>
            </div>
            <h3 class="course-card-title">${course.name}</h3>
            <p class="course-card-desc">${course.shortDesc}</p>
            <div class="course-card-stats">
              <span>${course.modules.length} Módulos</span>
              <span>•</span>
              <span>${totalLessons} Lições</span>
              <span>•</span>
              <span>Exercícios práticos</span>
            </div>
          </div>

          <div class="course-card-footer">
            ${isStarted ? `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 6px; color: var(--text-muted);">
                  <span>Progresso do aluno</span>
                  <span style="font-weight: 600; color: var(--text-primary);">${progress}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${progress}%;"></div>
                </div>
              </div>
              <a href="course.html?id=${course.id}" class="btn btn-secondary w-full">Continuar Trilha</a>
            ` : `
              <a href="course.html?id=${course.id}" class="btn btn-primary w-full">Começar Trilha</a>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  // Event Listeners para Filtros
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentLevelFilter = pill.dataset.filter || 'all';
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}

/**
 * Renderiza a página de detalhes de um curso específico (Syllabus)
 */
export function renderCourseDetail() {
  const container = document.getElementById('course-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id') || 'javascript';
  const course = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];

  const progress = Storage.getCourseProgress(course.id);
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

  // Determinar primeira lição pendente
  let nextLesson = course.modules[0]?.lessons[0];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      if (!Storage.isLessonCompleted(course.id, lesson.id)) {
        nextLesson = lesson;
        break;
      }
    }
    if (nextLesson && !Storage.isLessonCompleted(course.id, nextLesson.id)) break;
  }

  container.innerHTML = `
    <div class="course-detail-hero">
      <div class="course-hero-meta">
        <a href="courses.html" style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
          ${ICONS.arrowLeft} Voltar para todos os cursos
        </a>
      </div>
      <div class="course-meta-tags">
        <span class="badge">${course.language}</span>
        <span class="badge badge-level">${course.level}</span>
        ${course.tags.map(t => `<span class="badge">${t}</span>`).join('')}
      </div>
      <h1 class="course-hero-title">${course.name}</h1>
      <p class="course-hero-desc">${course.description}</p>
      
      <div style="margin: 24px 0; max-width: 480px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px;">
          <span>Progresso na trilha</span>
          <span style="font-weight: 600;">${progress}%</span>
        </div>
        <div class="progress-track" style="height: 8px;">
          <div class="progress-fill" style="width: ${progress}%;"></div>
        </div>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="lesson.html?course=${course.id}&lesson=${nextLesson.id}" class="btn btn-primary btn-lg">
          ${progress > 0 ? 'Continuar de onde parou' : 'Iniciar primeira aula'}
        </a>
        <a href="exercises.html?lang=${course.language}" class="btn btn-secondary btn-lg">
          Exercícios de ${course.language}
        </a>
      </div>

      <div class="course-hero-stats">
        <div>
          <span style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">${course.modules.length}</span>
          <p style="font-size: 0.75rem; text-transform: uppercase;">Módulos</p>
        </div>
        <div>
          <span style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">${totalLessons}</span>
          <p style="font-size: 0.75rem; text-transform: uppercase;">Aulas Detalhadas</p>
        </div>
        <div>
          <span style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">100%</span>
          <p style="font-size: 0.75rem; text-transform: uppercase;">Prático</p>
        </div>
      </div>
    </div>

    <div class="section-label-header">
      <h2>Grade Curricular Completa (Syllabus)</h2>
      <span style="font-size: 0.85rem; color: var(--text-muted);">${totalLessons} aulas estruturadas</span>
    </div>

    <div class="syllabus-container">
      ${course.modules.map((mod, modIdx) => `
        <div class="module-card">
          <div class="module-header">
            <div class="module-header-info">
              <h3>Módulo ${modIdx + 1}: ${mod.title}</h3>
              <p>${mod.description}</p>
            </div>
            <span class="badge">${mod.lessons.length} aulas</span>
          </div>
          <div class="lessons-list">
            ${mod.lessons.map(lesson => {
              const isCompleted = Storage.isLessonCompleted(course.id, lesson.id);
              const isCurrent = Storage.getProgress().currentLessonId === lesson.id;

              let statusSymbol = '○';
              let statusClass = '';
              if (isCompleted) {
                statusSymbol = '✓';
                statusClass = 'completed';
              } else if (isCurrent) {
                statusSymbol = '●';
                statusClass = 'in-progress';
              }

              return `
                <a href="lesson.html?course=${course.id}&lesson=${lesson.id}" class="lesson-row-item">
                  <div class="lesson-row-left">
                    <span class="lesson-status-icon ${statusClass}">${statusSymbol}</span>
                    <span class="lesson-title-text">${lesson.title}</span>
                  </div>
                  <div class="lesson-row-right">
                    <span class="lesson-summary-text">${lesson.summary}</span>
                    ${ICONS.arrowRight}
                  </div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
