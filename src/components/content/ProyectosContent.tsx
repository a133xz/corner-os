const proyectos = [
  {
    tag: 'iOS & Android App',
    title: 'Showboat',
    desc: 'Aplicación móvil para coleccionistas de camisetas. Desarrollo de la arquitectura de la app, diseño y código.',
    techs: ['React Native', 'PostgreSQL', 'Stripe'],
    impacto: '+1K usuarios (beta)',
  },
  {
    tag: 'Data tools',
    title: 'Educación',
    desc: 'Optimización y desarrollo de scripts, web apps y base de datos para una empresa en el sector educativo.',
    techs: ['Python', 'OpenAI', 'Docker'],
    impacto: '+200h ahorradas',
  },
  {
    tag: 'Web Application',
    title: 'Arquitasa',
    desc: 'Desarrollo de múltiples herramientas para ayudar a la empresa a comunicarse con sus clientes.',
    techs: ['Firebase', 'Python', 'AWS'],
    impacto: '+150% crecimiento en clientes',
  },
  {
    tag: 'Website',
    title: 'casa nueve',
    desc: 'Implementación y desarrollo de la web de casa nueve, la casa de artistas y proyectos creativos.',
    techs: ['bigcartel', 'vanilla js'],
    impacto: '+200% engagement en redes',
  },
  {
    tag: 'Website',
    title: 'Cruz Arquitectura',
    desc: 'Website para una empresa de arquitectura donde había una carga amplia de fotos y una performance por encima de la media.',
    techs: ['React', 'Next.js'],
    impacto: '+300% engagement en redes',
  },
  {
    tag: 'Tool',
    title: 'HEIC converter',
    desc: 'Herramienta de escritorio para convertir fotos en HEIC a PNG.',
    techs: ['Electron', 'Vue'],
    impacto: 'Featured in Product Hunt',
  },
]

export function ProyectosContent() {
  return (
    <div className="window-proyectos">
      <h2>Últimos proyectos</h2>
      <p className="subtitle">
        En Corner Estudios priorizamos proyectos diferentes dónde podemos tener un impacto. Aquí puedes ver una selección variada de proyectos recientes.
      </p>
      <div className="proyectos-grid">
        {proyectos.map((p) => (
          <div key={p.title} className="proyecto-card">
            <span className="tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="techs">
              {p.techs.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="impacto">
              Impacto: <strong>{p.impacto}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
