import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Vuelve al inicio de la página en cada cambio de ruta.
 * Con <a href> el navegador ya lo hacía al recargar; con <Link>
 * la navegación es en cliente y el scroll se conserva, así que hay
 * que resetearlo a mano.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
