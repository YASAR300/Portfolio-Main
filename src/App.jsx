import { useEffect, useState } from 'react';
import './App.css';

const NEW_URL = 'https://yasar-khan.vercel.app/';

export default function App() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Show message briefly then redirect
    const t = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => { window.location.href = NEW_URL; }, 400);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  function handleGo() {
    setLeaving(true);
    setTimeout(() => { window.location.href = NEW_URL; }, 300);
  }

  return (
    <div className={`redirect-root ${leaving ? 'leaving' : ''}`}>
      <div className="noise" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="grid-bg" />

      <div className="card">
        <div className="badge">
          <span className="badge-dot" />
          Portfolio Moved
        </div>

        <h1 className="heading">
          I've moved<br />
          <span className="heading-accent">to a new home.</span>
        </h1>

        <p className="subtext">
          This portfolio is no longer maintained.<br />
          Redirecting you automatically…
        </p>

        <div className="url-pill">
          <span className="url-dot" />
          <span className="url-text">yasar-khan.vercel.app</span>
        </div>

        <button className="cta-btn" onClick={handleGo}>
          <span>Visit Now</span>
          <svg className="arrow" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="footer-note">© Yasar Khan · {new Date().getFullYear()}</p>
    </div>
  );
}
