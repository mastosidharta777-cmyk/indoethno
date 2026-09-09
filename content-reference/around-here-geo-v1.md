# IndoEthno — Around Here Geo Audit V1

**Pilot:** Yogyakarta  
**Anchor:** Plaza Pasar Ngasem  
**Rule:** `Around Here` means **≤ 1.0 km straight-line distance** from the anchor in this Pilot.

## Why straight-line distance

The Pilot does not yet have a routing provider. Therefore IndoEthno must not imply walking time, driving time, or route distance. V1 uses the Haversine formula over audited WGS84 coordinates and labels the result explicitly as approximate straight-line distance.

Items outside the 1.0 km threshold belong in the broader destination layer or `Worth a Detour`, not `Around Here`.

## Anchor — Plaza Pasar Ngasem

- Coordinate: `-7.808179861584399, 110.36002371880139`
- Coordinate source: https://www.wikidata.org/wiki/Q16746872
- Place/event verification: https://visitingjogja.jogjaprov.go.id/44560/yogyakarta-gamelan-festival-2026-21-juli-2-agustus-2026/
- Reason: DIY Tourism confirms Yogyakarta Gamelan Festival 31 was held at Plaza Pasar Ngasem and organized by Komunitas Gayam16. This makes Ngasem a verified music-to-place anchor for the Pilot.

## Around Here records

### Taman Sari

- Coordinate: `-7.8100995, 110.3596395`
- Coordinate basis: resolved from the official Keraton Yogyakarta tourism page's map link.
- Source: https://tourism.kratonjogja.id/id-ID/destination/5-kagungan-dalem-tamansari/
- Approx. straight-line distance from anchor: `0.22 km`

### Museum Sonobudoyo

- Coordinate: `-7.80246, 110.36388`
- Coordinate basis: official Yogyakarta cultural-heritage registry.
- Source: https://jogjacagar.jogjaprov.go.id/detail/644/museum
- Approx. straight-line distance from anchor: `0.76 km`

### Gudeg Wijilan

- Coordinate: `-7.805014, 110.366621`
- Coordinate basis: published coordinate for Gudeg Wijilan in UIN Sunan Kalijaga research data; DIY Tourism independently verifies Jl. Wijilan as the historic gudeg cluster east of Alun-Alun Utara.
- Coordinate source: https://digilib.uin-suka.ac.id/19637/2/10651066_BAB-I_IV-atau-V_DAFTAR-PUSTAKA_2.pdf
- Place verification: https://visitingjogja.jogjaprov.go.id/8045/gudeg-wijilan/
- Approx. straight-line distance from anchor: `0.81 km`

## Implementation gate

`lib/geo.ts` is authoritative for the Pilot distance calculation. Every record in `aroundHere` must have an audited coordinate record. Missing coordinates throw an error instead of silently presenting an unverified `Around Here` item.

Do not convert these values into walking/driving distance or time estimates until a routing source is explicitly connected and validated.
