import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  listBest,
  listByCategory,
  listByProvider,
  listByType,
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

const PAGE_SIZE = 40
const INITIAL_VISIBLE = 12

function dedupeById(list) {
  const seen = new Set()
  return list.filter((item) => {
    const id = String(item.id)
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
}

/**
 * Navegador de juegos con filtros y carga bajo demanda.
 *
 * - Pide solo la primera página al entrar (per_page=100).
 * - El scroll infinito revela 24 juegos ya descargados.
 * - Cuando se agotan los descargados, pide la siguiente página al API.
 * - Deduplica por id porque la paginación del backend repite elementos.
 */
export default function useGameBrowser({
  category,
  baseMode = 'category',
  baseValue,
  brandMode = 'server',
  initialVisible = INITIAL_VISIBLE,
}) {
  const [filter, setFilter] = useState({ mode: baseMode, value: baseValue ?? category })
  const [brand, setBrand] = useState(null)
  const [catalog, setCatalog] = useState([])
  const [visibleCount, setVisibleCount] = useState(initialVisible)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [serverHasMore, setServerHasMore] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  const pageRef = useRef(1)
  const busyRef = useRef(false)

  const brandKey = brand && brandMode === 'server' ? brand.id : 'all'
  const key = `${category}|${filter.mode}|${filter.value}|${brandKey}`

  const loadPage = useCallback(
    async (page, signal) => {
      const options = { signal, page, perPage: PAGE_SIZE }
      if (brand && brandMode === 'server') return listByProvider(brand.id, options)
      if (filter.mode === 'type') return listByType(filter.value, options)
      if (filter.mode === 'new') return listNew(options)
      if (filter.mode === 'best') return listBest(options)
      return listByCategory(category, options)
    },
    [brand, brandMode, filter.mode, filter.value, category],
  )

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function run() {
      setStatus('loading')
      setError(null)
      setCatalog([])
      setVisibleCount(initialVisible)
      setServerHasMore(false)
      setLoadingMore(false)
      pageRef.current = 1
      busyRef.current = false

      try {
        const first = await loadPage(1, controller.signal)
        if (!active) return
        const lastPage = Number(first.pagination?.last_page ?? 1)
        setCatalog(first.games)
        setServerHasMore(lastPage > 1)
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
  }, [key, reloadKey, initialVisible, loadPage])

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
  const hasMore = visibleCount < filteredGames.length || serverHasMore

  const retry = useCallback(() => setReloadKey((value) => value + 1), [])

  const loadMore = useCallback(async () => {
    if (busyRef.current) return

    // 1) Revelar los juegos ya descargados
    if (visibleCount < filteredGames.length) {
      setVisibleCount((current) => Math.min(current + initialVisible, filteredGames.length))
      return
    }

    // 2) Pedir la siguiente página bajo demanda
    if (!serverHasMore) return

    busyRef.current = true
    setLoadingMore(true)

    try {
      const existing = new Set(catalog.map((game) => game.id))
      let nextPage = pageRef.current + 1
      let lastPage = nextPage
      let added = []

      // La paginación del backend repite elementos: si una página no aporta
      // nada nuevo, se pasa a la siguiente hasta encontrar juegos.
      while (nextPage <= lastPage && added.length === 0) {
        const result = await loadPage(nextPage)
        lastPage = Number(result.pagination?.last_page ?? nextPage)
        added = result.games.filter((game) => !existing.has(game.id))
        pageRef.current = nextPage
        nextPage += 1
      }

      if (added.length > 0) {
        setCatalog((previous) => dedupeById([...previous, ...added]))
        setVisibleCount((current) => current + initialVisible)
      }
      setServerHasMore(pageRef.current < lastPage)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'No se pudieron cargar los juegos')
      }
    } finally {
      busyRef.current = false
      setLoadingMore(false)
    }
  }, [visibleCount, filteredGames.length, serverHasMore, catalog, loadPage, initialVisible])

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
    hasMore,
    loadingMore,
    loadMore,
    filter,
    brand,
    select,
    selectBrand,
  }
}
