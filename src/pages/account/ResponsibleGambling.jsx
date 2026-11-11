import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Responsible Gambling Limits — copiado de la pantalla "Responsible Gambling Limits" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function ResponsibleGambling() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div>

        <section className="mb-10" data-purpose="page-intro">
        <div className="flex items-center gap-3 mb-2.5">
        <span className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
        <i className="fa-solid fa-shield-halved text-sm"></i>
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-brand">
        RESPONSIBLE GAMBLING LIMITS
        </h1>
        </div>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
        Set limits to control your spending and playing time. Decreasing a limit takes effect immediately; increases require a 24-hour waiting period.
        </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

        <section className="bg-[#0b0c10] border border-[#1d1f27] rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/60 flex flex-col min-h-[360px]" data-purpose="active-limits-section">
        <h2 className="text-lg font-bold text-white tracking-wide mb-6">
        Your active limits
        </h2>

        <div className="flex-grow flex flex-col items-center justify-center text-center p-8 border border-dashed border-[#1f222e] rounded-xl bg-[#07070a]/50">
        <div className="w-12 h-12 rounded-full bg-[#14161f] border border-[#232734] flex items-center justify-center text-gray-500 mb-3">
        <i className="fa-solid fa-sliders text-base"></i>
        </div>
        <p className="text-gray-400 text-sm sm:text-base font-normal">
        You have no limits set yet.
        </p>
        <span className="text-xs text-gray-600 mt-1">Configure limits on the right to stay in full control.</span>
        </div>
        </section>


        <section className="bg-[#0b0c10] border border-[#1d1f27] rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/60" data-purpose="add-limit-section">
        <h2 className="text-lg font-bold text-white tracking-wide mb-6">
        Add a new limit
        </h2>
        <form className="space-y-5" id="limit-form">

        <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300" htmlFor="limit-type-select">
        Limit type
        </label>
        <div className="relative">
        <select className="w-full bg-[#121319] border border-[#242735] hover:border-gold-500/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white rounded-xl py-3 px-4 text-sm font-medium appearance-none cursor-pointer transition-colors duration-200" id="limit-type-select">
        <option selected value="daily_deposit">Daily deposit limit</option>
        <option value="weekly_deposit">Weekly deposit limit</option>
        <option value="monthly_deposit">Monthly deposit limit</option>
        <option value="loss_limit">Daily loss limit</option>
        <option value="session_time">Session time limit (Minutes)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
        <i className="fa-solid fa-chevron-down text-xs"></i>
        </div>
        </div>
        </div>

        <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300" htmlFor="limit-amount-input">
        Amount
        </label>
        <div className="relative">
        <input className="w-full bg-[#121319] border border-[#242735] hover:border-gold-500/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 rounded-xl py-3 pl-4 pr-12 text-sm transition-colors duration-200 font-medium" id="limit-amount-input" min="1" name="amount" placeholder="e.g. 50" step="any" type="number" />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 font-semibold text-sm">
        €
        </div>
        </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed pt-1 flex items-start gap-2">
        <i className="fa-solid fa-circle-info text-gold-500 text-xs mt-0.5"></i>
        <span>Lowering a limit applies right away. Raising it only applies after 24 hours.</span>
        </p>

        <div className="pt-2">
        <button className="btn-primary w-full sm:w-auto min-w-[200px] text-sm uppercase tracking-wider py-3.5 px-8 hover:scale-[1.01]" id="save-limit-btn" type="submit">
        Save limit
        </button>
        </div>
        </form>
        </section>

        </div>
        </div>
      </div>
    </div>
  )
}
