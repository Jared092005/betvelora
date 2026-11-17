import { apiFetch } from './client'
import { normalizeGame, normalizeGamePage } from './normalize'
import { getCached, setCached } from './cache'

const DEFAULT_PER_PAGE = 40

// TTL: el catálogo cambia poco. Invitados pueden cachear más que usuarios.
const GUEST_TTL = 15 * 60 * 1000
const USER_TTL = 3 * 60 * 1000
const BRANDS_TTL = 45 * 60 * 1000
const GAME_TTL = 5 * 60 * 1000
const SEARCH_TTL = 2 * 60 * 1000

function sessionTtl() {
  if (typeof window === 'undefined') return GUEST_TTL
  try {
    return window.localStorage.getItem('auth') ? USER_TTL : GUEST_TTL
  } catch {
    return GUEST_TTL
  }
}

function cached(key, ttl, loader) {
  const hit = getCached(key)
  if (hit) return Promise.resolve(hit)

  return loader().then((value) => {
    setCached(key, value, ttl)
    return value
  })
}

export function listByCategory(category, { page = 1, perPage = DEFAULT_PER_PAGE, search, signal } = {}) {
  const key = `games:category:${category}:${page}:${perPage}:${search || ''}`
  return cached(key, search ? SEARCH_TTL : sessionTtl(), async () => {
    const message = await apiFetch(`/games/category/${encodeURIComponent(category)}`, {
      params: { page, per_page: perPage, search },
      signal,
    })
    return normalizeGamePage(message)
  })
}

export function listByType(type, { page = 1, perPage = DEFAULT_PER_PAGE, search, signal } = {}) {
  const key = `games:type:${type}:${page}:${perPage}:${search || ''}`
  return cached(key, search ? SEARCH_TTL : sessionTtl(), async () => {
    const message = await apiFetch(`/games/type/${encodeURIComponent(type)}`, {
      params: { page, per_page: perPage, search },
      signal,
    })
    return normalizeGamePage(message)
  })
}

export function listNew({ page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const key = `games:new:${page}:${perPage}`
  return cached(key, sessionTtl(), async () => {
    const message = await apiFetch('/games/category/casino/new', {
      params: { page, per_page: perPage },
      signal,
    })
    return normalizeGamePage(message)
  })
}

export function listBest({ page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const key = `games:best:${page}:${perPage}`
  return cached(key, sessionTtl(), async () => {
    const message = await apiFetch('/games/category/casino/best', {
      params: { page, per_page: perPage },
      signal,
    })
    return normalizeGamePage(message)
  })
}

export function listByProvider(brandId, { page = 1, perPage = 5, signal } = {}) {
  const key = `games:brand:${brandId}:${page}:${perPage}`
  return cached(key, sessionTtl(), async () => {
    const message = await apiFetch(`/games/brand/${encodeURIComponent(brandId)}`, {
      params: { page, per_page: perPage },
      signal,
    })
    return normalizeGamePage(message)
  })
}

export function getGame(gameId, { signal } = {}) {
  const key = `game:${gameId}`
  return cached(key, GAME_TTL, async () => {
    const message = await apiFetch(`/games/${encodeURIComponent(gameId)}`, { signal })
    return normalizeGame(message)
  })
}

export function listBrands({ signal } = {}) {
  return cached('brands:all', BRANDS_TTL, () => apiFetch('/games/brands', { signal }))
}

export function listCategoryBrands(category, { signal } = {}) {
  return cached(`brands:category:${category}`, BRANDS_TTL, () =>
    apiFetch(`/games/category/${encodeURIComponent(category)}/brands`, { signal }),
  )
}

/**
 * Busca juegos en todas las categorías a la vez (el endpoint acepta ?search=).
 * Devuelve una lista sin duplicados.
 */
export async function searchGames(query, { perPage = 24, signal } = {}) {
  const responses = await Promise.allSettled([
    listByCategory('casino', { perPage, search: query, signal }),
    listByCategory('casino_live', { perPage, search: query, signal }),
    listByType('crash', { perPage, search: query, signal }),
    listByCategory('virtual', { perPage, search: query, signal }),
    listByCategory('poker', { perPage, search: query, signal }),
  ])

  const byId = new Map()
  for (const response of responses) {
    if (response.status !== 'fulfilled') continue
    for (const game of response.value.games) {
      if (!byId.has(game.id)) byId.set(game.id, game)
    }
  }
  return [...byId.values()]
}
