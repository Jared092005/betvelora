import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/GameFilters'
import GamesFooter from '../components/GamesFooter'
import GamesGrid from '../components/GamesGrid'
import { useCallback, useEffect, useRef } from 'react'

/**
 * Crash Games — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const WINNERS_INTERVAL_MS = 4000
const WINNERS_GAP_PX = 16

const CRASH_FILTERS = [
  { key: 'all', label: 'Lobby', icon: 'fa-solid fa-house text-amber-400', filter: { mode: 'type', value: 'crash' } },
]

export default function CrashGames() {
  const {
    games,
    status,
    error,
    retry,
    pagination,
    hasMore,
    loadingMore,
    loadMore,
    brands,
    brand,
    select,
    selectBrand,
  } = useGameBrowser({ category: 'crash', baseMode: 'type', baseValue: 'crash', brandMode: 'client' })

  const activeKey = brand ? null : 'all'

  const winnersRef = useRef(null)

  const stepWinners = useCallback((direction) => {
    const track = winnersRef.current
    if (!track) return

    const card = track.firstElementChild
    const step = card
      ? card.getBoundingClientRect().width + WINNERS_GAP_PX
      : track.clientWidth
    const maxScroll = track.scrollWidth - track.clientWidth
    if (maxScroll <= 0) return

    if (direction > 0 && track.scrollLeft >= maxScroll - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction < 0 && track.scrollLeft <= 8) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: direction * step, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => stepWinners(1), WINNERS_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [stepWinners])

  return (
    <div className="bg-black text-slate-100 min-h-screen font-sans selection:bg-[#e60026] selection:text-white antialiased flex flex-col">





      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/casino/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>
      <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2" data-purpose="top-winners-section"><div className="bg-gradient-to-b from-[#121317] via-[#0d0e12] to-black rounded-2xl border border-[#d4af37]/30 p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative overflow-hidden"><div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-5"><div className="flex items-center gap-3.5"><div><div className="flex items-center gap-2"><h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">TOP WINNERS OF THE MONTH</h2></div></div></div><div className="hidden lg:flex items-center gap-2 self-end md:self-auto"><div className="flex items-center gap-2"><button aria-label="Previous winners" onClick={() => stepWinners(-1)} className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button><button aria-label="Next winners" onClick={() => stepWinners(1)} className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button></div></div></div><div id="winners-carousel" ref={winnersRef} className="flex overflow-x-auto gap-4 scroll-smooth pb-1" style={{ scrollbarWidth: 'none' }}>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Cleo's Gold" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/796042ea2c3c.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">06 oct., 2026 07:04</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Jolly Roger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/2154e07e214b.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">15,420 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">06 oct., 2026 05:32</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crocoman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/4f5ec0104cb2.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">12,850 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 22:15</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crystal Sevens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/846383f6b97b.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,780 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 19:42</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Caishen's Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/9932903d3cfa.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 82****30</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">9,450 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 14:10</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Chinese Tigers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/8e9e7e87de7d.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 91****14</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">8,320 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 23:55</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Book of Egypt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/c22f51178487.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 36****62</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,835 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 23:18</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Bison Trail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/68b99a39688f.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 57****88</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,940 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 18:02</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crazy Jelly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/9999ef74087a.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 64****23</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,315 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 15:30</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Zombie Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/2817d5f54810.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 19****77</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">5,120 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 11:45</div>
          </div>
        </div>
      </div></div></section><div className="flex-1 max-w-[1920px] w-full mx-auto flex border-t border-[#d4af37]/20 flex-col lg:flex-row">

      <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#07080b]/75 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 py-3 lg:py-6 px-4 flex flex-col gap-4 lg:gap-8 lg:overflow-y-auto lg:max-h-[calc(100vh-80px)] lg:sticky lg:top-20" data-purpose="casino-navigation-sidebar">
      <GameFilters
        title="Crash Games"
        items={CRASH_FILTERS}
        brands={brands}
        activeKey={activeKey}
        activeBrand={brand?.id ?? null}
        onSelect={select}
        onSelectBrand={selectBrand}
      />
    </aside>


      <div className="flex-1 min-w-0 bg-black/40 p-4 sm:p-6 lg:p-8" data-purpose="casino-games-catalog">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

      <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
      <i className="fa-solid fa-rocket text-white text-2xl" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.75) 0px 0px 8px)' }}></i>
      <h1 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">Crash Lobby</h1>
      </div>

      <span className="bg-white/[0.06] border border-white/10 text-xs font-medium tracking-wide px-3 py-1 rounded-full inline-flex items-center gap-1"><span className="font-bold text-white">{pagination?.total ?? games.length}</span><span className="text-slate-400 font-normal">Games</span></span>
      </div>

      <div className="relative w-full md:w-80">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
      <i className="fa-solid fa-magnifying-glass text-xs"></i>
      </div>
      <input className="w-full bg-[#0d0e12] hover:bg-[#121317] focus:bg-[#121317] border border-white/[0.1] focus:border-[#E6A15C] rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#E6A15C] transition-all cursor-pointer" placeholder="Search game..." type="search" />
      </div>
      </div>


      <GamesGrid
        className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-3"
        games={games}
        status={status}
        error={error}
        retry={retry}
      />


      <GamesFooter
        shown={games.length}
        total={Number(pagination?.total ?? games.length)}
        hasMore={hasMore}
        loadingMore={loadingMore}
        onLoadMore={loadMore}
        label="games"
      />
      </div>

      </div>




















    </div>
  )
}
