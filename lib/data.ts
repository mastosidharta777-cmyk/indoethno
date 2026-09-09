export type PerformanceStatus = 'DISCOVERY_ONLY' | 'SCHEDULED' | 'AVAILABLE_BY_REQUEST';

export type ArtistJourneyCard = {
  id: string;
  name: string;
  category: string;
  blurb: string;
  url: string;
};

export type ArtistJourney = {
  place: ArtistJourneyCard;
  culture: ArtistJourneyCard[];
  continueHref: string;
  continueLabel: string;
};

export type Artist = {
  slug: string;
  name: string;
  kicker: string;
  musicType: string;
  origin: string;
  headline: string;
  story: string;
  videoId?: string;
  channelUrl?: string;
  spotifyUrl?: string;
  instagramUrl?: string;
  performanceStatus: PerformanceStatus;
  sourceNote: string;
  visual: 'ember' | 'moss' | 'night';
  journey: ArtistJourney;
};

export const artists: Artist[] = [
  {
    slug: 'jogja-hip-hop-foundation',
    name: 'Jogja Hip Hop Foundation',
    kicker: 'Modern local identity',
    musicType: 'Javanese hip-hop · modern local culture',
    origin: 'Yogyakarta',
    headline: 'Hip-hop, but unmistakably Jogja.',
    story:
      'Jogja Hip Hop Foundation shows that local identity does not have to stay inside a traditional musical form. Urban beats, Javanese language, social commentary and local references turn hip-hop into a portrait of Yogyakarta itself. On IndoEthno, the music is the doorway: hear the city first, then step into the streets, traditions, food, art spaces and communities that shaped its voice.',
    videoId: 'V5oFpzkzubI',
    spotifyUrl: 'https://open.spotify.com/artist/0Pk4JEXgC64RBmovnQDZ27',
    instagramUrl: 'https://www.instagram.com/jhf_no.1/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'Official JHF media is available through the Kill the TV artist channel; current performance availability must still be confirmed directly.',
    visual: 'ember',
    journey: {
      place: {
        id: 'artist-place-jhf-yogyakarta',
        name: 'Yogyakarta, citywide',
        category: 'Place · city identity',
        blurb: 'Indonesia’s Ministry of Culture describes JHF as a soundtrack of Jogjakarta life, where urban hip-hop meets Javanese language, gamelan, traditional verse and literature. For this story, the place layer is the city itself—not a claimed home venue.',
        url: 'https://kebudayaan.kemdikbud.go.id/ditwdb/jogja-hip-hop-foundation-profile-music-europalia-arts-festival-2017/',
      },
      culture: [
        {
          id: 'jhf-context-language-literature',
          name: 'Javanese language & literature',
          category: 'Cultural code',
          blurb: 'The local identity is carried through language, literature and traditional musical references, not through genre label alone.',
          url: 'https://kebudayaan.kemdikbud.go.id/ditwdb/jogja-hip-hop-foundation-profile-music-europalia-arts-festival-2017/',
        },
        {
          id: 'jhf-context-social-yogyakarta',
          name: 'Hip-hop as social culture',
          category: 'Yogyakarta context',
          blurb: 'A 2026 UIN Sunan Kalijaga study, using interviews with JHF personnel, examines how the music carries local symbols and social values in Yogyakarta.',
          url: 'https://digilib.uin-suka.ac.id/id/eprint/76027/',
        },
      ],
      continueHref: '/destination/yogyakarta#culture',
      continueLabel: 'Continue into Yogyakarta culture',
    },
  },
  {
    slug: 'gayam16',
    name: 'Gayam16 / Yogyakarta Gamelan Festival',
    kicker: 'Living tradition',
    musicType: 'Gamelan · contemporary tradition · collaboration',
    origin: 'Yogyakarta',
    headline: 'A centuries-old sound that refuses to stand still.',
    story:
      'In Yogyakarta, gamelan is not only preserved; it is rehearsed, reinterpreted, debated and shared. Gayam16 and the Yogyakarta Gamelan Festival create a meeting point for traditional practice, younger musicians, workshops, technology and international collaboration. The result is not a museum display but a living scene that travelers can hear, watch and, when programs allow, join.',
    videoId: 'uBe7EnXUbP0',
    channelUrl: 'https://www.youtube.com/@Gayam16',
    instagramUrl: 'https://www.instagram.com/komunitasgayam16/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'Yogyakarta Gamelan Festival 31 ran 21 July–2 August 2026 and has concluded; any current or future schedule must be re-verified before showing a live-performance CTA.',
    visual: 'moss',
    journey: {
      place: {
        id: 'artist-place-gayam16-ngasem',
        name: 'Plaza Pasar Ngasem',
        category: 'Place · verified festival site',
        blurb: 'DIY Tourism records Yogyakarta Gamelan Festival 31 at Plaza Pasar Ngasem from 21 July to 2 August 2026, organized by Komunitas Gayam16. This is a direct event-to-place link, not generic destination matching.',
        url: 'https://visitingjogja.jogjaprov.go.id/44560/yogyakarta-gamelan-festival-2026-21-juli-2-agustus-2026/',
      },
      culture: [
        {
          id: 'gayam16-context-living-gamelan',
          name: 'Gamelan in motion',
          category: 'Living tradition',
          blurb: 'The 2026 festival included new collaboration between Gayam16 and Compagnie Kotekan, showing gamelan as an adaptive, contemporary practice.',
          url: 'https://budaya.jogjaprov.go.id/berita/detail/2136-merayakan-sukacita-menjembatani-budaya',
        },
        {
          id: 'gayam16-context-ngasem-cluster',
          name: 'Ngasem / Kraton cluster',
          category: 'Travel context',
          blurb: 'From the verified Pasar Ngasem performance site, the pilot can continue into the central heritage cluster without pretending every nearby place has a direct artist relationship.',
          url: 'https://tourism.kratonjogja.id/id-ID/destination/5-kagungan-dalem-tamansari/',
        },
      ],
      continueHref: '/destination/yogyakarta#around',
      continueLabel: 'Explore the Ngasem cultural cluster',
    },
  },
  {
    slug: 'tembang-gula',
    name: 'Tembang Gula',
    kicker: 'Contemporary Javanese popular culture',
    musicType: 'Javanese pop · dangdut · modern local culture',
    origin: 'Yogyakarta',
    headline: 'Local doesn’t have to sound old.',
    story:
      'Tembang Gula makes the present tense of local culture obvious. Javanese language and everyday stories meet contemporary pop and dangdut sensibilities, showing that a place keeps producing new culture rather than only preserving the past. This is Yogyakarta as a living creative city: not nostalgia, but identity still being written.',
    videoId: 'x6AWZxYh8E4',
    channelUrl: 'https://www.youtube.com/@tembanggula.official',
    instagramUrl: 'https://www.instagram.com/tembanggula/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'ARTJOG 2026 performance on 28 June 2026 is verified and has concluded; Available by Request is not confirmed.',
    visual: 'night',
    journey: {
      place: {
        id: 'artist-place-tembang-gula-jnm',
        name: 'Jogja National Museum',
        category: 'Place · verified performance site',
        blurb: 'ARTJOG’s 2026 agenda lists Tembang Gula on 28 June, while ARTJOG visitor information places the 2026 program at Jogja National Museum. That gives the pilot a verified performance-to-place handoff.',
        url: 'https://artjog.id/2026/agenda.php?lang=en',
      },
      culture: [
        {
          id: 'tembang-gula-context-dangdut-now',
          name: 'Javanese dangdut now',
          category: 'Popular culture',
          blurb: 'ARTJOG describes Tembang Gula as a Yogyakarta Javanese-language dangdut act mixing modern dangdut with pop and rock influences.',
          url: 'https://artjog.id/2025/detail-performa.php?lang=id&name=Tembang-Gula&urut=8',
        },
        {
          id: 'tembang-gula-context-artjog',
          name: 'Contemporary Yogyakarta arts',
          category: 'Creative ecosystem',
          blurb: 'The ARTJOG connection places the music inside a wider contemporary arts ecosystem rather than treating local culture as heritage only.',
          url: 'https://www.artjog.co.id/',
        },
      ],
      continueHref: '/destination/yogyakarta#culture',
      continueLabel: 'Explore contemporary Yogyakarta',
    },
  },
];

