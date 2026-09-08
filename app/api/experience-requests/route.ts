import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const GROUP_TYPES = new Set([
  'Private traveler group',
  'Tour / DMC',
  'Corporate / MICE',
  'Community / education',
  'Other',
]);

const BUDGET_RANGES = new Set([
  'Under Rp10m',
  'Rp10m–25m',
  'Rp25m–50m',
  'Rp50m+',
  'Need guidance',
]);

type Payload = {
  artistOrExperience?: string;
  estimatedDate?: string;
  groupSize?: number;
  groupType?: string;
  budgetRange?: string;
  groupOrigin?: string;
  preferredLocation?: string;
  message?: string;
  contact?: string;
  interestOnly?: boolean;
  website?: string;
};

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, message: 'Inquiry storage is not configured yet.' }, { status: 503 });
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots often fill this hidden field. Return a generic success without storing.
  if (clean(body.website, 120)) {
    return NextResponse.json({ ok: true });
  }

  const artistOrExperience = clean(body.artistOrExperience, 160);
  const groupType = clean(body.groupType, 80);
  const budgetRange = clean(body.budgetRange, 80);
  const groupOrigin = clean(body.groupOrigin, 160);
  const preferredLocation = clean(body.preferredLocation, 180);
  const message = clean(body.message, 2000);
  const contact = clean(body.contact, 240);
  const estimatedDate = clean(body.estimatedDate, 10);
  const groupSize = Number(body.groupSize);

  if (!contact || !Number.isInteger(groupSize) || groupSize < 1 || groupSize > 2000) {
    return NextResponse.json({ ok: false, message: 'Please provide a valid contact and group size.' }, { status: 400 });
  }
  if (groupType && !GROUP_TYPES.has(groupType)) {
    return NextResponse.json({ ok: false, message: 'Invalid group type.' }, { status: 400 });
  }
  if (budgetRange && !BUDGET_RANGES.has(budgetRange)) {
    return NextResponse.json({ ok: false, message: 'Invalid budget range.' }, { status: 400 });
  }
  if (estimatedDate && !/^\d{4}-\d{2}-\d{2}$/.test(estimatedDate)) {
    return NextResponse.json({ ok: false, message: 'Invalid date.' }, { status: 400 });
  }

  const { error } = await supabase.from('experience_requests').insert({
    artist_or_experience: artistOrExperience || null,
    estimated_date: estimatedDate || null,
    group_size: groupSize,
    group_type: groupType || null,
    budget_range: budgetRange || null,
    group_origin: groupOrigin || null,
    preferred_location: preferredLocation || null,
    message: message || null,
    contact,
    interest_only: Boolean(body.interestOnly),
  });

  if (error) {
    console.error('experience_request_insert_failed', error.code);
    return NextResponse.json({ ok: false, message: 'We could not save the inquiry.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
