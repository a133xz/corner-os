import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { apps, initialOpenApps } from '../data/apps'
import BottomNav from '../components/BottomNav'
import { useIsMobile } from '../hooks/useIsMobile'
import '../styles/desktop.css'
import '../styles/bottom-nav.css'

const WINDOW_WIDTH = 800
const WINDOW_HEIGHT = 550
const INICIO_WINDOW_WIDTH = 920
const INICIO_WINDOW_HEIGHT = 600
const TASKBAR_HEIGHT = 60
const SHORTCUTS_RESERVED_LEFT = 150
const CASCADE_OFFSET = 28

function getWindowSize(appId: string) {
  if (appId === 'inicio') {
    return { width: INICIO_WINDOW_WIDTH, height: INICIO_WINDOW_HEIGHT }
  }
  return { width: WINDOW_WIDTH, height: WINDOW_HEIGHT }
}

interface WindowState {
  visible: boolean
  active: boolean
  left: number
  top: number
  width: string
  height: string
  maximized: boolean
  prevTop?: string
  prevLeft?: string
  zIndex: number
}

function getWindowCascadeIndex(appId: string) {
  return apps.filter((app) => !app.externalRoute).findIndex((app) => app.id === appId)
}

function getCenteredWindowPosition(appId: string, cascadeIndex = 0) {
  const { width, height } = getWindowSize(appId)
  const vw = window.innerWidth
  const vh = window.innerHeight
  const availableWidth = vw - SHORTCUTS_RESERVED_LEFT
  const left = SHORTCUTS_RESERVED_LEFT + Math.max(0, (availableWidth - width) / 2) + cascadeIndex * CASCADE_OFFSET
  const top = Math.max(24, (vh - TASKBAR_HEIGHT - height) / 2) + cascadeIndex * CASCADE_OFFSET

  return { left, top }
}

function createInitialWindows(): Record<string, WindowState> {
  const state: Record<string, WindowState> = {}
  apps.forEach((app) => {
    if (app.externalRoute) return
    const cascadeIndex = getWindowCascadeIndex(app.id)
    const { left, top } = getCenteredWindowPosition(app.id, cascadeIndex)
    const { width, height } = getWindowSize(app.id)
    state[app.id] = {
      visible: false,
      active: false,
      left,
      top,
      width: `${width}px`,
      height: `${height}px`,
      maximized: false,
      zIndex: 10,
    }
  })
  return state
}

