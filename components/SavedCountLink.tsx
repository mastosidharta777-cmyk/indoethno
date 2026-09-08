'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SAVED_EVENT, SAVED_STORAGE_KEY, type SavedItem } from '@/lib/saved';

function countSaved() {
  try {
    const raw = window.localStorage.getItem(SAVED_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedItem[]).length : 0;
  } catch {
    return 0;
  }
}

export function SavedCountLink() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refresh = () => setCount(countSaved());
    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener(SAVED_EVENT, refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(SAVED_EVENT, refresh);
    };
  }, []);

  return <Link href="/plan">Trip <span className="countPill">{count}</span></Link>;
}
