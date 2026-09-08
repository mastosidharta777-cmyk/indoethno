import './ComingSoon.css';

export function ComingSoon() {
  return (
    <main className="coming comingEditorial">
      <div className="comingPhoto" aria-hidden="true" />
      <div className="comingShade" aria-hidden="true" />
      <div className="comingGrain" aria-hidden="true" />

      <header className="shell comingTopbar">
        <div className="comingBrandBlock">
          <div className="brand comingBrand"><span>Indo</span><b>Ethno</b></div>
          <div className="comingTagline">Music · People · Places · A Deeper Indonesia</div>
        </div>
        <nav className="comingNavLinks" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#join">Be Part of It</a>
          <a className="comingNotifyMini" href="#join">✉ <span>Notify Me</span></a>
        </nav>
      </header>

      <section id="home" className="shell comingHeroGrid">
        <div className="comingHeroCopy">
          <h1>Music<br />Brings You<br /><em>Further</em></h1>
          <p className="comingIntro">
            IndoEthno connects music, culture and travel across Indonesia — helping you discover real places,
            real people and deeper stories behind the sound.
          </p>
          <div className="comingLaunch">Coming Soon</div>
          <div id="join" className="comingSignupBlock">
            <p>Be the first to know when we launch.</p>
            <form className="signup comingSignup">
              <input aria-label="Email address" type="email" placeholder="Your email address" />
              <button aria-label="Notify me" type="button">→</button>
            </form>
            <label className="comingConsent">
              <input type="checkbox" />
              <span>I’m interested in travel, culture and music updates from IndoEthno.</span>
            </label>
          </div>
        </div>

        <div className="comingRightRail" aria-hidden="true">
          <div className="comingScript">Same<br />Roots<br /><span>New Journeys</span></div>
          <div className="comingLocation">⌖ <span>Borobudur<br />Central Java</span></div>
        </div>
      </section>

      <section id="about" className="comingFeatureBand">
        <div className="shell comingFeatures">
          <div className="comingFeature"><span className="comingFeatureIcon">♪</span><strong>Music</strong><small>Explore artists<br />and their stories</small></div>
          <div className="comingFeature"><span className="comingFeatureIcon">⌖</span><strong>Places</strong><small>Discover destinations<br />through music</small></div>
          <div className="comingFeature"><span className="comingFeatureIcon">⌂</span><strong>Culture</strong><small>Meet living<br />traditions</small></div>
          <div className="comingFeature"><span className="comingFeatureIcon">✧</span><strong>Travel</strong><small>Plan meaningful<br />journeys</small></div>
          <div className="comingFeature"><span className="comingFeatureIcon">◎</span><strong>People</strong><small>Support local<br />communities</small></div>
          <div className="comingFeatureStatement"><span>A more meaningful<br />way to explore<br />Indonesia</span><b>IndoEthno</b></div>
        </div>
      </section>

      <footer className="shell comingFooter comingFooterEditorial">
        <span>© 2026 IndoEthno. All rights reserved.</span>
        <span>Privacy · Terms · Contact</span>
      </footer>
    </main>
  );
}
