import { useEffect, useRef } from 'react'

interface Blob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export function InicioBg() {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(max-width: 768px)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let rafId = 0

    const blobs: Blob[] = [
      { x: 0.32, y: 0.38, vx: 0.00014, vy: 0.0001, radius: 0.42, alpha: mobile ? 0.09 : 0.14 },
      { x: 0.68, y: 0.52, vx: -0.00012, vy: 0.00009, radius: 0.36, alpha: mobile ? 0.07 : 0.11 },
      { x: 0.5, y: 0.62, vx: 0.00008, vy: -0.00011, radius: 0.32, alpha: mobile ? 0.06 : 0.09 },
      { x: 0.44, y: 0.28, vx: -0.00009, vy: 0.00013, radius: 0.28, alpha: mobile ? 0.05 : 0.08 },
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

    const drawBlob = (blob: Blob) => {
      const cx = blob.x * width
      const cy = blob.y * height
      const r = blob.radius * Math.min(width, height)

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      grad.addColorStop(0, `rgba(59, 130, 246, ${blob.alpha})`)
      grad.addColorStop(0.45, `rgba(99, 102, 241, ${blob.alpha * 0.55})`)
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)')

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const render = (animate: boolean) => {
      if (width === 0 || height === 0) return

      if (animate) {
        for (const blob of blobs) {
          blob.x += blob.vx
          blob.y += blob.vy
          if (blob.x < 0.05 || blob.x > 0.95) blob.vx *= -1
          if (blob.y < 0.05 || blob.y > 0.95) blob.vy *= -1
        }
      }

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (const blob of blobs) drawBlob(blob)
      ctx.globalCompositeOperation = 'source-over'
    }

    const tick = () => {
      render(true)
      rafId = requestAnimationFrame(tick)
    }

    resize()
    render(false)
    if (!reduced) tick()

    const observer = new ResizeObserver(() => {
      resize()
      if (reduced) render(false)
    })
    observer.observe(root)

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={rootRef} className="inicio-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="inicio-bg__canvas" />
      <div className="inicio-bg__grid" />
      <div className="inicio-bg__vignette" />
    </div>
  )
}
