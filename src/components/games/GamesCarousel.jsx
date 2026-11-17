import GameCarousel from './GameCarousel'
import CarouselSkeleton from '../skeleton/CarouselSkeleton'
import { useLanguage } from '../../i18n'

/** Carrusel de /home con estados de carga, error y vacío. */
export default function GamesCarousel({ games = [], status = 'ready', error, retry, label }) {
  const { language } = useLanguage()
  const isEs = language === 'es'
  const tr = (es, en) => (isEs ? es : en)

  if (status === 'loading') return <CarouselSkeleton />

  if (status === 'error') {
    return (
      <div className="rounded-xl border border-velora-red/40 bg-velora-red/5 p-8 text-center">
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
    )
  }

  if (!games.length) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-[#0E1017] p-10 text-center">
        <i className="fa-solid fa-dice text-2xl text-slate-600" />
        <p className="mt-3 text-sm text-slate-400">
          {tr('Todavía no hay juegos disponibles.', 'No games available yet.')}
        </p>
      </div>
    )
  }

  return <GameCarousel games={games} label={label} />
}
