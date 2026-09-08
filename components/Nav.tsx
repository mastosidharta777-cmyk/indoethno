import Link from 'next/link';
import { SavedCountLink } from './SavedCountLink';

export function Nav() {
  return (
    <header className="navShell">
      <div className="shell nav">
        <Link className="brand" href="/">INDOETHNO</Link>
        <nav className="navlinks" aria-label="Primary navigation">
          <Link href="/#sounds">Sounds</Link>
          <Link href="/destination/yogyakarta">Yogyakarta</Link>
          <SavedCountLink />
        </nav>
        <Link className="mobileTrip" href="/plan" aria-label="Open saved trip">Trip</Link>
      </div>
    </header>
  );
}
