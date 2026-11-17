import CardSkeleton from './CardSkeleton'

/** Fila de skeletons con el ancho de las cards del carrusel de juegos. */
export default function CarouselSkeleton({ count = 5 }) {
  return (
    <div className="flex gap-4 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton
          key={index}
          className="w-[46%] shrink-0 sm:w-[31%] lg:w-[23%] xl:w-[19%]"
        />
      ))}
    </div>
  )
}
