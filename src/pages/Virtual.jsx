import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/GameFilters'
import GamesFooter from '../components/GamesFooter'
import GamesGrid from '../components/GamesGrid'
/**
 * Virtual — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const VIRTUAL_FILTERS = [
  { key: 'all', label: 'All games', icon: 'fa-solid fa-table-cells text-[#d4af37]', filter: { mode: 'category', value: 'virtual' } },
]

export default function Virtual() {
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
  } = useGameBrowser({ category: 'virtual', brandMode: 'client' })

  const activeKey = brand ? null : 'all'


  return (
    <div className="bg-[#000000] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-[#d4af37]/30 selection:text-white">




      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/virtual/bcee34ed446e.jpg" />
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
      <div className="hidden items-center gap-2 self-end md:self-auto lg:flex">
      <div className="flex items-center gap-2">
      <button aria-label="Previous winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button>
      <button aria-label="Next winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button>
      </div>
      </div>
      </div>

      <div className="flex gap-4 lg:gap-5 overflow-x-auto pb-2 scroll-smooth no-scrollbar" id="winners-carousel-track" style={{ scrollbarWidth: 'none', MsOverflowStyle: 'none' }}>

      <div className="min-w-[280px] sm:min-w-[300px] flex-1 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Virtual Champions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/virtual/3b786c5ea956.jpg" /></div>
      <div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">06 oct., 2026 07:04</div></div>
      </div>

      <div className="min-w-[280px] sm:min-w-[300px] flex-1 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Virtual Cup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/virtual/56c6071fc56a.jpg" /></div>
      <div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,780 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">05 oct., 2026 19:42</div></div>
      </div>

      <div className="min-w-[280px] sm:min-w-[300px] flex-1 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Virtual Europa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/virtual/cab43dce9c48.jpg" /></div>
      <div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,835 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 23:18</div></div>
      </div>

      <div className="min-w-[280px] sm:min-w-[300px] flex-1 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Virtual Euros" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/virtual/869274c43ff9.jpg" /></div>
      <div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,315 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 15:30</div></div>
      </div>
      </div>
      </div>
      </section>


      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 py-6 flex flex-col lg:flex-row gap-8 flex-1" data-purpose="virtual-lobby-main">

      <aside className="w-full lg:w-64 shrink-0" data-purpose="virtual-sidebar">
      <GameFilters
        title="Virtual"
        items={VIRTUAL_FILTERS}
        brands={brands}
        activeKey={activeKey}
        activeBrand={brand?.id ?? null}
        onSelect={select}
        onSelectBrand={selectBrand}
      />
    </aside>

      <section className="flex-1 min-w-0" data-purpose="virtual-games-section">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">

      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#121317] border border-[#d4af37]/60 flex items-center justify-center text-white shadow-[0_0_12px_rgba(212,175,55,0.3)]">
      <i className="fa-solid fa-gamepad text-base text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.75))' }}></i>
      </div>
      <div className="flex items-center gap-2.5">
      <h1 className="font-serif font-bold text-2xl lg:text-3xl tracking-wider text-white uppercase drop-shadow">
              VIRTUAL
            </h1>
      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#d4af37]">{pagination?.total ?? games.length} Games</span>
      </div>
      </div>

      <div className="relative w-full sm:w-72">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
      <input className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-[#121317] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/50 transition-all hover:border-white/20" placeholder="Search virtual game..." type="text" />
      </div>
      </div>


      <GamesGrid
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 xl:grid-cols-5 xl:gap-3"
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
        label="virtualGames"
      />
      </section>
      </div>











    </div>
  )
}
