import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { ExperienceRequestForm } from '@/components/ExperienceRequestForm';
import { getArtist } from '@/lib/data';
import { isPilot } from '@/lib/site';

export default async function RequestExperiencePage({ searchParams }: { searchParams: Promise<{ artist?: string; interest?: string }> }) {
  if (!isPilot) notFound();
  const { artist, interest } = await searchParams;
  const selectedSlug = artist ?? interest ?? '';
  const selectedArtist = selectedSlug ? getArtist(selectedSlug) : undefined;
  const selected = selectedArtist?.name ?? selectedSlug;
  const isInterestOnly = Boolean(interest && !artist);
  return <><Nav /><main className="shell"><section className="requestHero"><div><p className="eyebrow">For groups · by inquiry</p><h1>Bring the sound<br />into the journey.</h1></div><p>Tell us what you have in mind. Nothing is confirmed until the artist or community, date, format and practical details have all been checked.</p></section><section className="section requestGrid"><aside className="requestAside"><span className="eyebrow light">How it works</span><ol><li><strong>Tell us about the group.</strong><span>Date, size, purpose and the experience you are imagining.</span></li><li><strong>We check what is possible.</strong><span>Availability and format are confirmed directly before anything moves forward.</span></li><li><strong>If it fits, the conversation continues.</strong><span>Only then do price, timing and practical details become part of the plan.</span></li></ol></aside><ExperienceRequestForm selected={selected} interestOnly={isInterestOnly} /></section></main><footer className="shell footer"><span>IndoEthno · group experiences</span><span>Availability is checked before any next step</span></footer></>;
}
