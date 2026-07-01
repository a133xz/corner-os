const servicios = [
  {
    num: '01',
    title: 'Consultoría tecnológica',
    desc: 'Te ayudamos a elegir e implementar las tecnologías que realmente impulsarán tu negocio.',
    items: ['Arquitectura de sistemas escalables', 'Migración a la nube', 'AI integration', 'Optimización de procesos'],
  },
  {
    num: '02',
    title: 'Estrategia digital',
    desc: 'Diseñamos roadmaps digitales personalizados que maximizan tu ROI y aceleran tu crecimiento online.',
    items: ['Análisis de mercado y competencia', 'Definición de KPIs y métricas clave', 'Plan de marketing digital 360°', 'Desarrollo de Pitch para inversores'],
  },
  {
    num: '03',
    title: 'Transformación digital',
    desc: 'Acompañamos tu empresa en cada paso hacia la digitalización completa y sostenible.',
    items: ['Automatización de procesos', 'Capacitación de equipos', 'Change management', 'Educación en nuevas herramientas'],
  },
  {
    num: '04',
    title: 'Desarrollo e innovación',
    desc: 'Creamos productos digitales únicos: desde websites hasta aplicaciones complejas, incluyendo mobile apps.',
    items: ['Desarrollo web y móvil', 'APIs y microservicios', 'CI/CD integration', 'Prototipado y MVP'],
  },
]

export function ServiciosContent() {
  return (
    <div className="window-servicios">
      <h2>¿Cómo te ayudamos?</h2>
      <p className="subtitle">
        Nos gusta trabajar con empresas pequeñas y medianas ya que nos especializamos en lanzamiento y escalada de empresas e ideas.
      </p>
      <div className="servicios-grid">
        {servicios.map((s) => (
          <div key={s.num} className="servicio-card">
            <div className="num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
