import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listByCategory, listByType, listNew, searchGames } from '../api/games'
import GamesCarousel from '../components/games/GamesCarousel'
import HomePromos from '../components/home/HomePromos'
import GamesGrid from '../components/games/GamesGrid'
import useGames from '../hooks/useGames'
import { useLanguage } from '../i18n'
import HomeAside from '../components/home/HomeAside'

/**
 * Home — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Home() {
  const slotsSection = useGames('home:slots', ({ signal }) =>
    listByCategory('casino', { signal, perPage: 12 }),
  )
  const crashSection = useGames('home:crash', ({ signal }) =>
    listByType('crash', { signal, perPage: 12 }),
  )
  const liveSection = useGames('home:live', ({ signal }) =>
    listByCategory('casino_live', { signal, perPage: 12 }),
  )
  const newSection = useGames('home:new', ({ signal }) =>
    listNew({ signal, perPage: 12 }),
  )

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  const { language } = useLanguage()
  const isEs = language === 'es'
  const tr = (es, en) => (isEs ? es : en)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery.trim()), 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const searchState = useGames(`search:${debouncedQuery}`, ({ signal }) =>
    debouncedQuery ? searchGames(debouncedQuery, { signal, perPage: 24 }) : Promise.resolve({ games: [] }),
  )

  const isSearching = searchQuery.trim().length > 0



  return (
    <div className="text-slate-200 font-sans antialiased selection:bg-velora-red selection:text-white min-h-screen flex flex-col" style={{ backgroundColor: '#000000' }}>

      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden flex" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>

      {!isSearching && <HomePromos />}


      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8 w-full">

      {!isSearching && <HomeAside />}


      <div className="flex-1 flex flex-col gap-10 min-w-0" data-purpose="games-catalog">

      <div className="flex flex-col justify-between gap-3 border-b border-velora-borderSubtle pb-4 md:flex-row md:items-center md:gap-4">
      

      {!isSearching && (
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
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
      )}
      <div className="relative w-full shrink-0 md:w-64 mr-10">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
      <input
        className="w-full rounded-xl border border-velora-borderSubtle bg-velora-surface py-3 pl-10 pr-9 text-xs text-white placeholder-slate-500 transition-all focus:border-velora-gold/50 focus:outline-none focus:ring-1 focus:ring-velora-gold/50"
        placeholder="Search games, tables..."
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          aria-label={isEs ? 'Limpiar búsqueda' : 'Clear search'}
          className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:text-white"
        >
          <i className="fa-solid fa-xmark text-[11px]"></i>
        </button>
      )}
      </div>
      </div>

      {isSearching ? (
      <section data-purpose="search-results">
      <div className="flex items-center justify-between mb-5">
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">
                  {tr('Resultados para', 'Results for')} “{searchQuery.trim()}”
                </h2>
      {searchState.status === 'ready' && (
        <span className="text-xs text-slate-400 font-medium">
          {searchState.games.length} {isEs ? (searchState.games.length === 1 ? 'juego' : 'juegos') : (searchState.games.length === 1 ? 'game' : 'games')}
        </span>
      )}
      </div>
      <GamesGrid
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        games={searchState.games}
        status={searchState.status}
        error={searchState.error}
        retry={searchState.retry}
        skeletonCount={10}
        emptyMessage={tr(
          `No se encontraron juegos para “${searchQuery.trim()}”.`,
          `No games found for “${searchQuery.trim()}”.`,
        )}
      />
      </section>
      ) : (
      <>
      <section data-purpose="slots-section">
      <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-gold rounded-full shadow-glow-gold"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">Slots</h2>
      <span className="text-xs text-slate-400 font-medium">Top performing titles</span>
      </div>
      <Link to="/casino" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-gold/15 border border-velora-gold/30 hover:bg-velora-gold text-velora-gold hover:text-slate-900 text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link>
      </div>

      <GamesCarousel {...slotsSection} label="juegos de slots" />
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

      <GamesCarousel {...crashSection} label="juegos crash" />
      </section>

      <section data-purpose="live-casino-section">
      <div className="flex items-center justify-between mb-5"><div className="flex items-center gap-3">
      <div className="w-2.5 h-6 bg-velora-red rounded-full shadow-[0_0_12px_rgba(229,9,20,0.6)]"></div>
      <h2 className="font-cinzel text-xl font-bold uppercase tracking-wider text-white">Casino Live</h2>
      <div className="hidden items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-velora-red/10 border border-velora-red/30 text-[10px] text-velora-red font-bold lg:flex">
      <span className="w-2 h-2 rounded-full bg-velora-red animate-pulse"></span>
      </div>
      </div>
      <Link to="/casino-live" className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full sm:px-3.5 sm:py-1.5 bg-velora-red/15 border border-velora-red/30 hover:bg-velora-red text-velora-red hover:text-white text-[10px] font-bold uppercase sm:text-xs tracking-wider transition-all flex items-center gap-1.5"><span className="">View all</span><i className="fa-solid fa-chevron-right text-[9px] sm:text-[10px]"></i></Link></div>

      <GamesCarousel {...liveSection} label="mesas en vivo" />
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

      <GamesCarousel {...newSection} label="juegos nuevos" />
      </section>
      </>
      )}

       </div>
      </div>
    </div>
  )
}
