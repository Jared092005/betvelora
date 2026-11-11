import { translations, TRANSLATABLE_ATTRIBUTES } from './dictionary.js'

const textState = new WeakMap()
const attrState = new WeakMap()
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'])

function insideNoTranslate(element) {
  return Boolean(element && element.closest('[data-no-translate]'))
}

/**
 * Recorre el DOM y sustituye los textos (y atributos visibles) por su
 * traducción. Guarda el original de cada nodo para poder volver al inglés.
 *
 * Importante: React puede cambiar el texto entre pasadas (cambio de ruta,
 * de estado…). Si el valor actual no es el que escribimos la última vez,
 * se toma como nuevo original; así no se revierten los cambios de React.
 * Los nodos dentro de [data-no-translate] se ignoran.
 */
export function applyTranslations(language) {
  if (typeof document === 'undefined') return

  const dictionary = language === 'es' ? translations : null

  // ── Nodos de texto ──────────────────────────────────────
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const value = node.nodeValue
      if (!value || !value.trim()) return NodeFilter.FILTER_REJECT
      const parent = node.parentElement
      if (!parent || SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT
      if (insideNoTranslate(parent)) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })

  let node = walker.nextNode()
  while (node) {
    const current = node.nodeValue
    let state = textState.get(node)

    if (!state || state.applied !== current) {
      state = { original: current, applied: current }
    }

    const key = state.original.trim()
    let next = state.original

    if (dictionary && dictionary[key]) {
      const start = state.original.indexOf(key)
      const leading = state.original.slice(0, start)
      const trailing = state.original.slice(start + key.length)
      next = `${leading}${dictionary[key]}${trailing}`
    }

    state.applied = next
    textState.set(node, state)
    if (node.nodeValue !== next) node.nodeValue = next

    node = walker.nextNode()
  }

  // ── Atributos visibles ──────────────────────────────────
  const elements = document.querySelectorAll(
    '[placeholder], [title], [alt], [aria-label]',
  )

  for (const element of elements) {
    if (insideNoTranslate(element)) continue

    const store = attrState.get(element) ?? {}

    for (const attribute of TRANSLATABLE_ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue

      const current = element.getAttribute(attribute)
      let entry = store[attribute]
      if (!entry || entry.applied !== current) {
        entry = { original: current, applied: current }
      }

      const value = dictionary && dictionary[entry.original] ? dictionary[entry.original] : entry.original
      entry.applied = value
      store[attribute] = entry

      if (element.getAttribute(attribute) !== value) {
        element.setAttribute(attribute, value)
      }
    }

    attrState.set(element, store)
  }
}
