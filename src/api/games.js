import { apiFetch } from './client'
import { normalizeGame, normalizeGamePage } from './normalize'

const DEFAULT_PER_PAGE = 60

export async function listByCategory(category, { page = 1, perPage = DEFAULT_PER_PAGE, search, signal } = {}) {
  const message = await apiFetch(`/games/category/${encodeURIComponent(category)}`, {
    params: { page, per_page: perPage, search },
    signal,
  })
  return normalizeGamePage(message)
}

export async function listByType(type, { page = 1, perPage = DEFAULT_PER_PAGE, search, signal } = {}) {
  const message = await apiFetch(`/games/type/${encodeURIComponent(type)}`, {
    params: { page, per_page: perPage, search },
    signal,
  })
  return normalizeGamePage(message)
}

export async function listNew({ page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const message = await apiFetch('/games/category/casino/new', {
    params: { page, per_page: perPage },
    signal,
  })
  return normalizeGamePage(message)
}

export async function listBest({ page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const message = await apiFetch('/games/category/casino/best', {
    params: { page, per_page: perPage },
    signal,
  })
  return normalizeGamePage(message)
}

export async function listByProvider(brandId, { page = 1, perPage = 5, signal } = {}) {
  const message = await apiFetch(`/games/brand/${encodeURIComponent(brandId)}`, {
    params: { page, per_page: perPage },
    signal,
  })
  return normalizeGamePage(message)
}

export async function getGame(gameId, { signal } = {}) {
  const message = await apiFetch(`/games/${encodeURIComponent(gameId)}`, { signal })
  return normalizeGame(message)
}

export async function listBrands({ signal } = {}) {
  return apiFetch('/games/brands', { signal })
}

export async function listCategoryBrands(category, { signal } = {}) {
  return apiFetch(`/games/category/${encodeURIComponent(category)}/brands`, { signal })
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
