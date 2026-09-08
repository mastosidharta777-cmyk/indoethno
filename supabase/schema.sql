-- IndoEthno V1 pilot schema fragment.
-- This is intentionally NOT a migration-history file.
-- Apply only after the correct IndoEthno Supabase project is selected and reviewed.

create table if not exists public.experience_requests (
  id uuid primary key default gen_random_uuid(),
  artist_or_experience text,
  estimated_date date,
  group_size integer not null check (group_size between 1 and 2000),
  group_type text check (group_type is null or group_type in (
    'Private traveler group',
    'Tour / DMC',
    'Corporate / MICE',
    'Community / education',
    'Other'
  )),
  budget_range text check (budget_range is null or budget_range in (
    'Under Rp10m',
    'Rp10m–25m',
    'Rp25m–50m',
    'Rp50m+',
    'Need guidance'
  )),
  group_origin text,
  preferred_location text,
  message text,
  contact text not null,
  interest_only boolean not null default false,
  status text not null default 'NEW' check (status in ('NEW', 'REVIEWING', 'CONTACTED', 'CLOSED')),
  created_at timestamptz not null default now(),

  constraint experience_requests_artist_length check (artist_or_experience is null or char_length(artist_or_experience) <= 160),
  constraint experience_requests_origin_length check (group_origin is null or char_length(group_origin) <= 160),
  constraint experience_requests_location_length check (preferred_location is null or char_length(preferred_location) <= 180),
  constraint experience_requests_message_length check (message is null or char_length(message) <= 2000),
  constraint experience_requests_contact_length check (char_length(contact) between 3 and 240)
);

alter table public.experience_requests enable row level security;

-- Least privilege: public visitors may INSERT only. They cannot read, update or delete submissions.
revoke all on table public.experience_requests from anon, authenticated;
grant insert on table public.experience_requests to anon, authenticated;
grant all on table public.experience_requests to service_role;

create policy "public can submit new experience inquiries"
on public.experience_requests
for insert
to anon, authenticated
with check (
  status = 'NEW'
  and group_size between 1 and 2000
  and char_length(contact) between 3 and 240
  and (message is null or char_length(message) <= 2000)
);
