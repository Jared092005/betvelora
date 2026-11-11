import { Link } from 'react-router-dom'
import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Transactions — copiado de la pantalla "Transactions" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function Transactions() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div>

        <div className="space-y-6 mb-8">

        <div className="flex items-center gap-3">

        <span className="inline-flex items-center justify-center text-white">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 2v18l3-2 3 2 3-2 3 2 3-2 1 2V2L17 4l-3-2-3 2-3-2-4 2zm4 6h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"></path>
        </svg>
        </span>
        <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
        Transaction History
        </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">

        <nav aria-label="Transaction Categories" className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 text-sm font-medium scrollbar-none">
        <button className="px-4 py-2 rounded-lg bg-white/[0.08] text-gold border border-gold/40 shadow-sm cursor-pointer whitespace-nowrap" type="button">
        All Transactions
        </button>
        <button className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition cursor-pointer whitespace-nowrap" type="button">
        Deposits
        </button>
        <button className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition cursor-pointer whitespace-nowrap" type="button">
        Withdrawals
        </button>
        <button className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition cursor-pointer whitespace-nowrap" type="button">
        Bets &amp; Games
        </button>

        </nav>

        <div className="flex items-center gap-3">
        <div className="relative">
        <select aria-label="Transaction time period" className="appearance-none bg-surface-card border border-white/[0.1] text-slate-300 text-xs sm:text-sm rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-gold focus:border-gold outline-none cursor-pointer">
        <option>Last 30 Days</option>
        <option>Last 7 Days</option>
        <option>Last 3 Months</option>
        <option>Year to Date</option>
        <option>Custom Range</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="bg-velora-cardBg border border-white/[0.06] rounded-2xl p-10 sm:p-20 text-center flex flex-col items-center justify-center min-h-[380px] shadow-2xl" data-purpose="empty-transactions-state">

        <div className="mb-5 inline-flex p-3 rounded-full bg-white/[0.06] text-white ring-1 ring-white/10">
        <svg aria-hidden="true" className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 2v18l3-2 3 2 3-2 3 2 3-2 1 2V2L17 4l-3-2-3 2-3-2-4 2zm4 6h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"></path>
        </svg>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
        No transactions yet
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mt-2 leading-relaxed">
        Your deposits, withdrawals and bets will show up here once you start playing.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to="/account/deposit" className="btn-primary w-full whitespace-nowrap px-6 py-2.5 sm:w-auto">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
        </svg>
        <span>Deposit Funds</span>
        </Link>
        <Link to="/" className="w-full sm:w-auto whitespace-nowrap px-6 py-2.5 rounded-lg font-semibold text-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer">
        <span>Explore Games</span>
        </Link>
        </div>
        </div>
        </div>










      </div>
    </div>
  )
}
