import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  listBest,
  listByCategory,
  listByProvider,
  listByType,
  listCategoryBrands,
  listNew,
} from '../api/games'

// Tipos permitidos por categoría cuando se filtra por proveedor
// (el endpoint de marca devuelve juegos de todas las categorías).
const ALLOWED_TYPES = {
  casino: ['SLOT', 'INSTANT', 'SCRATCH', 'TABLE_GAMES', 'CRASH', 'ARCADE'],
  casino_live: ['LIVE'],
  virtual: ['VIRTUAL'],
  crash: ['CRASH'],
  poker: ['POKER'],
}

const PAGE_SIZE = 100
const INITIAL_VISIBLE = 24

/**
 * Navegador de juegos con filtros.
 *
 * La paginación del backend no es estable (la página 2 repite elementos de la
 * página 1), así que se descargan todas las páginas una sola vez, se
 * deduplican por id y el "cargar más" se hace en cliente sobre esa lista.
 */
export default function useGameBrowser({
  category,
  baseMode = 'category',
  baseValue,
  brandMode = 'server',
  initialBrandId = null,
  initialVisible = INITIAL_VISIBLE,
}) {
  const [filter, setFilter] = useState({ mode: baseMode, value: baseValue ?? category })
  const [brand, setBrand] = useState(null)
  const [brands, setBrands] = useState([])
  const [catalog, setCatalog] = useState([])
  const [visibleCount, setVisibleCount] = useState(initialVisible)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const brandKey = brand && brandMode === 'server' ? brand.id : 'all'
  const key = `${category}|${filter.mode}|${filter.value}|${brandKey}`

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadPage(page) {
      const options = { signal: controller.signal, page, perPage: PAGE_SIZE }
      if (brand && brandMode === 'server') return listByProvider(brand.id, options)
      if (filter.mode === 'type') return listByType(filter.value, options)
      if (filter.mode === 'new') return listNew(options)
      if (filter.mode === 'best') return listBest(options)
      return listByCategory(category, options)
    }

    async function run() {
      setStatus('loading')
      setError(null)
      setCatalog([])
      setVisibleCount(initialVisible)

      try {
        const first = await loadPage(1)
        const lastPage = Number(first.pagination?.last_page ?? 1)
        const rest =
          lastPage > 1
            ? await Promise.all(
                Array.from({ length: lastPage - 1 }, (_, index) =>
                  loadPage(index + 2).catch(() => ({ games: [] })),
                ),
              )
            : []

        if (!active) return

        const byId = new Map()
        for (const page of [first, ...rest]) {
          for (const game of page.games) {
            if (!byId.has(game.id)) byId.set(game.id, game)
          }
        }

        setCatalog([...byId.values()])
        setStatus('ready')
      } catch (err) {
        if (!active || err.name === 'AbortError') return
        setError(err.message || 'No se pudieron cargar los juegos')
        setStatus('error')
      }
    }

    run()

    return () => {
      active = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, reloadKey, initialVisible])

  // Proveedores: por categoría o derivados de los juegos (crash).
  useEffect(() => {
    let active = true

    const request =
      category === 'crash'
        ? listByType('crash', { perPage: PAGE_SIZE }).then((result) => {
            const map = new Map()
            result.games.forEach((game) => {
              if (game.providerId) {
                map.set(String(game.providerId), { id: String(game.providerId), name: game.provider })
              }
            })
            return [...map.values()]
          })
        : listCategoryBrands(category).then((list) =>
            (list || []).map((item) => ({ id: String(item.Id), name: item.Name })),
          )

    request
      .then((list) => {
        if (!active) return
        setBrands(list)
        if (initialBrandId) {
          const match = list.find((item) => item.id === String(initialBrandId))
          if (match) setBrand((current) => current ?? match)
        }
      })
      .catch(() => {
        if (active) setBrands([])
      })

    return () => {
      active = false
    }
  }, [category, initialBrandId])

  const allowedTypes = ALLOWED_TYPES[category]
  const filteredGames = useMemo(() => {
    if (!brand) return catalog
    if (brandMode === 'client') {
      return catalog.filter((game) => String(game.providerId) === String(brand.id))
    }
    if (!allowedTypes) return catalog
    return catalog.filter((game) => allowedTypes.includes(game.type))
  }, [catalog, brand, brandMode, allowedTypes])

  const games = filteredGames.slice(0, visibleCount)
  const hasMore = visibleCount < filteredGames.length

  const retry = useCallback(() => setReloadKey((value) => value + 1), [])
  const loadMore = useCallback(() => setVisibleCount((value) => value + initialVisible), [initialVisible])

  const select = useCallback((item) => {
    setBrand(null)
    setFilter(item.filter)
  }, [])

  const selectBrand = useCallback(
    (nextBrand) => {
      setFilter({ mode: baseMode, value: baseValue ?? category })
      setBrand(nextBrand)
    },
    [baseMode, baseValue, category],
  )

  return {
    games,
    status,
    error,
    retry,
    pagination: { total: filteredGames.length, page: 1, last_page: 1 },
    hasMore,
    loadingMore: false,
    loadMore,
    brands,
    filter,
    brand,
    select,
    selectBrand,
  }
}
