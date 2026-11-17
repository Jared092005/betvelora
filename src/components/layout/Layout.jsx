import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import AppBackground from './AppBackground'

/**
 * Layout compartido de la aplicación.
 * Envuelve todas las rutas: el Header y el Footer viven aquí una sola vez
 * y cada página se renderiza dentro de <Outlet />, debajo del header.
 *
 * La ficha de juego (/games/...) y las pantallas de acceso (/auth/...)
 * son la excepción: usan su propia composición a pantalla completa,
 * sin el header ni el footer del sitio.
 */
export default function Layout() {
  const { pathname } = useLocation()
  const isGameScreen = pathname === '/games' || pathname.startsWith('/games/')
  const isAuthScreen =
    pathname.startsWith('/auth') || pathname === '/login' || pathname === '/register'
  const hideChrome = isGameScreen || isAuthScreen

  return (
    <div className="app-shell flex min-h-screen flex-col text-slate-200">
      <AppBackground />
      <ScrollToTop />
      {!hideChrome && <Header />}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideChrome && <Footer />}
    </div>
  )
}
