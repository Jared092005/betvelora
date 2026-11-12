/**
 * Normaliza los objetos de la API al formato que usa GameCard:
 * { id, name, image, provider, badge }.
 */
export function normalizeGame(game) {
  if (!game) return null

  const type = (game.Type || '').toUpperCase()

  return {
    id: String(game.Id),
    name: game.Name || 'Game',
    image: game.Logo || null,
    provider: game.GameBrand?.Name ?? game.provider ?? null,
    providerId: game.GameBrand?.Id ?? game.GameBrandfk ?? null,
    type: type || null,
    category: type ? type.toLowerCase() : null,
    badge: type === 'LIVE' ? 'LIVE' : null,
    raw: game,
  }
}

export function normalizeGamePage(message) {
  const items = Array.isArray(message?.items) ? message.items : []
  return {
    games: items.map(normalizeGame).filter(Boolean),
    pagination: message?.pagination ?? null,
  }
}
