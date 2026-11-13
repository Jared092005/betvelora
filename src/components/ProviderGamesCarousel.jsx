import { useCallback, useEffect, useRef, useState } from 'react'
import GameCard from './GameCard'

const ARROW_CLASS =
  'absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-slate-300 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-velora-gold/60 hover:bg-black/90 hover:text-white cursor-pointer lg:flex'

/**
 * Carrusel de juegos de un proveedor para la ficha del juego.
 * En móvil/tablet se desliza con el dedo; desde lg usa flechas como el promo.
 */
export default function ProviderGamesCarousel({ games = [], label = 'juegos' }) {
  const trackRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setCanLeft(track.scrollLeft > 4)
    setCanRight(track.scrollLeft < max - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    updateEdges()
    track.addEventListener('scroll', updateEdges, { passive: true })

    const observer = new ResizeObserver(updateEdges)
    observer.observe(track)

    return () => {
      track.removeEventListener('scroll', updateEdges)
      observer.disconnect()
    }
  }, [updateEdges, games])

  const scrollByCards = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.game-card-wrapper')
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 16
    const cardWidth = card ? card.getBoundingClientRect().width : track.clientWidth / 5
    // Avanza de dos en dos para que la navegación sea más fluida
    const step = 2 * (cardWidth + gap)
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="relative lg:px-12">
      <div
        ref={trackRef}
        className="flex gap-3.5 overflow-x-auto pb-1 scroll-smooth sm:gap-5 lg:gap-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="w-[45%] shrink-0 sm:w-[30%] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
          >
            <GameCard game={game} to={`/games/${game.id}`} />
          </div>
        ))}
      </div>

      {canLeft && (
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label={`Ver ${label} anteriores`}
          className={`${ARROW_CLASS} left-0`}
        >
          <i className="fa-solid fa-chevron-left text-xs" />
        </button>
      )}

      {canRight && (
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label={`Ver más ${label}`}
          className={`${ARROW_CLASS} right-0`}
        >
          <i className="fa-solid fa-chevron-right text-xs" />
        </button>
      )}
    </div>
  )
}
