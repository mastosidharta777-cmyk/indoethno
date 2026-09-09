'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { SAVED_EVENT, SAVED_STORAGE_KEY, type SavedItem, type SavedItemType } from '@/lib/saved';

const labels: Record<SavedItemType, string> = {
  sound: 'Sounds',
  culture: 'Culture',
  place: 'Around Here',
  stay: 'Where to Stay',
  detour: 'Worth a Detour',
};

function readSaved(): SavedItem[] {
  try {
    const raw = window.localStorage.getItem(SAVED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persist(items: SavedItem[]) {
  window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(SAVED_EVENT));
}

export function PlanClient() {
  const [items, setItems] = useState<SavedItem[]>([]);

  useEffect(() => setItems(readSaved()), []);

  const grouped = useMemo(() => {
    return (Object.keys(labels) as SavedItemType[]).map((type) => ({
      type,
      items: items.filter((item) => item.type === type),
    }));
  }, [items]);

  function remove(id: string) {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    persist(next);
  }

  function clear() {
    setItems([]);
    persist([]);
  }

  if (!items.length) {
    return (
      <div className="emptyState">
        <span className="eyebrow">Your trip is empty</span>
        <h2>Start with one sound.</h2>
        <p>Save a music story, cultural place, nearby idea or stay. Everything stays in this browser for the pilot—no account required.</p>
        <div className="actions">
          <Link className="btn dark" href="/#sounds">Discover sounds</Link>
          <Link className="btn" href="/destination/yogyakarta">Explore Yogyakarta</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="tripBoard">
      <div className="tripSummary">
        <div>
          <span className="eyebrow">Saved locally</span>
          <strong>{items.length} {items.length === 1 ? 'idea' : 'ideas'} shaping this trip</strong>
        </div>
        <button className="textButton" type="button" onClick={clear}>Clear trip</button>
      </div>

      {grouped.map((group) => group.items.length > 0 && (
        <section className="tripGroup" key={group.type}>
          <div className="tripGroupTitle">
            <span>{labels[group.type]}</span>
            <small>{group.items.length}</small>
          </div>
          <div className="tripItems">
            {group.items.map((item) => (
              <article className="tripItem" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  {item.subtitle && <p>{item.subtitle}</p>}
                </div>
                <div className="tripItemActions">
                  {item.href && <Link className="textLink" href={item.href}>Open</Link>}
                  <button className="textButton" type="button" onClick={() => remove(item.id)}>Remove</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="tripNext">
        <div>
          <span className="eyebrow">Travel intent</span>
          <h2>Choose what this interest becomes.</h2>
          <p>Review a stay, keep planning, or send a group experience inquiry. V1 measures intent without implying live booking or availability.</p>
        </div>
        <div className="actions">
          <Link className="btn dark" href="/destination/yogyakarta#stay">Review stays</Link>
          <Link className="btn" href="/request-experience">Group experience inquiry</Link>
        </div>
      </div>
    </div>
  );
}
