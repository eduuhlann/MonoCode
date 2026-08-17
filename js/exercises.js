/**
 * MonoCode — Controlador do Hub de Exercícios Interativos
 * Suporta os 6 formatos: Multiple Choice, Complete o código, Corrija o código,
 * Qual será a saída, Escreva o código e Desafios.
 */

import { EXERCISES_DATA } from './data/exercisesData.js';
import { Storage } from './storage.js';
import { UI, ICONS } from './ui.js';
import { MonoEditor } from './editor.js';

export function renderExercisesPage() {
  const container = document.getElementById('exercises-page-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let activeExerciseId = urlParams.get('id') || EXERCISES_DATA[0].id;
  let activeTypeFilter = 'all';
  let activeLangFilter = urlParams.get('lang') || 'all';

  let currentEditor = null;
  let selectedOptionId = null;

  function render() {
    const filteredExercises = EXERCISES_DATA.filter(ex => {
      const matchType = activeTypeFilter === 'all' || ex.type === activeTypeFilter;
      const matchLang = activeLangFilter === 'all' || ex.language.toLowerCase() === activeLangFilter.toLowerCase();
      return matchType && matchLang;
    });

    const activeExercise = EXERCISES_DATA.find(e => e.id === activeExerciseId) || filteredExercises[0] || EXERCISES_DATA[0];
    const isCompleted = Storage.isExerciseCompleted(activeExercise.id);

    container.innerHTML = `
      <div class="exercises-header-section">
        <div>
          <h1>Exercícios & Desafios Práticos</h1>
          <p>Treine sua lógica e sintetize o conhecimento com 6 formatos dinâmicos de exercícios.</p>
        </div>
        <div class="badge badge-level">Total: ${EXERCISES_DATA.length} exercícios disponíveis</div>
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
        </div>
      </div>

      <div class="exercise-workspace-grid">
        <!-- Barra Lateral com Lista de Exercícios -->
        <div class="exercises-sidebar-list">
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
            Exercícios (${filteredExercises.length})
          </div>
          ${filteredExercises.map(ex => {
            const isExDone = Storage.isExerciseCompleted(ex.id);
            const isSelected = ex.id === activeExercise.id;
            return `
              <div class="exercise-list-item ${isSelected ? 'active' : ''}" data-id="${ex.id}">
                <div class="exercise-item-tags">
                  <span class="badge" style="font-size: 0.65rem;">${ex.language}</span>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">${isExDone ? '✓ Concluído' : activeExercise.difficulty || ''}</span>
                </div>
                <div class="exercise-item-title">${ex.title}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Painel de Resolução do Exercício -->
        <div class="exercise-solver-panel">
          <div class="exercise-prompt-card">
            <div class="prompt-header">
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="badge">${activeExercise.language}</span>
                <span class="badge badge-level">${activeExercise.difficulty}</span>
                <span class="badge">${formatTypeName(activeExercise.type)}</span>
              </div>
            </div>

            <h2 class="prompt-title">${activeExercise.title}</h2>
            <p class="prompt-text">${activeExercise.prompt}</p>

            <!-- Renderizador específico por tipo de exercício -->
            ${renderExerciseBody(activeExercise)}

            <!-- Feedback Card -->
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
  }

  function formatTypeName(type) {
    switch (type) {
      case 'multiple-choice': return 'Múltipla Escolha';
      case 'complete-code': return 'Complete o Código';
      case 'fix-code': return 'Corrija o Código';
      case 'predict-output': return 'Previsão de Saída';
      case 'write-code': return 'Escreva o Código';
      case 'challenge': return 'Desafio Algorítmico';
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
        render();
      });
    });

    // Seleção na lista lateral
    container.querySelectorAll('.exercise-list-item').forEach(item => {
      item.addEventListener('click', () => {
        activeExerciseId = item.dataset.id;
        render();
      });
    });

    // Opções de Múltipla Escolha
    if (activeExercise.type === 'multiple-choice' || activeExercise.type === 'predict-output') {
      container.querySelectorAll('.mc-option-card').forEach(card => {
        card.addEventListener('click', () => {
          container.querySelectorAll('.mc-option-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedOptionId = card.dataset.optionId;
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
        } else if (activeExercise.type === 'complete-code') {
          const inputEl = document.getElementById('blank-input');
          const val = (inputEl ? inputEl.value : '').trim();
          isCorrect = val.toLowerCase() === activeExercise.correctAnswer.toLowerCase();
          feedbackMsg = isCorrect
            ? 'Lacuna preenchida com sucesso!'
            : `Incorreto. A resposta esperada era: "${activeExercise.correctAnswer}".`;
        } else if (currentEditor) {
          // Executar código no editor e testar saída
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

        // Exibir feedback
        feedbackCard.className = 'exercise-feedback-card active';
        feedbackCard.innerHTML = `
          <div class="feedback-status-title" style="color: ${isCorrect ? 'var(--text-primary)' : 'var(--text-secondary)'};">
            ${isCorrect ? '✓ SUCESSO' : '× REVISE SEU CÓDIGO'} — ${feedbackMsg}
          </div>
          <div class="feedback-explanation">
            <strong>Explicação detalhada:</strong><br>
            ${activeExercise.explanation}
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
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  render();
}
