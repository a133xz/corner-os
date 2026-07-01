export interface LegalSection {
  heading?: string
  paragraphs: string[]
}

export interface LegalDocument {
  title: string
  updated: string
  sections: LegalSection[]
}

export const legalDocuments: Record<string, LegalDocument> = {
  'aviso-legal': {
    title: 'Aviso Legal',
    updated: '1 de julio de 2026',
    sections: [
      {
        heading: '1. Datos identificativos',
        paragraphs: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es Corner Estudios.',
          'Correo electrónico de contacto: contacto@corner-estudios.com',
          'Actividad: consultoría digital y tecnológica, desarrollo de software y formación especializada.',
        ],
      },
      {
        heading: '2. Objeto',
        paragraphs: [
          'El presente aviso legal regula el acceso y uso del sitio web de Corner Estudios. La navegación por el sitio atribuye la condición de usuario e implica la aceptación de las condiciones aquí establecidas.',
        ],
      },
      {
        heading: '3. Propiedad intelectual e industrial',
        paragraphs: [
          'Los contenidos de este sitio web — textos, imágenes, diseño, código y demás elementos — son propiedad de Corner Estudios o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.',
        ],
      },
      {
        heading: '4. Responsabilidad',
        paragraphs: [
          'Corner Estudios no se hace responsable de los daños derivados del uso del sitio web, de interrupciones del servicio, virus informáticos o contenidos de sitios enlazados de terceros.',
          'Las demos interactivas del laboratorio son fines demostrativos y no constituyen un servicio contractual.',
        ],
      },
      {
        heading: '5. Legislación aplicable',
        paragraphs: [
          'Las relaciones derivadas del uso de este sitio web se regirán por la legislación española. Para cualquier controversia, las partes se someterán a los juzgados y tribunales que correspondan según la normativa vigente.',
        ],
      },
    ],
  },
  privacidad: {
    title: 'Política de Privacidad',
    updated: '1 de julio de 2026',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        paragraphs: [
          'Responsable: Corner Estudios.',
          'Contacto: contacto@corner-estudios.com',
        ],
      },
      {
        heading: '2. Datos que recopilamos',
        paragraphs: [
          'Este sitio web es principalmente informativo. Podemos tratar datos que nos facilites voluntariamente al contactarnos por correo electrónico (nombre, email y contenido del mensaje).',
          'Asimismo, el sitio puede utilizar cookies técnicas necesarias para su funcionamiento y, en su caso, herramientas de analítica agregada para mejorar la experiencia.',
        ],
      },
      {
        heading: '3. Finalidad y legitimación',
        paragraphs: [
          'Tratamos tus datos para atender consultas, gestionar relaciones comerciales o profesionales y, cuando aplique, enviar comunicaciones relacionadas con los servicios solicitados.',
          'La base legal es el consentimiento del interesado, la ejecución de medidas precontractuales o el interés legítimo en responder a solicitudes recibidas.',
        ],
      },
      {
        heading: '4. Conservación y destinatarios',
        paragraphs: [
          'Los datos se conservarán el tiempo necesario para cumplir la finalidad para la que fueron recabados y las obligaciones legales aplicables.',
          'No cedemos datos a terceros salvo obligación legal o proveedores que actúan como encargados del tratamiento (por ejemplo, hosting o correo).',
        ],
      },
      {
        heading: '5. Derechos',
        paragraphs: [
          'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a contacto@corner-estudios.com, adjuntando copia de un documento identificativo.',
          'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
    ],
  },
  terminos: {
    title: 'Términos y Condiciones',
    updated: '1 de julio de 2026',
    sections: [
      {
        heading: '1. Aceptación',
        paragraphs: [
          'El acceso y uso de este sitio web implica la aceptación de los presentes Términos y Condiciones. Si no estás de acuerdo, te rogamos que no utilices el sitio.',
        ],
      },
      {
        heading: '2. Uso del sitio',
        paragraphs: [
          'Te comprometes a utilizar el sitio de forma lícita, respetuosa y conforme a la buena fe. Queda prohibido cualquier uso que pueda dañar, inutilizar o sobrecargar el sitio o interferir en el uso por parte de otros usuarios.',
          'Las demos del laboratorio son interactivas con fines ilustrativos. No deben utilizarse como herramienta profesional ni para tratar datos personales reales de terceros.',
        ],
      },
      {
        heading: '3. Servicios',
        paragraphs: [
          'La información publicada en Corner Estudios tiene carácter orientativo. Los servicios de consultoría, desarrollo o formación se regirán por propuestas, contratos o acuerdos específicos entre las partes.',
        ],
      },
      {
        heading: '4. Enlaces externos',
        paragraphs: [
          'El sitio puede incluir enlaces a páginas de terceros. Corner Estudios no controla ni asume responsabilidad por el contenido o las políticas de privacidad de dichos sitios.',
        ],
      },
      {
        heading: '5. Modificaciones',
        paragraphs: [
          'Corner Estudios se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio web.',
        ],
      },
      {
        heading: '6. Contacto',
        paragraphs: [
          'Para cualquier consulta sobre estos términos, puedes escribirnos a contacto@corner-estudios.com.',
        ],
      },
    ],
  },
}

export type LegalSlug = keyof typeof legalDocuments
