import Link from 'next/link';
import { artists, culturalContext, detours } from '@/lib/data';
import { Nav } from './Nav';
import { SaveButton } from './SaveButton';

export function PilotHome() {
  return (
    <>
      <Nav />
      <main>
        <div className="shell heroShell">
          <section className="hero heroPilot">
            <div className="heroOrnament" aria-hidden="true"><span /><span /><span /></div>
            <div className="heroContent">
              <p className="eyebrow light">Yogyakarta pilot · music-led cultural travel</p>
              <h1>Hear the place<br />before you go.</h1>
              <p className="lede">Start with the music that lives here. Follow it into culture, food, nature, stays and experiences that make the journey worth taking.</p>
              <div className="actions">
                <a className="btn lightBtn" href="#sounds">Discover the sounds</a>
                <Link className="btn glassBtn" href="/destination/yogyakarta">Explore Yogyakarta</Link>
              </div>
            </div>
            <aside className="heroNowPlaying">
              <span className="miniLabel">Pilot idea</span>
              <div className="soundBars" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
              <strong>Sound → Place → Culture → Journey</strong>
              <p>Music is the gateway, not the whole destination.</p>
            </aside>
          </section>
        </div>

        <section className="section shell" id="sounds">
          <div className="sectionHead">
            <div><p className="eyebrow">The gateway</p><h2>Sounds from Yogyakarta</h2></div>
            <p>Not a museum of traditional music. IndoEthno follows living local music culture—from heritage forms to contemporary scenes.</p>
          </div>
          <div className="grid3 soundGrid">
            {artists.map((artist, index) => (
              <article className={`soundCard visual-${artist.visual}`} key={artist.slug}>
                <Link className="soundCardMain" href={`/music/${artist.slug}`}>
                  <div className="soundIndex">0{index + 1}</div>
                  <div className="soundCardContent">
                    <div className="eyebrow light">{artist.kicker}</div>
                    <h3>{artist.name}</h3>
                    <p>{artist.headline}</p>
                    <span className="soundArrow">Follow to {artist.journey.place.name} ↗</span>
                  </div>
                </Link>
                <SaveButton compact item={{ id: `sound-${artist.slug}`, type: 'sound', title: artist.name, subtitle: artist.musicType, href: `/music/${artist.slug}` }} />
              </article>
            ))}
          </div>
        </section>

        <section className="section shell journeySection">
          <div className="sectionHead">
            <div><p className="eyebrow">How IndoEthno works</p><h2>A clear path from sound to travel intent.</h2></div>
          </div>
          <div className="journeySteps">
            <div><span>01 · Sound</span><strong>Hear</strong><p>Choose a local sound or artist that makes the place worth noticing.</p></div>
            <div><span>02 · Place → Culture</span><strong>Follow</strong><p>Let the music lead into a real setting, then widen the story into culture and what sits around it.</p></div>
            <div><span>03 · Travel intent</span><strong>Act</strong><p>Save what matters, review stays, or express interest in a group experience.</p></div>
          </div>
        </section>

        <section className="section shell">
          <div className="destinationFeature">
            <div className="destinationCopy">
              <p className="eyebrow light">Follow the sound</p>
              <h2>Yogyakarta,<br />beyond the obvious.</h2>
              <p>Once the music has opened the door, the city starts to connect differently: court culture, museums, contemporary art, food, neighborhoods and detours become chapters of the same trip.</p>
              <div className="categoryLine"><span>Culture</span><span>Food</span><span>Nature</span><span>Events</span><span>Stay</span></div>
              <Link className="btn lightBtn" href="/destination/yogyakarta">Explore the destination</Link>
            </div>
            <div className="destinationTiles">
              {culturalContext.map((item) => (
                <article className="destinationTile" key={item.id}>
                  <span className="miniLabel">{item.category}</span>
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="sectionHead">
            <div><p className="eyebrow">Destination-wide</p><h2>Worth a detour</h2></div>
            <p>Some places deserve their own half-day or evening. They sit outside the immediate Ngasem cluster, but can reshape the trip.</p>
          </div>
          <div className="grid3 editorialGrid">
            {detours.map((item, index) => (
              <article className="editorialCard" key={item.id}>
                <div className="editorialNumber">0{index + 1}</div>
                <div className="meta">{item.category}</div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
                <div className="cardActions">
                  <SaveButton compact item={{ id: item.id, type: 'detour', title: item.name, subtitle: item.category, href: '/destination/yogyakarta#detours' }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell groupExperienceFeature">
          <div>
            <p className="eyebrow light">For groups · future revenue layer</p>
            <h2>What if the music<br />could happen for your group?</h2>
          </div>
          <div>
            <p>Some performances may be arranged in advance when artists or communities explicitly confirm availability. The pilot measures interest first—no instant booking, no false promise.</p>
            <Link className="btn lightBtn" href="/request-experience">Request group experience</Link>
          </div>
        </section>
      </main>

      <div className="planbar"><span><strong>Build your Yogyakarta trip</strong><small>Saved locally · no login</small></span><Link className="btn" href="/plan">Open trip</Link></div>
      <footer className="shell footer"><span>IndoEthno pilot · noindex</span><span>Original editorial · research stays behind the story</span></footer>
    </>
  );
}
