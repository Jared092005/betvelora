import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/GameFilters'
import GamesFooter from '../components/GamesFooter'
import GamesGrid from '../components/GamesGrid'
/**
 * Casino Live — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const LIVE_FILTERS = [
  { key: 'all', label: 'Todos los juegos', icon: 'fa-solid fa-table-cells text-[#d4af37]', filter: { mode: 'category', value: 'casino_live' } },
]

export default function CasinoLive() {
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
  } = useGameBrowser({ category: 'casino_live' })

  const activeKey = brand ? null : 'all'


  return (
    <div className="bg-[#070709] text-slate-200 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-black">




      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/casino-live/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>


      <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2" data-purpose="top-winners-section">
      <div className="bg-gradient-to-b from-[#181a20] via-[#121317] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-5">
      <div className="flex items-center gap-3.5">
      <div>
      <div className="flex items-center gap-2">
      <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">TOP WINNERS OF THE MONTH</h2>
      </div>
      </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 self-end md:self-auto"><div className="flex items-center gap-2"><button aria-label="Previous winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button><button aria-label="Next winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button></div></div>
      </div>
      <div id="top-winners-track" className="flex flex-row flex-nowrap gap-4 overflow-x-auto pb-2 scroll-smooth items-stretch" style={{ scrollbarWidth: 'none' }}><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Lightning Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/b65eed1bd941.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">06 oct., 2026 07:04</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat L" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/c4a3fb4511b3.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">15,420 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">05 oct., 2026 21:18</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="VIP Blackjack Diamond" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/490d1990721c.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">12,850 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">05 oct., 2026 19:42</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Crazy Time Live" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/af5f6af62fe6.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,780 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 23:18</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/da2067213ffa.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 82****10</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">9,450 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 15:30</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Mega Ball 100x" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/da39c968ef37.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 91****34</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">8,200 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 11:05</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Immersive Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/d0971bd5093e.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 39****62</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,835 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">03 oct., 2026 18:22</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Infinite Blackjack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/593c9c4c3ca2.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 56****77</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,315 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">02 oct., 2026 22:45</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat G" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/ac89604b2606.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 64****88</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">5,940 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">02 oct., 2026 14:10</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat M" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/54fd14a701b8.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 19****45</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">4,850 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">01 oct., 2026 16:50</div></div></div></div>
      </div>
      </section>


      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

      <aside className="w-full lg:w-64 shrink-0 space-y-5 lg:space-y-7" data-purpose="live-sidebar">
      <GameFilters
        title="Casino Live"
        items={LIVE_FILTERS}
        brands={brands}
        activeKey={activeKey}
        activeBrand={brand?.id ?? null}
        onSelect={select}
        onSelectBrand={selectBrand}
      />
    </aside>


      <section className="flex-1 min-w-0 w-full" data-purpose="live-tables-container">

      <div className="flex flex-col gap-5 mb-7">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-white"><i className="fa-solid fa-video text-sm text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.75))' }}></i></div>
      <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white flex items-center gap-2">
                      CASINO LIVE
                
      </h2>
      </div>

      <div className="relative w-full md:w-80">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
      <input className="w-full bg-[#10121a] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm rounded-xl pl-10 pr-4 py-2.5 placeholder-slate-500 transition-all cursor-pointer" placeholder="Search live table..." type="text" />
      </div>
      </div>

      </div>

      <GamesGrid
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-3"
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
        label="liveTables"
      />
      </section>

      </div>
      </div>











    </div>
  )
}