export const culturalContext = [
  {
    id: 'culture-kraton-yogyakarta',
    name: 'Kraton Yogyakarta',
    category: 'Living heritage',
    blurb: 'Court traditions, classical arts and the cultural context that shaped generations of Yogyakarta expression.',
    url: 'https://www.kratonjogja.id/',
  },
  {
    id: 'culture-sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Heritage & performance',
    blurb: 'A strong bridge into wayang, material culture and scheduled performing arts in the city center.',
    url: 'https://sonobudoyo.jogjaprov.go.id/id/information',
  },
  {
    id: 'culture-artjog',
    name: 'ARTJOG',
    category: 'Contemporary arts',
    blurb: 'An annual contemporary arts platform that keeps Yogyakarta connected to a living creative scene. The 2026 edition ran 19 June–30 August and has concluded; check the official site for the current program.',
    url: 'https://www.artjog.co.id/',
  },
];

export const aroundHere = [
  {
    id: 'place-gudeg-wijilan',
    name: 'Gudeg Wijilan',
    category: 'Food',
    area: 'Kraton / Wijilan',
    note: 'A well-established gudeg cluster immediately east of the Kraton area.',
    url: 'https://visitingjogja.jogjaprov.go.id/8045/gudeg-wijilan/',
  },
  {
    id: 'place-sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Heritage',
    area: 'Kraton / Alun-Alun Utara',
    note: 'Museum collections and scheduled cultural performances within the central heritage cluster.',
    url: 'https://sonobudoyo.jogjaprov.go.id/id/information',
  },
  {
    id: 'place-tamansari',
    name: 'Taman Sari',
    category: 'Heritage',
    area: 'Kraton / Patehan',
    note: 'The historic palace-garden complex within the central Kraton and Ngasem cultural cluster.',
    url: 'https://tourism.kratonjogja.id/id-ID/destination/5-kagungan-dalem-tamansari/',
  },
];

