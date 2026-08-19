/**
 * MonoCode — Sistema de Armazenamento e Progresso
 * Utiliza localStorage no frontend com arquitetura modular preparada
 * para substituição direta por Firestore ou API RESTful.
 */

import { COURSES_DATA } from './data/coursesData.js';

const STORAGE_KEY = 'monocode_storage_v1';

// Estado inicial zerado — nenhuma conta nova começa com dados falsos
function _blankState() {
  return {
    user: null,
    progress: {
      completedLessons: [],
      completedExercises: [],
      startedCourses: [],
      completedCourses: [],
      currentCourseId: null,
      currentLessonId: null
    },
    activityLog: [],
    codeDrafts: {},
    settings: {
      editorFontSize: 14,
      editorTabSize: 2,
      lineNumbers: true,
      autoCloseBrackets: true,
      theme: 'dark-mono'
    }
  };
}

class StorageManager {
  constructor() {
    this.state = this._load();
  }

  _load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return { ..._blankState(), ...JSON.parse(data) };
      }
    } catch (e) {
      console.warn('Erro ao carregar localStorage do MonoCode:', e);
    }
    return _blankState();
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  }

  // --- Usuário ---
  getUser() {
    return this.state.user;
  }

  updateUser(updates) {
    this.state.user = { ...this.state.user, ...updates };
    this._save();
  }

  /**
   * Inicia uma sessão zerada para um novo login (OAuth):
   * descarta qualquer estado anterior e cria progresso limpo.
   */
  startNewSession(userData) {
    this.state = _blankState();
    this.state.user = userData;
    this._save();
  }

  /** Limpa a sessão atual (logout) mantendo apenas o estado zerado. */
  clearSession() {
    this.state = _blankState();
    this._save();
  }

  // --- Progresso ---
  getProgress() {
    return this.state.progress;
  }

  isLessonCompleted(courseId, lessonId) {
    const key = `${courseId}:${lessonId}`;
    return this.state.progress.completedLessons.includes(key);
  }

  completeLesson(courseId, lessonId, lessonTitle = '') {
    const key = `${courseId}:${lessonId}`;
    if (!this.state.progress.completedLessons.includes(key)) {
      this.state.progress.completedLessons.push(key);

      if (!this.state.progress.startedCourses.includes(courseId)) {
        this.state.progress.startedCourses.push(courseId);
      }

      this.state.progress.currentCourseId = courseId;
      this.state.progress.currentLessonId = lessonId;

      this.logActivity('lesson', lessonTitle || lessonId, courseId);
      this._save();
      return true;
    }
    return false;
  }

  isExerciseCompleted(exerciseId) {
    return this.state.progress.completedExercises.includes(exerciseId);
  }

  completeExercise(exerciseId, exerciseTitle = '', courseName = 'Exercícios') {
    if (!this.state.progress.completedExercises.includes(exerciseId)) {
      this.state.progress.completedExercises.push(exerciseId);
      this.logActivity('exercise', exerciseTitle || exerciseId, courseName);
      this._save();
      return true;
    }
    return false;
  }

  setCurrentCourseAndLesson(courseId, lessonId) {
    this.state.progress.currentCourseId = courseId;
    if (lessonId) {
      this.state.progress.currentLessonId = lessonId;
    }
    if (!this.state.progress.startedCourses.includes(courseId)) {
      this.state.progress.startedCourses.push(courseId);
    }
    this._save();
  }

  // --- Atividade Recente ---
  getActivityLog() {
    return this.state.activityLog || [];
  }

  logActivity(type, title, courseName) {
    const newEntry = {
      id: 'act-' + Date.now(),
      type,
      title,
      courseName,
      date: 'Agora'
    };
    this.state.activityLog = [newEntry, ...(this.state.activityLog || [])].slice(0, 15);
    this._save();
  }

  // --- Rascunhos de Código do Editor ---
  getCodeDraft(key) {
    return this.state.codeDrafts?.[key] || null;
  }

  saveCodeDraft(key, code) {
    if (!this.state.codeDrafts) this.state.codeDrafts = {};
    this.state.codeDrafts[key] = code;
    this._save();
  }

  // --- Configurações do Editor ---
  getSettings() {
    return this.state.settings;
  }

  updateSettings(newSettings) {
    this.state.settings = { ...this.state.settings, ...newSettings };
    this._save();
  }

  // --- Estatísticas Calculadas ---
  getStats() {
    const totalLessons = COURSES_DATA.reduce((acc, c) => {
      return acc + c.modules.reduce((mAcc, m) => mAcc + m.lessons.length, 0);
    }, 0);

    const completedLessonsCount = this.state.progress.completedLessons.length;
    const overallPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

    return {
      coursesStarted: this.state.progress.startedCourses.length,
      coursesCompleted: this.state.progress.completedCourses.length,
      lessonsCompleted: completedLessonsCount,
      exercisesCompleted: this.state.progress.completedExercises.length,
      overallPercentage
    };
  }

  getCourseProgress(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return 0;

    let totalLessonsInCourse = 0;
    let completedInCourse = 0;

    course.modules.forEach(mod => {
      mod.lessons.forEach(l => {
        totalLessonsInCourse++;
        if (this.isLessonCompleted(courseId, l.id)) {
          completedInCourse++;
        }
      });
    });

    return totalLessonsInCourse > 0 ? Math.round((completedInCourse / totalLessonsInCourse) * 100) : 0;
  }

  // Exportar e resetar
  exportJSON() {
    return JSON.stringify(this.state, null, 2);
  }

  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    this.state = _blankState();
    this._save();
  }
}

export const Storage = new StorageManager();
