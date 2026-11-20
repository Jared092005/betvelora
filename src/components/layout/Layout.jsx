import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import AppBackground from './AppBackground'
import MobileNavDrawer from './MobileNavDrawer'

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
  const showChrome = !hideChrome

  return (
    <div
      className={`app-shell flex min-h-screen flex-col text-slate-200 ${
        // Espacio para la barra inferior fija en móvil/tablet
        showChrome ? 'pb-[calc(65px_+_env(safe-area-inset-bottom))] lg:pb-0' : ''
      }`}
    >
      <AppBackground />
      <ScrollToTop />
      {showChrome && <Header />}

      <main className="flex-1">
        <Outlet />
      </main>

      {showChrome && <Footer />}
      {showChrome && <MobileNavDrawer />}
    </div>
  )
}
