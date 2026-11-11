import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

/**
 * Barra lateral del área de cuenta (copiada del Dashboard de Stitch).
 * Cada ítem corresponde a una ruta real dentro de /account.
 */
const items = [
  { label: 'Dashboard', to: '/account', icon: 'fa-solid fa-table-cells-large', end: true },
  { label: 'Deposit', to: '/account/deposit', icon: 'fa-solid fa-wallet' },
  { label: 'Withdrawal', to: '/account/withdrawal', icon: 'fa-solid fa-hand-holding-dollar' },
  { label: 'Transactions', to: '/account/transactions', icon: 'fa-solid fa-arrow-right-arrow-left' },
  { label: 'Promotions', to: '/account/promotions', icon: 'fa-solid fa-gift' },
  { label: 'Verify account', to: '/account/verify-account', icon: 'fa-solid fa-shield-halved' },
  {
    label: 'Responsible gambling',
    to: '/account/responsible-gambling',
    icon: 'fa-solid fa-heart-pulse',
  },
  { label: 'Messages', to: '/account/message', icon: 'fa-regular fa-envelope' },
  {
    label: 'Personal information',
    to: '/account/personal-information',
    icon: 'fa-regular fa-user',
  },
]

const activeClass =
  'relative flex shrink-0 items-center gap-3.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-velora-gold px-4 py-3.5 text-sm font-bold tracking-wide text-velora-gold transition-all group'
const idleClass =
  'flex shrink-0 items-center gap-3.5 whitespace-nowrap rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide text-slate-300 transition-all hover:bg-white/[0.04] hover:text-white group'

export default function AccountSidebar() {
  const navRef = useRef(null)
  const { pathname } = useLocation()

  // En modo carrusel (móvil/tablet) deja visible el ítem activo al cambiar de ruta,
  // en lugar de volver al inicio de la lista.
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    if (nav.scrollWidth <= nav.clientWidth + 2) return

    const active = nav.querySelector('[aria-current="page"]')
    if (!active) return

    const navRect = nav.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()
    const delta =
      activeRect.left - navRect.left - (nav.clientWidth - activeRect.width) / 2

    nav.scrollLeft += delta
  }, [pathname])

  return (
    <aside
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-velora-cardBg shadow-card-soft lg:col-span-3"
      data-purpose="dashboard-sidebar-menu"
    >
      <nav
        ref={navRef}
        aria-label="Account Settings Menu"
        className="account-nav-scroll flex gap-2 overflow-x-auto p-2.5 sm:p-3 lg:flex-col lg:gap-0 lg:space-y-1 lg:overflow-visible"
      >
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? activeClass : idleClass)}
          >
            {({ isActive }) => (
              <>
                <i
                  className={`${item.icon} w-5 text-center text-base ${
                    isActive
                      ? 'text-velora-gold transition-transform group-hover:scale-110'
                      : 'text-slate-400 transition-colors group-hover:text-velora-gold'
                  }`}
                />
                <span>{item.label}</span>
                {isActive && (
                  <i className="fa-solid fa-chevron-right ml-auto text-[10px] text-velora-gold/70" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
