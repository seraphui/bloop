import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/h82l5HoOuZNRipnw/scene.splinecode"
      />

      <nav className="navbar">
        <div className="nav-buttons">
          <a
            href="https://x.com/itsabloop_"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            X
          </a>
          <Link href="/buy" className="nav-btn">
            BUY
          </Link>
          <Link href="/create" className="nav-btn nav-btn-primary">
            MAKE YOUR OWN BLOOP
          </Link>
        </div>
      </nav>
    </main>
  );
}
