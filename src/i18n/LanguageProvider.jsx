import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguageContext } from './context'
import { applyTranslations } from './applyTranslations'

const STORAGE_KEY = 'velora:lang'
const SUPPORTED = ['es', 'en']

function readStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return SUPPORTED.includes(stored) ? stored : 'en'
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage)
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
    document.documentElement.lang = language
  }, [language])

  // Se re-aplica al cambiar de idioma y al cambiar de ruta
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined
    const frame = window.requestAnimationFrame(() => applyTranslations(language))
    return () => window.cancelAnimationFrame(frame)
  }, [language, pathname])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
