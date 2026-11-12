import { useCallback, useEffect, useRef, useState } from 'react'

/** Evita ids repetidos cuando la API devuelve el mismo juego en varias páginas. */
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
 * Carga una lista de juegos paginada desde la API.
 *
 * @param {string} key      Identificador de la consulta (p. ej. 'casino').
 * @param {(opts: { signal: AbortSignal, page: number }) => Promise<{ games: any[], pagination?: any } | any[]>} load
 * @param {{ limit?: number }} options
 */
export default function useGames(key, load, { limit } = {}) {
  const loadRef = useRef(load)
  const pageRef = useRef(1)
  const moreController = useRef(null)

  const [games, setGames] = useState([])
  const [pagination, setPagination] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [loadingMore, setLoadingMore] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    loadRef.current = load
  })

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function run() {
      setStatus('loading')
      setError(null)
      setGames([])
      setPagination(null)
      pageRef.current = 1

      try {
        const result = await loadRef.current({ signal: controller.signal, page: 1 })
        if (!active) return
        const list = Array.isArray(result) ? result : (result?.games ?? [])
        setGames(dedupeById(typeof limit === 'number' ? list.slice(0, limit) : list))
        setPagination(result?.pagination ?? null)
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
      moreController.current?.abort()
      moreController.current = null
    }
  }, [key, reloadKey, limit])

  const retry = useCallback(() => setReloadKey((value) => value + 1), [])

  const loadMore = useCallback(async () => {
    if (moreController.current) return

    const controller = new AbortController()
    moreController.current = controller
    setLoadingMore(true)

    try {
      const nextPage = pageRef.current + 1
      const result = await loadRef.current({ signal: controller.signal, page: nextPage })
      const list = Array.isArray(result) ? result : (result?.games ?? [])
      pageRef.current = nextPage
      setGames((previous) => dedupeById([...previous, ...list]))
      setPagination(result?.pagination ?? null)
    } catch (err) {
      // Si se cancela (cambio de ruta) no hay nada que hacer.
      if (err.name !== 'AbortError') {
        setError(err.message || 'No se pudieron cargar los juegos')
      }
    } finally {
      moreController.current = null
      setLoadingMore(false)
    }
  }, [])

  const currentPage = Number(pagination?.page ?? 1)
  const lastPage = Number(pagination?.last_page ?? currentPage)
  const hasMore = Boolean(pagination) && currentPage < lastPage

  return {
    games,
    status,
    error,
    retry,
    pagination,
    hasMore,
    loadingMore,
    loadMore,
  }
}
