import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { SaveButton } from '@/components/SaveButton';
import { culturalContext, getArtist } from '@/lib/data';
import { isPilot } from '@/lib/site';

export default async function MusicStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!isPilot) notFound();
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const statusLabel = artist.performanceStatus === 'SCHEDULED' ? 'Scheduled performance' : artist.performanceStatus === 'AVAILABLE_BY_REQUEST' ? 'Available by request' : 'Discovery only';

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
                <Link className="btn glassBtn" href="/destination/yogyakarta#culture">Follow this sound into Yogyakarta</Link>
              </div>
            </div>
            <div className="status statusLight"><span className="dot" />{statusLabel}</div>
          </div>
        </section>

        <div className="shell musicBody">
          {artist.videoId ? (
            <section className="mediaSection">
              <div className="mediaLabel"><span>Official media</span><small>Embedded from the artist/source channel</small></div>
              <div className="videoWrap"><iframe src={`https://www.youtube-nocookie.com/embed/${artist.videoId}`} title={`${artist.name} official video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            </section>
          ) : (
            <section className="mediaSection"><div className="sourceCard"><p className="eyebrow">Official media</p><h3>Current official channel</h3><p>A specific embeddable performance will be selected only after the channel embed flag is tested during content QA.</p><a className="btn dark" href={artist.channelUrl} target="_blank" rel="noreferrer">Open official channel</a></div></section>
          )}

          <section className="section storyEditorial">
            <div className="storyAside"><span className="eyebrow">The story</span><span className="storyRule" /></div>
            <div className="storyCopy">
              <h2>{artist.headline}</h2>
              <p>{artist.story}</p>
              <blockquote>Hear the city first. Then decide how far the sound takes you.</blockquote>
            </div>
          </section>

          <section className="section">
            <div className="sectionHead">
              <div><p className="eyebrow">Next · Place</p><h2>Put the sound into Yogyakarta.</h2></div>
              <p>The artist story is the gateway. Continue into the destination to understand the cultural context, what is around the core cluster, what is worth a detour, and what could turn into a real trip.</p>
            </div>
            <div className="actions"><Link className="btn dark" href="/destination/yogyakarta#culture">Continue to Yogyakarta</Link></div>
          </section>

          <section className="section">
            <div className="sectionHead"><div><p className="eyebrow">Culture preview</p><h2>Follow the sound outward</h2></div><p>Verified cultural layers, kept editorially separate from claims about the artist.</p></div>
            <div className="grid3 editorialGrid">
              {culturalContext.map((item) => (
                <article className="editorialCard" key={item.id}>
                  <div className="meta">{item.category}</div><h3>{item.name}</h3><p>{item.blurb}</p>
                  <div className="cardActions"><a className="textLink" href={item.url} target="_blank" rel="noreferrer">Official/source ↗</a><SaveButton compact item={{ id: item.id, type: 'culture', title: item.name, subtitle: item.category, href: '/destination/yogyakarta#culture' }} /></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="darkBand"><div className="shell performanceBand"><div><p className="eyebrow light">Performance</p><h2>Experience the music live.</h2><p>IndoEthno never implies availability without direct confirmation.</p></div><div>{artist.performanceStatus === 'AVAILABLE_BY_REQUEST' ? <Link className="btn" href={`/request-experience?artist=${artist.slug}`}>Request a group experience</Link> : artist.performanceStatus === 'SCHEDULED' ? <a className="btn" href="https://ygflive.com/" target="_blank" rel="noreferrer">See official schedule</a> : <Link className="btn" href={`/request-experience?interest=${artist.slug}`}>Express group interest</Link>}<small>{artist.sourceNote}</small></div></div></section>
      <footer className="shell footer"><span>IndoEthno pilot</span><span>Sound → Place → Culture → Around Here → Worth a Detour → Travel intent</span></footer>
    </>
  );
}
