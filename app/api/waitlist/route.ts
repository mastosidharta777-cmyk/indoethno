import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isPilot } from '@/lib/site';

type Payload = {
  email?: string;
  consent?: boolean;
  website?: string;
};

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (isPilot) {
    return new Response(null, { status: 404 });
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, message: 'Waitlist storage is not configured yet.' }, { status: 503 });
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots often fill hidden fields. Return generic success without storing.
  if (clean(body.website, 120)) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(body.email, 254).toLowerCase();
  const consent = Boolean(body.consent);

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ ok: false, message: 'Please confirm that you want IndoEthno updates.' }, { status: 400 });
  }

  const { error } = await supabase.from('waitlist_signups').insert({
    email,
    consent: true,
    source: 'coming-soon',
  });

  if (error) {
    // Duplicate email means the user is already safely on the list.
    if (error.code === '23505') {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }

    console.error('waitlist_insert_failed', error.code);
    return NextResponse.json({ ok: false, message: 'We could not save your email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
