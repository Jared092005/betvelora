import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-casino-pattern">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <p className="font-cinzel text-6xl font-bold text-velora-gold">404</p>
        <h1 className="mt-4 font-cinzel text-headline-md text-white">
          Página no encontrada
        </h1>
        <p className="mt-2 text-slate-400">
          La ruta que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-lg bg-velora-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 transition-colors hover:bg-velora-goldLight"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
