/**
 * MonoCode — Controlador do Hub de Exercícios Interativos
 * Suporta 7 formatos: Multiple Choice, Complete o código, Corrija o código,
 * Qual será a saída, Escreva o código, Desafios e Verdadeiro/Falso.
 *
 * A lista lateral é virtualizada: renderiza apenas os itens visíveis no scroll,
 * suportando dezenas de milhares de exercícios sem travar a UI.
 */

import { EXERCISES_DATA } from './data/exercisesData.js';
import { Storage } from './storage.js';
import { UI, ICONS } from './ui.js';
import { MonoEditor } from './editor.js';

const ITEM_HEIGHT = 72;        // altura de cada item da sidebar (px)
const RENDER_MARGIN = 8;       // itens extras acima/abaixo do visível

export function renderExercisesPage() {
  const container = document.getElementById('exercises-page-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let activeExerciseId = urlParams.get('id') || EXERCISES_DATA[0].id;
  let activeTypeFilter = 'all';
  let activeLangFilter = urlParams.get('lang') || 'all';

  let currentEditor = null;
  let selectedOptionId = null;
  let selectedTrueFalse = null;

  // Cache de listas filtradas por (tipo, lingua) — evita re-filtrar 120k a cada render.
  const filterCache = new Map();
  let cachedFiltered = null;
  let cachedKey = '';

  function getFiltered() {
    const key = `${activeTypeFilter}|${activeLangFilter}`;
    if (key === cachedKey && cachedFiltered) return cachedFiltered;
    if (filterCache.has(key)) {
      cachedKey = key;
      cachedFiltered = filterCache.get(key);
      return cachedFiltered;
    }
    const list = EXERCISES_DATA.filter(ex => {
      const matchType = activeTypeFilter === 'all' || ex.type === activeTypeFilter;
      const matchLang = activeLangFilter === 'all' || ex.language.toLowerCase() === activeLangFilter.toLowerCase();
      return matchType && matchLang;
    });
    filterCache.set(key, list);
    cachedKey = key;
    cachedFiltered = list;
    return list;
  }

  function render() {
    const filteredExercises = getFiltered();
    const activeExercise = filteredExercises.find(e => e.id === activeExerciseId)
                        || filteredExercises[0]
                        || EXERCISES_DATA.find(e => e.id === activeExerciseId)
                        || EXERCISES_DATA[0];
    activeExerciseId = activeExercise.id;
    const isCompleted = Storage.isExerciseCompleted(activeExercise.id);

    container.innerHTML = `
      <div class="exercises-header-section">
        <div>
          <h1>Exercícios & Desafios Práticos</h1>
          <p>Treine sua lógica com ${EXERCISES_DATA.length.toLocaleString('pt-BR')} exercícios em 7 formatos dinâmicos.</p>
        </div>
        <div class="badge badge-level">Total: ${EXERCISES_DATA.length.toLocaleString('pt-BR')} exercícios</div>
      </div>

      <div class="exercises-filter-toolbar">
        <div class="exercise-type-tabs">
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'all' ? 'active' : ''}" data-type="all">Todos</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'multiple-choice' ? 'active' : ''}" data-type="multiple-choice">Múltipla Escolha</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'complete-code' ? 'active' : ''}" data-type="complete-code">Complete o Código</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'fix-code' ? 'active' : ''}" data-type="fix-code">Corrija o Código</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'predict-output' ? 'active' : ''}" data-type="predict-output">Qual a Saída?</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'write-code' ? 'active' : ''}" data-type="write-code">Escreva o Código</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'challenge' ? 'active' : ''}" data-type="challenge">Desafios</button>
          <button type="button" class="type-tab-btn ${activeTypeFilter === 'true-false' ? 'active' : ''}" data-type="true-false">V / F</button>
        </div>
      </div>

      <div class="exercise-workspace-grid">
        <!-- Barra Lateral Virtualizada -->
        <div class="exercises-sidebar-list" id="exercises-sidebar">
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; padding: 0 4px;">
            Exercícios (${filteredExercises.length.toLocaleString('pt-BR')})
          </div>
          <div id="exercises-vlist" style="position: relative; overflow-y: auto; height: calc(100vh - 280px); min-height: 400px;"></div>
        </div>

        <!-- Painel de Resolução -->
        <div class="exercise-solver-panel">
          <div class="exercise-prompt-card">
            <div class="prompt-header">
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span class="badge">${activeExercise.language}</span>
                <span class="badge badge-level">${activeExercise.difficulty}</span>
                <span class="badge">${formatTypeName(activeExercise.type)}</span>
              </div>
            </div>

            <h2 class="prompt-title">${escapeHTML(activeExercise.title)}</h2>
            <p class="prompt-text">${escapeHTML(activeExercise.prompt).replace(/\n/g, '<br>')}</p>

            ${renderExerciseBody(activeExercise)}

            <div class="exercise-feedback-card" id="exercise-feedback"></div>

            <div class="exercise-actions-bar">
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                Status: ${isCompleted ? '<strong style="color: var(--text-primary);">Resolvido</strong>' : 'Pendente'}
              </div>
              <button type="button" class="btn btn-primary" id="btn-verify-exercise">
                Verificar Resposta
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    bindEvents(activeExercise);
    initVirtualList(filteredExercises, activeExercise.id);
  }

  // --- Lista virtualizada ---
  function initVirtualList(items, activeId) {
    const vlist = document.getElementById('exercises-vlist');
    if (!vlist) return;

    const total = items.length;
    const totalHeight = total * ITEM_HEIGHT;

    // Container interno com altura total para criar a scrollbar
    vlist.innerHTML = `<div id="vlist-spacer" style="height: ${totalHeight}px; position: relative;"></div>`;
    const spacer = document.getElementById('vlist-spacer');

    let rafId = null;
    let lastStart = -1;

    function renderSlice() {
      rafId = null;
      const scrollTop = vlist.scrollTop;
      const viewHeight = vlist.clientHeight;
      const start = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - RENDER_MARGIN);
      const visibleCount = Math.ceil(viewHeight / ITEM_HEIGHT) + RENDER_MARGIN * 2;
      const end = Math.min(total, start + visibleCount);

      if (start === lastStart && spacer.dataset.rendered === '1') return;
      lastStart = start;
      spacer.dataset.rendered = '1';

      let html = '';
      for (let i = start; i < end; i++) {
        const ex = items[i];
        if (!ex) break;
        const isExDone = Storage.isExerciseCompleted(ex.id);
        const isSelected = ex.id === activeId;
        html += `
          <div class="exercise-list-item ${isSelected ? 'active' : ''}" data-id="${ex.id}"
               style="position: absolute; top: ${i * ITEM_HEIGHT}px; left: 0; right: 0; height: ${ITEM_HEIGHT}px; box-sizing: border-box;">
            <div class="exercise-item-tags">
              <span class="badge" style="font-size: 0.65rem;">${ex.language}</span>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${isExDone ? '✓' : ex.difficulty || ''}</span>
            </div>
            <div class="exercise-item-title">${escapeHTML(ex.title)}</div>
          </div>
        `;
      }
      spacer.innerHTML = html;

      // Bind clicks apenas nos itens renderizados
      spacer.querySelectorAll('.exercise-list-item').forEach(item => {
        item.addEventListener('click', () => {
          activeExerciseId = item.dataset.id;
          render();
        });
      });

      // Rola até o item ativo na primeira renderização
      const activeIdx = items.findIndex(e => e.id === activeId);
      if (activeIdx >= 0 && vlist.dataset.scrolled !== '1') {
        vlist.dataset.scrolled = '1';
        vlist.scrollTop = Math.max(0, activeIdx * ITEM_HEIGHT - 100);
      }
    }

    function onScroll() {
      if (rafId) return;
      rafId = requestAnimationFrame(renderSlice);
    }

    vlist.addEventListener('scroll', onScroll, { passive: true });
    renderSlice();
  }

  function formatTypeName(type) {
    switch (type) {
      case 'multiple-choice': return 'Múltipla Escolha';
      case 'complete-code': return 'Complete o Código';
      case 'fix-code': return 'Corrija o Código';
      case 'predict-output': return 'Previsão de Saída';
      case 'write-code': return 'Escreva o Código';
      case 'challenge': return 'Desafio Algorítmico';
      case 'true-false': return 'Verdadeiro ou Falso';
      default: return 'Exercício';
    }
  }

  function renderExerciseBody(ex) {
    if (ex.type === 'multiple-choice' || ex.type === 'predict-output') {
      let codeSnippetHtml = '';
      if (ex.codeSnippet) {
        codeSnippetHtml = `<pre class="lesson-article" style="margin: 16px 0;"><code>${escapeHTML(ex.codeSnippet)}</code></pre>`;
      }
      return `
        ${codeSnippetHtml}
        <div class="mc-options-list">
          ${ex.options.map(opt => `
            <div class="mc-option-card" data-option-id="${opt.id}">
              <span class="mc-option-badge">${opt.id.toUpperCase()}</span>
              <span class="mc-option-text">${escapeHTML(opt.text)}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (ex.type === 'true-false') {
      return `
        <div class="mc-options-list" style="display: flex; gap: 12px;">
          <div class="mc-option-card" data-tf="true" style="flex: 1; justify-content: center; font-size: 1rem; font-weight: 700;">
            ✓ Verdadeiro
          </div>
          <div class="mc-option-card" data-tf="false" style="flex: 1; justify-content: center; font-size: 1rem; font-weight: 700;">
            ✗ Falso
          </div>
        </div>
      `;
    }

    if (ex.type === 'complete-code') {
      return `
        <div class="fill-blank-container">
          <pre class="lesson-article"><code>${escapeHTML(ex.codeSnippet)}</code></pre>
          <div class="fill-blank-input-row">
            <label class="input-label" style="margin: 0;">Preencha a lacuna:</label>
            <input type="text" id="blank-input" class="fill-blank-input" placeholder="Digite o código correto..." autocomplete="off" />
          </div>
        </div>
      `;
    }

    // Para fix-code, write-code e challenge montamos o Editor
    return `
      <div style="margin-top: 20px;">
        <div id="exercise-editor-mount" class="code-editor-component"></div>
      </div>
    `;
  }

  function bindEvents(activeExercise) {
    // Abas de tipo
    container.querySelectorAll('.type-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTypeFilter = btn.dataset.type;
        selectedOptionId = null;
        selectedTrueFalse = null;
        render();
      });
    });

    // Opções de Múltipla Escolha / Previsão
    if (activeExercise.type === 'multiple-choice' || activeExercise.type === 'predict-output') {
      container.querySelectorAll('.mc-option-card').forEach(card => {
        card.addEventListener('click', () => {
          container.querySelectorAll('.mc-option-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedOptionId = card.dataset.optionId;
        });
      });
    }

    // Verdadeiro / Falso
    if (activeExercise.type === 'true-false') {
      container.querySelectorAll('.mc-option-card[data-tf]').forEach(card => {
        card.addEventListener('click', () => {
          container.querySelectorAll('.mc-option-card[data-tf]').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedTrueFalse = card.dataset.tf;
        });
      });
    }

    // Montar Editor para exercícios de código
    const editorMount = document.getElementById('exercise-editor-mount');
    if (editorMount && (activeExercise.type === 'fix-code' || activeExercise.type === 'write-code' || activeExercise.type === 'challenge')) {
      currentEditor = new MonoEditor(editorMount, {
        language: activeExercise.language.toLowerCase(),
        initialValue: activeExercise.initialCode || ''
      });
    }

    // Botão Verificar
    const verifyBtn = document.getElementById('btn-verify-exercise');
    const feedbackCard = document.getElementById('exercise-feedback');

    if (verifyBtn && feedbackCard) {
      verifyBtn.addEventListener('click', async () => {
        let isCorrect = false;
        let feedbackMsg = '';

        if (activeExercise.type === 'multiple-choice' || activeExercise.type === 'predict-output') {
          if (!selectedOptionId) {
            UI.showToast('Por favor, selecione uma das alternativas acima.', 'info');
            return;
          }
          isCorrect = selectedOptionId === activeExercise.correctOptionId;
          feedbackMsg = isCorrect
            ? 'Resposta correta! Excelente raciocínio.'
            : 'Resposta incorreta. Analise os conceitos e tente novamente.';
        } else if (activeExercise.type === 'true-false') {
          if (!selectedTrueFalse) {
            UI.showToast('Selecione Verdadeiro ou Falso.', 'info');
            return;
          }
          isCorrect = selectedTrueFalse === activeExercise.correctAnswer;
          feedbackMsg = isCorrect
            ? 'Resposta correta!'
            : `Incorreto. A afirmativa era ${activeExercise.correctAnswer === 'true' ? 'VERDADEIRA' : 'FALSA'}.`;
        } else if (activeExercise.type === 'complete-code') {
          const inputEl = document.getElementById('blank-input');
          const val = (inputEl ? inputEl.value : '').trim();
          isCorrect = val.toLowerCase() === activeExercise.correctAnswer.toLowerCase();
          feedbackMsg = isCorrect
            ? 'Lacuna preenchida com sucesso!'
            : `Incorreto. A resposta esperada era: "${activeExercise.correctAnswer}".`;
        } else if (currentEditor) {
          const result = await currentEditor.run();
          if (result.success && activeExercise.testValidation) {
            isCorrect = activeExercise.testValidation(result.output || '');
            feedbackMsg = isCorrect
              ? 'Todos os casos de teste passaram com sucesso!'
              : 'O código executou, mas a saída não satisfez todas as asserções de teste.';
          } else if (!result.success) {
            isCorrect = false;
            feedbackMsg = 'Erro de sintaxe/execução no código. Verifique a saída do console acima.';
          } else {
            isCorrect = true;
            feedbackMsg = 'Executado com sucesso!';
          }
        }

        feedbackCard.className = 'exercise-feedback-card active';
        feedbackCard.innerHTML = `
          <div class="feedback-status-title" style="color: ${isCorrect ? 'var(--text-primary)' : 'var(--text-secondary)'};">
            ${isCorrect ? '✓ SUCESSO' : '× REVISE SEU CÓDIGO'} — ${escapeHTML(feedbackMsg)}
          </div>
          <div class="feedback-explanation">
            <strong>Explicação:</strong><br>
            ${escapeHTML(activeExercise.explanation || '')}
          </div>
        `;

        if (isCorrect) {
          const isFirstTime = Storage.completeExercise(activeExercise.id, activeExercise.title, activeExercise.language);
          if (isFirstTime) {
            UI.showToast('Exercício concluído!', 'check');
          }
        }
      });
    }
  }

  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  render();
}
