import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import DataSimulator from '../components/lab/DataSimulator'
import ChatDemo from '../components/lab/ChatDemo'
import UnicodeBugLab from '../components/lab/UnicodeBugLab'
import HotelManagerDemo from '../components/lab/HotelManagerDemo'
import LabHeroAnimation from '../components/lab/LabHeroAnimation'
import '../styles/lab.css'

const sections = [
  {
    id: 'lab-chat',
    tag: 'demo · chat',
    title: 'Chat',
    desc: 'Mensajería de equipo con canales.',
  },
  {
    id: 'lab-hotel',
    tag: 'desarrollo · react',
    title: 'StayDesk',
    desc: 'Panel de gestión de hoteles y habitaciones.',
  },
  {
    id: 'lab-unicode',
    tag: 'ciberseguridad',
    title: 'Unicode Trap',
    desc: 'Homoglyphs y caracteres invisibles — find the bug.',
  },
  {
    id: 'lab-catalog',
    tag: 'consultoría · python',
    title: 'Feed Cleaner',
    desc: 'Limpieza de catálogo: productos, precios y SKUs.',
  },
]

const marqueeItems = ['Chat', 'React', 'Python', 'Next.js', 'Docker', 'TypeScript', 'StayDesk', 'Feed Cleaner']

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ block: 'start' })
}

export default function LabPage() {
  return (
    <div className="lab-page">
      <div className="lab-bg-shape lab-shape-1" />
      <div className="lab-bg-shape lab-shape-2" />
      <div className="lab-bg-shape lab-shape-3" />

      <nav className="lab-nav">
        <div className="container lab-nav-inner">
          <Link to="/" className="lab-nav-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver al escritorio
          </Link>
          <span className="lab-nav-brand">Corner Estudios · Lab</span>
        </div>
      </nav>

      <section className="lab-hero">
        <div className="container lab-hero-grid">
          <div className="lab-hero-content">
            <h1 className="lab-hero-title">Nuestro lab,<br />donde exploramos en serio</h1>
            <p className="lab-hero-desc">
              Prototipos web, automatización con Python y retos de ciberseguridad — demos interactivas para que las pruebes tú mismo.
            </p>
          </div>
          <div className="lab-hero-visual">
            <LabHeroAnimation />
          </div>
        </div>
      </section>

      <div className="lab-marquee" aria-hidden="true">
        <div className="lab-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="lab-index">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className="lab-index-card"
              onClick={() => scrollTo(s.id)}
            >
              <span className="lab-card-tag">{s.tag}</span>
              <h2 className="lab-index-title">{s.title}</h2>
              <p className="lab-card-desc">{s.desc}</p>
              <span className="lab-index-arrow">↓</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lab-stack">
        <section id="lab-chat" className="lab-block">
          <div className="container lab-block-inner">
            <div className="lab-block-header">
              <span className="lab-block-tag">01 · chat</span>
              <h2 className="lab-block-title">Chat</h2>
              <p className="lab-block-desc">
                Demo de mensajería — cambia de canal y envía mensajes.
              </p>
            </div>
            <div className="lab-demo-stage">
              <div className="lab-demo-chat lab-demo-limited">
                <ChatDemo />
              </div>
            </div>
          </div>
        </section>

        <section id="lab-hotel" className="lab-block">
          <div className="container lab-block-inner">
            <div className="lab-block-header">
              <span className="lab-block-tag">02 · desarrollo web</span>
              <h2 className="lab-block-title">StayDesk — gestión hotelera</h2>
              <p className="lab-block-desc">
                Panel React con datos simulados: filtra habitaciones, consulta el detalle o haz check-in.
              </p>
            </div>
            <div className="lab-demo-stage">
              <div className="lab-demo-limited">
                <HotelManagerDemo />
              </div>
            </div>
          </div>
        </section>

        <section id="lab-unicode" className="lab-block">
          <div className="container lab-block-inner">
            <div className="lab-block-header">
              <span className="lab-block-tag">03 · ciberseguridad</span>
              <h2 className="lab-block-title">Unicode Trap</h2>
              <p className="lab-block-desc">
                Cuatro logins que parecen iguales. Inspecciona codepoints y encuentra los impostores.
              </p>
            </div>
            <div className="lab-demo-stage">
              <div className="lab-demo-limited">
                <UnicodeBugLab />
              </div>
            </div>
          </div>
        </section>

        <section id="lab-catalog" className="lab-block">
          <div className="container lab-block-inner">
            <div className="lab-block-header">
              <span className="lab-block-tag">04 · automatización</span>
              <h2 className="lab-block-title">Feed Cleaner</h2>
              <p className="lab-block-desc">
                Un pipeline Python que limpia volcados de catálogo: normaliza nombres de producto, valida precios y corrige SKUs antes de importar a tu tienda.
              </p>
            </div>
            <DataSimulator />
          </div>
        </section>
      </div>

      <footer className="lab-footer">
        <div className="container">
          <Link to="/" className="lab-back">← Volver al escritorio</Link>
        </div>
      </footer>
    </div>
  )
}
