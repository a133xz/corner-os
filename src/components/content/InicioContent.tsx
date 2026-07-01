import '../../styles/inicio-hero.css'

export function InicioContent() {
  return (
    <div className="inicio-hero window-hero window-hero--centered inicio-hero--splash">
      <div className="inicio-headline">
        <div className="inicio-hero-fx" aria-hidden="true">
          <div className="inicio-hero-glow" />
          <div className="inicio-hero-ring inicio-hero-ring--1" />
          <div className="inicio-hero-ring inicio-hero-ring--2" />
        </div>

        <p className="inicio-eyebrow">Consultoría digital · tecnología</p>

        <h1 className="inicio-title">
          <span className="inicio-title-line">CORNER</span>
          <span className="inicio-title-line inicio-title-line--accent">ESTUDIOS</span>
        </h1>
      </div>

      <p className="subtitle subtitle--large inicio-subtitle">
        Consultoría digital y tecnológica que transforma ideas en soluciones innovadoras que impulsan el crecimiento de tu negocio.
      </p>

      <a
        href="mailto:contacto@corner-estudios.com?subject=Agenda%20una%20llamada"
        className="btn btn-primary inicio-cta"
      >
        Agenda una llamada
      </a>
    </div>
  )
}
