# IndoEthno V1 — Preflight

## Product integrity

- [x] Music remains the gateway.
- [x] Traditional + contemporary + modern local music are supported.
- [x] Around Here is distinct from Worth a Detour.
- [x] Stay is a core travel/commercial layer.
- [x] Save / Plan works without login using local browser storage.
- [x] Discovery-only artists are not presented as bookable.
- [x] Group Experience is explicitly an inquiry, not a booking.

## Content / rights

- [x] Artist video strategy uses official embeds.
- [x] No downloaded/re-hosted artist photography is required for the pilot UI.
- [x] Artist stories are original IndoEthno editorial.
- [ ] Test each selected YouTube video for embed availability immediately before deployment.
- [ ] Request approved press kits before a monetized public artist campaign.

## Stay / nearby

- [x] Stay examples are real properties with direct official links.
- [x] No fabricated price or availability is shown.
- [ ] Add coordinates before showing numeric distance.
- [ ] Connect affiliate provider only after program approval/valid URL availability.

## Deployment

- [x] `SITE_MODE=pilot` produces noindex metadata.
- [x] One codebase can serve separate Coming Soon and Pilot projects.
- [ ] Confirm correct IndoEthno Git repository.
- [ ] Connect correct Vercel account/project.
- [ ] Attach `indoethno.com` to Coming Soon project.
- [ ] Attach `pilot.indoethno.com` to Pilot project.
- [ ] QA mobile and desktop after real deployment.

## Next technical gate

Supabase should be added only for:

1. `experience_requests`
2. analytics / product events if desired server-side
3. editorial data later when hard-coded pilot content becomes operationally limiting

Do not add auth, payment, marketplace dashboards, or real-time availability yet.
