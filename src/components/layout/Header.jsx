import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../../assets/logoBetVelora.png'

// Navegación principal. `end` evita que "Home" quede activo en todas las rutas.
const navItems = [
  { name: 'Home', to: '/', icon: 'fa-house', end: true },
  { name: 'Casino', to: '/casino', icon: 'fa-dice' },
  { name: 'Casino Live', to: '/casino-live', icon: 'fa-video' },
  { name: 'Crash Games', to: '/crash-games', icon: 'fa-rocket' },
  { name: 'Poker', to: '/poker', isSvg: true },
  { name: 'Virtual', to: '/virtual', icon: 'fa-gamepad' },
  { name: 'Promotions', to: '/promotions', icon: 'fa-gift' },
]

// Estado ACTIVO: fondo dorado (secondary) + texto oscuro + glow
const activeClass = 'bg-velora-gold text-slate-900 shadow-glow-gold border-velora-gold/30'
const idleClass =
  'text-slate-300 hover:text-white hover:bg-white/5 border-transparent'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Drawer lateral: bloquea el scroll, cierra con Escape y al cambiar de ruta.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  // En lg el nav se arrastra con el ratón y la rueda vertical lo mueve en horizontal
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return undefined

    const lgOnly = window.matchMedia('(min-width: 1024px)')
    let isDragging = false
    let didMove = false
    let captured = false
    let startX = 0
    let startScroll = 0
    let activePointerId = null

    const onPointerDown = (event) => {
      if (!lgOnly.matches || event.button !== 0) return
      isDragging = true
      didMove = false
      captured = false
      startX = event.clientX
      startScroll = nav.scrollLeft
      activePointerId = event.pointerId
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      const delta = event.clientX - startX

      // La captura se activa solo al confirmar arrastre: si se hace en
      // pointerdown, el navegador redirige el click y el <a> no navega.
      if (!captured) {
        if (Math.abs(delta) <= 4) return
        didMove = true
        captured = true
        try {
          nav.setPointerCapture(event.pointerId)
        } catch {
          captured = false
        }
        nav.classList.add('is-dragging')
      }

      nav.scrollLeft = startScroll - delta
    }

    const stopDrag = () => {
      if (!isDragging) return
      isDragging = false
      nav.classList.remove('is-dragging')
      if (captured && activePointerId !== null) {
        try {
          nav.releasePointerCapture(activePointerId)
        } catch {
          /* ya liberado */
        }
      }
      captured = false
      activePointerId = null
    }

    // Evita navegar si el usuario estaba arrastrando
    const onClickCapture = (event) => {
      if (!didMove) return
      event.preventDefault()
      event.stopPropagation()
      didMove = false
    }

    const onWheel = (event) => {
      if (!lgOnly.matches) return
      if (nav.scrollWidth <= nav.clientWidth) return
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      nav.scrollLeft += event.deltaY
    }

    const onDragStart = (event) => {
      if (lgOnly.matches) event.preventDefault()
    }

    nav.addEventListener('pointerdown', onPointerDown)
    // En window: si el puntero sale del nav antes de superar el umbral,
    // el arrastre debe seguir detectándose.
    window.addEventListener('pointermove', onPointerMove)
    // Evita el drag-and-drop nativo de los <a> (dispararía pointercancel)
    nav.addEventListener('dragstart', onDragStart)
    window.addEventListener('pointerup', stopDrag)
    window.addEventListener('pointercancel', stopDrag)
    nav.addEventListener('click', onClickCapture, true)
    nav.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      nav.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      nav.removeEventListener('dragstart', onDragStart)
      window.removeEventListener('pointerup', stopDrag)
      window.removeEventListener('pointercancel', stopDrag)
      nav.removeEventListener('click', onClickCapture, true)
      nav.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-velora-borderSubtle bg-[#0A0C13]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4 lg:h-20 lg:px-8">
          {/* Marca + navegación */}
          <div className="flex min-w-0 flex-1 items-center gap-8 xl:gap-12">
            {/* Logo (visible también en móvil y tablet) */}
            <NavLink className="group inline-flex shrink-0 items-center gap-3" to="/">
              <img alt="Velora Casino" className="h-8 w-auto sm:h-9 lg:h-12" src={logo} />
            </NavLink>

            {/* Navegación escritorio */}
            <nav
              ref={navRef}
              className="header-nav-scroll hidden min-w-0 flex-1 items-center gap-1.5 lg:flex xl:gap-2"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 xl:px-3 ${
                      isActive ? activeClass : idleClass
                    }`
                  }
                >
                  {item.isSvg ? (
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.25c-.32 0-.62.14-.83.39C9.28 4.96 4.5 10.64 4.5 14.5c0 3.17 2.47 5.75 5.56 5.75.96 0 1.86-.25 2.66-.69-.17.84-.52 2.15-1.97 2.69-.32.12-.5.45-.44.78.06.33.35.57.69.57h3c.34 0 .63-.24.69-.57.06-.33-.12-.66-.44-.78-1.45-.54-1.8-1.85-1.97-2.69.8.44 1.7.69 2.66.69 3.09 0 5.56-2.58 5.56-5.75 0-3.86-4.78-9.54-6.67-11.86-.21-.25-.51-.39-.83-.39z" />
                    </svg>
                  ) : (
                    <i className={`fa-solid ${item.icon} text-sm`} />
                  )}
                  <span className="-mr-[0.05em] whitespace-nowrap">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Área de usuario */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-5">
            {/* Notificaciones */}
            <Link
              to="/account/message"
              title="Messages"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-velora-borderSubtle bg-velora-surface text-slate-300 transition-all hover:border-velora-gold/40 hover:text-white lg:flex"
            >
              <i className="fa-regular fa-envelope text-sm" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-velora-red ring-2 ring-[#0A0C13]" />
            </Link>

            {/* Idioma (escritorio; en móvil/tablet vive dentro del menú) */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Acceso + menú: solo móvil y tablet */}
            <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
              <NavLink
                to="/auth/login"
                className="inline-flex h-8 items-center justify-center rounded-lg border border-velora-gold/50 px-2.5 text-[9px] font-extrabold uppercase tracking-wide text-velora-gold transition-colors hover:border-velora-gold hover:bg-velora-gold/10 sm:h-9 sm:px-3 sm:text-[11px]"
              >
                Log in
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn-primary h-8 rounded-lg px-2.5 text-[9px] font-extrabold uppercase tracking-wide sm:h-9 sm:px-3 sm:text-[11px]"
              >
                Register
              </NavLink>
              <button
                type="button"
                aria-label="Toggle Mobile Menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-velora-borderSubtle bg-velora-surface text-slate-300 transition-colors hover:border-velora-gold/40 hover:text-white sm:h-9 sm:w-9"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* Balance + Add (solo escritorio) */}
            <div className="hidden items-center rounded-xl border border-velora-borderSubtle bg-velora-surface/90 p-1 pl-3.5 shadow-inner-glow transition-all hover:border-velora-gold/30 lg:flex">
              <div className="mr-3 flex items-center gap-2">
                <span className="px-1 font-sans text-sm font-extrabold leading-tight tracking-tight text-white">
                  €24,850.00
                </span>
              </div>
              <button className="btn-primary rounded-lg px-3 py-2 text-xs font-extrabold uppercase tracking-wider sm:px-4">
                <i className="fa-solid fa-plus text-[11px]" />
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>

            {/* Perfil */}
            <NavLink
              to="/account"
              title="User Profile"
              className={({ isActive }) =>
                `group hidden h-10 w-10 items-center justify-center rounded-full border transition-colors lg:flex ${
                  isActive
                    ? 'border-velora-gold/60 bg-velora-gold/15 text-velora-gold'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-velora-gold/40 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </NavLink>

            {/* Salir */}
            <button
              className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-velora-borderSubtle bg-velora-surface text-slate-400 transition-colors hover:border-velora-red/40 hover:text-velora-red lg:flex"
              title="Log Out"
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer de navegación (móvil y tablet) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            aria-label="Close Menu"
            onClick={() => setIsMenuOpen(false)}
            className="velora-drawer-backdrop absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
          />

          <aside className="velora-drawer absolute inset-y-0 right-0 flex w-[85%] max-w-[340px] flex-col border-l border-velora-borderSubtle bg-[#0A0C13] shadow-2xl">
            <div className="flex items-center justify-between border-b border-velora-borderSubtle p-5">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="inline-flex">
                <img alt="Velora Casino" className="h-9 w-auto" src={logo} />
              </NavLink>
              <button
                type="button"
                aria-label="Close Menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.end}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl border px-4 py-3 text-[13px] font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'border-velora-gold/30 bg-velora-gold/15 text-velora-gold'
                        : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.isSvg ? (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.25c-.32 0-.62.14-.83.39C9.28 4.96 4.5 10.64 4.5 14.5c0 3.17 2.47 5.75 5.56 5.75.96 0 1.86-.25 2.66-.69-.17.84-.52 2.15-1.97 2.69-.32.12-.5.45-.44.78.06.33.35.57.69.57h3c.34 0 .63-.24.69-.57.06-.33-.12-.66-.44-.78-1.45-.54-1.8-1.85-1.97-2.69.8.44 1.7.69 2.66.69 3.09 0 5.56-2.58 5.56-5.75 0-3.86-4.78-9.54-6.67-11.86-.21-.25-.51-.39-.83-.39z" />
                    </svg>
                  ) : (
                    <i
                      aria-hidden="true"
                      className={`fa-solid ${item.icon} w-4 shrink-0 text-center text-sm`}
                    />
                  )}
                  <span>{item.name}</span>
                </NavLink>
              ))}

              <NavLink
                to="/account"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl border px-4 py-3 text-[13px] font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'border-velora-gold/30 bg-velora-gold/15 text-velora-gold'
                      : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <i aria-hidden="true" className="fa-solid fa-user w-4 shrink-0 text-center text-sm" />
                <span>Profile</span>
              </NavLink>
            </nav>

            <div className="border-t border-velora-borderSubtle p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Language
              </p>
              <LanguageSwitcher variant="full" />
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
