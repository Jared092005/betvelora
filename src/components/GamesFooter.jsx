import { useLanguage } from '../i18n'

const LABELS = {
  games: { en: 'games', es: 'juegos' },
  liveTables: { en: 'live tables', es: 'mesas en vivo' },
  virtualGames: { en: 'virtual games', es: 'juegos virtuales' },
}

/** Pie de la cuadrícula: contador real + "cargar más" paginado. */
export default function GamesFooter({
  shown,
  total,
  hasMore,
  loadingMore,
  onLoadMore,
  label = 'games',
}) {
  const { language } = useLanguage()
  const isEs = language === 'es'
  const words = LABELS[label] ?? LABELS.games

  if (!shown) return null

  return (
    <div className="mt-12 mb-6 flex flex-col items-center justify-center gap-3">
      <p className="text-xs text-slate-500">
        {isEs ? 'Mostrando' : 'Showing'}{' '}
        <span className="font-bold text-white">{shown}</span> {isEs ? 'de' : 'of'}{' '}
        <span className="font-bold text-white">{total}</span> {isEs ? words.es : words.en}
      </p>

      {hasMore && (
        <button
          type="button"
          onClick={onLoadMore}
          disabled={loadingMore}
          className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-[#121317] px-8 py-3 text-xs font-bold text-white shadow-lg transition-all hover:border-velora-gold/40 hover:bg-[#1c1e24] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <i
            className={`fa-solid fa-rotate-right text-xs text-velora-gold ${
              loadingMore ? 'animate-spin' : ''
            }`}
          />
          <span>{isEs ? 'CARGAR MÁS JUEGOS' : 'LOAD MORE GAMES'}</span>
        </button>
      )}
    </div>
  )
}
