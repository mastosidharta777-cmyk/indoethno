import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { PlanClient } from '@/components/PlanClient';
import { isPilot } from '@/lib/site';

export default function PlanPage() {
  if (!isPilot) notFound();
  return <><Nav /><main className="shell"><section className="planHero"><div><p className="eyebrow">Your Yogyakarta trip</p><h1>Build a cultural trip,<br />not a checklist.</h1></div><p>Keep the sounds, places, culture, stays and detours that made you stop and look twice. Your choices stay in this browser, so you can shape the trip without creating an account.</p></section><section className="section planSection"><PlanClient /></section></main><footer className="shell footer"><span>IndoEthno · Yogyakarta</span><span>Your saved journey</span></footer></>;
}
