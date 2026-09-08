# Supabase setup — IndoEthno V1

V1 uses Supabase only for `experience_requests` persistence. Authentication is intentionally not required yet.

## Security model

- Public visitors can **insert** an inquiry.
- `anon` and `authenticated` cannot select, update or delete inquiry rows.
- RLS is enabled.
- The website uses a Supabase **publishable key**, never a `service_role` key.
- The Next.js route validates input before inserting.
- A honeypot reduces basic automated spam; production should add rate limiting / bot protection once the pilot receives meaningful traffic.

## Before applying schema

1. Select the correct IndoEthno Supabase project.
2. Review `schema.sql`.
3. Confirm the project Data API exposes `public` as intended.
4. Apply the SQL using the Supabase SQL editor / approved schema workflow.
5. Verify grants and RLS with allow/deny tests before public launch.

## Environment variables

Server-side Vercel project variables:

```text
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_PUBLISHABLE_KEY=<publishable-key>
```

Do not use `SUPABASE_SERVICE_ROLE_KEY` for this public inquiry flow.
