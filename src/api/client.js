/**
 * Cliente HTTP de la API de Velora.
 * La URL base vive en `.env` → VITE_API_BASE_URL.
 */
const BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')
const BRAND = import.meta.env.VITE_API_BRAND || '12'

export class ApiError extends Error {
  constructor(message, { status = null, payload = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.payload = payload
  }
}

/** Token del jugador guardado por el frontend en localStorage.auth. */
function readToken() {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem('auth')
    if (!stored) return null
    const auth = JSON.parse(stored)
    return auth?.token ?? auth?.Token ?? null
  } catch {
    return null
  }
}

export function buildUrl(path, params) {
  const url = new URL(`${BASE_URL}${path}`)
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || value === '') continue
      url.searchParams.set(key, value)
    }
  }
  return url
}

/**
 * Petición a la API.
 * Devuelve `message` del sobre { status, message } y lanza ApiError si falla.
 */
export async function apiFetch(path, { method = 'GET', params, body, auth = false, signal } = {}) {
  if (!BASE_URL) {
    throw new ApiError('Falta VITE_API_BASE_URL en el archivo .env')
  }

  const headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Brand: BRAND,
  }

  if (auth) {
    const token = readToken()
    if (token) headers.Authorization = `Bearer ${token}`
  }

  let payload
  if (body instanceof FormData) {
    payload = body
  } else if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
    payload = JSON.stringify(body)
  }

  let response
  try {
    response = await fetch(buildUrl(path, params), { method, headers, body: payload, signal })
  } catch (error) {
    if (error.name === 'AbortError') throw error
    throw new ApiError('No se pudo conectar con el servidor')
  }

  let json
  try {
    json = await response.json()
  } catch {
    throw new ApiError(`Respuesta no válida del servidor (${response.status})`, {
      status: response.status,
    })
  }

  if (!response.ok || json?.status === false) {
    throw new ApiError(json?.message || `La API respondió ${response.status}`, {
      status: response.status,
      payload: json,
    })
  }

  return json.message
}

export { BASE_URL, BRAND }
