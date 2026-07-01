import { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

interface Candidate {
  id: string;
  display: string;
  safe: boolean;
  hint: string;
  codepoints: string[];
}

const ALLOWED = 'admin';

const candidates: Candidate[] = [
  {
    id: 'a',
    display: 'admin',
    safe: true,
    hint: 'ASCII puro — los 5 codepoints latinos básicos.',
    codepoints: [...'admin'].map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`),
  },
  {
    id: 'b',
    display: 'аdmin',
    safe: false,
    hint: 'Homoglyph: la primera «a» es cirílica U+0430, no latina U+0061.',
    codepoints: ['U+0430', 'U+0064', 'U+006D', 'U+0069', 'U+006E'],
  },
  {
    id: 'c',
    display: 'admin\u200B',
    safe: false,
    hint: 'Zero-Width Space (U+200B) invisible al final — bypass de comparación visual.',
    codepoints: ['U+0061', 'U+0064', 'U+006D', 'U+0069', 'U+006E', 'U+200B'],
  },
  {
    id: 'd',
    display: 'adm\u0131n',
    safe: false,
    hint: 'Turco «ı» (U+0131, dotless i) en lugar de «i» latina — NFC no lo corrige.',
    codepoints: ['U+0061', 'U+0064', 'U+006D', 'U+0131', 'U+006E'],
  },
];

export default function UnicodeBugLab() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => setRevealed(new Set());

  const foundImpostors = candidates.filter((c) => !c.safe && revealed.has(c.id)).length;
  const totalImpostors = candidates.filter((c) => !c.safe).length;

  return (
    <div className="unicode-lab">
      <div className="unicode-lab-prompt">
        <ShieldAlert size={20} />
        <p>
          Solo <code>{ALLOWED}</code> tiene acceso al panel ASIR. Cuatro logins parecen idénticos.
          <strong> Haz click para inspeccionar codepoints y encontrar los impostores.</strong>
        </p>
        {foundImpostors > 0 && (
          <p className="unicode-score">{foundImpostors}/{totalImpostors} impostores detectados</p>
        )}
      </div>

      <div className="unicode-candidates">
        {candidates.map((c) => {
          const isRevealed = revealed.has(c.id);

          return (
            <button
              key={c.id}
              type="button"
              className={`unicode-candidate ${isRevealed ? (c.safe ? 'safe' : 'unsafe') : ''} ${isRevealed ? 'revealed' : ''}`}
              onClick={() => toggle(c.id)}
            >
              <span className="unicode-candidate-label">login attempt</span>
              <span className="unicode-candidate-text">{c.display}</span>
              <span className="unicode-candidate-len">length: {c.display.length}</span>
              {isRevealed && (
                <>
                  <div className="unicode-codepoints">
                    {c.codepoints.map((cp, i) => (
                      <span key={i} className={`unicode-cp ${!c.safe && i < c.codepoints.length ? 'warn' : ''}`}>
                        {cp}
                      </span>
                    ))}
                  </div>
                  <span className="unicode-verdict">
                    {c.safe ? <><CheckCircle2 size={16} /> Acceso legítimo</> : <><XCircle size={16} /> Impostor</>}
                  </span>
                  <p className="unicode-hint">{c.hint}</p>
                </>
              )}
            </button>
          );
        })}
      </div>

      {revealed.size > 0 && (
        <button type="button" className="unicode-reset" onClick={reset}>Reiniciar reto</button>
      )}

      <div className="unicode-compare">
        <div className="unicode-compare-row">
          <span>Visual</span>
          <code>admin</code>
          <code>аdmin</code>
        </div>
        <div className="unicode-compare-row">
          <span>===</span>
          <code className="false">false</code>
          <span className="unicode-compare-note">mismo aspecto, distinto Unicode</span>
        </div>
      </div>
    </div>
  );
}
