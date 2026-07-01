import type { ReactNode } from 'react'
import { ServiciosContent } from '../components/content/ServiciosContent'
import { NosotrosContent } from '../components/content/NosotrosContent'
import { ProyectosContent } from '../components/content/ProyectosContent'
import { ContactoContent } from '../components/content/ContactoContent'

export interface AppDefinition {
  id: string
  title: string
  icon: string
  content?: ReactNode
  externalRoute?: string
}

export const apps: AppDefinition[] = [
  { id: 'inicio', title: 'Inicio', icon: '🏠' },
  { id: 'servicios', title: 'Servicios', icon: '⚙️', content: <ServiciosContent /> },
  { id: 'nosotros', title: 'Nosotros', icon: '👥', content: <NosotrosContent /> },
  { id: 'proyectos', title: 'Proyectos', icon: '📁', content: <ProyectosContent /> },
  { id: 'lab', title: 'Lab', icon: '🧪', content: null, externalRoute: '/lab' },
  { id: 'contacto', title: 'Contacto', icon: '✉️', content: <ContactoContent /> },
]

export const initialOpenApps = ['inicio']
