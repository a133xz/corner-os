export function InicioMobileDraw() {
  return (
    <div className="inicio-mobile-draw" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="inicio-draw-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="inicio-draw-frame">
          <path className="inicio-draw-path inicio-draw-path--tl" pathLength="1" d="M 7 44 L 7 7 L 44 7" />
          <path className="inicio-draw-path inicio-draw-path--tr" pathLength="1" d="M 56 7 L 93 7 L 93 44" />
          <path className="inicio-draw-path inicio-draw-path--bl" pathLength="1" d="M 7 56 L 7 93 L 44 93" />
          <path className="inicio-draw-path inicio-draw-path--br" pathLength="1" d="M 56 93 L 93 93 L 93 56" />
        </g>

        <g className="inicio-draw-sparks" filter="url(#inicio-draw-glow)">
          <path className="inicio-draw-spark inicio-draw-spark--tl" pathLength="1" d="M 7 44 L 7 7 L 44 7" />
          <path className="inicio-draw-spark inicio-draw-spark--tr" pathLength="1" d="M 56 7 L 93 7 L 93 44" />
          <path className="inicio-draw-spark inicio-draw-spark--bl" pathLength="1" d="M 7 56 L 7 93 L 44 93" />
          <path className="inicio-draw-spark inicio-draw-spark--br" pathLength="1" d="M 56 93 L 93 93 L 93 56" />
        </g>

        <path
          className="inicio-draw-path inicio-draw-path--flow"
          pathLength="1"
          d="M 16 28 C 34 42, 48 58, 78 74"
        />
      </svg>
    </div>
  )
}
