import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { SaveButton } from '@/components/SaveButton';
import { getArtist } from '@/lib/data';
import { isPilot } from '@/lib/site';

export default async function MusicStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!isPilot) notFound();
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const statusLabel = artist.performanceStatus === 'SCHEDULED' ? 'Scheduled performance' : artist.performanceStatus === 'AVAILABLE_BY_REQUEST' ? 'Group requests open' : 'No current schedule listed';

  return (
    <>
      <Nav />
      <main>
        <section className={`musicMast visual-${artist.visual}`}>
          <div className="shell musicMastInner">
            <div>
              <p className="eyebrow light">{artist.kicker} · {artist.origin}</p>
              <h1>{artist.name}</h1>
              <p className="musicType">{artist.musicType}</p>
              <div className="actions">
                <SaveButton item={{ id: `sound-${artist.slug}`, type: 'sound', title: artist.name, subtitle: artist.musicType, href: `/music/${artist.slug}` }} />
                <a className="btn glassBtn" href="#place">Follow the sound to {artist.journey.place.name}</a>
              </div>
            </div>
            <div className="status statusLight"><span className="dot" />{statusLabel}</div>
          </div>
        </section>

        <div className="shell musicBody">
          {artist.videoId ? (
            <section className="mediaSection">
              <div className="mediaLabel"><span>Start with the sound</span><small>Selected from the artist channel</small></div>
              <div className="videoWrap"><iframe src={`https://www.youtube-nocookie.com/embed/${artist.videoId}`} title={`${artist.name} official video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            </section>
          ) : (
            <section className="mediaSection"><div className="sourceCard"><p className="eyebrow">Start with the sound</p><h3>Current artist channel</h3><p>This story is ready; a specific embedded performance will be added once playback is confirmed.</p><a className="btn dark" href={artist.channelUrl} target="_blank" rel="noreferrer">Open artist channel</a></div></section>
          )}

          <section className="section storyEditorial">
            <div className="storyAside"><span className="eyebrow">The story</span><span className="storyRule" /></div>
            <div className="storyCopy">
              <h2>{artist.headline}</h2>
              <p>{artist.story}</p>
              <blockquote>Begin with a sound. Then see what part of Yogyakarta it opens.</blockquote>
            </div>
          </section>

          <section className="section" id="place">
            <div className="sectionHead">
              <div><p className="eyebrow">Next · Place</p><h2>{artist.journey.place.name}</h2></div>
              <p>The music now has somewhere to land. This is the first place in the journey—not a generic list of attractions.</p>
            </div>
            <div className="grid2 editorialGrid">
              <article className="editorialCard">
                <div className="meta">{artist.journey.place.category}</div>
                <h3>Where the sound takes you</h3>
                <p>{artist.journey.place.blurb}</p>
                <div className="cardActions">
                  <SaveButton compact item={{ id: artist.journey.place.id, type: 'place', title: artist.journey.place.name, subtitle: artist.journey.place.category, href: `/music/${artist.slug}#place` }} />
                </div>
              </article>
              <article className="editorialCard">
                <div className="meta">Follow the thread</div>
                <h3>Stay with the story.</h3>
                <p>Once the sound has a place, the journey can widen naturally: language, food, heritage, contemporary culture and nearby discoveries begin to feel connected instead of random.</p>
                <div className="cardActions"><a className="textLink" href="#culture">Continue the story ↓</a></div>
              </article>
            </div>
          </section>

          <section className="section" id="culture">
            <div className="sectionHead"><div><p className="eyebrow">Next · Culture</p><h2>What opens up from here</h2></div><p>These are the cultural threads that make the music—and the place around it—mean more.</p></div>
            <div className="grid2 editorialGrid">
              {artist.journey.culture.map((item) => (
                <article className="editorialCard" key={item.id}>
                  <div className="meta">{item.category}</div><h3>{item.name}</h3><p>{item.blurb}</p>
                  <div className="cardActions"><SaveButton compact item={{ id: item.id, type: 'culture', title: item.name, subtitle: item.category, href: `/music/${artist.slug}#culture` }} /></div>
                </article>
              ))}
            </div>
            <div className="actions"><Link className="btn dark" href={artist.journey.continueHref}>{artist.journey.continueLabel}</Link></div>
          </section>
        </div>
      </main>

      <section className="darkBand"><div className="shell performanceBand"><div><p className="eyebrow light">Performance</p><h2>Could this sound become part of the trip?</h2><p>IndoEthno shows current availability only when it has been directly confirmed.</p></div><div>{artist.performanceStatus === 'AVAILABLE_BY_REQUEST' ? <Link className="btn" href={`/request-experience?artist=${artist.slug}`}>Request a group experience</Link> : artist.performanceStatus === 'SCHEDULED' ? <a className="btn" href="https://ygflive.com/" target="_blank" rel="noreferrer">See official schedule</a> : <Link className="btn" href={`/request-experience?interest=${artist.slug}`}>Ask about a group experience</Link>}<small>{artist.sourceNote}</small></div></div></section>
      <footer className="shell footer"><span>IndoEthno · Yogyakarta</span><span>Start with a sound. Follow the place.</span></footer>
    </>
  );
}
