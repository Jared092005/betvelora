import { virtualWinners } from '../data/topWinners'
import TopWinnersOfTheMonth from '../components/games/TopWinnersOfTheMonth'
import InfiniteScrollSentinel from '../components/games/InfiniteScrollSentinel'
import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/games/GameFilters'
import GamesGrid from '../components/games/GamesGrid'
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
    hasMore,
    loadMore,
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

      <TopWinnersOfTheMonth winners={virtualWinners} games={games} />


      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 py-6 flex flex-col lg:flex-row gap-8 flex-1" data-purpose="virtual-lobby-main">

      <aside className="w-full lg:w-64 shrink-0" data-purpose="virtual-sidebar">
      <GameFilters
        title="Virtual"
        items={VIRTUAL_FILTERS}
        category="virtual"
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
      <InfiniteScrollSentinel key={games.length} hasMore={hasMore} onLoad={loadMore} />
      </section>
      </div>











    </div>
  )
}
