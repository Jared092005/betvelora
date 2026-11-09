import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n'
import Flag from './Flag'

const OPTIONS = [
  { code: 'es', label: 'Español', flag: 'es' },
  { code: 'en', label: 'English', flag: 'en' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const current = OPTIONS.find((option) => option.code === language) ?? OPTIONS[1]

  const select = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={containerRef} data-no-translate>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Seleccionar idioma"
        title="Idioma / Language"
        className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-velora-borderSubtle bg-velora-surface px-3 text-slate-300 transition-all hover:border-velora-gold/40 hover:text-white"
      >
        <Flag code={current.flag} className="h-3.5 w-5 rounded-[2px]" />
        <span className="hidden text-[11px] font-bold uppercase tracking-wider sm:inline">
          {current.code}
        </span>
        <i
          className={`fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Idioma"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-velora-borderSubtle bg-[#0A0C13] py-1 shadow-2xl"
        >
          {OPTIONS.map((option) => {
            const isSelected = option.code === language
            return (
              <li key={option.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => select(option.code)}
                  className={`flex w-full cursor-pointer items-center gap-2.5 px-3 py-2.5 text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-velora-gold/15 font-bold text-velora-gold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Flag code={option.flag} className="h-3.5 w-5 rounded-[2px]" />
                  <span>{option.label}</span>
                  {isSelected && (
                    <i className="fa-solid fa-check ml-auto text-[10px]" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
