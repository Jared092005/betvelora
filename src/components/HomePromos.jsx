import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Carrusel de promociones de /home.
 * Encapsula el estado, el autoplay, el swipe táctil y el marcado del hero.
 */
const PROMO_SLIDES = 2
const PROMO_INTERVAL_MS = 4000

// Ambos slides viven en la misma celda de grid: se cruzan sin saltos de layout
function promoSlideStyle(index, activePromo) {
  const active = activePromo === index
  return {
    gridArea: '1 / 1',
    display: 'flex',
    opacity: active ? 1 : 0,
    transform: active ? 'translateX(0)' : `translateX(${index === 0 ? '-' : ''}24px)`,
    pointerEvents: active ? 'auto' : 'none',
    zIndex: active ? 1 : 0,
  }
}

export default function HomePromos() {
  const [activePromo, setActivePromo] = useState(0)
  const [promoTick, setPromoTick] = useState(0)

  const goToPromo = (index) => {
    setActivePromo(((index % PROMO_SLIDES) + PROMO_SLIDES) % PROMO_SLIDES)
    setPromoTick((tick) => tick + 1)
  }

  // Deslizar con el dedo en móvil y tablet
  const touchStart = useRef({ x: 0, y: 0, active: false })

  const handlePromoTouchStart = (event) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY, active: true }
  }

  const handlePromoTouchEnd = (event) => {
    if (!touchStart.current.active) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current.active = false

    // solo gestos claramente horizontales
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    goToPromo(activePromo + (dx < 0 ? 1 : -1))
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(
      () => setActivePromo((current) => (current + 1) % PROMO_SLIDES),
      PROMO_INTERVAL_MS,
    )
    return () => clearInterval(timer)
  }, [promoTick])

  return (
<section className="relative overflow-hidden border-b border-velora-borderSubtle bg-gradient-to-r from-[#0C0E17] via-[#151221] to-[#0A0C13]" id="hero-promo-carousel">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-6 relative group">

      <div
      className="relative mx-0 min-h-[220px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md md:mx-10 lg:mx-20"
      onTouchStart={handlePromoTouchStart}
      onTouchEnd={handlePromoTouchEnd}
      style={{ touchAction: 'pan-y' }}
      >

      <div className="grid overflow-hidden">

      <div className="promo-slide flex flex-col md:flex-row items-center justify-between p-6 lg:p-8 bg-gradient-to-br from-[#1c1608]/95 via-[#0e0f14]/95 to-[#07080b] border border-amber-500/40 rounded-2xl relative overflow-hidden transition-all duration-500" id="promo-slide-0" style={promoSlideStyle(0, activePromo)}>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-velora-gold/15 rounded-full blur-2xl pointer-events-none"></div>
      <div className="relative z-10 max-w-xl pl-10">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-velora-gold/10 border border-amber-400/40 text-[10px] font-black text-amber-300 tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(212,175,55,0.2)]">
      <span className="">First Deposit Bonus</span>
      </div>
      <h2 className="font-cinzel text-2xl lg:text-3xl font-black text-white tracking-wide uppercase leading-tight mb-2 drop-shadow-md">
      <span className="gold-gradient-text">150% MATCH</span> UP TO €1,500
                </h2>
      <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-5 max-w-md">
                  Instant balance multiplier on your first reload. Minimum deposit €20 with instant clearance.
                </p>
      <button className="btn-primary px-7 py-3 text-xs uppercase tracking-wider hover:scale-[1.02]">
      <Link to='/account/deposit' className="">Deposit Now</Link>
      <i className="fa-solid fa-arrow-right text-[11px]"></i>
      </button>
      </div>

      <div className="relative z-10 hidden md:flex items-center justify-center pr-6 lg:pr-12 pointer-events-none pl-10">
      <div className="relative w-40 h-40 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl animate-pulse"></div>
      <i className="fa-solid fa-dice-d6 text-7xl text-amber-400 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] rotate-12"></i>
      <i className="fa-solid fa-crown text-3xl text-amber-200 absolute -top-1 -right-1 drop-shadow-md -rotate-12"></i>
      <i className="fa-solid fa-gem text-2xl text-amber-300 absolute -bottom-1 -left-2 drop-shadow-md"></i>
      </div>
      </div>
      </div>

      <div className="promo-slide hidden flex-col md:flex-row items-center justify-between p-6 lg:p-8 bg-gradient-to-br from-[#200508]/95 via-[#0e0f14]/95 to-[#07080b] border border-red-500/40 rounded-2xl relative overflow-hidden transition-all duration-500 w-full" id="promo-slide-1" style={promoSlideStyle(1, activePromo)}><div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div><div className="absolute -bottom-10 -left-10 w-44 h-44 bg-velora-red/15 rounded-full blur-2xl pointer-events-none"></div><div className="relative z-10 max-w-xl pl-10"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-600/25 to-velora-red/10 border border-red-500/40 text-[10px] font-black text-red-300 tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(229,9,20,0.3)]"><i className="fa-solid fa-fire text-red-400 text-[11px] animate-pulse"></i><span className="">Free Spins Frenzy</span></div><h2 className="font-cinzel text-2xl lg:text-3xl font-black text-white tracking-wide uppercase leading-tight mb-2 drop-shadow-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">20 FREE SPINS</span></h2><p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-5 max-w-md">Spin to win on top Pragmatic Play &amp; ChimeraSpin slots. Claim spins daily with 0x wager.</p><button className="ruby-gradient-btn text-white font-extrabold px-7 py-3 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer hover:scale-[1.02] border border-red-400/30"><Link to='/casino' className="">Play Spins</Link><i className="fa-solid fa-arrow-right text-[11px]"></i></button></div><div className="relative z-10 hidden md:flex items-center justify-center pr-6 lg:pr-12 pointer-events-none pl-10"><div className="relative w-40 h-40 flex items-center justify-center"><div className="absolute inset-0 rounded-full bg-red-600/15 blur-xl animate-pulse"></div><i className="fa-solid fa-ticket text-7xl text-red-500 drop-shadow-[0_0_25px_rgba(229,9,20,0.7)] -rotate-12"></i><i className="fa-solid fa-fire text-3xl text-orange-400 absolute -top-2 left-2 drop-shadow-md animate-bounce"></i><i className="fa-solid fa-play text-2xl text-red-300 absolute -bottom-1 -right-2 drop-shadow-md"></i></div></div></div>

      </div>
      </div>


      {activePromo > 0 && (
      <button className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-velora-gold/60 items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg hover:scale-110 cursor-pointer backdrop-blur-sm hidden lg:flex" id="promo-prev-btn" onClick={() => goToPromo(activePromo - 1)} style={{ top: 'calc(50% - 12px)', transform: 'translateY(-50%)' }} title="Previous Promo" aria-label="Promoción anterior">
      <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>
      )}

      <button className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-velora-gold/60 items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg hover:scale-110 cursor-pointer backdrop-blur-sm hidden lg:flex" id="promo-next-btn" onClick={() => goToPromo(activePromo + 1)} style={{ top: 'calc(50% - 12px)', transform: 'translateY(-50%)' }} title="Next Promo" aria-label="Promoción siguiente">
      <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>

      <div className="flex items-center justify-center gap-2 mt-4">
      <button aria-label="Go to slide 1" onClick={() => goToPromo(0)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePromo === 0 ? 'w-7 bg-velora-gold shadow-glow-gold' : 'w-2 bg-white/20 hover:bg-white/40'}`} id="promo-dot-0" />
      <button aria-label="Go to slide 2" onClick={() => goToPromo(1)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePromo === 1 ? 'w-7 bg-velora-gold shadow-glow-gold' : 'w-2 bg-white/20 hover:bg-white/40'}`} id="promo-dot-1" />
      </div>
      </div>
      <div aria-hidden="true" className="hidden" id="carousel-touch-listener"></div></section>
  )
}
