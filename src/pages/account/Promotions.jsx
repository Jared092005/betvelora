import { Link } from 'react-router-dom'
import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Promotions del área de cuenta.
 * Reutiliza las tarjetas promocionales de la home (bonos destacados):
 * una columna en móvil y dos columnas (fila) desde lg.
 */
const promos = [
  {
    id: 'first-deposit',
    badge: 'First Deposit Bonus',
    badgeIcon: 'fa-solid fa-fire',
    title: '150% MATCH UP TO €1,500',
    text: 'Instant balance multiplier on your first reload. Minimum deposit €20 with instant clearance.',
    cta: 'Deposit Now',
    ctaIcon: 'fa-solid fa-wallet',
    to: '/account/deposit',
    accent: 'gold',
  },
  {
    id: 'free-spins',
    badge: 'Free Spins Frenzy',
    badgeIcon: 'fa-solid fa-fire',
    title: '20 FREE SPINS',
    text: 'Spin to win on top Pragmatic Play & ChimeraSpin slots. Claim spins daily with 0x wager.',
    cta: 'Play Spins',
    ctaIcon: 'fa-solid fa-play',
    to: '/casino',
    accent: 'red',
  },
]

const accents = {
  gold: {
    card: 'bg-gradient-to-br from-[#1c1608]/95 via-[#0e0f14]/95 to-[#07080b] border-amber-500/40',
    glow: 'bg-amber-500/20',
    badge: 'bg-gradient-to-r from-amber-500/25 to-amber-500/10 border-amber-500/40 text-amber-300',
    title: 'text-white',
    cta: 'btn-primary',
    ring: 'bg-amber-500/10 text-amber-300',
  },
  red: {
    card: 'bg-gradient-to-br from-[#200508]/95 via-[#0e0f14]/95 to-[#07080b] border-red-500/40',
    glow: 'bg-red-600/25',
    badge: 'bg-gradient-to-r from-red-600/25 to-velora-red/10 border-red-500/40 text-red-300',
    title: 'text-white',
    cta: 'bg-velora-red hover:bg-velora-ruby text-white shadow-glow-red',
    ring: 'bg-red-500/10 text-red-300',
  },
}

export default function AccountPromotions() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">
        <header className="mb-8">
          <h1 className="flex items-center gap-3 font-cinzel text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            <i className="fa-solid fa-gift text-velora-gold" />
            Promotions
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Bonos y ventajas disponibles para tu cuenta.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {promos.map((promo) => {
            const accent = accents[promo.accent]
            return (
              <article
                key={promo.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 sm:p-8 ${accent.card}`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl ${accent.glow}`}
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <span
                    className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${accent.badge}`}
                  >
                    <i className={`${promo.badgeIcon} text-[11px]`} />
                    {promo.badge}
                  </span>

                  <h2
                    className={`font-cinzel text-2xl font-black uppercase leading-tight tracking-wide sm:text-3xl ${accent.title}`}
                  >
                    {promo.title}
                  </h2>

                  <p className="mb-6 mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                    {promo.text}
                  </p>

                  <Link
                    to={promo.to}
                    className={`mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold uppercase tracking-wider transition-all hover:scale-[1.02] ${accent.cta}`}
                  >
                    <i className={`${promo.ctaIcon} text-[11px]`} />
                    {promo.cta}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
