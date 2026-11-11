import AccountSidebar from './AccountSidebar'

/**
 * Estructura compartida por las páginas de cuenta que aún no tienen
 * diseño propio: barra lateral + tarjeta de contenido.
 */
export default function AccountSection({ title, description, icon }) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <section className="lg:col-span-9">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            {icon && <i className={`${icon} text-velora-gold`} />}
            {title}
          </h1>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-velora-cardBg p-8 shadow-card-soft sm:p-12">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      </section>
    </div>
  )
}
