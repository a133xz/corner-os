import '../../styles/inicio-hero.css'

export function InicioContent() {
  return (
    <div className="inicio-hero window-hero window-hero--centered inicio-hero--splash">
      <div className="inicio-headline">
        <p className="inicio-eyebrow inicio-reveal">Consultoría digital · tecnología</p>

        <h1 className="inicio-title">
          <span className="inicio-title-line inicio-reveal inicio-reveal--2">CORNER</span>
          <span className="inicio-title-line inicio-reveal inicio-reveal--3">
            <span className="inicio-title-accent">ESTUDIOS</span>
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
  )
}
