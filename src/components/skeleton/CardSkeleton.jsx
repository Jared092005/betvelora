/** Skeleton con la forma de una card de juego (portada + título + proveedor). */
export default function CardSkeleton({ className = '' }) {
  return (
    <div className={`animate-pulse ${className}`} aria-hidden="true">
      <div className="aspect-square w-full rounded-2xl border border-white/[0.08] bg-[#181a20]" />
      <div className="space-y-2 px-1 pt-2">
        <div className="h-3 w-3/4 rounded bg-white/10" />
        <div className="h-2.5 w-1/3 rounded bg-white/5" />
      </div>
    </div>
  )
}
