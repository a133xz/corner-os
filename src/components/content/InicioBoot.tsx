import { useEffect } from 'react'
import '../../styles/inicio-boot.css'

const BOOT_DURATION_MS = 2500

interface InicioBootProps {
  onComplete: () => void
}

export function InicioBoot({ onComplete }: InicioBootProps) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduced ? 0 : BOOT_DURATION_MS
    const timer = window.setTimeout(onComplete, duration)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="inicio-boot" aria-hidden="true">
      <div className="inicio-boot__backdrop" />
      <div className="inicio-boot__scanlines" />

      <div className="inicio-boot__panel">
        <p className="inicio-boot__brand">corner-os</p>
        <div className="inicio-boot__log">
          <p className="inicio-boot__line inicio-boot__line--1">&gt; inicializando sistema</p>
          <p className="inicio-boot__line inicio-boot__line--2">&gt; montando escritorio</p>
          <p className="inicio-boot__line inicio-boot__line--3">&gt; abriendo inicio.app</p>
          <p className="inicio-boot__line inicio-boot__line--ok">listo</p>
        </div>
        <div className="inicio-boot__bar" aria-hidden="true">
          <span className="inicio-boot__bar-fill" />
        </div>
      </div>
    </div>
  )
}
