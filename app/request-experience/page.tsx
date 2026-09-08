import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { ExperienceRequestForm } from '@/components/ExperienceRequestForm';
import { isPilot } from '@/lib/site';

export default async function RequestExperiencePage({ searchParams }: { searchParams: Promise<{ artist?: string; interest?: string }> }) {
  if (!isPilot) notFound();
  const { artist, interest } = await searchParams;
  const selected = artist ?? interest ?? '';
  const isInterestOnly = Boolean(interest && !artist);
  return <><Nav /><main className="shell"><section className="requestHero"><div><p className="eyebrow">Group experience inquiry</p><h1>Request interest.<br />Never assume availability.</h1></div><p>This pilot captures demand. It does not confirm an artist, price, date or booking.</p></section><section className="section requestGrid"><aside className="requestAside"><span className="eyebrow light">How it works</span><ol><li><strong>Tell us the group context.</strong><span>Date, size and purpose.</span></li><li><strong>IndoEthno checks feasibility.</strong><span>Artist/community availability is never assumed.</span></li><li><strong>Only then discuss an experience.</strong><span>No payment or confirmation in V1.</span></li></ol></aside><ExperienceRequestForm selected={selected} interestOnly={isInterestOnly} /></section></main><footer className="shell footer"><span>Inquiry, not booking</span><span>No artist availability is implied</span></footer></>;
}
