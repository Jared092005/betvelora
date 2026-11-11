/**
 * Deposit — copiado de la pantalla "Deposit - Velora Casino" de Stitch.
 * El header y el footer son los de la app (Layout global); el contenedor
 * lo aporta AccountLayout.
 */
import { useState } from 'react'
import AccountSidebar from '../../components/account/AccountSidebar'

export default function Deposit() {
  const [amount, setAmount] = useState('100')

  return (





    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
<AccountSidebar />

<div className="min-w-0 lg:col-span-9">
<div>

    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] mb-8 gap-4">
    <div>
    <div className="flex items-center gap-2.5">
    <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-white font-display">Deposit</h1>

    </div>

    </div>

    <div className="inline-flex items-center bg-[#0d0e14] border border-[#d4af37]/30 rounded-full px-4 py-2 self-start sm:self-auto shadow-inner">
    <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mr-3">Balance</span>
    <span className="text-lg font-bold text-white tracking-tight">0.00 <span className="text-[#d4af37]">€</span></span>
    </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

    <section className="lg:col-span-8 bg-[#0d0e14]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-8 luxury-glow space-y-7" data-purpose="deposit-form-container">

    <div>
    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-3">
                Payment Method
              </label>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3"><div className="rounded-xl border-2 border-[#d4af37] bg-[#161822] p-4 flex items-center justify-center h-20"><span className="text-xs font-bold text-white tracking-wide text-center">Alp-Pay (Tarjeta 3DS)</span></div></div>
    </div>

    <div className="space-y-4">
    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                Amount
              </label>

    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '10' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('10')}>10 €</button>
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '25' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('25')}>25 €</button>
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '50' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('50')}>50 €</button>
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '100' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('100')}>100 €</button>
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '250' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('250')}>250 €</button>
    <button className={`amount-btn py-2 px-3 text-xs font-bold rounded-lg text-center transition ${amount === '500' ? 'bg-[#1b1e2b] border border-[#d4af37] text-amber-200 shadow-sm shadow-amber-500/20' : 'bg-[#13151f] hover:bg-[#1a1d2c] border border-white/10 hover:border-[#d4af37]/60 text-gray-200 hover:text-white'}`} type="button" onClick={() => setAmount('500')}>500 €</button>
    </div>

    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1.5" htmlFor="deposit-amount">Amount (€)</label>
    <div className="relative rounded-xl">
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white font-semibold rounded-xl px-4 py-3 text-sm transition placeholder:text-gray-600 outline-none pr-10 no-spinner" id="deposit-amount" min="10" placeholder="Amount" step="5" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 font-bold text-sm">
                    €
                  </div>
    </div>
    </div>
    </div>

    <div className="pt-3 border-t border-white/[0.06] space-y-4">
    <h2 className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                Your Details
              </h2>

    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1" htmlFor="input-email">Email</label>
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition" id="input-email" placeholder="name@example.com" type="email" />
    <p className="text-[11px] text-gray-500 mt-1">Confirmación del pago.</p>
    </div>

    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1">Teléfono</label>
    <div className="grid grid-cols-12 gap-2">
    <div className="col-span-4 sm:col-span-3">
    <select className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-3 py-3 text-sm outline-none transition appearance-none cursor-pointer">
    <option value="+34">+34 (ES)</option>
    <option value="+33">+33 (FR)</option>
    <option value="+49">+49 (DE)</option>
    <option value="+39">+39 (IT)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+1">+1 (US)</option>
    <option value="+52">+52 (MX)</option>
    <option value="+ ...">+ ...</option>
    </select>
    </div>
    <div className="col-span-8 sm:col-span-9">
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition" placeholder="612345678" type="tel" />
    </div>
    </div>
    <p className="text-[11px] text-gray-500 mt-1">Opcional. Prefijo de país + número.</p>
    </div>

    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1" htmlFor="input-address">Dirección</label>
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition" id="input-address" placeholder="Calle, Avenida, Número..." type="text" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1" htmlFor="input-city">Ciudad</label>
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition" id="input-city" placeholder="Ciudad" type="text" />
    </div>
    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1" htmlFor="input-zip">Código postal</label>
    <input className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition" id="input-zip" placeholder="28001" type="text" />
    </div>
    </div>

    <div>
    <label className="block text-xs font-medium text-gray-300 mb-1" htmlFor="select-country">País</label>
    <div className="relative">
    <select className="w-full bg-[#090a0f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white rounded-xl px-4 py-3 text-sm outline-none transition appearance-none cursor-pointer" id="select-country">
    <option disabled selected value="">Select country</option>
    <option value="ES">Spain</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    <option value="IT">Italy</option>
    <option value="PT">Portugal</option>
    <option value="UK">United Kingdom</option>
    <option value="OTHER">Other International</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
    </div>
    </div>
    </div>
    </div>

    <div className="bg-[#08090d] border border-white/[0.08] rounded-xl p-4 space-y-2.5">
    <div className="flex justify-between items-center text-xs">
    <span className="text-gray-400">Amount</span>
    <span className="text-white font-medium" id="summary-amount">100.00 €</span>
    </div>
    <div className="flex justify-between items-center text-xs">
    <span className="text-gray-400">Fee</span>
    <span className="font-medium">Not applied by this method</span>
    </div>
    <div className="pt-2 border-t border-white/[0.06] flex justify-between items-center text-sm">
    <span className="text-white font-semibold">Total</span>
    <span className="text-lg font-bold" id="summary-total">100.00 €</span>
    </div>
    </div>

    <div className="pt-2">
    <button className="btn-primary w-full px-12 py-4 text-sm uppercase tracking-wider sm:w-auto" type="button">
    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
    </svg>
                Deposit
              </button>
    </div>
    </section>


    <aside className="lg:col-span-4 space-y-6">

    <div className="bg-[#0d0e14]/90 border border-white/[0.08] rounded-2xl p-6 luxury-glow space-y-5" data-purpose="processing-time-card">
    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
    <h3 className="text-sm font-bold uppercase tracking-wider text-white">Processing time</h3>
    <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">3D Secure</span>
    </div>
    <div className="space-y-3 text-xs">
    <div className="flex justify-between items-start gap-4">
    <span className="text-gray-400">Method</span>
    <span className="text-white font-semibold text-right">Alp-Pay (Tarjeta 3DS)</span>
    </div>
    <div className="flex justify-between items-start gap-4">
    <span className="text-gray-400">Processing time</span>
    <span className="text-white font-semibold text-right">Confirmed by the operator</span>
    </div>
    </div>
    <div className="p-3.5 bg-[#141620] rounded-xl border border-white/5 space-y-2">
    <p className="text-xs text-gray-300 leading-relaxed">
                  Need help with your deposit? Contact support and we will get back to you.
                </p>
    <a className="inline-block w-full text-center py-2.5 px-4 rounded-lg border border-[#d4af37]/60 hover:border-[#d4af37] text-[#f3e5ab] hover:text-white bg-transparent hover:bg-[#d4af37]/10 text-xs font-semibold tracking-wide transition" href="#support">
                  Contact support
                </a>
    </div>
    <div className="text-[11px] text-gray-500 leading-normal border-t border-white/[0.06] pt-3">
                Deposits are credited once the payment is confirmed. Amounts and limits are set by the operator.
              </div>
    </div>


    </aside>

    </div>

    <section className="mt-8 bg-[#0d0e14]/90 border border-white/[0.08] rounded-2xl p-6 luxury-glow" data-purpose="last-deposits-card">
    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
    <div className="flex items-center gap-2">
    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
    <h3 className="text-sm font-bold uppercase tracking-wider text-white">Last deposits</h3>
    </div>
    <a className="text-xs font-semibold text-[#d4af37] hover:text-amber-300 transition-colors" href="#">See all</a>
    </div>
    <div className="py-8 text-center text-xs text-gray-500 font-medium tracking-wide">
            No transactions yet
          </div>
    </section>

    </div>









</div>
</div>
  )
}
