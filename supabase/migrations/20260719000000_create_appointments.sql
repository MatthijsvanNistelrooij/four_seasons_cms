create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  service text not null,
  date date not null,
  email text not null,
  phone text not null,
  time text not null,
  barber text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.appointments enable row level security;

-- All access is made by the server using the service-role key. Do not add
-- anonymous read policies: appointments contain customers' contact details.

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger appointments_set_updated_at
before update on public.appointments
for each row execute function public.set_updated_at();
