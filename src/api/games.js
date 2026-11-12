import { apiFetch } from './client'
import { normalizeGame, normalizeGamePage } from './normalize'

const DEFAULT_PER_PAGE = 60

export async function listByCategory(category, { page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const message = await apiFetch(`/games/category/${encodeURIComponent(category)}`, {
    params: { page, per_page: perPage },
    signal,
  })
  return normalizeGamePage(message)
}

export async function listByType(type, { page = 1, perPage = DEFAULT_PER_PAGE, signal } = {}) {
  const message = await apiFetch(`/games/type/${encodeURIComponent(type)}`, {
    params: { page, per_page: perPage },
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
