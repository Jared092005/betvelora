import { pokerWinners } from '../data/topWinners'
import TopWinnersOfTheMonth from '../components/games/TopWinnersOfTheMonth'
import InfiniteScrollSentinel from '../components/games/InfiniteScrollSentinel'
import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/games/GameFilters'
import GamesGrid from '../components/games/GamesGrid'
/**
 * Poker — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const POKER_FILTERS = [
  { key: 'all', label: 'All games', icon: 'fa-solid fa-table-cells text-[#d4af37]', filter: { mode: 'category', value: 'poker' } },
]

export default function Poker() {
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
  } = useGameBrowser({ category: 'poker' })

  const activeKey = brand ? null : 'all'


  return (
    <div className="bg-[#000000] text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-[#d4af37]/30 selection:text-white">



      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden flex hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/poker/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>

      <TopWinnersOfTheMonth winners={pokerWinners} games={games} />


      <div className="flex-1 max-w-[1920px] w-full mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row gap-8" data-purpose="poker-main-layout">

      <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6" data-purpose="poker-sidebar">
      <GameFilters
        title="Poker"
        items={POKER_FILTERS}
        category="poker"
        activeKey={activeKey}
        activeBrand={brand?.id ?? null}
        onSelect={select}
        onSelectBrand={selectBrand}
      />
    </aside>


      <section className="flex-1 flex flex-col gap-6" data-purpose="poker-games-view">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2"><div className="flex items-center gap-3.5"><div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.25)]"><svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2.25c-.32 0-.62.14-.83.39C9.28 4.96 4.5 10.64 4.5 14.5c0 3.17 2.47 5.75 5.56 5.75.96 0 1.86-.25 2.66-.69-.17.84-.52 2.15-1.97 2.69-.32.12-.5.45-.44.78.06.33.35.57.69.57h3c.34 0 .63-.24.69-.57.06-.33-.12-.66-.44-.78-1.45-.54-1.8-1.85-1.97-2.69.8.44 1.7.69 2.66.69 3.09 0 5.56-2.58 5.56-5.75 0-3.86-4.78-9.54-6.67-11.86-.21-.25-.51-.39-.83-.39z"></path></svg></div><div className="flex items-center gap-2.5"><h1 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">POKER</h1></div></div><div className="relative w-full sm:w-72 md:w-80" data-purpose="poker-search-container"><div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"><i className="fa-solid fa-magnifying-glass text-xs"></i></div><input className="w-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 transition-all outline-none" placeholder="Search poker game..." type="text" /></div></div>

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
