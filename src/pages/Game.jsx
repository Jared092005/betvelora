import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import GameCard from '../components/GameCard'
import { homeGameSections } from '../data/homeGames'

/**
 * Game — copiado de la pantalla "Game - Aztec Empire" de Stitch
 * (proyecto 10370446589462300119), con el header y el footer de la app.
 * "More from <proveedor>" usa el mismo GameCard que el resto del sitio.
 */
const ALL_GAMES = [...homeGameSections.slots, ...homeGameSections.newGames]
// Juegos que solo aparecen en la estantería del proveedor (no en /home),
// tal y como los muestra la pantalla original de Stitch.
const EXTRA_GAMES = [
  {
    id: 'the-last-queen-of-nile',
    name: 'The Last Queen of Nile',
    provider: 'ChimeraSpin',
    image: '/screens/game/7c731a91f5c2.jpg',
  },
]
const GAME_CATALOG = [...ALL_GAMES, ...EXTRA_GAMES]
const HERO_IMAGES = { 'aztec-empire': '/screens/game/8f43979c416c.jpg' }
const DEFAULT_GAME_ID = 'aztec-empire'

export default function Game() {
  const { gameId } = useParams()

  // La key fuerza un montaje nuevo al cambiar de juego, de modo que
  // todo el contenido (título, imagen, "More from...") se refresque.
  return <GameScreen key={gameId ?? DEFAULT_GAME_ID} gameId={gameId} />
}

function GameScreen({ gameId }) {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState(false)

  const game =
    GAME_CATALOG.find((item) => item.id === gameId) ??
    GAME_CATALOG.find((item) => item.id === DEFAULT_GAME_ID)

  const providerGames = GAME_CATALOG.filter((item) => item.provider === game.provider)
  const otherGames = providerGames.filter((item) => item.id !== game.id)
  const relatedGames = (otherGames.length >= 4 ? otherGames : providerGames).slice(0, 4)
  const heroImage = HERO_IMAGES[game.id] ?? game.image

  // Vuelve a la pantalla anterior: home, casino-live u otro juego.
  // Si se entró directo por URL no hay historial y se cae en la home.
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/')
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#050608] text-slate-200 selection:bg-velora-gold selection:text-black">
      <div
        className="mx-auto flex w-full max-w-[1720px] flex-1 flex-col justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
        data-purpose="main-game-layout"
      >
        {/* ================= Top bar ================= */}
        <header
          className="mb-4 flex items-center justify-between sm:mb-6"
          data-purpose="game-top-bar"
        >
          <div className="flex items-center space-x-3.5 sm:space-x-4">
            <button
              type="button"
              onClick={goBack}
              aria-label="Volver a la pantalla anterior"
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] text-slate-300 transition-luxury hover:border-velora-gold/60 hover:text-velora-gold sm:h-11 sm:w-11"
            >
              <svg
                className="h-5 w-5 transform transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div>
              <h1 className="flex items-center gap-2 text-base font-bold leading-tight tracking-wide text-white sm:text-lg">
                {game.name}
              </h1>
              <p className="text-xs font-medium text-slate-400 sm:text-sm">{game.provider}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={() => setIsFavorite((value) => !value)}
              aria-pressed={isFavorite}
              aria-label="Añadir a favoritos"
              className={`group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] transition-luxury hover:border-velora-gold/60 hover:text-velora-gold ${
                isFavorite ? 'text-velora-gold' : 'text-slate-300'
              }`}
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:scale-110"
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Información y reglas"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] text-slate-300 transition-luxury hover:border-velora-gold/60 hover:text-velora-gold"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Modo Pantalla Completa"
              className="hidden cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] text-slate-300 transition-luxury hover:border-velora-gold/60 hover:text-velora-gold sm:flex sm:h-10 sm:w-10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <Link
              to="/account/deposit"
              className="btn-primary gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold shadow-md sm:px-6 sm:text-sm"
            >
              <span className="text-base font-extrabold leading-none">+</span>
              <span className="tracking-wide">Deposit</span>
            </Link>
          </div>
        </header>

        {/* ================= Juego + saldo ================= */}
        <main
          className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-12"
          data-purpose="game-interactive-viewport"
        >
          <section aria-label="Consola del Juego" className="lg:col-span-9 xl:col-span-9">
            <div className="relative aspect-[16/9] min-h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0C13] shadow-2xl sm:min-h-[460px] md:min-h-[520px]">
              {/* De momento solo se muestra la portada del juego */}
              <img
                src={heroImage}
                alt={`${game.name} — ${game.provider}`}
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          <aside aria-label="Panel de Usuario" className="lg:col-span-3 xl:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0E1017] p-6 shadow-xl">
              <div>
                <div className="mb-6">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Balance
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      0
                    </span>
                    <span className="text-2xl font-bold text-white sm:text-3xl">€</span>
                  </div>
                </div>
                <Link
                  to="/account/deposit"
                  className="btn-primary gold-glow-hover w-full px-6 py-3.5 text-sm font-extrabold tracking-wide sm:text-base"
                >
                  Deposit
                </Link>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <h3 className="text-sm font-semibold tracking-wide text-white">{game.name}</h3>
                <p className="mt-0.5 text-xs text-slate-400">{game.provider}</p>
              </div>
            </div>
          </aside>
        </main>

        {/* ================= Más del proveedor ================= */}
        <section
          aria-labelledby="more-games-heading"
          className="mt-4 pt-2"
          data-purpose="related-games-shelf"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2
              id="more-games-heading"
              className="text-lg font-bold tracking-wide text-white sm:text-xl"
            >
              More from {game.provider}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
            {relatedGames.map((related) => (
              <GameCard key={related.id} game={related} to={`/game/${related.id}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
