export type GeoPoint = {
  lat: number;
  lon: number;
};

type CoordinateRecord = {
  point: GeoPoint;
  source: string;
  basis: string;
};

export const AROUND_HERE_MAX_DISTANCE_KM = 1;

export const aroundHereAnchor = {
  id: 'anchor-plaza-pasar-ngasem',
  name: 'Plaza Pasar Ngasem',
  point: {
    lat: -7.808179861584399,
    lon: 110.36002371880139,
  },
  coordinateSource: 'https://www.wikidata.org/wiki/Q16746872',
  relationshipSource: 'https://visitingjogja.jogjaprov.go.id/44560/yogyakarta-gamelan-festival-2026-21-juli-2-agustus-2026/',
} as const;

const aroundHereCoordinates: Record<string, CoordinateRecord> = {
  'place-gudeg-wijilan': {
    point: {
      lat: -7.805014,
      lon: 110.366621,
    },
    source: 'https://digilib.uin-suka.ac.id/19637/2/10651066_BAB-I_IV-atau-V_DAFTAR-PUSTAKA_2.pdf',
    basis: 'Published coordinate for the Gudeg Wijilan culinary location; the tourism source describes Wijilan as the gudeg cluster east of Alun-Alun Utara.',
  },
  'place-sonobudoyo': {
    point: {
      lat: -7.80246,
      lon: 110.36388,
    },
    source: 'https://jogjacagar.jogjaprov.go.id/detail/644/museum',
    basis: 'Official Yogyakarta cultural-heritage registry coordinate for Museum Sonobudoyo.',
  },
  'place-tamansari': {
    point: {
      lat: -7.8100995,
      lon: 110.3596395,
    },
    source: 'https://tourism.kratonjogja.id/id-ID/destination/5-kagungan-dalem-tamansari/',
    basis: 'Coordinate resolved from the official Keraton Yogyakarta tourism page map link for Tamansari.',
  },
};

export function distanceKm(a: GeoPoint, b: GeoPoint) {
  const earthRadiusKm = 6371.0088;
  const toRadians = (value: number) => (value * Math.PI) / 180;
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const deltaLat = toRadians(b.lat - a.lat);
  const deltaLon = toRadians(b.lon - a.lon);

  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}

export function getAroundHereWithDistance<T extends { id: string }>(items: T[]) {
  return items
    .map((item) => {
      const coordinate = aroundHereCoordinates[item.id];
      if (!coordinate) {
        throw new Error(`Missing audited coordinates for Around Here item: ${item.id}`);
      }

      return {
        ...item,
        coordinates: coordinate.point,
        coordinateSource: coordinate.source,
        coordinateBasis: coordinate.basis,
        distanceKm: distanceKm(aroundHereAnchor.point, coordinate.point),
      };
    })
    .filter((item) => item.distanceKm <= AROUND_HERE_MAX_DISTANCE_KM)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}