export const stayExamples = [
  {
    id: 'stay-royal-brongto',
    name: 'Royal Brongto Hotel',
    type: 'Heritage hotel',
    area: 'Suryodiningratan / south of Kraton',
    why: 'Its official site describes the property as an original nDalem linked to the Kraton family and positions it close to Kraton Yogyakarta.',
    status: 'Direct official link · no affiliate yet',
    url: 'https://www.royalbrongtohotel.com/',
  },
  {
    id: 'stay-indies-heritage',
    name: 'Indies Heritage Hotel',
    type: 'Boutique heritage hotel',
    area: 'Prawirotaman',
    why: 'A real boutique heritage property in the historic Prawirotaman area, useful as a stay option for the city cultural cluster.',
    status: 'Direct official link · no affiliate yet',
    url: 'https://indiesheritage.com/',
  },
  {
    id: 'stay-rumah-mertua',
    name: 'Rumah Mertua Heritage',
    type: 'Small heritage boutique hotel',
    area: 'North Yogyakarta',
    why: 'A verified Javanese-style boutique stay; treated as a destination stay rather than falsely labeled walking-distance from Kraton.',
    status: 'Direct official link · no affiliate yet',
    url: 'https://rumahmertuaheritage.com/',
  },
];

export const detours = [
  {
    id: 'detour-nglanggeran',
    name: 'Nglanggeran Tourism Village',
    category: 'Nature + community culture',
    note: 'A community-based destination about 25 km from Yogyakarta city; intentionally not labeled nearby.',
    url: 'https://visitingjogja.jogjaprov.go.id/42234/desa-wisata-nglanggeran-kabupaten-gunungkidul/',
  },
  {
    id: 'detour-mangunan',
    name: 'Hutan Pinus Mangunan',
    category: 'Nature',
    note: 'A nature detour in the Mangunan/Dlingo area for a broader Yogyakarta trip.',
    url: 'https://visitingjogja.jogjaprov.go.id/28223/pinus-asri-mangunan/',
  },
  {
    id: 'detour-ramayana',
    name: 'Ramayana Ballet Prambanan',
    category: 'Performing arts + heritage',
    note: 'A major cultural performance worth planning around; the official 2026 schedule varies by season and remains subject to change.',
    url: 'https://ticket.borobudurpark.com/en/ramayana-ballet-prambanan/',
  },
  {
    id: 'detour-kotagede-silver',
    name: 'Kotagede Silver Craft Center',
    category: 'Craft + urban heritage',
    note: 'A city-scale heritage and craft extension; intentionally separated from Around Here for the Kraton/Ngasem cluster.',
    url: 'https://visitingjogja.jogjaprov.go.id/40176/sentra-kerajinan-perak-kota-gede/',
  },
];

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
