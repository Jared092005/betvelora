import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Card de juego — replica la estructura de la pantalla Casino de Stitch:
 * portada cuadrada, botón de favorito, overlay "Play Now" y pie con título/proveedor.
 * Si recibe `to`, toda la card enlaza a esa ruta (p. ej. la ficha del juego).
 */
export default function GameCard({ game, badge, onPlay, to }) {
  const { name, image, provider } = game
  const [isFavorite, setIsFavorite] = useState(false)
  const initial = (name || '?').trim().charAt(0).toUpperCase()
  const badgeLabel = badge ?? game.badge
  const Wrapper = to ? Link : 'article'

  return (
    <Wrapper
      {...(to ? { to } : {})}
      className="game-card-wrapper group flex flex-col transition-transform duration-150 ease-out max-lg:active:scale-90"
      onClick={to ? undefined : (event) => event.preventDefault()}
    >
      {/* Portada */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181a20] shadow-md transition-all duration-300 group-hover:border-velora-goldLight/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
        {badgeLabel && (
          <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 flex items-center rounded-full border border-velora-red/30 bg-black/60 px-2.5 py-1 shadow-lg backdrop-blur-md">
            <span className="mr-1.5 h-2 w-2 animate-pulse rounded-full bg-velora-red shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
            <span className="text-[10px] font-extrabold uppercase leading-none tracking-widest text-white">
              {badgeLabel}
            </span>
          </div>
        )}

        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2a0a12] to-[#141722]">
            <span className="font-cinzel text-5xl font-bold text-velora-gold/40">
              {initial}
            </span>
          </div>
        )}

        {/* Favorito */}
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setIsFavorite((value) => !value)
          }}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Quitar ${name} de favoritos`
              : `Añadir ${name} a favoritos`
          }
          title="Add to favorites"
          className="absolute right-2.5 top-2.5 cursor-pointer z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:text-velora-red"
        >
          <i
            className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart text-xs ${
              isFavorite ? 'text-velora-red' : ''
            }`}
          />
        </button>

        {/* Overlay con Play Now: solo en desktop (en táctil estorba al deslizar) */}
        <div className="game-card-overlay pointer-events-none absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-black/60 p-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:flex">
          <button
            type="button"
            onClick={(event) => {
              if (!onPlay) return
              event.preventDefault()
              event.stopPropagation()
              onPlay(game)
            }}
            className="translate-y-2 cursor-pointer rounded-full bg-velora-red px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-900/40 transition-all hover:bg-velora-ruby group-hover:translate-y-0"
          >
            Play Now
          </button>
        </div>
      </div>

      {/* Pie */}
      <div className="px-1 pt-2">
        <h3
          className="truncate text-sm font-bold text-white transition-colors group-hover:text-velora-goldLight"
          title={name}
        >
          {name}
        </h3>
        {provider && (
          <p className="truncate text-xs text-slate-400">{provider}</p>
        )}
      </div>
    </Wrapper>
  )
}
