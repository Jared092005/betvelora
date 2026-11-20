import { NavLink } from 'react-router-dom'

/**
 * MobileNavDrawer — barra de navegación inferior para móvil y tablet.
 * Recreada a partir de la referencia `assets/mobileNavDrawer.png` y adaptada
 * al design system: estado activo en dorado, mismos iconos que el Header
 * de escritorio y siete accesos que caben desde 320px.
 *
 * Solo se muestra por debajo de `lg` (1024px); en escritorio manda el Header.
 */
const navItems = [
  { name: 'Home', to: '/', icon: 'fa-house', end: true },
  { name: 'Casino', to: '/casino', icon: 'fa-dice' },
  { name: 'Live', to: '/casino-live', icon: 'fa-video' },
  { name: 'Crash', to: '/crash-games', icon: 'fa-rocket' },
  { name: 'Virtual', to: '/virtual', icon: 'fa-gamepad' },
]

export default function MobileNavDrawer() {
  return (
    <nav
      aria-label="Mobile navigation"
      data-purpose="mobile-nav-drawer"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#333333] bg-[#141414] pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto flex w-full max-w-2xl items-stretch">
        {navItems.map((item) => (
          <li key={item.name} className="min-w-0 flex-1">
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex h-16 flex-col items-center justify-center gap-1.5 px-0.5 transition-colors duration-200 ${
                  isActive
                    ? 'text-velora-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]'
                    : 'text-[#818286] hover:text-slate-200'
                }`
              }
            >
              {item.isSvg ? (
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px] shrink-0 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.25c-.32 0-.62.14-.83.39C9.28 4.96 4.5 10.64 4.5 14.5c0 3.17 2.47 5.75 5.56 5.75.96 0 1.86-.25 2.66-.69-.17.84-.52 2.15-1.97 2.69-.32.12-.5.45-.44.78.06.33.35.57.69.57h3c.34 0 .63-.24.69-.57.06-.33-.12-.66-.44-.78-1.45-.54-1.8-1.85-1.97-2.69.8.44 1.7.69 2.66.69 3.09 0 5.56-2.58 5.56-5.75 0-3.86-4.78-9.54-6.67-11.86-.21-.25-.51-.39-.83-.39z" />
                </svg>
              ) : (
                <i
                  className={`fa-solid ${item.icon} text-lg leading-none`}
                  aria-hidden="true"
                />
              )}
              <span className="w-full truncate text-center text-[9px] font-bold uppercase leading-none tracking-[0.02em] sm:text-[10px]">
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

