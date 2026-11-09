import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import AppBackground from './AppBackground'

/**
 * Layout compartido de la aplicación.
 * Envuelve todas las rutas: el Header y el Footer viven aquí una sola vez
 * y cada página se renderiza dentro de <Outlet />, debajo del header.
 */
export default function Layout() {
  return (
    <div className="app-shell flex min-h-screen flex-col text-slate-200">
      <AppBackground />
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
