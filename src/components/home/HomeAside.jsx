import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listBrands } from '../../api/games'

/**
 * Barra lateral de /home: categorías de juegos y proveedores.
 */
export default function HomeAside() {
  const [providers, setProviders] = useState([])
  const [providerQuery, setProviderQuery] = useState('')

  useEffect(() => {
    let active = true
    listBrands()
      .then((list) => {
        if (active) {
          setProviders((list || []).map((brand) => ({ id: String(brand.Id), name: brand.Name })))
        }
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
    <aside
      className="w-full lg:w-64 xl:w-72 flex-shrink-0 flex flex-col gap-6"
      data-purpose="sidebar-navigation"
    >
      <div className="bg-velora-surface/70 border border-velora-borderSubtle rounded-2xl p-4 backdrop-blur-sm">
        <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 px-3 pb-3 border-b border-white/5">
          Game Categories
        </h3>
        <ul
          className="mt-3 flex gap-2 overflow-x-auto pb-1 scroll-smooth lg:block lg:space-y-1 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: 'none' }}
        >
          <li className="shrink-0">
            <Link
              to="/casino?filter=best"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-fire text-velora-red w-4 text-center"></i>
                <span>Popular Picks</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/casino?type=slot"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-dice-d6 text-velora-gold w-4 text-center"></i>
                <span>Slots</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/casino-live"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-video text-emerald-400 w-4 text-center"></i>
                <span>Casino Live</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/crash-games"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-chart-line text-blue-400 w-4 text-center"></i>
                <span>Crash Games</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/poker"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C9.5 5.5 6 8.5 6 12c0 2.8 2.2 4.5 4.5 4.5.8 0 1.5-.2 2-.6.1.5-.2 1.6-1.5 2.6H8v1.5h8V18.5h-3c-1.3-1-1.6-2.1-1.5-2.6.5.4 1.2.6 2 .6 2.3 0 4.5-1.7 4.5-4.5 0-3.5-3.5-6.5-6-10z"></path>
                </svg>
                <span>Poker Rooms</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/casino?type=scratch"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-ticket text-amber-400 w-4 text-center"></i>
                <span>Scratch &amp; Lotteries</span>
              </div>
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              to="/virtual"
              className="flex min-w-[180px] items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold group lg:min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-trophy text-slate-400 w-4 text-center"></i>
                <span>Virtual Sports</span>
              </div>
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

        <div className="relative my-3">
          <input
            className="w-full bg-[#08090E] border border-white/5 focus:border-velora-gold/40 rounded-lg py-2 pl-8 pr-3 text-[11px] text-white placeholder-slate-600 focus:outline-none"
            placeholder="Search provider..."
            type="text"
            value={providerQuery}
            onChange={(event) => setProviderQuery(event.target.value)}
          />
          <i className="fa-solid fa-filter absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600 text-[10px]"></i>
        </div>

        <div
          className="mt-2 flex gap-2 overflow-x-auto pb-1 scroll-smooth lg:grid lg:max-h-72 lg:grid-cols-2 lg:overflow-x-hidden lg:overflow-y-auto lg:pb-0 lg:pr-1 custom-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
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
  )
}
