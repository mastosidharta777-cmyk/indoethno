# IndoEthno V1 Pilot

Music-led cultural travel discovery pilot for Yogyakarta.

## Product flow

`Sound → Place → Culture → Around Here → Stay → Worth a Detour → Plan Visit`

Secondary validation flow:

`Artist / music → group interest → inquiry (never instant booking)`

## Modes

The same codebase supports two Vercel projects/deployments:

- `SITE_MODE=coming-soon` → public `indoethno.com`
- `SITE_MODE=pilot` → private/noindex `pilot.indoethno.com`

## Implemented

- Cinematic/editorial UI system aligned with the approved IndoEthno direction
- Responsive pilot homepage
- Music story pages for JHF, Gayam16/YGF and Tembang Gula
- Yogyakarta destination page
- Distinct Culture / Around Here / Stay / Worth a Detour layers
- Browser-local Save / Unsave interaction (no login)
- Functional Plan Visit board grouped by saved item type
- Group Experience inquiry flow that never implies artist availability or booking
- Supabase-ready inquiry persistence with server validation and insert-only RLS schema
- Basic honeypot spam mitigation
- Official YouTube embed workflow
- Pilot `noindex` metadata

## Save behavior

Saved trip items use browser `localStorage` key `indoethno.saved.v1`.

No account is required in V1. First validate whether users actually save and plan before adding authentication.

## Supabase

See `supabase/schema.sql` and `supabase/README.md`.

No database change has been applied to any external project. The schema is staged only until the correct IndoEthno Supabase project is selected.

## Dependency versions checked for this build

- Next.js `16.3.4`
- React / React DOM `19.2.8`
- `@supabase/supabase-js` `2.115.0`

## Not implemented yet

- Applied/verified Supabase database
- Product analytics persistence
- Affiliate inventory/live pricing
- Real-time artist availability
- Payment
- Production map/distance calculations
- Authentication

## Run locally

```bash
npm install
cp .env.example .env.local
# set SITE_MODE=pilot
npm run dev
```

## Next technical gate

1. Select/connect the correct IndoEthno Supabase project.
2. Apply and verify only the `experience_requests` schema.
3. Add core funnel analytics.
4. Run actual Next.js build + browser QA after dependencies install successfully.
5. Connect the correct IndoEthno Git/Vercel project.
