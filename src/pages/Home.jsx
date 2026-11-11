import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GameCarousel from '../components/GameCarousel'
import { homeGameSections } from '../data/homeGames'

/**
 * Home — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
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

export default function Home() {
  const navigate = useNavigate()
  const [activePromo, setActivePromo] = useState(0)
  const [promoTick, setPromoTick] = useState(0)

  const openGame = (game) => navigate(`/game/${game.id}`)

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
    <div className="text-slate-200 font-sans antialiased selection:bg-velora-red selection:text-white min-h-screen flex flex-col" style={{ backgroundColor: '#000000' }}>





      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden flex" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/home/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      <nav className="flex flex-col py-6 space-y-2">
      <Link to="/" className="px-4 py-3 rounded-xl bg-velora-gold/15 text-velora-gold font-bold text-sm tracking-widest uppercase border border-velora-gold/30 transition-all">Home</Link>
      <Link to="/casino" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Casino</Link>
      <Link to="/casino-live" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Casino Live</Link>
      <Link to="/poker" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Poker</Link>
      <Link to="/virtual" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Virtual</Link>
      <Link to="/promotions" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Promotions</Link>

      <Link to="/account" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Profile</Link>
      <Link to="/account/messages" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Messages</Link>
      </nav>
      </div>

      <section className="relative overflow-hidden border-b border-velora-borderSubtle bg-gradient-to-r from-[#0C0E17] via-[#151221] to-[#0A0C13]" id="hero-promo-carousel">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-6 relative group">

      <div
      className="relative overflow-hidden rounded-2xl min-h-[220px] border border-white/10 shadow-2xl backdrop-blur-md"
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
      <span className="">Deposit Now</span>
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

      <div className="promo-slide hidden flex-col md:flex-row items-center justify-between p-6 lg:p-8 bg-gradient-to-br from-[#200508]/95 via-[#0e0f14]/95 to-[#07080b] border border-red-500/40 rounded-2xl relative overflow-hidden transition-all duration-500 w-full" id="promo-slide-1" style={promoSlideStyle(1, activePromo)}><div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div><div className="absolute -bottom-10 -left-10 w-44 h-44 bg-velora-red/15 rounded-full blur-2xl pointer-events-none"></div><div className="relative z-10 max-w-xl pl-10"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-600/25 to-velora-red/10 border border-red-500/40 text-[10px] font-black text-red-300 tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(229,9,20,0.3)]"><i className="fa-solid fa-fire text-red-400 text-[11px] animate-pulse"></i><span className="">Free Spins Frenzy</span></div><h2 className="font-cinzel text-2xl lg:text-3xl font-black text-white tracking-wide uppercase leading-tight mb-2 drop-shadow-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">20 FREE SPINS</span></h2><p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-5 max-w-md">Spin to win on top Pragmatic Play &amp; ChimeraSpin slots. Claim spins daily with 0x wager.</p><button className="ruby-gradient-btn text-white font-extrabold px-7 py-3 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer hover:scale-[1.02] border border-red-400/30"><span className="">Play Spins</span><i className="fa-solid fa-arrow-right text-[11px]"></i></button></div><div className="relative z-10 hidden md:flex items-center justify-center pr-6 lg:pr-12 pointer-events-none pl-10"><div className="relative w-40 h-40 flex items-center justify-center"><div className="absolute inset-0 rounded-full bg-red-600/15 blur-xl animate-pulse"></div><i className="fa-solid fa-ticket text-7xl text-red-500 drop-shadow-[0_0_25px_rgba(229,9,20,0.7)] -rotate-12"></i><i className="fa-solid fa-fire text-3xl text-orange-400 absolute -top-2 left-2 drop-shadow-md animate-bounce"></i><i className="fa-solid fa-play text-2xl text-red-300 absolute -bottom-1 -right-2 drop-shadow-md"></i></div></div></div>

      </div>
      </div>


      <button className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-velora-gold/60 items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg hover:scale-110 cursor-pointer backdrop-blur-sm hidden lg:flex" id="promo-prev-btn" onClick={() => goToPromo(activePromo - 1)} style={{ top: 'calc(50% - 12px)', transform: 'translateY(-50%)' }} title="Previous Promo">
      <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>

      <button className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-velora-gold/60 items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg hover:scale-110 cursor-pointer backdrop-blur-sm hidden lg:flex" id="promo-next-btn" onClick={() => goToPromo(activePromo + 1)} style={{ top: 'calc(50% - 12px)', transform: 'translateY(-50%)' }} title="Next Promo">
      <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>

      <div className="flex items-center justify-center gap-2 mt-4">
      <button aria-label="Go to slide 1" onClick={() => goToPromo(0)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePromo === 0 ? 'w-7 bg-velora-gold shadow-glow-gold' : 'w-2 bg-white/20 hover:bg-white/40'}`} id="promo-dot-0" />
      <button aria-label="Go to slide 2" onClick={() => goToPromo(1)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePromo === 1 ? 'w-7 bg-velora-gold shadow-glow-gold' : 'w-2 bg-white/20 hover:bg-white/40'}`} id="promo-dot-1" />
      </div>
      </div>
      <div aria-hidden="true" className="hidden" id="carousel-touch-listener"></div></section>


      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8 w-full">

      <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 flex flex-col gap-6" data-purpose="sidebar-navigation">

      <div className="relative cursor-pointer">
      <input className="w-full bg-velora-surface border border-velora-borderSubtle focus:border-velora-gold/50 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-velora-gold/50 transition-all cursor-pointer" placeholder="Search games, tables..." type="text" />
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
      </div>

      <div className="bg-velora-surface/70 border border-velora-borderSubtle rounded-2xl p-4 backdrop-blur-sm">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 px-3 pb-3 border-b border-white/5">
                Game Categories
              </h3>
      <ul className="mt-3 space-y-1">
      <li className="">
      <Link to="/casino" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-fire text-velora-red w-4 text-center"></i>
      <span className="">Popular Picks</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">142</span>
      </Link>
      </li>
      <li className="">
      <Link to="/casino" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group"><div className="flex items-center gap-3"><i className="fa-solid fa-dice-d6 text-velora-gold w-4 text-center"></i><span className="">Slots &amp; Jackpots</span></div><span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">850+</span></Link>
      </li>
      <li className="">
      <Link to="/casino-live" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-video text-emerald-400 w-4 text-center"></i>
      <span className="">Casino Live</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">120</span>
      </Link>
      </li>
      <li className="">
      <Link to="/crash-games" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-chart-line text-blue-400 w-4 text-center"></i>
      <span className="">Crash Games</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">38</span>
      </Link>
      </li>
      <li className="">
      <Link to="/poker" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M12 2C9.5 5.5 6 8.5 6 12c0 2.8 2.2 4.5 4.5 4.5.8 0 1.5-.2 2-.6.1.5-.2 1.6-1.5 2.6H8v1.5h8V18.5h-3c-1.3-1-1.6-2.1-1.5-2.6.5.4 1.2.6 2 .6 2.3 0 4.5-1.7 4.5-4.5 0-3.5-3.5-6.5-6-10z"></path></svg>
      <span className="">Poker Rooms</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">24</span>
      </Link>
      </li>
      <li className="">
      <Link to="/casino" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-ticket text-amber-400 w-4 text-center"></i>
      <span className="">Scratch &amp; Lotteries</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">19</span>
      </Link>
      </li>
      <li className="">
      <Link to="/virtual" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-trophy text-slate-400 w-4 text-center"></i>
      <span className="">Virtual Sports</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">45</span>
      </Link>
      </li>
      </ul>
      </div>

      <div className="bg-velora-surface/70 border border-velora-borderSubtle rounded-2xl p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Top Providers
                </h3>
      <span className="text-[10px] text-velora-gold cursor-pointer hover:underline">All (34)</span>
      </div>

      <div className="relative my-3 cursor-pointer">
      <input className="w-full bg-[#08090E] border border-white/5 focus:border-velora-gold/40 rounded-lg py-2 pl-8 pr-3 text-[11px] text-white placeholder-slate-600 focus:outline-none cursor-pointer" placeholder="Search provider..." type="text" />
      <i className="fa-solid fa-filter absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600 text-[10px]"></i>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-velora-red flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-gem text-xs text-velora-red"></i> RubyPlay
                  </span>
      </button>

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-amber-500 flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-pepper-hot text-xs text-amber-500"></i> Habanero
                  </span>
      </button>

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-cyan-400 flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-play text-xs text-cyan-400"></i> Evolution
                  </span>
      </button>

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-orange-400 flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-crown text-xs text-orange-400"></i> Pragmatic
                  </span>
      </button>

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-blue-400 flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-circle-notch text-xs text-blue-400"></i> IGT
                  </span>
      </button>

      <button className="h-12 bg-[#0A0C13] hover:bg-[#121622] border border-white/5 hover:border-velora-gold/40 rounded-xl flex items-center justify-center p-2 transition-all group">
      <span className="text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
      <i className="fa-solid fa-bolt text-xs text-emerald-400"></i> 1X2Gaming
                  </span>
      </button>
      </div>
      </div>

      </aside>


      <div className="flex-1 flex flex-col gap-10 min-w-0" data-purpose="games-catalog">

      <div className="flex items-center justify-between border-b border-velora-borderSubtle pb-4 overflow-x-auto gap-3">
      <div className="flex items-center gap-2">
      <button className="btn-primary rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap">All Games</button>
      <button className="px-4 py-2 rounded-xl bg-velora-surface hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer">
                  Popular Slots
                </button>
      <button className="px-4 py-2 rounded-xl bg-velora-surface hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer">
                  Live High-Stakes
                </button>
      <button className="px-4 py-2 rounded-xl bg-velora-surface hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer">
                  Bonus Buy
                </button>
      <button className="px-4 py-2 rounded-xl bg-velora-surface hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer">
                  Roulette &amp; Baccarat
                </button>
      </div>
      </div>

      <section data-purpose="slots-section">
      <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-gold rounded-full shadow-glow-gold"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">Slots</h2>
      <span className="text-xs text-slate-400 font-medium">Top performing titles</span>
      </div>
      <Link to="/casino" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-gold/15 border border-velora-gold/30 hover:bg-velora-gold text-velora-gold hover:text-slate-900 text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link>
      </div>

      <GameCarousel games={homeGameSections.slots} label="juegos de slots" onPlay={openGame} />
      </section>

      <section data-purpose="crash-games-section">
      <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-gold rounded-full shadow-glow-gold"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">Crash Games</h2>
      <span className="text-xs text-slate-400 font-medium">Instant wins &amp; multipliers</span>
      </div>
      <Link to="/crash-games" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-gold/15 border border-velora-gold/30 hover:bg-velora-gold text-velora-gold hover:text-slate-900 text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link>
      </div>

      <GameCarousel games={homeGameSections.crashGames} label="juegos crash" onPlay={openGame} />
      </section>

      <section data-purpose="live-casino-section">
      <div className="flex items-center justify-between mb-5"><div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-red rounded-full shadow-[0_0_12px_rgba(229,9,20,0.6)]"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">Casino Live</h2>
      <div className="hidden items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-velora-red/10 border border-velora-red/30 text-[10px] text-velora-red font-bold lg:flex">
      <span className="w-2 h-2 rounded-full bg-velora-red animate-pulse"></span>
      <span className="">128 DEALERS ACTIVE</span>
      </div>
      </div>
      <Link to="/casino-live" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-red/15 border border-velora-red/30 hover:bg-velora-red text-velora-red hover:text-white text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link></div>

      <GameCarousel games={homeGameSections.casinoLive} label="mesas en vivo" onPlay={openGame} />
      </section>

      <section data-purpose="new-games-section">
      <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-gold rounded-full shadow-glow-gold"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">New Games</h2>
      <span className="text-xs text-slate-400 font-medium">Premiered this week</span>
      </div>
      <Link to="/casino" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-gold/15 border border-velora-gold/30 hover:bg-velora-gold text-velora-gold hover:text-slate-900 text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link>
      </div>

      <GameCarousel games={homeGameSections.newGames} label="juegos nuevos" onPlay={openGame} />
      </section>

      </div>

      </div>










    </div>
  )
}
