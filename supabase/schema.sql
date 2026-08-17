-- ============================================================================
-- MonoCode — Schema Supabase (PostgreSQL)
-- Execute este arquivo no SQL Editor do seu projeto Supabase:
--   https://supabase.com/dashboard/project/scwcqubagqcctpikoqmf/sql/new
--
-- Modelo espelha o estado do frontend (js/storage.js):
--   user, progress, activityLog, unlockedAchievements, codeDrafts, settings
-- ============================================================================

-- Extensão para gerar UUIDs
create extension if not exists "pgcrypto";

-- ============================================================================
-- 1. PROFILES — usuários criados via OAuth (Google/Discord) pelo server.js
-- ============================================================================
create table if not exists public.profiles (
  id           uuid primary key default gen_random_uuid(),
  provider     text not null check (provider in ('google', 'discord')),
  provider_id  text not null,
  name         text not null,
  email        text,
  avatar_url   text,
  role         text not null default 'Estudante',
  bio          text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (provider, provider_id)
);

create index if not exists idx_profiles_email on public.profiles (email);

-- ============================================================================
-- 2. PROGRESSO — uma linha por usuário (XP, streak, lição atual)
-- ============================================================================
create table if not exists public.user_progress (
  user_id             uuid primary key references public.profiles(id) on delete cascade,
  current_course_id   text,
  current_lesson_id   text,
  xp                  integer not null default 0 check (xp >= 0),
  streak_current      integer not null default 1 check (streak_current >= 1),
  streak_best         integer not null default 1 check (streak_best >= 1),
  streak_last_active  date not null default current_date,
  updated_at          timestamptz not null default now()
);

-- ============================================================================
-- 3. LIÇÕES CONCLUÍDAS
-- ============================================================================
create table if not exists public.completed_lessons (
  user_id       uuid not null references public.profiles(id) on delete cascade,
  course_id     text not null,
  lesson_id     text not null,
  completed_at  timestamptz not null default now(),
  primary key (user_id, course_id, lesson_id)
);

create index if not exists idx_completed_lessons_user on public.completed_lessons (user_id);

-- ============================================================================
-- 4. EXERCÍCIOS CONCLUÍDOS
-- ============================================================================
create table if not exists public.completed_exercises (
  user_id       uuid not null references public.profiles(id) on delete cascade,
  exercise_id   text not null,
  xp_awarded    integer not null default 0,
  completed_at  timestamptz not null default now(),
  primary key (user_id, exercise_id)
);

create index if not exists idx_completed_exercises_user on public.completed_exercises (user_id);

-- ============================================================================
-- 5. CURSOS — inscrições (started) e conclusões (completed)
-- ============================================================================
create table if not exists public.course_enrollments (
  user_id       uuid not null references public.profiles(id) on delete cascade,
  course_id     text not null,
  status        text not null default 'started' check (status in ('started', 'completed')),
  started_at    timestamptz not null default now(),
  completed_at  timestamptz,
  primary key (user_id, course_id)
);

create index if not exists idx_enrollments_user on public.course_enrollments (user_id);

-- ============================================================================
-- 6. LOG DE ATIVIDADE
-- ============================================================================
create table if not exists public.activity_log (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references public.profiles(id) on delete cascade,
  type         text not null check (type in ('lesson', 'exercise', 'achievement', 'login')),
  title        text not null,
  course_name  text,
  created_at   timestamptz not null default now()
);

create index if not exists idx_activity_user_created on public.activity_log (user_id, created_at desc);

-- ============================================================================
-- 7. CATÁLOGO DE CONQUISTAS + DESBLOQUEIOS
-- ============================================================================
create table if not exists public.achievements (
  id             text primary key,
  title          text not null,
  category       text not null,
  description    text not null,
  xp_reward      integer not null default 0,
  icon           text not null default 'award',
  requirement_type      text not null,
  requirement_threshold integer not null default 1,
  requirement_course_id text
);

