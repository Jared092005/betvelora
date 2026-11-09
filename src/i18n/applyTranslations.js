import { translations, TRANSLATABLE_ATTRIBUTES } from './dictionary.js'

const textOriginals = new WeakMap()
const attrOriginals = new WeakMap()
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'])

function insideNoTranslate(element) {
  return Boolean(element && element.closest('[data-no-translate]'))
}

/**
 * Recorre el DOM y sustituye los textos (y atributos visibles) por su
 * traducción. Guarda el original en un WeakMap para poder volver al inglés.
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
    if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue)

    const original = textOriginals.get(node)
    const key = original.trim()
    let next = original

    if (dictionary && dictionary[key]) {
      const start = original.indexOf(key)
      const leading = original.slice(0, start)
      const trailing = original.slice(start + key.length)
      next = `${leading}${dictionary[key]}${trailing}`
    }

    if (node.nodeValue !== next) node.nodeValue = next
    node = walker.nextNode()
  }

  // ── Atributos visibles ──────────────────────────────────
  const elements = document.querySelectorAll(
    '[placeholder], [title], [alt], [aria-label]',
  )

  for (const element of elements) {
    if (insideNoTranslate(element)) continue
    if (!attrOriginals.has(element)) attrOriginals.set(element, {})

    const store = attrOriginals.get(element)
    for (const attribute of TRANSLATABLE_ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue
      if (!(attribute in store)) store[attribute] = element.getAttribute(attribute)

      const original = store[attribute]
      const value = dictionary && dictionary[original] ? dictionary[original] : original
      if (element.getAttribute(attribute) !== value) {
        element.setAttribute(attribute, value)
      }
    }
  }
}
