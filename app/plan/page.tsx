import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { PlanClient } from '@/components/PlanClient';
import { isPilot } from '@/lib/site';

export default function PlanPage() {
  if (!isPilot) notFound();
  return <><Nav /><main className="shell"><section className="planHero"><div><p className="eyebrow">Plan visit · pilot</p><h1>Build a cultural trip,<br />not a checklist.</h1></div><p>Save stays in this browser only. That is deliberate: V1 tests planning behavior before asking users to create accounts.</p></section><section className="section planSection"><PlanClient /></section></main><footer className="shell footer"><span>Local-browser save</span><span>Account system intentionally deferred</span></footer></>;
}
