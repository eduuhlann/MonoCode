-- ============================================================================
-- MonoCode — Remoção de XP (feature removida do produto)
-- Execute no SQL Editor.
-- ============================================================================

-- 1. Conquistas: remove a coluna de recompensa em XP
alter table public.achievements drop column if exists xp_reward;
alter table public.unlocked_achievements drop column if exists xp_rewarded;

-- 2. Progresso: remove XP restante do usuário
alter table public.user_progress drop column if exists xp;

-- 3. Exercícios concluídos: remove o XP concedido
alter table public.completed_exercises drop column if exists xp_awarded;
