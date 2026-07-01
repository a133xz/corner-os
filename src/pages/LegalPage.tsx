import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { legalDocuments, type LegalSlug } from '../content/legal'
import BottomNav from '../components/BottomNav'
import '../styles/legal.css'
import '../styles/bottom-nav.css'

interface LegalPageProps {
  slug: LegalSlug
}

export default function LegalPage({ slug }: LegalPageProps) {
  const doc = legalDocuments[slug]

  return (
    <div className="legal-page page-with-bottom-nav">
      <div className="legal-bg-shape legal-shape-1" />
      <div className="legal-bg-shape legal-shape-2" />

      <nav className="legal-nav">
        <div className="container legal-nav-inner">
          <Link to="/" className="legal-nav-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver al escritorio
          </Link>
          <span className="legal-nav-brand">Corner Estudios</span>
        </div>
      </nav>

      <main className="container legal-main">
        <header className="legal-header">
          <h1>{doc.title}</h1>
          <p className="legal-updated">Última actualización: {doc.updated}</p>
        </header>

        <div className="legal-body">
          {doc.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]} className="legal-section">
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
