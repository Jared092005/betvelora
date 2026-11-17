import { crashWinners } from '../data/topWinners'
import TopWinnersOfTheMonth from '../components/games/TopWinnersOfTheMonth'
import InfiniteScrollSentinel from '../components/games/InfiniteScrollSentinel'
import useGameBrowser from '../hooks/useGameBrowser'
import GameFilters from '../components/games/GameFilters'
import GamesGrid from '../components/games/GamesGrid'

/**
 * Crash Games — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const CRASH_FILTERS = [
  { key: 'all', label: 'Lobby', icon: 'fa-solid fa-house text-amber-400', filter: { mode: 'type', value: 'crash' } },
]

export default function CrashGames() {
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
  } = useGameBrowser({ category: 'crash', baseMode: 'type', baseValue: 'crash', brandMode: 'client' })

  const activeKey = brand ? null : 'all'


  return (
    <div className="bg-black text-slate-100 min-h-screen font-sans selection:bg-[#e60026] selection:text-white antialiased flex flex-col">





      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/casino/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>
      <TopWinnersOfTheMonth winners={crashWinners} games={games} /><div className="flex-1 max-w-[1920px] w-full mx-auto flex border-t border-[#d4af37]/20 flex-col lg:flex-row">

      <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#07080b]/75 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 py-3 lg:py-6 px-4 flex flex-col gap-4 lg:gap-8 lg:overflow-y-auto lg:max-h-[calc(100vh-80px)] lg:sticky lg:top-20" data-purpose="casino-navigation-sidebar">
      <GameFilters
        title="Crash Games"
        items={CRASH_FILTERS}
        category="crash"
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
      <InfiniteScrollSentinel key={games.length} hasMore={hasMore} onLoad={loadMore} />
      </div>

      </div>




















    </div>
  )
}
