import { useCallback, useEffect, useMemo, useState } from 'react'
import GameCard from './GameCard'

/**
 * Endpoint por defecto.
 * - En producción define VITE_GAMES_API_URL en tu .env
 * - Si no existe, usa el fixture local public/games.json
 */
const DEFAULT_ENDPOINT = import.meta.env.VITE_GAMES_API_URL || '/games.json'

/**
 * Normaliza respuestas habituales de APIs de juegos.
 * Acepta: array plano, { games }, { data }, { results }, { items }.
 */
function normalizePayload(payload) {
  const list = Array.isArray(payload)
    ? payload
    : payload?.games ?? payload?.data ?? payload?.results ?? payload?.items ?? []

  if (!Array.isArray(list)) return []

  return list.map((game, index) => ({
    id: game.id ?? game.gameId ?? game.game_id ?? game.slug ?? `game-${index}`,
    name: game.name ?? game.title ?? game.gameName ?? game.game_name ?? 'Juego sin nombre',
    image: game.image ?? game.thumbnail ?? game.thumb ?? game.cover ?? game.imageUrl ?? null,
    provider: game.provider ?? game.vendor ?? game.studio ?? game.developer ?? null,
    category: game.category ?? game.type ?? game.gameType ?? null,
    rtp: game.rtp ?? null,
    badge:
      game.isNew || game.new
        ? 'Nuevo'
        : game.isHot || game.hot || game.featured
          ? 'Top'
          : null,
    raw: game,
  }))
}

/**
 * Template que carga juegos desde una API y los pinta en una cuadrícula.
 *
 * Uso:
 *   <GameGrid />                                  // usa VITE_GAMES_API_URL o /games.json
 *   <GameGrid endpoint="https://api.site/games" />
 *   <GameGrid limit={6} query={search} title="Resultados" />
 */
export default function GameGrid({
  endpoint = DEFAULT_ENDPOINT,
  title,
  limit,
  query = '',
  onPlay,
  className = '',
}) {
  const [games, setGames] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const retry = useCallback(() => setReloadKey((key) => key + 1), [])

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setStatus('loading')
      setError(null)

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
          throw new Error(`La API respondió ${response.status} ${response.statusText}`)
        }

        const payload = await response.json()
        if (controller.signal.aborted) return

        setGames(normalizePayload(payload))
        setStatus('ready')
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Error desconocido')
        setStatus('error')
      }
    }

    load()
    return () => controller.abort()
  }, [endpoint, reloadKey])

  const visibleGames = useMemo(() => {
    const term = query.trim().toLowerCase()
    const filtered = term
      ? games.filter((game) =>
          [game.name, game.provider, game.category]
            .filter(Boolean)
            .some((field) => String(field).toLowerCase().includes(term)),
        )
      : games

    return typeof limit === 'number' ? filtered.slice(0, limit) : filtered
  }, [games, query, limit])

  return (
    <section className={className}>
      {title && (
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h2 className="font-cinzel text-headline-sm text-white">{title}</h2>
          {status === 'ready' && (
            <span className="text-xs text-slate-500">
              {visibleGames.length} juego{visibleGames.length === 1 ? '' : 's'}
            </span>
          )}
        </div>
      )}

      {/* Cargando: esqueletos con la forma real de la card */}
      {status === 'loading' && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: limit ?? 8 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-square w-full rounded-2xl border border-white/[0.08] bg-velora-card" />
              <div className="space-y-2 px-1 pt-2">
                <div className="h-3 w-3/4 rounded bg-velora-card" />
                <div className="h-2.5 w-1/3 rounded bg-velora-card" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error con reintento */}
      {status === 'error' && (
        <div className="rounded-lg border border-velora-red/40 bg-velora-red/5 p-6 text-center">
          <i className="fa-solid fa-triangle-exclamation text-lg text-velora-red" />
          <p className="mt-3 text-sm font-medium text-white">
            No se pudieron cargar los juegos
          </p>
          <p className="mt-1 text-xs text-slate-400">{error}</p>
          <button
            type="button"
            onClick={retry}
            className="mt-4 rounded-lg border border-velora-gold/30 bg-velora-gold/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-velora-gold transition-colors hover:bg-velora-gold hover:text-slate-900"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Sin resultados */}
      {status === 'ready' && visibleGames.length === 0 && (
        <div className="rounded-lg border border-velora-borderSubtle bg-velora-surface p-10 text-center">
          <i className="fa-solid fa-dice text-2xl text-slate-600" />
          <p className="mt-3 text-sm text-slate-400">
            {query ? `Sin resultados para “${query}”` : 'Todavía no hay juegos disponibles.'}
          </p>
        </div>
      )}

      {/* Resultados */}
      {status === 'ready' && visibleGames.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleGames.map((game) => (
            <GameCard key={game.id} game={game} onPlay={onPlay} />
          ))}
        </div>
      )}
    </section>
  )
}
