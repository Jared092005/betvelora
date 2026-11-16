import { useCallback, useEffect, useRef, useState } from 'react'
import GameCard from './GameCard'

/**
 * Carrusel horizontal de juegos con flechas.
 * Muestra las mismas cards que Casino y permite avanzar de una en una.
 */
export default function GameCarousel({ games, label = 'juegos', onPlay }) {
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
  }, [updateEdges])

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

  const arrowClass =
    'absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-slate-200 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-velora-gold/60 hover:text-white sm:flex'

  return (
    <div className="relative px-0 sm:px-10 xl:px-12">
      <div ref={trackRef} className="game-carousel-track flex gap-4 overflow-x-auto scroll-smooth pb-1">
        {games.map((game) => (
          <div
            key={game.id ?? game.name}
            className="shrink-0 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.667rem)] lg:basis-[calc(25%-0.75rem)] xl:basis-[calc(20%-0.8rem)]"
          >
            <GameCard game={game} onPlay={onPlay} to={`/games/${game.id}`} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        aria-label={`Ver ${label} anteriores`}
        className={`${arrowClass} left-0 cursor-pointer md:hidden lg:inline lg:top-1/3 xl:top-1/2 ${
          canLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <i className="fa-solid fa-chevron-left text-xs" />
      </button>

      <button
        type="button"
        onClick={() => scrollByCards(1)}
        aria-label={`Ver más ${label}`}
        className={`${arrowClass} right-0  cursor-pointer md:hidden lg:inline lg:top-1/3 xl:top-1/2 ${
          canRight ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <i className="fa-solid fa-chevron-right text-xs" />
      </button>
    </div>
  )
}
