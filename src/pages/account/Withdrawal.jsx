import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Withdrawal — copiado de la pantalla "Withdrawal" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function Withdrawal() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8" data-purpose="page-headline">
        <div className="flex items-center gap-4 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-white uppercase flex items-center gap-3">
        <i className="fa-solid fa-wallet text-[#d4af37] text-xl"></i>
        WITHDRAWAL
        </h1>

        <div className="inline-flex items-stretch gap-3 rounded-2xl border border-white/[0.1] bg-[#111319] px-4 py-2 shadow-sm">
        <div className="flex flex-col gap-0.5 leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Withdrawable Balance</span>
        <span className="text-base font-bold text-white">0.00 €</span>
        </div>
        <div className="flex flex-col gap-0.5 border-l border-white/[0.1] pl-3 leading-tight">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Total</span>
        <span className="text-sm font-bold text-white">0.00 €</span>
        </div>
        </div>
        </div>


        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <section className="lg:col-span-8 bg-[#111319]/90 border border-white/[0.08] rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-sm" data-purpose="withdrawal-form-container">
        <form action="#" className="space-y-7" method="POST">

        <div data-purpose="method-selection">
        <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
        WITHDRAWAL METHOD
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        <div aria-checked="true" className="relative cursor-pointer rounded-xl bg-gradient-to-b from-[#181a24] to-[#0d0f16] border-2 border-[#d4af37] p-3.5 flex flex-col justify-between h-24 text-center transition-all shadow-md shadow-[#d4af37]/10" role="radio">
        <span className="text-xs font-semibold text-white leading-snug line-clamp-2 my-auto">
        Alp-Pay (Transferencia local LatAm)
        </span>

        </div>

        <div aria-checked="false" className="relative cursor-pointer rounded-xl bg-[#0b0d13] border border-white/[0.08] hover:border-white/[0.2] p-3.5 flex flex-col justify-between h-24 text-center transition-all group" role="radio">
        <span className="text-xs font-medium text-slate-400 group-hover:text-white leading-snug line-clamp-2 my-auto transition-colors">
        Alp-Pay (Tarjeta 2DS)
        </span>
        </div>

        <div aria-checked="false" className="relative cursor-pointer rounded-xl bg-[#0b0d13] border border-white/[0.08] hover:border-white/[0.2] p-3.5 flex flex-col justify-between h-24 text-center transition-all group" role="radio">
        <span className="text-xs font-medium text-slate-400 group-hover:text-white leading-snug line-clamp-2 my-auto transition-colors">
        Bank Transfer
        </span>
        </div>
        </div>
        </div>

        <div className="space-y-3 pt-1 border-t border-white/[0.06]" data-purpose="amount-input-group">
        <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">
        AMOUNT
        </label>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">10 €</button>
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">25 €</button>
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">50 €</button>
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">100 €</button>
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">250 €</button>
        <button className="py-2 px-2 text-xs font-medium rounded-lg bg-[#0e1017] border border-white/[0.08] hover:border-[#d4af37] hover:text-[#d4af37] text-slate-300 transition-all text-center" type="button">500 €</button>
        </div>

        <div className="space-y-1 mt-3">
        <label className="block text-xs text-slate-400 font-medium" htmlFor="amount-input">Amount (€)</label>
        <div className="relative">
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 pl-4 pr-10 text-white placeholder-slate-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm font-medium" id="amount-input" min="10" placeholder="Amount" type="number" />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500 font-semibold">
        €
        </div>
        </div>
        </div>
        </div>

        <div className="space-y-4 pt-2 border-t border-white/[0.06]" data-purpose="details-inputs">
        <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">YOUR DETAILS</h3>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="country-select">País <span className="text-amber-500">*</span></label>
        <select className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all appearance-none" id="country-select">
        <option disabled selected value="">Select country</option>
        <option value="AR">Argentina</option>
        <option value="BO">Bolivia</option>
        <option value="CL">Chile</option>
        <option value="CO">Colombia</option>
        <option value="CR">Costa Rica</option>
        <option value="EC">Ecuador</option>
        <option value="GT">Guatemala</option>
        <option value="HN">Honduras</option>
        <option value="MX">México</option>
        <option value="PE">Perú</option>
        <option value="UY">Uruguay</option>
        </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="first-name">Nombre <span className="text-amber-500">*</span></label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="first-name" placeholder="Enter first name" type="text" />
        </div>
        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="last-name">Apellidos <span className="text-amber-500">*</span></label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="last-name" placeholder="Enter last name" type="text" />
        </div>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="doc-type">Tipo de documento</label>
        <select className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="doc-type">
        <option value="">—</option>
        <option value="DNI">DNI</option>
        <option value="CURP">CURP / RFC</option>
        <option value="RUT">RUT</option>
        <option value="PASSPORT">Pasaporte</option>
        </select>
        <p className="text-[11px] text-slate-500 mt-1">Obligatorio en AR, BO, CL, CO, CR, EC, GT, HN, MX, UY, PE</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="doc-number">Número de documento</label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="doc-number" placeholder="" type="text" />
        <p className="text-[11px] text-slate-500 mt-1">Obligatorio en AR, BO, CL, CO, CR, EC, GT, HN, MX, UY, PE</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="bank-name">Banco <span className="text-amber-500">*</span></label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="bank-name" placeholder="Type the bank name or code" type="text" />
        <p className="text-[11px] text-slate-500 mt-1">Elige tu banco o escribe su código.</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="account-number">Número de cuenta <span className="text-amber-500">*</span></label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all font-mono" id="account-number" placeholder="" type="text" />
        <p className="text-[11px] text-slate-500 mt-1">CBU/CVU (22 dígitos) en Argentina; CLABE (18 dígitos) en México; número de cuenta en el resto.</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="account-type">Tipo de cuenta</label>
        <select className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="account-type">
        <option value="">—</option>
        <option value="SAVINGS">Cuenta de Ahorros</option>
        <option value="CHECKING">Cuenta Corriente</option>
        </select>
        <p className="text-[11px] text-slate-500 mt-1">Obligatorio en BO, CL, CO, CR, EC, GT, HN, MX, UY, PE</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="email-input">Email</label>
        <input className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" id="email-input" placeholder="player@example.com" type="email" />
        <p className="text-[11px] text-slate-500 mt-1">Obligatorio en BO, CL, CO, CR, EC, GT, HN, MX, UY, PE</p>
        </div>

        <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="phone-input">Teléfono</label>
        <div className="flex gap-2">
        <div className="w-28 relative">
        <select className="w-full bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-3 text-white text-sm focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
        <option>+ ...</option>
        <option>+54 (AR)</option>
        <option>+52 (MX)</option>
        <option>+57 (CO)</option>
        <option>+56 (CL)</option>
        <option>+51 (PE)</option>
        </select>
        <i className="fa-solid fa-chevron-down absolute right-3 top-4 text-xs text-slate-500 pointer-events-none"></i>
        </div>
        <input className="flex-1 bg-[#0e1017] border border-white/[0.1] rounded-xl py-3 px-4 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all font-mono" id="phone-input" placeholder="612345678" type="tel" />
        </div>
        <p className="text-[11px] text-slate-500 mt-1">Obligatorio en BO, CO, CR, EC, GT, HN, MX</p>
        </div>
        </div>

        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-xl p-4 space-y-2 text-xs" data-purpose="breakdown-card">
        <div className="flex justify-between items-center text-slate-400">
        <span>Amount</span>
        <span className="text-white font-medium">—</span>
        </div>
        <div className="flex justify-between items-center text-slate-400">
        <span>Fee</span>
        <span className="font-medium text-white">Not applied by this method</span>
        </div>
        <div className="pt-2 border-t border-white/[0.08] flex justify-between items-center text-sm font-semibold text-white">
        <span className="text-slate-300">You receive</span>
        <span className="text-[#d4af37] font-bold">—</span>
        </div>
        </div>

        <div data-purpose="form-actions">
        <button className="btn-primary w-full px-4 py-4 text-sm font-bold uppercase tracking-wide hover:brightness-110" type="submit">
        <i className="fa-solid fa-lock text-xs opacity-75"></i>
        <span>Request withdrawal</span>
        </button>
        </div>
        </form>
        </section>

        <aside className="lg:col-span-4 space-y-6" data-purpose="processing-sidebar">

        <div className="bg-[#111319]/90 border border-white/[0.08] rounded-2xl p-6 shadow-xl space-y-5">
        <h2 className="text-sm font-serif font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-3 flex items-center gap-2">
        <i className="fa-regular fa-clock text-[#d4af37]"></i>
        Processing time
        </h2>

        <div className="space-y-4 text-xs">
        <div className="flex flex-col gap-1">
        <span className="text-slate-500 uppercase tracking-wider text-[10px] font-semibold">Method</span>
        <span className="text-white font-medium text-xs">Alp-Pay (Transferencia local LatAm)</span>
        </div>
        <div className="flex flex-col gap-1">
        <span className="text-slate-500 uppercase tracking-wider text-[10px] font-semibold">Processing time</span>
        <span className="text-[#d4af37] font-semibold flex items-center gap-1.5">
        <i className="fa-solid fa-circle-check text-[10px]"></i>
        Confirmed by the operator
        </span>
        </div>
        </div>

        <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed">
        Withdrawals are reviewed before they are paid out. Contact support if you need help.
        </div>

        <a className="block w-full text-center py-2.5 px-4 rounded-xl border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 active:scale-[0.99] transition-all text-xs font-semibold tracking-wider uppercase cursor-pointer" href="#">
        <i className="fa-regular fa-comments mr-2"></i> Contact support
        </a>

        <p className="text-[11px] text-slate-500 leading-normal">
        Account verification may be required before a withdrawal is approved. Limits are set by the operator.
        </p>
        </div>


        </aside>
        </div>


        <section className="mt-8 bg-[#111319]/90 border border-white/[0.08] rounded-2xl p-6 shadow-xl" data-purpose="last-withdrawals-card">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
        <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-white flex items-center gap-2">
        <i className="fa-solid fa-clock-rotate-left text-[#d4af37]"></i>
        Last withdrawals
        </h3>
        <a className="text-xs text-[#d4af37] hover:underline font-medium" href="#">See all</a>
        </div>

        <div className="py-8 text-center text-slate-500 text-xs">
        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-slate-600">
        <i className="fa-regular fa-folder-open text-base"></i>
        </div>
        No transactions yet
        </div>
        </section>

        </div>







      </div>
    </div>
  )
}
