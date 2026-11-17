import { useEffect, useRef } from 'react'

const WINNERS_INTERVAL_MS = 4000
const WINNERS_GAP_PX = 16
const FALLBACK_GRADIENTS = [
  'from-[#2a0a12] to-[#141722]',
  'from-[#2a220a] to-[#141722]',
  'from-[#0f2a1a] to-[#141722]',
  'from-[#14112a] to-[#141722]',
]

/**
 * Sección "Top Winners of the Month" reutilizable.
 *
 * Mantiene los datos de ejemplo (ID, importe y fecha) y toma las imágenes
 * de los juegos reales de la ruta (`games`).
 */
export default function TopWinnersOfTheMonth({ winners = [], games = [] }) {
  const trackRef = useRef(null)

  const stepWinners = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild
    const step = card
      ? card.getBoundingClientRect().width + WINNERS_GAP_PX
      : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!winners.length) return undefined
    const timer = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const card = track.firstElementChild
      const step = card
        ? card.getBoundingClientRect().width + WINNERS_GAP_PX
        : track.clientWidth * 0.8
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: 'smooth' })
    }, WINNERS_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [winners.length])

  if (!winners.length) return null

  return (
    <section
      className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2"
      data-purpose="top-winners-section"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#121317] via-[#0d0e12] to-black p-5 shadow-[0_10px_30px_rgba(0,0,0,0.85)] lg:p-7">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-center">
          <div className="flex items-center gap-3.5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">
                  TOP WINNERS OF THE MONTH
                </h2>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 self-end md:self-auto lg:flex">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous winners"
                onClick={() => stepWinners(-1)}
                className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#121317] text-slate-300 shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all duration-200 hover:border-[#d4af37]/40 hover:bg-white/5 hover:text-[#d4af37]"
              >
                <i className="fa-solid fa-chevron-left text-xs" />
              </button>
              <button
                type="button"
                aria-label="Next winners"
                onClick={() => stepWinners(1)}
                className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#121317] text-slate-300 shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all duration-200 hover:border-[#d4af37]/40 hover:bg-white/5 hover:text-[#d4af37]"
              >
                <i className="fa-solid fa-chevron-right text-xs" />
              </button>
            </div>
          </div>
        </div>

        <div
          id="winners-carousel"
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-1 scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {winners.map((winner, index) => {
            const game = games.length ? games[index % games.length] : null
            const name = game?.name || 'Velora'

            return (
              <div
                key={`${winner.id}-${index}`}
                className="group flex w-[240px] shrink-0 cursor-pointer items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-[#0d0e12] p-3 transition-all duration-300 hover:border-white/20 hover:shadow-lg sm:w-[260px] lg:w-[calc(25%-12px)]"
              >
                <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-black/50">
                  {game?.image ? (
                    <img
                      src={game.image}
                      alt={name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
                        FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
                      }`}
                    >
                      <i className="fa-solid fa-dice text-lg text-velora-gold/40" />
                    </div>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-400">
                    <span>ID {winner.id}</span>
                  </div>
                  <div className="mt-0.5 truncate text-base font-extrabold leading-tight tracking-tight text-[#d4af37] lg:text-lg">
                    {winner.amount} €
                  </div>
                  <div className="mt-0.5 truncate text-[11px] font-normal tracking-tight text-slate-300">
                    {winner.date}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
