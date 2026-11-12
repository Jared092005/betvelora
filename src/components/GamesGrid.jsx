import GameCard from './GameCard'
import { useLanguage } from '../i18n'

function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square w-full rounded-2xl border border-white/[0.08] bg-[#181a20]" />
      <div className="space-y-2 px-1 pt-2">
        <div className="h-3 w-3/4 rounded bg-white/10" />
        <div className="h-2.5 w-1/3 rounded bg-white/5" />
      </div>
    </div>
  )
}

/**
 * Cuadrícula de juegos con estados de carga, error y vacío.
 * Mantiene el mismo GameCard y enlace a la ficha que el resto del sitio.
 */
export default function GamesGrid({
  games = [],
  status = 'ready',
  error,
  retry,
  className = '',
  skeletonCount = 10,
  emptyMessage,
}) {
  const { language } = useLanguage()
  const isEs = language === 'es'
  const tr = (es, en) => (isEs ? es : en)

  return (
    <div className={className}>
      {status === 'loading' &&
        Array.from({ length: skeletonCount }).map((_, index) => <CardSkeleton key={index} />)}

      {status === 'error' && (
        <div className="col-span-full rounded-xl border border-velora-red/40 bg-velora-red/5 p-8 text-center">
          <i className="fa-solid fa-triangle-exclamation text-xl text-velora-red" />
          <p className="mt-3 text-sm font-semibold text-white">
            {tr('No se pudieron cargar los juegos', 'Could not load the games')}
          </p>
          {error && <p className="mt-1 text-xs text-slate-400">{error}</p>}
          <button
            type="button"
            onClick={retry}
            className="btn-primary mt-5 px-5 py-2.5 text-xs uppercase tracking-wider"
          >
            {tr('Reintentar', 'Retry')}
          </button>
        </div>
      )}

      {status === 'ready' && games.length === 0 && (
        <div className="col-span-full rounded-xl border border-white/[0.08] bg-[#0E1017] p-10 text-center">
          <i className="fa-solid fa-dice text-2xl text-slate-600" />
          <p className="mt-3 text-sm text-slate-400">
            {emptyMessage ?? tr('Todavía no hay juegos disponibles.', 'No games available yet.')}
          </p>
        </div>
      )}

      {status === 'ready' &&
        games.map((game) => (
          <GameCard key={game.id} game={game} to={`/games/${game.id}`} />
        ))}
    </div>
  )
}
