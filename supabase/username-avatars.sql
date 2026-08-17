-- ============================================================================
-- MonoCode — Username + Avatares (Supabase Storage)
-- Execute no SQL Editor DEPOIS de schema.sql e migrate-to-auth.sql.
-- ============================================================================

-- 1. Coluna de username (única) e avatar_url já existe no profiles
alter table public.profiles
  add column if not exists username text;

-- usernames em minúsculas, 3-20 caracteres, letras/números/_ .
alter table public.profiles drop constraint if exists username_format;
alter table public.profiles
  add constraint username_format check (username ~ '^[a-z0-9_.]{3,20}$');

create unique index if not exists idx_profiles_username
  on public.profiles (username)
  where username is not null;

-- 2. Bucket de avatares (público para leitura, dono escreve)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  10485760, -- 10 MB
  array[
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'image/avif'
  ]
)
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types,
      public = true;

-- 3. Políticas RLS do bucket: cada usuário gerencia apenas a própria pasta
--    (arquivos ficam em avatars/<user_id>/<nome>)
drop policy if exists "avatars: leitura pública" on storage.objects;
create policy "avatars: leitura pública"
  on storage.objects for select
  using (bucket_id = 'avatars');

drop policy if exists "avatars: upload apenas na própria pasta" on storage.objects;
create policy "avatars: upload apenas na própria pasta"
  on storage.objects for insert
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "avatars: atualizar apenas os próprios" on storage.objects;
create policy "avatars: atualizar apenas os próprios"
  on storage.objects for update
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "avatars: remover apenas os próprios" on storage.objects;
create policy "avatars: remover apenas os próprios"
  on storage.objects for delete
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- 4. Perfis: usuário pode definir o próprio username/avatar
--    (política de update já existe em migrate-to-auth.sql; garantindo as colunas)
drop policy if exists "profiles: atualização própria" on public.profiles;
create policy "profiles: atualização própria"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 5. Limpeza: remove conquistas de streak do catálogo (feature removida)
delete from public.unlocked_achievements where achievement_id in ('streak-7', 'streak-30');
delete from public.achievements where id in ('streak-7', 'streak-30');

-- 6. Remove colunas de streak do progresso (feature removida)
alter table public.user_progress
  drop column if exists streak_current,
  drop column if exists streak_best,
  drop column if exists streak_last_active;
