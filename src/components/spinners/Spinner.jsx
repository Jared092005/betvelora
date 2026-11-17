const SIZES = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
}

const TONES = {
  gold: 'border-velora-gold/25 border-t-velora-gold',
  red: 'border-white/15 border-t-velora-red',
  light: 'border-white/20 border-t-white',
}

/** Spinner circular (dorado por defecto). */
export default function Spinner({ size = 'md', tone = 'gold', className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block animate-spin rounded-full border-2 ${
        TONES[tone] ?? TONES.gold
      } ${SIZES[size] ?? SIZES.md} ${className}`}
    />
  )
}
