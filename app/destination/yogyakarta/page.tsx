import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { SaveButton } from '@/components/SaveButton';
import { aroundHere, culturalContext, detours, stayExamples } from '@/lib/data';
import { AROUND_HERE_MAX_DISTANCE_KM, aroundHereAnchor, getAroundHereWithDistance } from '@/lib/geo';
import { isPilot } from '@/lib/site';

export default function YogyakartaPage() {
  if (!isPilot) notFound();

  const aroundHereWithDistance = getAroundHereWithDistance(aroundHere);

  return (
    <>
      <Nav />
      <main>
        <div className="shell heroShell">
          <section className="destinationHero">
            <div><p className="eyebrow light">Destination · Yogyakarta</p><h1>Hear the city.<br />Stay for the rest.</h1><p className="lede">The music gets you through the door. What follows is a city of court culture, neighborhood food, contemporary art, old lanes, performance and detours worth making time for.</p></div>
            <div className="destinationFact"><span>Journey step · Place</span><strong>Yogyakarta</strong><p>Next: Culture → Around Here → Worth a Detour → Travel intent.</p></div>
          </section>
        </div>

        <div className="shell">
          <section className="section" id="culture">
            <div className="sectionHead"><div><p className="eyebrow">Culture</p><h2>Read the city beneath the surface</h2></div><p>Three different doors into Yogyakarta: court heritage, performing traditions and a contemporary arts scene that keeps rewriting the city.</p></div>
            <div className="grid3 editorialGrid">
              {culturalContext.map((x)=><article className="editorialCard" key={x.id}><div className="meta">{x.category}</div><h3>{x.name}</h3><p>{x.blurb}</p><div className="cardActions"><SaveButton compact item={{ id: x.id, type:'culture', title:x.name, subtitle:x.category, href:'/destination/yogyakarta#culture' }} /></div></article>)}
            </div>
          </section>

          <section className="section" id="around">
            <div className="sectionHead">
              <div><p className="eyebrow">Around here</p><h2>Start close to {aroundHereAnchor.name}</h2></div>
              <p>These places sit within {AROUND_HERE_MAX_DISTANCE_KM.toFixed(1)} km in straight-line distance from the Ngasem festival ground. It is a simple way to keep the first part of the journey compact without pretending that straight-line distance equals walking or driving time.</p>
            </div>
            <div className="grid3 placeGrid">
              {aroundHereWithDistance.map((x)=><article className="placeCard" key={x.id}><div className="placeMarker">{x.category.slice(0,1)}</div><div><div className="meta">{x.category} · {x.area} · ≈{x.distanceKm.toFixed(1)} km straight-line</div><h3>{x.name}</h3><p>{x.note}</p><div className="cardActions"><SaveButton compact item={{ id:x.id, type:'place', title:x.name, subtitle:`${x.category} · ≈${x.distanceKm.toFixed(1)} km from ${aroundHereAnchor.name}`, href:'/destination/yogyakarta#around' }} /></div></div></article>)}
            </div>
          </section>

          <section className="section" id="detours">
            <div className="sectionHead"><div><p className="eyebrow">Worth a detour</p><h2>When the trip wants to go further</h2></div><p>These are not “nearby” add-ons. Each one asks for more time, and that is exactly why it can become a memorable chapter of the trip.</p></div>
            <div className="grid3 editorialGrid">{detours.map((x, index)=><article className="editorialCard" key={x.id}><div className="editorialNumber">0{index+1}</div><div className="meta">{x.category}</div><h3>{x.name}</h3><p>{x.note}</p><div className="cardActions"><SaveButton compact item={{ id:x.id, type:'detour', title:x.name, subtitle:x.category, href:'/destination/yogyakarta#detours' }} /></div></article>)}</div>
          </section>

          <section className="section staySection" id="stay">
            <div className="sectionHead"><div><p className="eyebrow">Travel intent · Stay</p><h2>Choose a base that fits the story</h2></div><p>Once the route starts to feel real, the stay becomes part of the decision. These are real properties selected for their relationship to the wider Yogyakarta journey; live price and availability are not implied.</p></div>
            <div className="stayGrid">{stayExamples.map((x, index)=><article className="stayCard" key={x.id}><div className={`stayVisual stayVisual${index+1}`}><span>{x.type}</span></div><div className="stayBody"><div className="meta">{x.area}</div><h3>{x.name}</h3><p>{x.why}</p><div className="stayStatus">{x.status}</div><div className="cardActions"><a className="textLink" href={x.url} target="_blank" rel="noreferrer">Visit property site ↗</a><SaveButton compact item={{ id:x.id, type:'stay', title:x.name, subtitle:`${x.type} · ${x.area}`, href:'/destination/yogyakarta#stay' }} /></div></div></article>)}</div>
          </section>
        </div>
      </main>
      <div className="planbar"><span><strong>Choose what this interest becomes</strong><small>Save ideas · review stays · no account required</small></span><Link className="btn" href="/plan">Open trip</Link></div>
      <footer className="shell footer"><span>Yogyakarta pilot</span><span>Sound → Place → Culture → Around Here → Worth a Detour → Travel intent</span></footer>
    </>
  );
}
