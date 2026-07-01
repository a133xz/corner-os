import '../../styles/lab-hero-animation.css';

export default function LabHeroAnimation() {
  return (
    <div className="lab-hero-anim" aria-hidden="true">
      <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lab-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="lab-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <ellipse cx="240" cy="200" rx="190" ry="165" fill="url(#lab-grad-accent)" className="lab-hero-anim__glow" />

        <g className="lab-hero-anim__orbit lab-hero-anim__orbit--outer">
          <circle cx="240" cy="200" r="168" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" strokeDasharray="6 10" />
        </g>
        <g className="lab-hero-anim__orbit lab-hero-anim__orbit--inner">
          <circle cx="240" cy="200" r="118" stroke="rgba(79, 70, 229, 0.25)" strokeWidth="1" strokeDasharray="4 8" />
        </g>

        <g className="lab-hero-anim__terminal">
          <rect x="148" y="138" width="184" height="124" rx="10" fill="rgba(10,10,10,0.9)" stroke="rgba(37,99,235,0.35)" strokeWidth="1.5" />
          <rect x="148" y="138" width="184" height="28" rx="10" fill="url(#lab-grad-blue)" />
          <rect x="148" y="154" width="184" height="12" fill="url(#lab-grad-blue)" />
          <circle cx="164" cy="152" r="4" fill="#ff5f56" fillOpacity="0.9" />
          <circle cx="178" cy="152" r="4" fill="#ffbd2e" fillOpacity="0.9" />
          <circle cx="192" cy="152" r="4" fill="#27c93f" fillOpacity="0.9" />

          <text x="162" y="182" className="lab-hero-anim__code lab-hero-anim__code--1" fill="#a3a3a3">
            &gt; normalize_feed()
          </text>
          <text x="162" y="204" className="lab-hero-anim__code lab-hero-anim__code--2" fill="#22c55e">
            OK precio valido
          </text>
          <text x="162" y="226" className="lab-hero-anim__code lab-hero-anim__code--3" fill="#a3a3a3">
            &gt; validate_sku()
          </text>
          <text x="162" y="248" className="lab-hero-anim__code lab-hero-anim__code--4" fill="#60a5fa">
            ... 847 filas
          </text>

          <rect x="248" y="238" width="2" height="14" rx="1" fill="#60a5fa" className="lab-hero-anim__cursor" />
        </g>
      </svg>
    </div>
  );
}
