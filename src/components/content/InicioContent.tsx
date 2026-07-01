import '../../styles/inicio-hero.css'
import { InicioBg } from './InicioBg'

const CORNER = 'CORNER'
const ESTUDIOS = 'ESTUDIOS'

function TitleLetters({
  word,
  accent = false,
  mobile = false,
}: {
  word: string
  accent?: boolean
  mobile?: boolean
}) {
  const offset = accent ? CORNER.length : 0
  const base = mobile ? 0.08 : 0.12
  const step = mobile ? 0.035 : 0.045

  return (
    <>
      {word.split('').map((char, i) => {
        const delay = base + (offset + i) * step
        return (
          <span
            key={`${word}-${i}`}
            className={`inicio-char${accent ? ' inicio-char--accent' : ''}`}
            style={{ animationDelay: `${delay}s` }}
          >
            {char}
          </span>
        )
      })}
    </>
  )
}

export function InicioContent() {
  return (
    <div className="inicio-hero window-hero window-hero--centered inicio-hero--splash">
      <InicioBg />
      <div className="inicio-mobile-bg" aria-hidden="true" />

      <div className="inicio-stack">
        <div className="inicio-headline">
          <p className="inicio-eyebrow inicio-reveal">Consultoría digital · tecnología</p>

          <h1 className="inicio-title">
            <span className="inicio-title-line" aria-label={CORNER}>
              <span className="inicio-title-desktop" aria-hidden="true">
                <TitleLetters word={CORNER} />
              </span>
              <span className="inicio-title-mobile" aria-hidden="true">
                <TitleLetters word={CORNER} mobile />
              </span>
            </span>
            <span className="inicio-title-line inicio-title-line--accent" aria-label={ESTUDIOS}>
              <span className="inicio-title-desktop" aria-hidden="true">
                <TitleLetters word={ESTUDIOS} accent />
              </span>
              <span className="inicio-title-mobile" aria-hidden="true">
                <TitleLetters word={ESTUDIOS} accent mobile />
              </span>
            </span>
          </h1>
        </div>

        <p className="subtitle subtitle--large inicio-subtitle inicio-reveal inicio-reveal--4">
          Consultoría digital y tecnológica que transforma ideas en soluciones innovadoras que impulsan el crecimiento de tu negocio.
        </p>

        <a
          href="mailto:contacto@corner-estudios.com?subject=Agenda%20una%20llamada"
          className="btn btn-primary inicio-cta inicio-reveal inicio-reveal--5"
        >
          Agenda una llamada
        </a>
      </div>
    </div>
  )
}
