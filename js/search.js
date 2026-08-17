/**
 * MonoCode — Sistema de Pesquisa Global Instantânea
 * Permite buscar Cursos, Linguagens, Lições e Exercícios com atalho (Ctrl+K / Cmd+K)
 */

import { COURSES_DATA } from './data/coursesData.js';
import { EXERCISES_DATA } from './data/exercisesData.js';

class GlobalSearch {
  constructor() {
    this.modal = null;
    this.searchInput = null;
    this.resultsContainer = null;
    this.isOpen = false;
    this._initModal();
    this._bindShortcuts();
  }

  _initModal() {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'search-modal-backdrop';
    modalDiv.id = 'global-search-modal';
    modalDiv.innerHTML = `
      <div class="search-modal-window">
        <div class="search-modal-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="search-modal-input" placeholder="Buscar linguagens, cursos, lições ou exercícios..." autocomplete="off" />
          <kbd class="search-modal-kbd">ESC</kbd>
        </div>
        <div class="search-modal-results">
          <div class="search-modal-placeholder">Digite para buscar tópicos de programação...</div>
        </div>
        <div class="search-modal-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> para navegar</span>
          <span><kbd>↵</kbd> para selecionar</span>
          <span><kbd>ESC</kbd> para fechar</span>
        </div>
      </div>
    `;

    document.body.appendChild(modalDiv);
    this.modal = modalDiv;
    this.searchInput = modalDiv.querySelector('.search-modal-input');
    this.resultsContainer = modalDiv.querySelector('.search-modal-results');

    this.searchInput.addEventListener('input', (e) => this.handleQuery(e.target.value));

    // Fechar ao clicar no backdrop
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  _bindShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  open() {
    this.modal.classList.add('active');
    this.isOpen = true;
    this.searchInput.value = '';
    this.handleQuery('');
    setTimeout(() => this.searchInput.focus(), 50);
  }

  close() {
    this.modal.classList.remove('active');
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  handleQuery(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      this.resultsContainer.innerHTML = `
        <div class="search-modal-quick-links">
          <div class="search-section-title">SUGESTÕES RÁPIDAS</div>
          <a href="course.html?id=javascript" class="search-item">
            <span class="search-item-badge">CURSO</span>
            <div class="search-item-info">
              <span class="search-item-title">JavaScript Moderno</span>
              <span class="search-item-sub">Fundamentos, DOM, Async/Await, Classes e Closures</span>
            </div>
          </a>
          <a href="course.html?id=python" class="search-item">
            <span class="search-item-badge">CURSO</span>
            <div class="search-item-info">
              <span class="search-item-title">Python 3</span>
              <span class="search-item-sub">Sintaxe limpa, List Comprehensions e POO</span>
            </div>
          </a>
          <a href="exercises.html" class="search-item">
            <span class="search-item-badge">PRÁTICA</span>
            <div class="search-item-info">
              <span class="search-item-title">Hub de Exercícios e Desafios</span>
              <span class="search-item-sub">Múltipla escolha, preenchimento e testes de código</span>
            </div>
          </a>
        </div>
      `;
      return;
    }

    const results = [];

    // 1. Buscar em Cursos
    COURSES_DATA.forEach(course => {
      if (course.name.toLowerCase().includes(q) || course.language.toLowerCase().includes(q) || course.description.toLowerCase().includes(q)) {
        results.push({
          type: 'CURSO',
          title: course.name,
          subtitle: course.shortDesc,
          url: `course.html?id=${course.id}`
        });
      }

      // 2. Buscar em Lições
      course.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          if (lesson.title.toLowerCase().includes(q) || lesson.summary.toLowerCase().includes(q)) {
            results.push({
              type: 'LIÇÃO',
              title: `${course.name} — ${lesson.title}`,
              subtitle: lesson.summary,
              url: `lesson.html?course=${course.id}&lesson=${lesson.id}`
            });
          }
        });
      });
    });

    // 3. Buscar em Exercícios
    EXERCISES_DATA.forEach(ex => {
      if (ex.title.toLowerCase().includes(q) || ex.language.toLowerCase().includes(q) || ex.prompt.toLowerCase().includes(q)) {
        results.push({
          type: 'EXERCÍCIO',
          title: `[${ex.language}] ${ex.title}`,
          subtitle: `${ex.difficulty} • ${ex.language}`,
          url: `exercises.html?id=${ex.id}`
        });
      }
    });

    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="search-no-results">
          <span>Nenhum resultado encontrado para "<strong>${this.escapeHTML(query)}</strong>"</span>
          <p>Tente buscar por "JavaScript", "Variáveis", "Python", "Ponteiros" ou "Exercício".</p>
        </div>
      `;
      return;
    }

    this.resultsContainer.innerHTML = `
      <div class="search-results-list">
        ${results.slice(0, 10).map(r => `
          <a href="${r.url}" class="search-item">
            <span class="search-item-badge">${r.type}</span>
            <div class="search-item-info">
              <span class="search-item-title">${this.escapeHTML(r.title)}</span>
              <span class="search-item-sub">${this.escapeHTML(r.subtitle)}</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        `).join('')}
      </div>
    `;
  }

  escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

export let searchInstance = null;

export function initGlobalSearch() {
  if (!searchInstance && typeof document !== 'undefined') {
    searchInstance = new GlobalSearch();
  }
  return searchInstance;
}
