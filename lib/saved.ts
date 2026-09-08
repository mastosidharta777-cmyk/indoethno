export type SavedItemType = 'sound' | 'culture' | 'place' | 'stay' | 'detour';

export type SavedItem = {
  id: string;
  type: SavedItemType;
  title: string;
  subtitle?: string;
  href?: string;
};

export const SAVED_STORAGE_KEY = 'indoethno.saved.v1';
export const SAVED_EVENT = 'indoethno:saved-change';
