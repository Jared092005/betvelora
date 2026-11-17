import { useEffect, useRef } from 'react'
import { useLanguage } from '../../i18n'
import Spinner from '../spinners/Spinner'

/**
 * Carga más juegos automáticamente al acercarse al final de la página.
 * Se remonta cuando cambia `key` (nº de juegos) para volver a comprobar
 * si el centinela sigue en pantalla.
 */
export default function InfiniteScrollSentinel({ hasMore, onLoad, disabled = false }) {
  const ref = useRef(null)
  const { language } = useLanguage()
  const isEs = language === 'es'

  useEffect(() => {
    if (!hasMore || disabled) return undefined
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) onLoad()
      },
      { rootMargin: '0px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasMore, onLoad, disabled])

  if (!hasMore) return null

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-2 py-8" role="status">
      <Spinner size="md" />
      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
        {isEs ? 'Cargando más juegos…' : 'Loading more games…'}
      </span>
    </div>
  )
}
