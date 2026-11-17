import { casinoLiveWinners } from '../data/topWinners'
import TopWinnersOfTheMonth from '../components/games/TopWinnersOfTheMonth'
import InfiniteScrollSentinel from '../components/games/InfiniteScrollSentinel'
import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/games/GameFilters'
import GamesGrid from '../components/games/GamesGrid'
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
    hasMore,
    loadMore,
    brand,
    select,
    selectBrand,
  } = useGameBrowser({ category: 'casino_live' })

  const activeKey = brand ? null : 'all'


  return (
    <div className="bg-[#070709] text-slate-200 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-black">




      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>


      <TopWinnersOfTheMonth winners={casinoLiveWinners} games={games} />


      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

      <aside className="w-full lg:w-64 shrink-0 space-y-5 lg:space-y-7" data-purpose="live-sidebar">
      <GameFilters
        title="Casino Live"
        items={LIVE_FILTERS}
        category="casino_live"
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
      <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">
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
      <InfiniteScrollSentinel key={games.length} hasMore={hasMore} onLoad={loadMore} />
      </section>

      </div>
      </div>











    </div>
  )
}
