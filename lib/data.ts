export type PerformanceStatus = 'DISCOVERY_ONLY' | 'SCHEDULED' | 'AVAILABLE_BY_REQUEST';

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
    videoId: 'F18vJTtX_Ns',
    spotifyUrl: 'https://open.spotify.com/artist/0Pk4JEXgC64RBmovnQDZ27',
    instagramUrl: 'https://www.instagram.com/jhf_no.1/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'Official video candidate; performance availability must be confirmed directly.',
    visual: 'ember',
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
    channelUrl: 'https://www.youtube.com/@Gayam16',
    instagramUrl: 'https://www.instagram.com/komunitasgayam16/',
    performanceStatus: 'SCHEDULED',
    sourceNote: 'YGF 31 ran 21 July–2 August 2026; current/future schedules must be maintained separately.',
    visual: 'moss',
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
    sourceNote: 'ARTJOG 2026 appearance verified; Available by Request requires management confirmation.',
    visual: 'night',
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
    url: 'https://sonobudoyo.jogjaprov.go.id/id/acara',
  },
  {
    id: 'culture-artjog',
    name: 'ARTJOG / Jogja National Museum',
    category: 'Contemporary arts',
    blurb: 'A reminder that Yogyakarta is not only heritage; it remains an active contemporary creative ecosystem.',
    url: 'https://artjog.id/2026/',
  },
];

export const aroundHere = [
  {
    id: 'place-gudeg-wijilan',
    name: 'Gudeg Wijilan',
    category: 'Food',
    area: 'Kraton / Ngasem',
    note: 'A useful food layer for the central Yogyakarta cultural cluster.',
    url: 'https://visitingjogja.jogjaprov.go.id/8045/gudeg-wijilan/',
  },
  {
    id: 'place-sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Heritage',
    area: 'Kraton / Ngasem',
    note: 'Wayang and cultural collections close to the core heritage area.',
    url: 'https://sonobudoyo.jogjaprov.go.id/id/information',
  },
  {
    id: 'place-kotagede-silver',
    name: 'Kotagede Silver Craft',
    category: 'Craft',
    area: 'Urban Yogyakarta',
    note: 'A craft and heritage cluster to extend the city story beyond music.',
    url: 'https://visitingjogja.jogjaprov.go.id/40176/sentra-kerajinan-perak-kota-gede/',
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
    name: 'Nglanggeran',
    category: 'Nature + community culture',
    note: 'Destination-wide extension; intentionally not labeled nearby.',
    url: 'https://visitingjogja.jogjaprov.go.id/42234/desa-wisata-nglanggeran-kabupaten-gunungkidul/',
  },
  {
    id: 'detour-mangunan',
    name: 'Hutan Pinus Mangunan',
    category: 'Nature',
    note: 'A nature detour for a broader Yogyakarta trip.',
    url: 'https://visitingjogja.jogjaprov.go.id/28223/pinus-asri-mangunan/',
  },
  {
    id: 'detour-ramayana',
    name: 'Ramayana Ballet Prambanan',
    category: 'Performing arts + heritage',
    note: 'A major cultural performance worth planning around.',
    url: 'https://visitingjogja.jogjaprov.go.id/12811/sendratari-ramayana-prambanan/',
  },
];

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
