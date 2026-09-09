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
      'A beat lands first. Then come Javanese words, local references, humor and social observation. Jogja Hip Hop Foundation makes Yogyakarta feel less like a backdrop and more like a voice speaking for itself. Their music is modern, urban and global in form, yet the city keeps surfacing inside it. Start here and Yogyakarta stops being a checklist of landmarks. It becomes a place with rhythm, language and attitude.',
    videoId: 'V5oFpzkzubI',
    spotifyUrl: 'https://open.spotify.com/artist/0Pk4JEXgC64RBmovnQDZ27',
    instagramUrl: 'https://www.instagram.com/jhf_no.1/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'This page is for discovery. Any current performance opportunity still needs direct confirmation.',
    visual: 'ember',
    journey: {
      place: {
        id: 'artist-place-jhf-yogyakarta',
        name: 'Yogyakarta, citywide',
        category: 'Place · city identity',
        blurb: 'There is no single doorway into this story. The city itself is the setting: Javanese language, street life, literary references, traditional sounds and contemporary urban culture all collide inside the music. Follow JHF and you are really following Yogyakarta across neighborhoods, generations and points of view.',
        url: 'https://kebudayaan.kemdikbud.go.id/ditwdb/jogja-hip-hop-foundation-profile-music-europalia-arts-festival-2017/',
      },
      culture: [
        {
          id: 'jhf-context-language-literature',
          name: 'Javanese language & literature',
          category: 'Cultural code',
          blurb: 'Listen beyond the beat and the language becomes part of the map. Javanese words, poetry and literary references carry a sense of place that translation alone cannot reproduce.',
          url: 'https://kebudayaan.kemdikbud.go.id/ditwdb/jogja-hip-hop-foundation-profile-music-europalia-arts-festival-2017/',
        },
        {
          id: 'jhf-context-social-yogyakarta',
          name: 'Hip-hop as social culture',
          category: 'Yogyakarta context',
          blurb: 'The songs also point outward—to everyday life, social values and the contradictions of a changing city. That is where hip-hop becomes more than genre: it becomes a way of reading Yogyakarta.',
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
      'Gamelan in Yogyakarta is not a sound trapped behind glass. It is tuned, rehearsed, challenged, reimagined and passed from one set of hands to another. Gayam16 and the Yogyakarta Gamelan Festival make that movement visible: tradition meeting younger musicians, new compositions, technology and international collaboration. The result feels less like preservation and more like a living conversation—one that has been going on for generations and is still changing shape.',
    videoId: 'uBe7EnXUbP0',
    channelUrl: 'https://www.youtube.com/@Gayam16',
    instagramUrl: 'https://www.instagram.com/komunitasgayam16/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'Yogyakarta Gamelan Festival 31 concluded on 2 August 2026. Future programs should be treated as new discoveries, not assumed availability.',
    visual: 'moss',
    journey: {
      place: {
        id: 'artist-place-gayam16-ngasem',
        name: 'Plaza Pasar Ngasem',
        category: 'Place · festival ground',
        blurb: 'For Yogyakarta Gamelan Festival 31, Plaza Pasar Ngasem became a meeting ground for this living sound. That matters because the music does not end when the performance does. Step outside and you are already inside the Ngasem–Kraton cultural cluster, where palace history, neighborhood life and older layers of Yogyakarta sit within the same walkable part of the city.',
        url: 'https://visitingjogja.jogjaprov.go.id/44560/yogyakarta-gamelan-festival-2026-21-juli-2-agustus-2026/',
      },
      culture: [
        {
          id: 'gayam16-context-living-gamelan',
          name: 'Gamelan in motion',
          category: 'Living tradition',
          blurb: 'In 2026, Gayam16 collaborated with Compagnie Kotekan—another reminder that gamelan here is not treated as a finished object. It keeps absorbing new people, new ideas and new ways of listening.',
          url: 'https://budaya.jogjaprov.go.id/berita/detail/2136-merayakan-sukacita-menjembatani-budaya',
        },
        {
          id: 'gayam16-context-ngasem-cluster',
          name: 'Ngasem / Kraton cluster',
          category: 'Travel context',
          blurb: 'The sound gives you a reason to notice the area differently. From Ngasem, the journey naturally opens into Taman Sari, the Kraton surroundings, old lanes, food and the compact cultural geography of central Yogyakarta.',
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
      'This is local culture in the present tense. Tembang Gula puts Javanese language and everyday stories inside pop, dangdut and rock-influenced arrangements that feel completely at home in today’s Yogyakarta. The appeal is not nostalgia. It is recognition: a familiar language, a contemporary pulse and a city still creating new versions of itself.',
    videoId: 'x6AWZxYh8E4',
    channelUrl: 'https://www.youtube.com/@tembanggula.official',
    instagramUrl: 'https://www.instagram.com/tembanggula/',
    performanceStatus: 'DISCOVERY_ONLY',
    sourceNote: 'The ARTJOG performance on 28 June 2026 has concluded. Current performance availability is not implied.',
    visual: 'night',
    journey: {
      place: {
        id: 'artist-place-tembang-gula-jnm',
        name: 'Jogja National Museum',
        category: 'Place · performance setting',
        blurb: 'On 28 June 2026, Tembang Gula appeared in the ARTJOG program at Jogja National Museum. It is an unusually good handoff from sound to place: contemporary Javanese popular music arriving inside one of Yogyakarta’s major contemporary arts settings.',
        url: 'https://artjog.id/2026/agenda.php?lang=en',
      },
      culture: [
        {
          id: 'tembang-gula-context-dangdut-now',
          name: 'Javanese dangdut now',
          category: 'Popular culture',
          blurb: 'Javanese language meets modern dangdut, pop and rock without needing to dress itself as heritage. It is local identity doing what living culture does best: changing without disappearing.',
          url: 'https://artjog.id/2025/detail-performa.php?lang=id&name=Tembang-Gula&urut=8',
        },
        {
          id: 'tembang-gula-context-artjog',
          name: 'Contemporary Yogyakarta arts',
          category: 'Creative ecosystem',
          blurb: 'The ARTJOG setting widens the frame. Music sits beside visual art, performance and a broader creative scene, revealing Yogyakarta as a city where culture is continuously being made rather than simply inherited.',
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
    blurb: 'Not just a palace to photograph. The Kraton remains a cultural center whose court traditions, classical arts and worldview continue to shape how Yogyakarta understands itself.',
    url: 'https://www.kratonjogja.id/',
  },
  {
    id: 'culture-sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Heritage & performance',
    blurb: 'A compact doorway into Java’s material culture, wayang and performing traditions—close enough to the city center to become part of the same cultural walk rather than a separate museum stop.',
    url: 'https://sonobudoyo.jogjaprov.go.id/id/information',
  },
  {
    id: 'culture-artjog',
    name: 'ARTJOG',
    category: 'Contemporary arts',
    blurb: 'Yogyakarta does not only preserve culture; it argues with it, rebuilds it and creates something new. ARTJOG is one of the clearest places to see that contemporary energy. The 2026 edition concluded on 30 August.',
    url: 'https://www.artjog.co.id/',
  },
];

export const aroundHere = [
  {
    id: 'place-gudeg-wijilan',
    name: 'Gudeg Wijilan',
    category: 'Food',
    area: 'Kraton / Wijilan',
    note: 'Leave the palace area hungry and Wijilan answers quickly: a historic cluster of gudeg kitchens where one of Yogyakarta’s most recognizable flavors becomes part of the route, not a separate food mission.',
    url: 'https://visitingjogja.jogjaprov.go.id/8045/gudeg-wijilan/',
  },
  {
    id: 'place-sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Heritage',
    area: 'Kraton / Alun-Alun Utara',
    note: 'Close to the northern square, Sonobudoyo lets the journey slow down and look more closely at the objects, stories and performing traditions behind the city’s cultural vocabulary.',
    url: 'https://sonobudoyo.jogjaprov.go.id/id/information',
  },
  {
    id: 'place-tamansari',
    name: 'Taman Sari',
    category: 'Heritage',
    area: 'Kraton / Patehan',
    note: 'From Ngasem, Taman Sari feels like the next chapter rather than another attraction: a former royal garden woven into narrow lanes and the everyday neighborhood life of the Kraton area.',
    url: 'https://tourism.kratonjogja.id/id-ID/destination/5-kagungan-dalem-tamansari/',
  },
];

export const stayExamples = [
  {
    id: 'stay-royal-brongto',
    name: 'Royal Brongto Hotel',
    type: 'Heritage hotel',
    area: 'Suryodiningratan / south of Kraton',
    why: 'A former nDalem with links to the Kraton family, useful for travelers who want the stay itself to continue the atmosphere of the heritage district.',
    status: 'Direct property link · no affiliate yet',
    url: 'https://www.royalbrongtohotel.com/',
  },
  {
    id: 'stay-indies-heritage',
    name: 'Indies Heritage Hotel',
    type: 'Boutique heritage hotel',
    area: 'Prawirotaman',
    why: 'A boutique heritage base in Prawirotaman for travelers who want evenings, cafés and the city’s contemporary traveler district within easy reach.',
    status: 'Direct property link · no affiliate yet',
    url: 'https://indiesheritage.com/',
  },
  {
    id: 'stay-rumah-mertua',
    name: 'Rumah Mertua Heritage',
    type: 'Small heritage boutique hotel',
    area: 'North Yogyakarta',
    why: 'A quieter Javanese-style stay in the north of the city—better treated as a destination base than falsely described as part of the Kraton walking cluster.',
    status: 'Direct property link · no affiliate yet',
    url: 'https://rumahmertuaheritage.com/',
  },
];

export const detours = [
  {
    id: 'detour-nglanggeran',
    name: 'Nglanggeran Tourism Village',
    category: 'Nature + community culture',
    note: 'About 25 km from the city, Nglanggeran changes the scale of the trip: volcanic landscape, village life and community-based tourism instead of another urban stop.',
    url: 'https://visitingjogja.jogjaprov.go.id/42234/desa-wisata-nglanggeran-kabupaten-gunungkidul/',
  },
  {
    id: 'detour-mangunan',
    name: 'Hutan Pinus Mangunan',
    category: 'Nature',
    note: 'When the city feels dense, head toward Mangunan. Pine forest and hill-country air provide a simple visual reset before returning to Yogyakarta’s cultural core.',
    url: 'https://visitingjogja.jogjaprov.go.id/28223/pinus-asri-mangunan/',
  },
  {
    id: 'detour-ramayana',
    name: 'Ramayana Ballet Prambanan',
    category: 'Performing arts + heritage',
    note: 'Prambanan after dark can turn a temple visit into a performance night, with the Ramayana story staged against one of Java’s most dramatic heritage settings. Schedules vary by season.',
    url: 'https://ticket.borobudurpark.com/en/ramayana-ballet-prambanan/',
  },
  {
    id: 'detour-kotagede-silver',
    name: 'Kotagede Silver Craft Center',
    category: 'Craft + urban heritage',
    note: 'Kotagede rewards a slower detour: old lanes, urban heritage and a long silver-making tradition that gives the district its own texture within greater Yogyakarta.',
    url: 'https://visitingjogja.jogjaprov.go.id/40176/sentra-kerajinan-perak-kota-gede/',
  },
];

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
