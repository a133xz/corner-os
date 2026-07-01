const enfoques = [
  { title: 'Innovación aplicada', desc: 'Tecnologías emergentes con metodologías probadas' },
  { title: 'Educación tecnológica', desc: 'Formación de equipos para sostenibilidad a largo plazo' },
  { title: 'Impacto medible', desc: 'Resultados cuantificables con KPIs específicos' },
]

export function NosotrosContent() {
  return (
    <div className="window-nosotros">
      <h2>Nosotros</h2>
      <p className="subtitle">
        En CORNER ESTUDIOS combinamos expertise tecnológico con metodologías educativas innovadoras para acelerar la transformación digital de las empresas.
      </p>

      <div className="mision-vision">
        <div className="mv-card">
          <h3>Nuestra misión</h3>
          <p>Transformar organizaciones mediante tecnología estratégica y formación especializada, creando capacidades internas para el futuro digital.</p>
        </div>
        <div className="mv-card">
          <h3>Nuestra visión</h3>
          <p>Liderar la convergencia entre tecnología y educación empresarial, generando organizaciones resilientes y preparadas para el futuro.</p>
        </div>
      </div>

      <h3 className="section-heading">Nuestro enfoque diferencial</h3>
      <div className="enfoque-grid">
        {enfoques.map((e) => (
          <div key={e.title} className="enfoque-card">
            <h4>{e.title}</h4>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
