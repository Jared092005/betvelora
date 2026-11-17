import { useEffect, useState } from 'react'
import { listByType, listCategoryBrands } from '../../api/games'
import { useLanguage } from '../../i18n'
import Spinner from '../spinners/Spinner'

const BRAND_BASE =
  'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full border'
const BRAND_ACTIVE = 'bg-[#d4af37]/10 border-[#d4af37]/40 text-[#f3e5ab]'
const BRAND_IDLE =
  'border-transparent text-slate-300 hover:border-[#d4af37]/30 hover:bg-white/[0.04] hover:text-[#d4af37]'

/**
 * Proveedores de una ruta concreta ("By Provider").
 * Carga sus marcas desde la API y, en desktop, limita la altura con scroll.
 */
export default function ProviderFilter({
  category,
  activeBrand,
  onSelect,
  initialBrandId = null,
}) {
  const { language } = useLanguage()
  const isEs = language === 'es'
  const [brands, setBrands] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function load() {
      setStatus('loading')
      try {
        const list =
          category === 'crash'
            ? await listByType('crash', { perPage: 100, signal: controller.signal }).then((result) => {
                const map = new Map()
                result.games.forEach((game) => {
                  if (game.providerId) {
                    map.set(String(game.providerId), {
                      id: String(game.providerId),
                      name: game.provider,
                    })
                  }
                })
                return [...map.values()]
              })
            : await listCategoryBrands(category, { signal: controller.signal }).then((items) =>
                (items || []).map((item) => ({ id: String(item.Id), name: item.Name })),
              )

        if (!active) return
        setBrands(list)
        setStatus('ready')

        if (initialBrandId) {
          const match = list.find((item) => item.id === String(initialBrandId))
          if (match && activeBrand?.id !== match.id) onSelect(match)
        }
      } catch (err) {
        if (!active || err.name === 'AbortError') return
        setBrands([])
        setStatus('ready')
      }
    }

    load()

    return () => {
      active = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, initialBrandId])

  return (
    <div className="pt-2">
      <div className="mb-3 flex items-center gap-2 px-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          {isEs ? 'Por proveedor' : 'By Provider'}
        </h2>
      </div>

      <nav
        className="flex max-h-56 flex-row gap-2 overflow-x-auto pb-2 scroll-smooth lg:max-h-56 lg:flex-col lg:gap-1.5 lg:overflow-x-hidden lg:overflow-y-auto lg:pr-1 custom-scrollbar"
        style={{ scrollbarWidth: 'thin' }}
      >
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={`${BRAND_BASE} ${!activeBrand ? BRAND_ACTIVE : BRAND_IDLE}`}
        >
          <span className="truncate">{isEs ? 'Todos los proveedores' : 'All providers'}</span>
        </button>

        {status === 'loading' && (
          <div className="flex w-full items-center justify-center gap-2.5 px-3 py-5 lg:py-6">
            <Spinner size="sm" />
            <span className="text-xs text-slate-400">
              {isEs ? 'Buscando proveedores…' : 'Searching providers…'}
            </span>
          </div>
        )}

        {status === 'ready' &&
          brands.map((brand) => (
            <button
              key={brand.id}
              type="button"
              onClick={() => onSelect(brand)}
              className={`${BRAND_BASE} ${activeBrand === brand.id ? BRAND_ACTIVE : BRAND_IDLE}`}
            >
              <span className="truncate">{brand.name}</span>
            </button>
          ))}

        {status === 'ready' && brands.length === 0 && (
          <span className="px-3.5 py-2 text-xs text-slate-500">
            {isEs ? 'Sin proveedores' : 'No providers'}
          </span>
        )}
      </nav>
    </div>
  )
}
