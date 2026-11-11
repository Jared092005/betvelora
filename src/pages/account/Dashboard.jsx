import { Link } from 'react-router-dom'
import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Dashboard — copiado desde la pantalla "Dashboard" de Stitch.
 * La barra lateral vive en AccountSidebar y el contenedor en AccountLayout.
 */
export default function Dashboard() {
  return (





    <div>

    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
    <div><h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase flex items-center gap-3"><span>HI, USER</span></h1></div>

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">


    <AccountSidebar />



    <div className="lg:col-span-5 space-y-6">

    <section className="bg-velora-cardBg rounded-2xl border border-white/[0.08] p-6 shadow-card-soft relative overflow-hidden" data-purpose="available-balance-widget">

    <div className="absolute -right-16 -top-16 w-44 h-44 bg-velora-gold/5 rounded-full blur-3xl pointer-events-none"></div>

    <div className="flex items-center justify-between mb-3">
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Available Balance</h2>
    <button className="text-slate-400 hover:text-velora-gold text-xs transition-colors cursor-pointer" title="Refresh balance">
    <i className="fa-solid fa-arrows-rotate"></i>
    </button>
    </div>

    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1.5 mb-5 font-sans"><span>0.00</span><span className="text-white font-bold">€</span></div>

    <div className="border-t border-white/[0.08] my-4"></div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-2 mb-6">

    <div className="space-y-1">
    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wide">Withdrawable</span>
    <p className="text-sm sm:text-base font-bold text-white tracking-tight">0.00 €</p>
    </div>

    <div className="space-y-1">
    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wide">Bonus</span>
    <p className="text-sm sm:text-base font-bold text-white tracking-tight">0.00 €</p>
    </div>

    <div className="space-y-1">
    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wide">Non withdrawable</span>
    <p className="text-sm sm:text-base font-bold text-white tracking-tight">0.00 €</p>
    </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">

    <Link to="/account/deposit" className="btn-primary w-full text-sm uppercase tracking-wider"><i className="fa-solid fa-wallet text-xs"></i><span>Deposit</span></Link>

    <Link to="/account/withdrawal" className="w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.12] hover:border-velora-gold/40 hover:text-white transition-all duration-200 active:scale-[0.98] cursor-pointer text-center flex items-center justify-center gap-2">
    <i className="fa-solid fa-money-bill-transfer text-xs"></i>
    <span>Withdrawal</span>
    </Link>
    </div>
    </section>

    <section className="bg-velora-cardBg rounded-2xl border border-white/[0.08] p-6 shadow-card-soft min-h-[260px] flex flex-col justify-between" data-purpose="recent-activity-widget">

    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Activity</h2>

    <div className="my-auto py-8 text-center flex flex-col items-center justify-center">
    <div className="w-16 h-16 rounded-2xl bg-[#171926] border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400/80 shadow-inner">
    <i className="fa-solid fa-gamepad text-2xl"></i>
    </div>
    <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">No sessions yet</h3>
    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Your recent game sessions will appear here.</p>
    </div>

    <div className="pt-2 text-center border-t border-white/[0.05]">
    <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-velora-gold hover:text-velora-goldLight transition-colors" href="#">
    <span>Explore games catalog</span>
    <i className="fa-solid fa-arrow-right text-[10px]"></i>
    </a>
    </div>
    </section>
    </div>



    <div className="lg:col-span-4 space-y-6">

    <section className="bg-velora-cardBg rounded-2xl border border-white/[0.08] p-6 shadow-card-soft min-h-[260px] flex flex-col justify-between" data-purpose="promotions-widget">

    <div className="flex items-center justify-between">
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Promotions</h2>
    <span className="text-[10px] text-velora-gold font-bold tracking-wider uppercase bg-velora-gold/10 px-2 py-0.5 rounded border border-velora-gold/20">Available 0</span>
    </div>

    <div className="my-auto py-6 text-center flex flex-col items-center justify-center">
    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-4 text-amber-400 shadow-inner">
    <i className="fa-solid fa-gift text-2xl"></i>
    </div>
    <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">No promotions yet</h3>
    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Offers aimed at your account will show up here.</p>
    </div>

    <div className="pt-2 text-center border-t border-white/[0.05]">
    <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-velora-gold hover:text-velora-goldLight transition-colors" href="#">
    <span>View VIP Club Perks</span>
    <i className="fa-solid fa-arrow-right text-[10px]"></i>
    </a>
    </div>
    </section>

    <section className="bg-velora-cardBg rounded-2xl border border-white/[0.08] p-6 shadow-card-soft min-h-[260px] flex flex-col justify-between" data-purpose="favorite-games-widget">

    <div className="flex items-center justify-between">
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Favorite Games</h2>
    <i className="fa-regular fa-star text-xs text-slate-500"></i>
    </div>

    <div className="my-auto py-6 text-center flex flex-col items-center justify-center">
    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center mb-4 text-amber-400 shadow-inner">
    <i className="fa-solid fa-star text-2xl"></i>
    </div>
    <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">No favorites yet</h3>
    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Tap the heart on a game to keep it here.</p>
    </div>

    <div className="pt-2 text-center border-t border-white/[0.05]">
    <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-velora-gold hover:text-velora-goldLight transition-colors" href="#">
    <span>Browse Popular Slots</span>
    <i className="fa-solid fa-arrow-right text-[10px]"></i>
    </a>
    </div>
    </section>
    </div>

    </div>


    </div>










  )
}