export default function DesktopPage() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [windows, setWindows] = useState(createInitialWindows)
  const [, setZCounter] = useState(100)
  const [time, setTime] = useState('')
  const dragRef = useRef<{ id: string; startX: number; startY: number; origLeft: number; origTop: number } | null>(null)

  const bringToFront = useCallback((id: string) => {
    setZCounter((z) => {
      const next = z + 1
      setWindows((prev) => {
        const updated = { ...prev }
        for (const key of Object.keys(updated)) {
          updated[key] = { ...updated[key], active: key === id }
          if (key === id) updated[key].zIndex = next
        }
        return updated
      })
      return next
    })
  }, [])

  const openWindow = useCallback((id: string) => {
    const app = apps.find((a) => a.id === id)
    if (app?.externalRoute) {
      navigate(app.externalRoute)
      return
    }
    setWindows((prev) => {
      const wasVisible = prev[id].visible
      const cascadeIndex = getWindowCascadeIndex(id)
      const position = wasVisible
        ? { left: prev[id].left, top: prev[id].top }
        : getCenteredWindowPosition(id, cascadeIndex)

      const updated = { ...prev }
      if (isMobile) {
        for (const key of Object.keys(updated)) {
          if (key !== id) {
            updated[key] = { ...updated[key], visible: false, active: false }
          }
        }
      }
      updated[id] = { ...updated[id], visible: true, ...position }

      return updated
    })
    bringToFront(id)
  }, [bringToFront, navigate, isMobile])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], visible: false, active: false },
    }))
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], visible: false, active: false },
    }))
  }, [])

  const toggleWindow = useCallback((id: string) => {
    const app = apps.find((a) => a.id === id)
    if (app?.externalRoute) {
      navigate(app.externalRoute)
      return
    }
    const win = windows[id]
    if (win.visible) {
      if (isMobile) {
        if (win.active) minimizeWindow(id)
        else bringToFront(id)
      } else if (win.active) {
        minimizeWindow(id)
      } else {
        bringToFront(id)
      }
    } else {
      openWindow(id)
    }
  }, [windows, minimizeWindow, bringToFront, openWindow, navigate, isMobile])

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const win = prev[id]
      if (win.maximized) {
        const { width, height } = getWindowSize(id)
        return {
          ...prev,
          [id]: {
            ...win,
            maximized: false,
            top: parseInt(win.prevTop ?? String(getCenteredWindowPosition(id, getWindowCascadeIndex(id)).top), 10),
            left: parseInt(win.prevLeft ?? String(getCenteredWindowPosition(id, getWindowCascadeIndex(id)).left), 10),
            width: `${width}px`,
            height: `${height}px`,
          },
        }
      }
      return {
        ...prev,
        [id]: {
          ...win,
          maximized: true,
          prevTop: String(win.top),
          prevLeft: String(win.left),
          top: 0,
          left: 0,
          width: '100vw',
          height: 'calc(100vh - 80px)',
        },
      }
    })
    bringToFront(id)
  }, [bringToFront])

  const onHeaderMouseDown = (id: string, e: ReactMouseEvent) => {
    const win = windows[id]
    if (win.maximized) return
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: win.left,
      origTop: win.top,
    }
    bringToFront(id)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return
      const { id, startX, startY, origLeft, origTop } = dragRef.current
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], left: origLeft + dx, top: origTop + dy },
      }))
    }
    const onMouseUp = () => {
      dragRef.current = null
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        openWindow('inicio')
      } else {
        initialOpenApps.forEach((id) => openWindow(id))
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [openWindow])

  const isHomeActive = isMobile && windows.inicio?.visible && windows.inicio?.active

  return (
    <div className={`desktop${isMobile ? ' desktop--mobile' : ''}${isHomeActive ? ' desktop--home' : ''}`}>
      <div className="bg-shape shape-1" />
      <div className="bg-shape shape-2" />
      <div className="bg-shape shape-3" />

      <div className="desktop-shortcuts">
        {apps.map((app) => (
          <button
            key={app.id}
            type="button"
            className="desktop-icon"
            onClick={() => {
              if (app.externalRoute) {
                navigate(app.externalRoute)
                return
              }
              const win = windows[app.id]
              if (!win.visible) openWindow(app.id)
              else bringToFront(app.id)
            }}
          >
            <div className="icon-bg">{app.icon}</div>
            <div className="icon-label">{app.title}</div>
          </button>
        ))}
      </div>

      <div className="windows-container">
        {apps.filter((a) => !a.externalRoute).map((app) => {
          const win = windows[app.id]
          return (
            <div
              key={app.id}
              className={`os-window${win.visible ? ' visible' : ''}${win.active ? ' active' : ''}${app.id === 'inicio' ? ' os-window--inicio' : ''}`}
              style={{
                left: win.left,
                top: win.top,
                width: win.width,
                height: win.height,
                zIndex: win.zIndex,
                borderRadius: win.maximized ? 0 : undefined,
              }}
              onMouseDown={() => bringToFront(app.id)}
            >
              <div
                className="window-header"
                onMouseDown={(e) => onHeaderMouseDown(app.id, e)}
              >
                <div className="window-controls">
                  <button type="button" className="control-btn control-close" onClick={() => closeWindow(app.id)} aria-label="Cerrar" />
                  <button type="button" className="control-btn control-min" onClick={() => minimizeWindow(app.id)} aria-label="Minimizar" />
                  <button type="button" className="control-btn control-max" onClick={() => maximizeWindow(app.id)} aria-label="Maximizar" />
                </div>
                <div className="window-title">{app.title} - Corner Estudios</div>
                <div className="window-header-spacer" />
              </div>
              <div className="window-content">{app.content}</div>
            </div>
          )
        })}
      </div>

      <div className="taskbar">
        <BottomNav variant="taskbar" />
        <div className="taskbar-apps">
          {apps.map((app) => {
            const win = windows[app.id]
            const isOpen = !isMobile && !app.externalRoute && win.visible
            const isActive = !app.externalRoute && win.active && win.visible
            return (
              <button
                key={app.id}
                type="button"
                className={`taskbar-icon${isOpen ? ' open' : ''}${isActive ? ' active' : ''}${isMobile ? ' taskbar-icon--mobile-tab' : ''}`}
                title={app.title}
                onClick={() => toggleWindow(app.id)}
              >
                <span className="taskbar-icon-glyph" aria-hidden="true">{app.icon}</span>
                <span className="taskbar-icon-label">{app.title}</span>
              </button>
            )
          })}
        </div>
        <div className="taskbar-time">{time}</div>
      </div>
    </div>
  )
}
