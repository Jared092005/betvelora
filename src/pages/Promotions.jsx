import { Link } from 'react-router-dom'

/**
 * Promotions — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Promotions() {

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-200 antialiased selection:bg-[#d4af37]/30 selection:text-white">



      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/promotions/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      <nav className="flex flex-col py-6 space-y-2 sticky top-0"><Link to="/home" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Home</Link>
      <Link to="/casino" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Casino</Link>
      <Link to="/casino-live" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Casino Live</Link>
      <Link to="/poker" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Poker</Link>
      <Link to="/virtual" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Virtual</Link>
      <Link to="/promotions" className="px-4 py-3 rounded-xl bg-velora-gold/15 text-velora-gold font-bold text-sm tracking-widest uppercase border border-velora-gold/30 transition-all">Promotions</Link>
      <a className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all" href="#">Profile</a>
      <a className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all" href="#">Messages</a></nav>
      </div>

      <div className="flex-1 w-full bg-[#000000]" data-purpose="bonuses-main-content">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-10 lg:py-14">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

      <aside className="lg:col-span-3 xl:col-span-2 flex flex-col gap-6" data-purpose="bonus-sidebar-nav">
      <div>
      <h1 className="text-xl md:text-2xl font-black uppercase text-white tracking-wider">
                    Bonuses
                  </h1>
      </div>
      <nav aria-label="Bonus Categories" className="flex flex-col gap-2 pt-2">

      <a className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.04] border-l-2 border-[#d4af37] text-white font-bold text-sm tracking-wide transition-all" href="#">
      <span className="uppercase text-xs tracking-wider">Available Bonuses</span>
      </a>
      <a className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.02] font-semibold text-xs uppercase tracking-wider transition-all" href="#">
      <span className="">Active Bonuses</span>
      </a>
      <a className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.02] font-semibold text-xs uppercase tracking-wider transition-all" href="#">
      <span className="">Bonus History</span>
      <i className="fa-solid fa-clock-rotate-left text-[11px] text-slate-600 group-hover:text-slate-400"></i>
      </a>
      </nav>
      </aside>

      <section className="lg:col-span-9 xl:col-span-10" data-purpose="bonus-display-area">
      <div className="w-full min-h-[460px] lg:min-h-[540px] rounded-2xl bg-[#090a0e]/60 border border-white/[0.05] p-8 md:p-14 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/[0.03] via-transparent to-transparent pointer-events-none"></div>

      <div className="flex flex-col items-center text-center max-w-md mx-auto z-10">

      <div className="relative mb-6 group cursor-default">

      <div className="absolute -inset-3 bg-[#d4af37]/15 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center gift-glow">
      <svg className="w-14 h-14 sm:w-16 sm:h-16" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

      <rect fill="#E5A638" height="11" rx="2" width="44" x="10" y="20"></rect>

      <rect fill="#C5221F" height="11" width="7" x="28.5" y="20"></rect>

      <path d="M14 31H50V52C50 53.6569 48.6569 55 47 55H17C15.3431 55 14 53.6569 14 52V31Z" fill="#C98B28"></path>
      <path d="M14 31H50V33H14V31Z" fill="#B37719"></path>

      <rect fill="#C5221F" height="24" width="7" x="28.5" y="31"></rect>

      <path d="M32 20C32 20 27 12 21 14C15 16 20 21 30 20.5" fill="#E2302D"></path>
      <path d="M32 20C32 20 37 12 43 14C49 16 44 21 34 20.5" fill="#E2302D"></path>

      <circle cx="32" cy="20" fill="#A81916" r="3"></circle>
      </svg>
      </div>
      </div>

      <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight mb-2">
                      No bonuses available
                    </h2>

      <p className="text-slate-400 text-sm font-normal mb-8">
                      No bonuses available at the moment.
                    </p>

      <div className="flex flex-wrap items-center justify-center gap-3 w-full">
      <button className="px-6 py-2.5 rounded-lg bg-[#14161f] hover:bg-[#1a1d28] border border-white/10 hover:border-[#d4af37]/40 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer flex items-center gap-2">
      <i className="fa-solid fa-arrows-rotate text-[11px] text-slate-400"></i>
      <span className="">Refresh</span>
      </button>
      <button className="px-6 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#e6c35c] text-slate-900 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer flex items-center gap-2">
      <i className="fa-solid fa-wallet text-[11px]"></i>
      <span className="">Deposit to Unlock</span>
      </button>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>









    </div>
  )
}
