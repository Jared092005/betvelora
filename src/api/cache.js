/**
 * Caché en memoria para respuestas de listas de juegos y proveedores.
 * Vive mientras dure la pestaña (se pierde al recargar).
 */
const store = new Map()

export function getCached(key) {
  const entry = store.get(key)
  if (!entry) return null
  if (entry.expiresAt <= Date.now()) {
    store.delete(key)
    return null
  }
  return entry.value
}

export function setCached(key, value, ttlMs) {
  if (!ttlMs || ttlMs <= 0) return
  store.set(key, { value, expiresAt: Date.now() + ttlMs })
}

export function clearCache(prefix) {
  if (!prefix) {
    store.clear()
    return
  }
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) store.delete(key)
  }
}
