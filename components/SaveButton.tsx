'use client';

import { useEffect, useState } from 'react';
import { SAVED_EVENT, SAVED_STORAGE_KEY, type SavedItem } from '@/lib/saved';

function readSaved(): SavedItem[] {
  try {
    const raw = window.localStorage.getItem(SAVED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeSaved(items: SavedItem[]) {
  window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(SAVED_EVENT));
}

export function SaveButton({ item, compact = false }: { item: SavedItem; compact?: boolean }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(readSaved().some((x) => x.id === item.id));
  }, [item.id]);

  function toggle() {
    const items = readSaved();
    const exists = items.some((x) => x.id === item.id);
    const next = exists ? items.filter((x) => x.id !== item.id) : [...items, item];
    writeSaved(next);
    setSaved(!exists);
  }

  return (
    <button
      type="button"
      className={compact ? `saveIcon ${saved ? 'saved' : ''}` : `btn ${saved ? 'savedBtn' : ''}`}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${item.title} from trip` : `Save ${item.title} to trip`}
      onClick={toggle}
    >
      {compact ? (saved ? '✓' : '+') : (saved ? 'Saved to trip ✓' : 'Save to trip')}
    </button>
  );
}
