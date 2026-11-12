import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getGame, listByProvider } from '../api/games'
import GameCard from '../components/GameCard'
import { useLanguage } from '../i18n'

/**
 * Game — copiado de la pantalla "Game - Aztec Empire" de Stitch
 * (proyecto 10370446589462300119), con el header y el footer de la app.
 * Los datos (nombre, portada, proveedor y "More from") vienen de la API real.
 */
export default function Game() {
  const { gameId } = useParams()

  // La key fuerza un montaje nuevo al cambiar de juego, de modo que
  // todo el contenido (título, imagen, "More from...") se refresque.
  return <GameScreen key={gameId ?? 'game'} gameId={gameId} />
}

function GameScreen({ gameId }) {
  const navigate = useNavigate()
  const { language, setLanguage } = useLanguage()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [game, setGame] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [relatedGames, setRelatedGames] = useState([])
  const viewportRef = useRef(null)

  const isEs = language === 'es'
  const tr = (es, en) => (isEs ? es : en)

  const heroImage = game?.image ?? null

  // ── Juego y "More from <proveedor>" desde la API ────────────
  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function load() {
      setStatus('loading')
      setError(null)

      try {
        const result = await getGame(gameId, { signal: controller.signal })
        if (!active) return
        if (!result) throw new Error(tr('Juego no encontrado', 'Game not found'))
        setGame(result)
        setStatus('ready')
      } catch (err) {
        if (!active || err.name === 'AbortError') return
        setError(err.message || tr('No se pudo cargar el juego', 'Could not load the game'))
        setStatus('error')
      }
    }

    load()

    return () => {
      active = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId, reloadKey])

  useEffect(() => {
    if (!game?.providerId) return undefined
    const controller = new AbortController()
    let active = true

    listByProvider(game.providerId, { signal: controller.signal, perPage: 5 })
      .then((result) => {
        if (!active) return
        const others = result.games.filter((item) => item.id !== game.id)
        setRelatedGames((others.length ? others : result.games).slice(0, 4))
      })
      .catch((err) => {
        if (!active || err.name === 'AbortError') return
        setRelatedGames([])
      })

    return () => {
      active = false
      controller.abort()
    }
  }, [game?.providerId, game?.id])

  // Vuelve a la pantalla anterior: home, casino, casino-live u otro juego.
  // Si se entró directo por URL no hay historial y se cae en la home.
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/')
  }

  // ── Pantalla completa ──────────────────────────────────────
  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === viewportRef.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  // Fallback (navegadores sin Fullscreen API): modo expandido con Escape.
  useEffect(() => {
    if (!isExpanded) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsExpanded(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  const toggleFullscreen = async () => {
    const element = viewportRef.current
    if (!element) return

    if (isExpanded) {
      setIsExpanded(false)
      return
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen?.()
      return
    }

    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen()
        return
      }
    } catch {
      /* el navegador lo rechaza: usamos el modo expandido */
    }
    setIsExpanded(true)
  }

  const expanded = isFullscreen || isExpanded

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
              aria-label={tr('Volver a la pantalla anterior', 'Back to the previous screen')}
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
            <div className="hidden xl:block">
              <h1 className="flex items-center gap-2 text-base font-bold leading-tight tracking-wide text-white sm:text-lg">
                {game?.name ?? ''}
              </h1>
              <p className="text-xs font-medium text-slate-400 sm:text-sm">{game?.provider ?? ''}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={() => setIsFavorite((value) => !value)}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite
                  ? tr('Quitar de favoritos', 'Remove from favorites')
                  : tr('Añadir a favoritos', 'Add to favorites')
              }
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
              aria-label={tr('Información y reglas', 'Information and rules')}
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
              onClick={() => setLanguage(isEs ? 'en' : 'es')}
              aria-label={tr('Cambiar idioma', 'Change language')}
              title={isEs ? 'English' : 'Español'}
              className="hidden h-10 min-w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] px-2 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-luxury hover:border-velora-gold/60 hover:text-velora-gold xl:flex"
            >
              {isEs ? 'ES' : 'EN'}
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={
                expanded
                  ? tr('Salir de pantalla completa', 'Exit fullscreen')
                  : tr('Pantalla completa', 'Fullscreen')
              }
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#12141C] text-slate-300 transition-luxury hover:border-velora-gold/60 hover:text-velora-gold"
            >
              {expanded ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 9V4m0 5H4m11 0h5m-5 0V4M9 15H4m5 0v5m6-5h5m-5 0v5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>

            <Link
              to="/account/deposit"
              className="btn-primary hidden gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold shadow-md sm:px-6 sm:text-sm xl:inline-flex"
            >
              <span className="text-base font-extrabold leading-none">+</span>
              <span className="tracking-wide">{tr('Depositar', 'Deposit')}</span>
            </Link>
          </div>
        </header>

        {/* ================= Juego + saldo ================= */}
        <main
          className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-12"
          data-purpose="game-interactive-viewport"
        >
          <section aria-label={tr('Consola del juego', 'Game console')} className="lg:col-span-9 xl:col-span-9">
            <div
              ref={viewportRef}
              className={`game-viewport w-full overflow-hidden bg-[#0A0C13] shadow-2xl ${
                isExpanded
                  ? 'fixed inset-0 z-[100] rounded-none border-0'
                  : 'relative aspect-[16/9] min-h-[380px] rounded-2xl border border-white/10 sm:min-h-[460px] md:min-h-[520px]'
              }`}
            >
              {/* Portada del juego (o estado de carga / error) */}
              {status === 'error' ? (
                <div className="flex h-full min-h-[380px] w-full flex-col items-center justify-center gap-3 p-6 text-center">
                  <i className="fa-solid fa-triangle-exclamation text-2xl text-velora-red" />
                  <p className="text-sm font-semibold text-white">
                    {tr('No se pudo cargar el juego', 'Could not load the game')}
                  </p>
                  {error && <p className="text-xs text-slate-400">{error}</p>}
                  <button
                    type="button"
                    onClick={() => setReloadKey((value) => value + 1)}
                    className="btn-primary mt-2 px-5 py-2.5 text-xs uppercase tracking-wider"
                  >
                    {tr('Reintentar', 'Retry')}
                  </button>
                </div>
              ) : heroImage ? (
                <img
                  src={heroImage}
                  alt={`${game?.name ?? ''} — ${game?.provider ?? ''}`}
                  className={`h-full w-full ${expanded ? 'object-contain' : 'object-cover'}`}
                />
              ) : (
                <div className="h-full w-full animate-pulse bg-[#181a20]" />
              )}

              {isExpanded && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  aria-label={tr('Salir de pantalla completa', 'Exit fullscreen')}
                  className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm transition-luxury hover:border-velora-gold/60 hover:text-velora-gold"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* En mobile/tablet el nombre va debajo del visor (en desktop está en la barra) */}
            {game && (
              <div className="mt-4 lg:hidden">
                <h2 className="text-base font-bold tracking-wide text-white sm:text-lg">{game.name}</h2>
                <p className="text-xs font-medium text-slate-400 sm:text-sm">{game.provider}</p>
              </div>
            )}
          </section>

          <aside aria-label={tr('Panel de usuario', 'User panel')} className="lg:col-span-3 xl:col-span-3">
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0E1017] p-6 shadow-xl lg:h-[55%] xl:h-[50%] 2xl:h-[40%]">
              <div>
                <div className="mb-6">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    {tr('Saldo', 'Balance')}
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
                  {tr('Depositar', 'Deposit')}
                </Link>
              </div>
              <div className="mt-6 hidden border-t border-white/[0.08] pt-6 lg:block">
                <h3 className="text-sm font-semibold tracking-wide text-white">{game?.name ?? ''}</h3>
                <p className="mt-0.5 text-xs text-slate-400">{game?.provider ?? ''}</p>
              </div>
            </div>
          </aside>
        </main>

        {/* ================= Más del proveedor ================= */}
        {game && (
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
                {tr(`Más de ${game.provider}`, `More from ${game.provider}`)}
              </h2>
            </div>
            {relatedGames.length > 0 ? (
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
                {relatedGames.map((related) => (
                  <GameCard key={related.id} game={related} to={`/games/${related.id}`} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="aspect-square w-full rounded-2xl border border-white/[0.08] bg-[#181a20]" />
                    <div className="space-y-2 px-1 pt-2">
                      <div className="h-3 w-3/4 rounded bg-white/10" />
                      <div className="h-2.5 w-1/3 rounded bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}
