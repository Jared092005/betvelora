import { Link } from 'react-router-dom'

/**
 * Casino Live — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function CasinoLive() {

  return (
    <div className="bg-[#070709] text-slate-200 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-black">




      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/casino-live/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      <nav className="flex flex-col py-6 space-y-2 sticky top-0">
      <Link to="/home" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Home</Link>
      <Link to="/casino" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Casino</Link>
      <Link to="/casino-live" className="px-4 py-3 rounded-xl bg-velora-gold/15 text-velora-gold font-bold text-sm tracking-widest uppercase border border-velora-gold/30 transition-all">Casino Live</Link>
      <Link to="/poker" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Poker</Link>
      <Link to="/virtual" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Virtual</Link>
      <Link to="/promotions" className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all">Promotions</Link>

      <a className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all" href="#">Profile</a>
      <a className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm tracking-widest uppercase transition-all" href="#">Messages</a>
      </nav>
      </div>


      <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2" data-purpose="top-winners-section">
      <div className="bg-gradient-to-b from-[#181a20] via-[#121317] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-5">
      <div className="flex items-center gap-3.5">
      <div>
      <div className="flex items-center gap-2">
      <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">TOP WINNERS OF THE MONTH</h2>
      </div>
      </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 self-end md:self-auto"><div className="flex items-center gap-2"><button aria-label="Previous winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button><button aria-label="Next winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button></div></div>
      </div>
      <div id="top-winners-track" className="flex flex-row flex-nowrap gap-4 overflow-x-auto pb-2 scroll-smooth items-stretch" style={{ scrollbarWidth: 'none' }}><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Lightning Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/b65eed1bd941.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">06 oct., 2026 07:04</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat L" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/c4a3fb4511b3.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">15,420 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">05 oct., 2026 21:18</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="VIP Blackjack Diamond" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/490d1990721c.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">12,850 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">05 oct., 2026 19:42</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Crazy Time Live" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/af5f6af62fe6.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,780 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 23:18</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/da2067213ffa.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 82****10</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">9,450 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 15:30</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Mega Ball 100x" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/da39c968ef37.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 91****34</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">8,200 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">04 oct., 2026 11:05</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Immersive Roulette" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/d0971bd5093e.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 39****62</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,835 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">03 oct., 2026 18:22</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Infinite Blackjack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/593c9c4c3ca2.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 56****77</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,315 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">02 oct., 2026 22:45</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat G" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/ac89604b2606.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 64****88</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">5,940 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">02 oct., 2026 14:10</div></div></div><div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] shrink-0 rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer"><div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]"><img alt="Speed Baccarat M" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino-live/54fd14a701b8.jpg" /></div><div className="flex flex-col justify-center min-w-0 flex-1"><div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 19****45</span></div><div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">4,850 €</div><div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight">01 oct., 2026 16:50</div></div></div></div>
      </div>
      </section>


      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 py-8 flex-1">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

      <aside className="w-full lg:w-64 shrink-0 space-y-5 lg:space-y-7" data-purpose="live-sidebar">
      <div>
      <h1 className="text-xl font-bold tracking-tight text-white mb-3 lg:mb-4">Casino Live</h1>
      <nav aria-label="Game Filter Options" className="flex flex-row lg:flex-col gap-2 lg:gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
      <a className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#f3e5ab] font-semibold text-sm shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all cursor-pointer shrink-0 min-w-[140px] w-[calc(50%-0.25rem)] lg:w-full" href="#"><div className="flex items-center gap-2.5"><svg className="w-4 h-4 text-[#d4af37] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm14 2H6v8h12V8z"></path></svg><span className="truncate">All games</span></div><svg className="w-3.5 h-3.5 text-[#d4af37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg></a>
      <a className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/[0.08] lg:border-transparent font-semibold text-sm transition-all cursor-pointer group shrink-0 min-w-[140px] w-[calc(50%-0.25rem)] lg:w-full" href="#"><div className="flex items-center gap-2.5"><i className="fa-regular fa-heart text-sm text-slate-400 group-hover:text-white transition-colors shrink-0"></i><span className="truncate">Favorites</span></div></a>
      </nav>
      </div>
      <div className="h-px bg-white/[0.08]"></div>
      <div>
      <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500 block mb-2.5 lg:mb-3">BY TYPE</span>
      <nav className="flex flex-row lg:flex-col gap-2 lg:gap-1 text-sm font-medium overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}><a className="flex items-center justify-between py-2.5 lg:py-2 px-3 rounded-xl lg:rounded-lg text-slate-300 hover:text-white hover:bg-white/5 bg-[#10121a] lg:bg-transparent border border-white/[0.08] lg:border-transparent transition-colors group cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="flex items-center gap-2.5 truncate"><svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.45) 0px 0px 6px)' }} viewBox="0 0 24 24"><circle cx="12" cy="12" fill="#e60026" fillOpacity="0.12" r="9.5" stroke="#e60026" strokeWidth="1.5"></circle><circle cx="12" cy="12" r="6" stroke="#d4af37" strokeWidth="1.2"></circle><circle cx="12" cy="12" fill="#d4af37" r="2"></circle><path d="M12 2.5v3.5M12 18v3.5M2.5 12h3.5M18 12h3.5M5.28 5.28l2.47 2.47M16.25 16.25l2.47 2.47M5.28 18.72l2.47-2.47M16.25 7.75l2.47-2.47" stroke="#fca5a5" strokeLinecap="round" strokeWidth="1.1"></path></svg><span className="truncate">Roulette</span></span></a>
      <a className="flex items-center justify-between py-2.5 lg:py-2 px-3 rounded-xl lg:rounded-lg text-slate-300 hover:text-white hover:bg-white/5 bg-[#10121a] lg:bg-transparent border border-white/[0.08] lg:border-transparent transition-colors group cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="flex items-center gap-2.5 truncate"><svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.45) 0px 0px 6px)' }} viewBox="0 0 24 24"><rect fill="#10b981" fillOpacity="0.18" height="16" rx="2" stroke="#10b981" strokeWidth="1.4" width="12" x="2" y="5"></rect><path d="M8 5V3.5A1.5 1.5 0 0 1 9.5 2h9A1.5 1.5 0 0 1 20 3.5V17a1.5 1.5 0 0 1-1.5 1.5H16" stroke="#34d399" strokeWidth="1.4"></path><path d="M8 9.5c-.8 1.1-1.6 1.8-2.2 2.5h4.4C9.6 11.3 8.8 10.6 8 9.5zM8 12v3" stroke="#10b981" strokeLinecap="round" strokeWidth="1.2"></path><path d="M15.5 6.5h1.5M15.5 9h2" stroke="#a7f3d0" strokeLinecap="round" strokeWidth="1.2"></path></svg><span className="truncate">Blackjack</span></span></a>
      <a className="flex items-center justify-between py-2.5 lg:py-2 px-3 rounded-xl lg:rounded-lg text-slate-300 hover:text-white hover:bg-white/5 bg-[#10121a] lg:bg-transparent border border-white/[0.08] lg:border-transparent transition-colors group cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="flex items-center gap-2.5 truncate"><svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.45) 0px 0px 6px)' }} viewBox="0 0 24 24"><polygon fill="#6366f1" fillOpacity="0.2" points="12,2 21,12 12,22 3,12" stroke="#818cf8" strokeWidth="1.5"></polygon><polygon fill="none" points="12,6 18,12 12,18 6,12" stroke="#c7d2fe" strokeWidth="1"></polygon><circle cx="12" cy="12" fill="#e0e7ff" r="2.2" stroke="#818cf8" strokeWidth="0.8"></circle></svg><span className="truncate">Baccarat</span></span></a>
      <a className="flex items-center justify-between py-2.5 lg:py-2 px-3 rounded-xl lg:rounded-lg text-slate-300 hover:text-white hover:bg-white/5 bg-[#10121a] lg:bg-transparent border border-white/[0.08] lg:border-transparent transition-colors group cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="flex items-center gap-2.5 truncate"><svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.45) 0px 0px 6px)' }} viewBox="0 0 24 24"><path d="M12 2l2.35 5.51L20 8.27l-4.12 3.65 1.25 5.82L12 14.77l-5.13 2.97 1.25-5.82L4 8.27l5.65-.76L12 2z" fill="#fbbf24" fillOpacity="0.22" stroke="#f59e0b" strokeLinejoin="round" strokeWidth="1.4"></path><circle cx="12" cy="10.5" fill="#fef08a" r="1.8"></circle><path d="M3 21h18" stroke="#d4af37" strokeLinecap="round" strokeWidth="1.4"></path></svg><span className="truncate">Game Shows</span></span></a></nav>
      </div>
      <div className="h-px bg-white/[0.08]"></div>
      <div>
      <span className="text-xs font-bold tracking-wider uppercase text-slate-400 block mb-2.5 lg:mb-3">BY PROVIDER</span>
      <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}><a className="flex items-center justify-between px-3.5 py-2.5 lg:py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#d4af37] bg-[#10121a] lg:bg-transparent hover:bg-white/[0.04] border border-white/[0.08] lg:border-transparent hover:border-[#d4af37]/40 transition-all duration-200 cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="truncate">Evolution</span></a>
      <a className="flex items-center justify-between px-3.5 py-2.5 lg:py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#d4af37] bg-[#10121a] lg:bg-transparent hover:bg-white/[0.04] border border-white/[0.08] lg:border-transparent hover:border-[#d4af37]/40 transition-all duration-200 cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="truncate">XPG Gaming</span></a>
      <a className="flex items-center justify-between px-3.5 py-2.5 lg:py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#d4af37] bg-[#10121a] lg:bg-transparent hover:bg-white/[0.04] border border-white/[0.08] lg:border-transparent hover:border-[#d4af37]/40 transition-all duration-200 cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="truncate">Religa</span></a>
      <a className="flex items-center justify-between px-3.5 py-2.5 lg:py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#d4af37] bg-[#10121a] lg:bg-transparent hover:bg-white/[0.04] border border-white/[0.08] lg:border-transparent hover:border-[#d4af37]/40 transition-all duration-200 cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="truncate">Vivo Gaming</span></a>
      <a className="flex items-center justify-between px-3.5 py-2.5 lg:py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-[#d4af37] bg-[#10121a] lg:bg-transparent hover:bg-white/[0.04] border border-white/[0.08] lg:border-transparent hover:border-[#d4af37]/40 transition-all duration-200 cursor-pointer shrink-0 min-w-0 w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-full" href="#"><span className="truncate">Pragmatic Live</span></a></div>
      </div>
      </aside>


      <section className="flex-1 min-w-0 w-full" data-purpose="live-tables-container">

      <div className="flex flex-col gap-5 mb-7">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-white"><i className="fa-solid fa-video text-sm text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.75))' }}></i></div>
      <h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white flex items-center gap-2">
                      CASINO LIVE
                
      </h2>
      </div>

      <div className="relative w-full md:w-80">
      <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
      <input className="w-full bg-[#10121a] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm rounded-xl pl-10 pr-4 py-2.5 placeholder-slate-500 transition-all cursor-pointer" placeholder="Search live table..." type="text" />
      </div>
      </div>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-3">

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Lobby" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/95333bdd1817.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Lobby</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Speed Baccarat L" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/c4a3fb4511b3.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Speed Baccarat L</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Speed Roulette" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/da2067213ffa.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Speed Roulette</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Speed Baccarat E" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/486536c40916.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Speed Baccarat E</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Speed Baccarat G" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/ac89604b2606.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Speed Baccarat G</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Speed Baccarat M" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/54fd14a701b8.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Speed Baccarat M</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Lightning Roulette" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/b65eed1bd941.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Lightning Roulette</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="VIP Blackjack Diamond" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/490d1990721c.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">VIP Blackjack Diamond</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Crazy Time Live" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/af5f6af62fe6.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Crazy Time Live</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Mega Ball 100x" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/da39c968ef37.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Mega Ball 100x</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Immersive Roulette" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/d0971bd5093e.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Immersive Roulette</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]"><span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#e60026]/30 text-[10px] font-bold text-white uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-[#e60026] live-dot"></span>LIVE</span>
      <img alt="Infinite Blackjack" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino-live/593c9c4c3ca2.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10 cursor-pointer" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
              Play Now
            </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Infinite Blackjack</h3>
      <p className="text-xs text-slate-400 truncate">Evolution</p>
      </div>
      </div>
      </div>

      <div className="mt-12 mb-6 flex flex-col items-center justify-center gap-3">
      <p className="text-xs text-slate-500 mb-3">Showing <span className="text-white font-medium">12</span> of <span className="text-white font-medium">148</span> live tables</p><button className="mt-2 px-8 py-3 rounded-xl bg-[#121317] hover:bg-[#1c1e24] border border-white/10 text-white text-xs font-bold transition-all hover:border-[#E6A15C]/40 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2.5"><i className="fa-solid fa-rotate-right text-[#d4af37] text-xs transition-transform duration-500 hover:rotate-180"></i><span className="">LOAD MORE GAMES</span></button>
      </div>
      </section>

      </div>
      </div>











    </div>
  )
}
