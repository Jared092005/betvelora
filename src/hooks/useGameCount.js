import { useCallback, useEffect, useState } from 'react'
import { countUniqueGames } from '../api/games'

// Cache en memoria para no repetir las mismas consultas al navegar.
const countCache = new Map()

/**
 * Cuenta los juegos únicos de un filtro (categoría, tipo, proveedor, nuevos o mejores).
 * `refreshKey` permite forzar una recarga desde fuera.
 */
export default function useGameCount({ mode = 'category', value } = {}, refreshKey = 0) {
  const key = `${mode}:${value ?? ''}`
  const [count, setCount] = useState(() => (countCache.has(key) ? countCache.get(key) : null))
  const [loading, setLoading] = useState(() => !countCache.has(key))
  const [error, setError] = useState(null)
  const [internalKey, setInternalKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function run() {
      setLoading(true)
      try {
        const total = await countUniqueGames({ mode, value }, { signal: controller.signal })
        if (!active) return
        countCache.set(key, total)
        setCount(total)
        setError(null)
      } catch (err) {
        if (!active || err.name === 'AbortError') return
        setError(err)
      } finally {
        if (active) setLoading(false)
      }
    }

    run()

    return () => {
      active = false
      controller.abort()
    }
  }, [mode, value, key, refreshKey, internalKey])

  const refresh = useCallback(() => setInternalKey((keyValue) => keyValue + 1), [])

  return { count, loading, error, refresh }
}
