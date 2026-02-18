import Link from 'next/link';

export default function BuyPage() {
  return (
    <div className="sub-page">
      <nav className="navbar">
        <div className="nav-buttons">
          <Link href="/" className="nav-btn">
            HOME
          </Link>
          <a
            href="https://x.com/itsabloop_"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            X
          </a>
          <Link href="/create" className="nav-btn nav-btn-primary">
            MAKE YOUR OWN BLOOP
          </Link>
        </div>
      </nav>

      <div className="sub-page-content">
        <h1 className="sub-page-title">Buy $BLOOP</h1>
        <p className="sub-page-text">Coming soon — stay tuned!</p>
        <Link href="/" className="nav-btn nav-btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
