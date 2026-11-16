import ProviderFilter from '../provider/ProviderFilter'

const ITEM_BASE =
  'flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full border'
const ITEM_ACTIVE =
  'bg-[#d4af37]/15 border-[#d4af37]/40 text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
const ITEM_IDLE = 'border-transparent text-slate-300 hover:bg-white/[0.04] hover:text-white'

/**
 * Filtros laterales de una página de juegos:
 * categoría/tipo + proveedor, con estado activo.
 */
export default function GameFilters({
  title,
  items = [],
  activeKey,
  onSelect,
  category,
  activeBrand,
  onSelectBrand,
  initialBrandId,
}) {
  return (
    <>
      <div>
        <div className="mb-3 flex items-center gap-2 px-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">{title}</h2>
        </div>
        <nav
          className="flex flex-row gap-2.5 overflow-x-auto pb-2 scroll-smooth lg:flex-col lg:gap-0 lg:space-y-1 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect(item)}
              className={`${ITEM_BASE} ${activeKey === item.key ? ITEM_ACTIVE : ITEM_IDLE}`}
            >
              <span className="flex items-center">
                <i className={`${item.icon} mr-3 w-5 text-center text-sm`} />
                <span className="font-semibold">{item.label}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      <ProviderFilter
        category={category}
        activeBrand={activeBrand}
        onSelect={onSelectBrand}
        initialBrandId={initialBrandId}
      />
    </>
  )
}
