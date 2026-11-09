import { Link } from 'react-router-dom'

const casinoLinks = [
  { name: 'My Games', to: '/casino' },
  { name: 'My Favorites', to: '/casino' },
  { name: 'New Games', to: '/casino' },
  { name: 'Popular Games', to: '/casino' },
]

const paymentMethods = [
  'Alp-Pay (Transferencia local LatAm)',
  'Alp-Pay (Tarjeta 3DS)',
  'Bank Transfer',
]

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDZUQW7nnSPhnbbtoZBMBHJZ-SDndtYe_qS72I40rmr0TR35Lo59XLtCWUxRXnBQfmgIZwwqWwBcXgnfrbAdbP5cEqJi35jRS6_iKNhVX0TbBBzonYxCeXGKHIk3X_v00XYsK6hAy7nEOjETZ3od0n4aOoNQxxfUjIb2N4Hrdfl0mkcnkPXOs3nqJe796tx69kcVOnauAOgfMfd4OBv2evWgO3-oi03Jy8mosqTkkOK8veiis0MV5bZASjYxtHDZI2iDA'

export default function Footer() {
  return (
    <footer
      className="mt-auto w-full border-t border-velora-borderSubtle bg-velora-black px-6 pb-8 pt-12 lg:px-12"
      data-purpose="site-footer"
    >
      <div className="mx-auto max-w-[1920px]">
        {/* Marca + copyright */}
        <div className="mb-6">
          <img
            alt="Velora Casino"
            className="mb-3 h-6 w-auto object-contain opacity-90"
            src={LOGO_SRC}
          />
          <p className="text-[12px] tracking-wide text-zinc-400">
            2026 VELORA | All rights reserved.
          </p>
        </div>

        <div className="my-6 h-px w-full bg-white/[0.07]" />

        {/* Navegación */}
        <div className="mb-6">
          <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-velora-gold">
            CASINO
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs text-zinc-400">
            {casinoLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="transition-colors hover:text-velora-gold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-6 h-px w-full bg-white/[0.07]" />

        {/* Métodos de pago */}
        <div className="mb-8 flex flex-wrap gap-2.5">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="rounded-lg border border-velora-borderSubtle bg-black/40 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-velora-gold/30"
            >
              {method}
            </div>
          ))}
        </div>

        {/* Avisos legales */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600 text-[10px] font-bold text-zinc-400">
              18+
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600 text-zinc-400">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="11" rx="2" ry="2" width="14" x="5" y="11" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600 font-serif text-[11px] italic text-zinc-400">
              i
            </span>
          </div>

          <p className="max-w-4xl text-[11px] leading-relaxed text-zinc-400">
            Notice: This is an advertisement for gambling services. Gambling
            should not be considered a solution to financial difficulties.
            Please read the terms and conditions carefully and gamble
            responsibly.
          </p>

          {/* Idioma + ajustes */}
          <div className="flex items-center space-x-2 pt-1 text-[11px] text-zinc-400">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            <span className="cursor-pointer transition-colors hover:text-velora-gold">
              English ▾
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
