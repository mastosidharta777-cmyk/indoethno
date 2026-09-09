'use client';

import { FormEvent, useState } from 'react';

export function ExperienceRequestForm({ selected = '', interestOnly = false }: { selected?: string; interestOnly?: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setMessage('');

    const form = new FormData(event.currentTarget);
    const payload = {
      artistOrExperience: form.get('artistOrExperience'),
      estimatedDate: form.get('estimatedDate'),
      groupSize: Number(form.get('groupSize')),
      groupType: form.get('groupType'),
      budgetRange: form.get('budgetRange'),
      groupOrigin: form.get('groupOrigin'),
      preferredLocation: form.get('preferredLocation'),
      message: form.get('message'),
      contact: form.get('contact'),
      website: form.get('website'),
      interestOnly,
    };

    try {
      const response = await fetch('/api/experience-requests', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || 'Unable to save inquiry');
      setState('success');
      setMessage('Inquiry received. We will only move forward after the experience, date and availability have been checked.');
      event.currentTarget.reset();
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'Unable to save inquiry.');
    }
  }

  return (
    <form className="form requestForm" onSubmit={submit}>
      <div className="field"><label>Artist / experience</label><input name="artistOrExperience" defaultValue={selected} placeholder="Artist or experience" /></div>
      {interestOnly && <div className="noticeCard"><strong>Ask us to check</strong><p>This artist is not currently listed as available by request. You can still tell us what you are imagining, and we will only continue if availability can be confirmed.</p></div>}
      <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid2"><div className="field"><label>Estimated date</label><input name="estimatedDate" type="date" /></div><div className="field"><label>Group size *</label><input name="groupSize" type="number" min="1" max="2000" required placeholder="e.g. 30" /></div></div>
      <div className="grid2"><div className="field"><label>Group type</label><select name="groupType" defaultValue=""><option value="">Select</option><option>Private traveler group</option><option>Tour / DMC</option><option>Corporate / MICE</option><option>Community / education</option><option>Other</option></select></div><div className="field"><label>Budget range</label><select name="budgetRange" defaultValue=""><option value="">Select</option><option>Under Rp10m</option><option>Rp10m–25m</option><option>Rp25m–50m</option><option>Rp50m+</option><option>Need guidance</option></select></div></div>
      <div className="grid2"><div className="field"><label>Country / city of group</label><input name="groupOrigin" placeholder="e.g. Singapore / Jakarta" /></div><div className="field"><label>Preferred location</label><input name="preferredLocation" placeholder="Yogyakarta, hotel, village, venue…" /></div></div>
      <div className="field"><label>What kind of experience are you imagining?</label><textarea name="message" maxLength={2000} placeholder="Tell us what would make this meaningful for your group." /></div>
      <div className="field"><label>Contact *</label><input name="contact" maxLength={240} required placeholder="Email or WhatsApp" /></div>
      <button className="btn dark" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send inquiry'}</button>
      {message && <div className={`formMessage ${state}`}>{message}</div>}
      <small className="formNote">Sending an inquiry does not confirm an artist, price, date or performance.</small>
    </form>
  );
}
