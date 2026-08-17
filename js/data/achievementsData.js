/**
 * MonoCode — Base de Conquistas (Achievements)
 * Identidade 100% monocromática, sem emojis.
 */

export const ACHIEVEMENTS_DATA = [
  {
    id: 'first-exercise',
    title: 'Primeiro Exercício',
    category: 'Prática',
    description: 'Resolva com sucesso seu primeiro exercício de código na plataforma.',
    icon: 'code',
    requirement: { type: 'exercises_count', threshold: 1 }
  },
  {
    id: 'first-lesson',
    title: 'Primeira Lição',
    category: 'Estudo',
    description: 'Complete sua primeira lição teórica em qualquer linguagem.',
    icon: 'book',
    requirement: { type: 'lessons_count', threshold: 1 }
  },
  {
    id: 'exercises-10',
    title: '10 Exercícios Concluídos',
    category: 'Prática',
    description: 'Resolva 10 exercícios diferentes no MonoCode.',
    icon: 'terminal',
    requirement: { type: 'exercises_count', threshold: 10 }
  },
  {
    id: 'exercises-50',
    title: '50 Exercícios Concluídos',
    category: 'Prática',
    description: 'Atinja a marca de 50 exercícios resolvidos.',
    icon: 'cpu',
    requirement: { type: 'exercises_count', threshold: 50 }
  },
  {
    id: 'first-course',
    title: 'Primeiro Curso Concluído',
    category: 'Mestria',
    description: 'Conclua todas as lições e exercícios de uma trilha completa.',
    icon: 'award',
    requirement: { type: 'courses_completed', threshold: 1 }
  },
  {
    id: 'js-master',
    title: 'Mestre JavaScript',
    category: 'Especialização',
    description: 'Complete o módulo de fundamentos e intermediário de JavaScript.',
    icon: 'layers',
    requirement: { type: 'course_lessons', courseId: 'javascript', threshold: 5 }
  },
  {
    id: 'polyglot',
    title: 'Poliglota da Programação',
    category: 'Exploração',
    description: 'Inicie lições em pelo menos 3 linguagens distintas.',
    icon: 'globe',
    requirement: { type: 'languages_started', threshold: 3 }
  },
  {
    id: 'speed-runner',
    title: 'Depurador Veloz',
    category: 'Eficiência',
    description: 'Corrija 3 exercícios do tipo bug fix de primeira tentativa.',
    icon: 'check-circle',
    requirement: { type: 'fix_exercises', threshold: 3 }
  }
];