create table if not exists public.unlocked_achievements (
  user_id        uuid not null references public.profiles(id) on delete cascade,
  achievement_id text not null references public.achievements(id) on delete cascade,
  xp_rewarded    integer not null default 0,
  unlocked_at    timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

-- Seed do catálogo (espelha js/data/achievementsData.js)
insert into public.achievements
  (id, title, category, description, xp_reward, icon, requirement_type, requirement_threshold)
values
  ('first-exercise', 'Primeiro Exercício', 'Prática', 'Resolva com sucesso seu primeiro exercício de código na plataforma.', 50, 'code', 'exercises_count', 1),
  ('first-lesson', 'Primeira Lição', 'Estudo', 'Complete sua primeira lição teórica em qualquer linguagem.', 50, 'book', 'lessons_count', 1),
  ('exercises-10', '10 Exercícios Concluídos', 'Prática', 'Resolva 10 exercícios diferentes no MonoCode.', 150, 'terminal', 'exercises_count', 10),
  ('exercises-50', '50 Exercícios Concluídos', 'Prática', 'Atinja a marca de 50 exercícios resolvidos.', 500, 'cpu', 'exercises_count', 50),
  ('first-course', 'Primeiro Curso Concluído', 'Mestria', 'Conclua todas as lições e exercícios de uma trilha completa.', 300, 'award', 'courses_completed', 1),
  ('streak-7', '7 Dias Estudando', 'Consistência', 'Mantenha uma sequência ininterrupta de 7 dias de estudo ativo.', 200, 'calendar', 'streak_days', 7),
  ('streak-30', '30 Dias Estudando', 'Consistência', 'Mantenha o foco diário por 30 dias consecutivos.', 800, 'zap', 'streak_days', 30),
  ('js-master', 'Mestre JavaScript', 'Especialização', 'Complete o módulo de fundamentos e intermediário de JavaScript.', 400, 'layers', 'course_lessons', 5),
  ('polyglot', 'Poliglota da Programação', 'Exploração', 'Inicie lições em pelo menos 3 linguagens distintas.', 250, 'globe', 'languages_started', 3),
  ('speed-runner', 'Depurador Veloz', 'Eficiência', 'Corrija 3 exercícios do tipo bug fix de primeira tentativa.', 150, 'check-circle', 'fix_exercises', 3)
on conflict (id) do update
  set title = excluded.title,
      category = excluded.category,
      description = excluded.description,
      xp_reward = excluded.xp_reward,
      icon = excluded.icon,
      requirement_type = excluded.requirement_type,
      requirement_threshold = excluded.requirement_threshold;

-- js-master tem courseId no requisito
update public.achievements set requirement_course_id = 'javascript' where id = 'js-master';

-- ============================================================================
-- 8. RASCUNHOS DE CÓDIGO DO EDITOR
-- ============================================================================
create table if not exists public.code_drafts (
  user_id     uuid not null references public.profiles(id) on delete cascade,
  draft_key   text not null,
  code        text not null default '',
  updated_at  timestamptz not null default now(),
  primary key (user_id, draft_key)
);

-- ============================================================================
-- 9. CONFIGURAÇÕES DO EDITOR
-- ============================================================================
create table if not exists public.user_settings (
  user_id              uuid primary key references public.profiles(id) on delete cascade,
  editor_font_size     integer not null default 14 check (editor_font_size between 10 and 24),
  editor_tab_size      integer not null default 2 check (editor_tab_size in (2, 4, 8)),
  line_numbers         boolean not null default true,
  auto_close_brackets  boolean not null default true,
  theme                text not null default 'dark-mono',
  updated_at           timestamptz not null default now()
);

-- ============================================================================
-- TRIGGERS — updated_at automático e progresso inicial ao criar profile
-- ============================================================================
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_profiles_updated on public.profiles;
create trigger trg_profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists trg_progress_updated on public.user_progress;
create trigger trg_progress_updated before update on public.user_progress
  for each row execute function public.set_updated_at();

-- Cria progresso e settings padrão quando um novo usuário nasce
create or replace function public.init_user_defaults()
returns trigger language plpgsql security definer as $$
begin
  insert into public.user_progress (user_id) values (new.id) on conflict do nothing;
  insert into public.user_settings (user_id) values (new.id) on conflict do nothing;
  return new;
end $$;

drop trigger if exists trg_profiles_init on public.profiles;
create trigger trg_profiles_init after insert on public.profiles
  for each row execute function public.init_user_defaults();

-- ============================================================================
-- RLS — acesso apenas via service_role (server.js) ou futura auth do Supabase
-- ============================================================================
alter table public.profiles              enable row level security;
alter table public.user_progress         enable row level security;
alter table public.completed_lessons     enable row level security;
alter table public.completed_exercises   enable row level security;
alter table public.course_enrollments    enable row level security;
alter table public.activity_log          enable row level security;
alter table public.achievements          enable row level security;
alter table public.unlocked_achievements enable row level security;
alter table public.code_drafts           enable row level security;
alter table public.user_settings         enable row level security;

-- Usuários autenticados (futuro) podem ler o próprio perfil e o catálogo público
create policy "catálogo de conquistas é público"
  on public.achievements for select using (true);
