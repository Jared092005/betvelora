import useGameCount from '../hooks/useGameCount'
import { useLanguage } from '../i18n'

function GameCountView({ value, loading, variant, className, isEs }) {
  const display = loading ? '…' : value === null || value === undefined ? '…' : String(value)

  if (variant === 'plain') {
    return <span className={className}>{display}</span>
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium tracking-wide ${className}`}
    >
      <span className="font-bold text-white">{display}</span>
      <span className="font-normal text-slate-400">{isEs ? 'Juegos' : 'Games'}</span>
    </span>
  )
}

function FetchedGameCount({ mode, value, variant, refreshKey, className, isEs }) {
  const { count, loading } = useGameCount({ mode, value }, refreshKey)
  return (
    <GameCountView
      value={count}
      loading={loading && count === null}
      variant={variant}
      className={className}
      isEs={isEs}
    />
  )
}

/**
 * Contador de juegos reutilizable.
 *
 * - `variant="badge"`: píldora "N Games" (mismo formato que /casino).
 * - `variant="plain"`: solo el número (para la barra lateral de /home).
 *
 * Si se pasa `count`, se muestra ese valor (ya deduplicado por la página).
 * Si no, el componente cuenta los juegos únicos de `mode`/`value`.
 * `mode`: category | type | brand | new | best.
 */
export default function GameCount({
  count = null,
  loading = false,
  mode = 'category',
  value,
  variant = 'badge',
  refreshKey = 0,
  className = '',
}) {
  const { language } = useLanguage()
  const isEs = language === 'es'

  if (count !== null && count !== undefined) {
    return (
      <GameCountView
        value={count}
        loading={loading}
        variant={variant}
        className={className}
        isEs={isEs}
      />
    )
  }

  return (
    <FetchedGameCount
      mode={mode}
      value={value}
      variant={variant}
      refreshKey={refreshKey}
      className={className}
      isEs={isEs}
    />
  )
}
