import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/aviso-legal', label: 'Aviso Legal' },
  { to: '/privacidad', label: 'Privacidad' },
  { to: '/terminos', label: 'Términos' },
] as const

interface BottomNavProps {
  variant?: 'taskbar' | 'bar'
}

export default function BottomNav({ variant = 'bar' }: BottomNavProps) {
  const { pathname } = useLocation()

  return (
    <nav className={`bottom-nav bottom-nav--${variant}`} aria-label="Enlaces legales">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={pathname === link.to ? 'bottom-nav-link active' : 'bottom-nav-link'}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
