import { useEffect, useState } from 'react'
import { listBest, listByCategory, listByType } from '../api/games'

/**
 * Totales reales por categoría/tipo para los contadores de /home.
 * Usa `per_page=1` y lee `pagination.total` de cada endpoint.
 */
export default function useGameCounts() {
  const [counts, setCounts] = useState({})

  useEffect(() => {
    let active = true

    const tasks = {
      popular: listBest({ perPage: 1 }),
      slots: listByType('slot', { perPage: 1 }),
      live: listByCategory('casino_live', { perPage: 1 }),
      crash: listByType('crash', { perPage: 1 }),
      poker: listByCategory('poker', { perPage: 1 }),
      scratch: listByType('scratch', { perPage: 1 }),
      virtual: listByCategory('virtual', { perPage: 1 }),
    }

    Promise.all(
      Object.entries(tasks).map(([key, request]) =>
        request
          .then((result) => [key, result.pagination?.total ?? 0])
          .catch(() => [key, null]),
      ),
    ).then((entries) => {
      if (!active) return
      const next = {}
      for (const [key, total] of entries) next[key] = total
      setCounts(next)
    })

    return () => {
      active = false
    }
  }, [])

  return counts
}
