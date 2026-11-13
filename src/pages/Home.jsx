import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listBrands, listByCategory, listByType, listNew, searchGames } from '../api/games'
import GamesCarousel from '../components/GamesCarousel'
import HomePromos from '../components/HomePromos'
import GamesGrid from '../components/GamesGrid'
import useGames from '../hooks/useGames'
import useGameCounts from '../hooks/useGameCounts'
import { useLanguage } from '../i18n'

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

  const counts = useGameCounts()
  const [providers, setProviders] = useState([])
  const [providerQuery, setProviderQuery] = useState('')

  useEffect(() => {
    let active = true
    listBrands()
      .then((list) => {
        if (active) setProviders((list || []).map((brand) => ({ id: String(brand.Id), name: brand.Name })))
      })
      .catch(() => {
        if (active) setProviders([])
      })
    return () => {
      active = false
    }
  }, [])

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(providerQuery.trim().toLowerCase()),
  )

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

      {!isSearching && <HomePromos />}


      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8 w-full">

      {!isSearching && (
      <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 flex flex-col gap-6" data-purpose="sidebar-navigation">

      <div className="bg-velora-surface/70 border border-velora-borderSubtle rounded-2xl p-4 backdrop-blur-sm">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 px-3 pb-3 border-b border-white/5">
                Game Categories
              </h3>
      <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 scroll-smooth lg:block lg:space-y-1 lg:overflow-visible lg:pb-0" style={{ scrollbarWidth: 'none' }}>
      <li className="shrink-0">
      <Link to="/casino" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-fire text-velora-red w-4 text-center"></i>
      <span className="">Popular Picks</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.popular ?? '…'}</span>
      </Link>
      </li>
      <li className="shrink-0">
      <Link to="/casino?type=slot" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"><div className="flex items-center gap-3"><i className="fa-solid fa-dice-d6 text-velora-gold w-4 text-center"></i><span className="">Slots</span></div><span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.slots ?? '…'}</span></Link>
      </li>
      <li className="shrink-0">
      <Link to="/casino-live" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-video text-emerald-400 w-4 text-center"></i>
      <span className="">Casino Live</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.live ?? '…'}</span>
      </Link>
      </li>
      <li className="shrink-0">
      <Link to="/crash-games" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-chart-line text-blue-400 w-4 text-center"></i>
      <span className="">Crash Games</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.crash ?? '…'}</span>
      </Link>
      </li>
      <li className="shrink-0">
      <Link to="/poker" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M12 2C9.5 5.5 6 8.5 6 12c0 2.8 2.2 4.5 4.5 4.5.8 0 1.5-.2 2-.6.1.5-.2 1.6-1.5 2.6H8v1.5h8V18.5h-3c-1.3-1-1.6-2.1-1.5-2.6.5.4 1.2.6 2 .6 2.3 0 4.5-1.7 4.5-4.5 0-3.5-3.5-6.5-6-10z"></path></svg>
      <span className="">Poker Rooms</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.poker ?? '…'}</span>
      </Link>
      </li>
      <li className="shrink-0">
      <Link to="/casino?type=scratch" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-ticket text-amber-400 w-4 text-center"></i>
      <span className="">Scratch &amp; Lotteries</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.scratch ?? '…'}</span>
      </Link>
      </li>
      <li className="shrink-0">
      <Link to="/virtual" className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0">
      <div className="flex items-center gap-3">
      <i className="fa-solid fa-trophy text-slate-400 w-4 text-center"></i>
      <span className="">Virtual Sports</span>
      </div>
      <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300">{counts.virtual ?? '…'}</span>
      </Link>
      </li>
      </ul>
      </div>

      <div className="bg-velora-surface/70 border border-velora-borderSubtle rounded-2xl p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Top Providers
                </h3>
      <span className="text-[10px] text-velora-gold">All ({providers.length})</span>
      </div>

      <div className="relative my-3 cursor-pointer">
      <input className="w-full bg-[#08090E] border border-white/5 focus:border-velora-gold/40 rounded-lg py-2 pl-8 pr-3 text-[11px] text-white placeholder-slate-600 focus:outline-none" placeholder="Search provider..." type="text" value={providerQuery} onChange={(event) => setProviderQuery(event.target.value)} />
      <i className="fa-solid fa-filter absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600 text-[10px]"></i>
      </div>

      <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scroll-smooth lg:grid lg:max-h-72 lg:grid-cols-2 lg:overflow-x-hidden lg:overflow-y-auto lg:pb-0 lg:pr-1 custom-scrollbar" style={{ scrollbarWidth: 'none' }}>
      {filteredProviders.map((provider) => (
        <Link
          key={provider.id}
          to={`/casino?brand=${provider.id}`}
          className="group flex h-12 min-w-[150px] shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#0A0C13] p-2 transition-all hover:border-velora-gold/40 hover:bg-[#121622] lg:min-w-0"
        >
          <span className="flex max-w-full items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-400 transition-colors group-hover:text-velora-gold">
            <span className="truncate">{provider.name}</span>
          </span>
        </Link>
      ))}

      {filteredProviders.length === 0 && (
        <span className="col-span-2 px-2 py-3 text-center text-[11px] text-slate-500">
          Sin resultados
        </span>
      )}
      </div>
      </div>

      </aside>
      )}


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
      <span className="">128 DEALERS ACTIVE</span>
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
