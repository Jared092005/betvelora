import { useEffect, useState } from 'react'
import logo from '../../assets/logoBetVelora.png'
import Spinner from './Spinner'

const MIN_VISIBLE_MS = 800
const FADE_MS = 500

/**
 * Pantalla de carga inicial: logo de Velora y debajo un spinner CSS.
 * Se muestra al entrar a la app y desaparece cuando la página termina de cargar.
 */
export default function AppLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const startedAt = Date.now()
    let hideTimer
    let removeTimer

    const finish = () => {
      const elapsed = Date.now() - startedAt
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
      hideTimer = window.setTimeout(() => {
        setFading(true)
        removeTimer = window.setTimeout(() => setVisible(false), FADE_MS)
      }, wait)
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!visible) document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7 bg-black transition-opacity duration-500 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="Cargando"
    >
      <img
        src={logo}
        alt="Velora Casino"
        draggable="false"
        className="h-14 w-auto max-w-[70vw] select-none sm:h-16"
      />
      <Spinner size="xl" tone="red" />
    </div>
  )
}
