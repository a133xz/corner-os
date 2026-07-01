import { useEffect, useRef } from 'react'

interface Blob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: [number, number, number, number]
}

function withAlpha([r, g, b, a]: [number, number, number, number], scale: number) {
  return `rgba(${r}, ${g}, ${b}, ${a * scale})`
}

export function InicioMobileCanvas() {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let rafId = 0
    const start = performance.now()

    const blobs: Blob[] = [
      { x: 0.28, y: 0.34, vx: 0.00011, vy: 0.00008, radius: 0.48, color: [255, 255, 255, 0.07] },
      { x: 0.72, y: 0.58, vx: -0.0001, vy: 0.00009, radius: 0.4, color: [220, 225, 235, 0.05] },
      { x: 0.52, y: 0.72, vx: 0.00007, vy: -0.0001, radius: 0.34, color: [37, 99, 235, 0.055] },
    ]

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = root.clientWidth
      height = root.clientHeight
      if (width === 0 || height === 0) return
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawBlob = (blob: Blob, intro: number) => {
      const cx = blob.x * width
      const cy = blob.y * height
      const r = blob.radius * Math.min(width, height)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      grad.addColorStop(0, withAlpha(blob.color, intro))
      grad.addColorStop(0.5, withAlpha(blob.color, intro * 0.45))
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const render = (animate: boolean, time: number) => {
      if (width === 0 || height === 0) return
      const intro = Math.min(1, (time - start) / 1400)

      if (animate) {
        for (const blob of blobs) {
          blob.x += blob.vx
          blob.y += blob.vy
          if (blob.x < 0.04 || blob.x > 0.96) blob.vx *= -1
          if (blob.y < 0.04 || blob.y > 0.96) blob.vy *= -1
        }
      }

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (const blob of blobs) drawBlob(blob, intro)
      ctx.globalCompositeOperation = 'source-over'
    }

    const tick = (time: number) => {
      render(true, time)
      rafId = requestAnimationFrame(tick)
    }

    resize()
    render(false, start)
    if (!reduced) rafId = requestAnimationFrame(tick)

    const observer = new ResizeObserver(() => {
      resize()
      if (reduced) render(false, performance.now())
    })
    observer.observe(root)

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={rootRef} className="inicio-mobile-canvas" aria-hidden="true">
      <canvas ref={canvasRef} className="inicio-mobile-canvas__layer" />
      <div className="inicio-mobile-canvas__vignette" />
    </div>
  )
}
