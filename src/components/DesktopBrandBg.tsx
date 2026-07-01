import { useEffect, useRef } from 'react'
import '../styles/desktop-brand-bg.css'

const WORDS = ['CORNER', 'ESTUDIOS'] as const

export default function DesktopBrandBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const offscreen = document.createElement('canvas')
    const offCtx = offscreen.getContext('2d', { alpha: true })
    if (!offCtx) return

    let width = 0
    let height = 0
    let dpr = 1
    let rafId = 0
    let imageData: ImageData | null = null
    let noiseW = 0
    let noiseH = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      noiseW = Math.max(1, Math.floor(width * 0.4))
      noiseH = Math.max(1, Math.floor(height * 0.4))
      offscreen.width = noiseW
      offscreen.height = noiseH
      imageData = offCtx.createImageData(noiseW, noiseH)
    }

    const fillNoise = () => {
      if (!imageData) return
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() > 0.2) {
          data[i + 3] = 0
          continue
        }

        const tone = Math.random()
        data[i] = 210 + tone * 35
        data[i + 1] = 220 + tone * 30
        data[i + 2] = 235 + tone * 20
        data[i + 3] = 6 + Math.random() * 16
      }
    }

    const render = () => {
      if (!imageData) return
      fillNoise()
      ctx.clearRect(0, 0, width, height)
      ctx.imageSmoothingEnabled = false
      offCtx.putImageData(imageData, 0, 0)
      ctx.drawImage(offscreen, 0, 0, width, height)
    }

    const draw = () => {
      render()
      rafId = requestAnimationFrame(draw)
    }

    resize()
    if (reduced) render()
    else draw()

    const onResize = () => {
      resize()
      if (reduced) render()
    }

    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  let letterIndex = 0

  return (
    <div className="desktop-brand-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="desktop-brand-bg__noise" />

      <div className="desktop-brand-bg__inner">
        <h2 className="desktop-brand-bg__title">
          {WORDS.map((word, wi) => (
            <span
              key={word}
              className={`desktop-brand-bg__title-line${wi === 1 ? ' desktop-brand-bg__title-line--accent' : ''}`}
            >
              {word.split('').map((char) => {
                const delay = 0.4 + letterIndex * 0.06
                letterIndex += 1
                return (
                  <span
                    key={`${word}-${char}-${letterIndex}`}
                    className="desktop-brand-bg__letter"
                    style={{ animationDelay: `${delay}s` }}
                  >
                    {char}
                  </span>
                )
              })}
            </span>
          ))}
        </h2>
        <p className="desktop-brand-bg__tag">Consultoría digital · tecnología</p>
      </div>
    </div>
  )
}
