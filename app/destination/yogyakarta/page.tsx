import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { SaveButton } from '@/components/SaveButton';
import { aroundHere, culturalContext, detours, stayExamples } from '@/lib/data';
import { isPilot } from '@/lib/site';

export default function YogyakartaPage() {
  if (!isPilot) notFound();
  return (
    <>
      <Nav />
      <main>
        <div className="shell heroShell">
          <section className="destinationHero">
            <div><p className="eyebrow light">Destination · Yogyakarta</p><h1>Hear the city.<br />Stay for the rest.</h1><p className="lede">A destination shaped by living music culture, then expanded into heritage, food, experiences, stays and detours.</p></div>
            <div className="destinationFact"><span>Journey step · Place</span><strong>Yogyakarta</strong><p>Next: Culture → Around Here → Worth a Detour → Travel intent.</p></div>
          </section>
        </div>

        <div className="shell">
          <section className="section" id="culture"><div className="sectionHead"><div><p className="eyebrow">Culture</p><h2>Understand the place</h2></div><p>Verified cultural context comes before generic travel inventory.</p></div><div className="grid3 editorialGrid">{culturalContext.map((x)=><article className="editorialCard" key={x.id}><div className="meta">{x.category}</div><h3>{x.name}</h3><p>{x.blurb}</p><div className="cardActions"><a className="textLink" href={x.url} target="_blank" rel="noreferrer">Source ↗</a><SaveButton compact item={{ id: x.id, type:'culture', title:x.name, subtitle:x.category, href:'/destination/yogyakarta#culture' }} /></div></article>)}</div></section>

          <section className="section" id="around"><div className="sectionHead"><div><p className="eyebrow">Around here</p><h2>Near the cultural cluster</h2></div><p>Curated pilot records. Production will calculate accurate distance from stored coordinates before applying a nearby label.</p></div><div className="grid3 placeGrid">{aroundHere.map((x)=><article className="placeCard" key={x.id}><div className="placeMarker">{x.category.slice(0,1)}</div><div><div className="meta">{x.category} · {x.area}</div><h3>{x.name}</h3><p>{x.note}</p><div className="cardActions"><a className="textLink" href={x.url} target="_blank" rel="noreferrer">Verify ↗</a><SaveButton compact item={{ id:x.id, type:'place', title:x.name, subtitle:`${x.category} · ${x.area}`, href:'/destination/yogyakarta#around' }} /></div></div></article>)}</div></section>

          <section className="section" id="detours"><div className="sectionHead"><div><p className="eyebrow">Worth a detour</p><h2>Go further</h2></div><p>Destination-wide ideas stay separate from true nearby results.</p></div><div className="grid3 editorialGrid">{detours.map((x, index)=><article className="editorialCard" key={x.id}><div className="editorialNumber">0{index+1}</div><div className="meta">{x.category}</div><h3>{x.name}</h3><p>{x.note}</p><div className="cardActions"><a className="textLink" href={x.url} target="_blank" rel="noreferrer">Source ↗</a><SaveButton compact item={{ id:x.id, type:'detour', title:x.name, subtitle:x.category, href:'/destination/yogyakarta#detours' }} /></div></article>)}</div></section>

          <section className="section staySection" id="stay"><div className="sectionHead"><div><p className="eyebrow">Travel intent · Stay</p><h2>Turn interest into a trip</h2></div><p>Real properties with direct official links. No affiliate price or live availability is implied until a partner source is connected.</p></div><div className="stayGrid">{stayExamples.map((x, index)=><article className="stayCard" key={x.id}><div className={`stayVisual stayVisual${index+1}`}><span>{x.type}</span></div><div className="stayBody"><div className="meta">{x.area}</div><h3>{x.name}</h3><p>{x.why}</p><div className="stayStatus">{x.status}</div><div className="cardActions"><a className="textLink" href={x.url} target="_blank" rel="noreferrer">Official site ↗</a><SaveButton compact item={{ id:x.id, type:'stay', title:x.name, subtitle:`${x.type} · ${x.area}`, href:'/destination/yogyakarta#stay' }} /></div></div></article>)}</div></section>
        </div>
      </main>
      <div className="planbar"><span><strong>Choose what this interest becomes</strong><small>Save ideas · review stays · no account required</small></span><Link className="btn" href="/plan">Open trip</Link></div>
      <footer className="shell footer"><span>Yogyakarta pilot</span><span>Sound → Place → Culture → Around Here → Worth a Detour → Travel intent</span></footer>
    </>
  );
}
