export default function PageShell({ title, subtitle, icon, children }) {
  return (
    <section className="bg-casino-pattern">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="border-b border-velora-borderSubtle pb-8">
          {icon && (
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-velora-gold/30 bg-velora-gold/10 text-velora-gold">
              <i className={`fa-solid ${icon} text-lg`} />
            </span>
          )}

          <h1 className="mt-4 font-cinzel text-headline-lg text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 max-w-2xl text-slate-400">{subtitle}</p>
          )}
        </header>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
