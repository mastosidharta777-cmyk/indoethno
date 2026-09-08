export function ComingSoon() {
  return (
    <main className="coming">
      <div className="comingGrain" />
      <div className="shell comingNav"><div className="brand">INDOETHNO</div><span>Indonesia · Coming soon</span></div>
      <div className="shell panel">
        <p className="eyebrow light">Music · Culture · Travel</p>
        <h1>Music brings<br />you further.</h1>
        <p className="lede">Discover the sound of a place, then follow it into culture, food, nature, people and journeys worth making.</p>
        <form className="signup">
          <input aria-label="Email" type="email" placeholder="Your email" />
          <button className="btn dark" type="button">Notify me</button>
        </form>
        <div className="comingTags"><span>Traditional</span><span>Contemporary</span><span>Evolving</span><span>Rooted here</span></div>
      </div>
      <div className="shell comingFooter"><span>Same roots. New journeys.</span><span>IndoEthno © 2026</span></div>
    </main>
  );
}
