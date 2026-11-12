import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  listBest,
  listByCategory,
  listByProvider,
  listByType,
  listCategoryBrands,
  listNew,
} from '../api/games'
import useGames from './useGames'

// Tipos permitidos por categoría cuando se filtra por proveedor
// (el endpoint de marca devuelve juegos de todas las categorías).
const ALLOWED_TYPES = {
  casino: ['SLOT', 'INSTANT', 'SCRATCH', 'TABLE_GAMES', 'CRASH', 'ARCADE'],
  casino_live: ['LIVE'],
  virtual: ['VIRTUAL'],
  crash: ['CRASH'],
  poker: ['POKER'],
}

/**
 * Estado de los filtros de una página de juegos:
 * categoría/tipo/nuevos/populares + proveedor.
 */
export default function useGameBrowser({
  category,
  baseMode = 'category',
  baseValue,
  brandMode = 'server',
  initialBrandId = null,
}) {
  const [filter, setFilter] = useState({ mode: baseMode, value: baseValue ?? category })
  const [brand, setBrand] = useState(null)
  const [brands, setBrands] = useState([])

  const brandKey = brand && brandMode === 'server' ? brand.id : 'all'
  const key = `${category}|${filter.mode}|${filter.value}|${brandKey}`

  const state = useGames(key, ({ signal, page }) => {
    const options = { signal, page, perPage: 60 }
    if (brand && brandMode === 'server') return listByProvider(brand.id, options)
    if (filter.mode === 'type') return listByType(filter.value, options)
    if (filter.mode === 'new') return listNew(options)
    if (filter.mode === 'best') return listBest(options)
    return listByCategory(category, options)
  })

  const allowedTypes = ALLOWED_TYPES[category]
  const games = useMemo(() => {
    if (!brand) return state.games
    if (brandMode === 'client') {
      return state.games.filter((game) => String(game.providerId) === String(brand.id))
    }
    if (!allowedTypes) return state.games
    return state.games.filter((game) => allowedTypes.includes(game.type))
  }, [state.games, brand, brandMode, allowedTypes])

  // Proveedores: por categoría o derivados de los juegos (crash).
  useEffect(() => {
    let active = true

    const request =
      category === 'crash'
        ? listByType('crash', { perPage: 100 }).then((result) => {
            const map = new Map()
            result.games.forEach((game) => {
              if (game.providerId) {
                map.set(String(game.providerId), { id: String(game.providerId), name: game.provider })
              }
            })
            return [...map.values()]
          })
        : listCategoryBrands(category).then((list) =>
            (list || []).map((item) => ({ id: String(item.Id), name: item.Name })),
          )

    request
      .then((list) => {
        if (!active) return
        setBrands(list)
        if (initialBrandId) {
          const match = list.find((item) => item.id === String(initialBrandId))
          if (match) setBrand((current) => current ?? match)
        }
      })
      .catch(() => {
        if (active) setBrands([])
      })

    return () => {
      active = false
    }
  }, [category, initialBrandId])

  const select = useCallback((item) => {
    setBrand(null)
    setFilter(item.filter)
  }, [])

  const selectBrand = useCallback(
    (nextBrand) => {
      setFilter({ mode: baseMode, value: baseValue ?? category })
      setBrand(nextBrand)
    },
    [baseMode, baseValue, category],
  )

  return {
    ...state,
    games,
    brands,
    filter,
    brand,
    select,
    selectBrand,
  }
}
