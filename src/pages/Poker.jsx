import GameCard from '../components/GameCard'
import { pokerGames } from '../data/gamesCatalog'
/**
 * Poker — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Poker() {

  return (
    <div className="bg-[#000000] text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-[#d4af37]/30 selection:text-white">



      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden flex hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/poker/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>

      <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2" data-purpose="top-winners-section">
      <div className="bg-gradient-to-b from-[#181a20] via-[#121317] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-5">
      <div className="flex items-center gap-3.5">
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase text-white">TOP WINNERS OF THE MONTH</h2>
      </div>

      <div className="hidden lg:flex items-center gap-2 self-end md:self-auto">
      <button aria-label="Previous winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button>
      <button aria-label="Next winners" className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button>
      </div>
      </div>

      <div className="flex gap-4 lg:gap-5 overflow-x-auto scroll-smooth pb-2" id="top-winners-track" style={{ scrollbarWidth: 'none', MsOverflowStyle: 'none' }}>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Poker Aces" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/f137f7422b4c.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">06 oct., 2026 07:04</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Texas Hold'em Bonus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/27ee7dc1db76.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">15,420 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 19:42</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Caribbean Stud Poker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/0eaff9f58b1c.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">12,680 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 23:18</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Three Card Poker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/14e8377b7cb6.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,950 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 15:30</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Casino Hold'em VIP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/167077b0c35b.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 91****32</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">9,840 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">03 oct., 2026 12:15</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Omaha Hi-Lo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/a6342cfb94c9.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 62****11</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">8,450 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">03 oct., 2026 09:20</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Seven Card Stud" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/22555b887327.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 38****05</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,910 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">02 oct., 2026 21:40</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Ultimate Texas Hold'em" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/0754b4d5bc93.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 84****70</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,820 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">02 oct., 2026 17:10</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Russian Poker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/27ee7dc1db76.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 19****44</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,150 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">01 oct., 2026 22:50</div>
      </div>
      </div>

      <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[290px] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer shrink-0">
      <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
      <img alt="Side Bet City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/poker/f137f7422b4c.jpg" />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 50****98</span></div>
      <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">5,730 €</div>
      <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">01 oct., 2026 14:05</div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <div className="flex-1 max-w-[1920px] w-full mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row gap-8" data-purpose="poker-main-layout">

      <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6" data-purpose="poker-sidebar"><div><h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 px-1">POKER</h2><nav aria-label="Game Filter Options" className="flex lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0" style={{ scrollbarWidth: 'none' }}><a className="w-[calc(50%-0.25rem)] shrink-0 lg:w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#f3e5ab] font-semibold text-sm shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all cursor-pointer" href="#"><div className="flex items-center gap-2.5 truncate"><svg className="w-4 h-4 text-[#d4af37] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm14 2H6v8h12V8z"></path></svg><span className="truncate">All games</span></div><svg className="w-3.5 h-3.5 text-[#d4af37] shrink-0 hidden lg:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg></a><a className="w-[calc(50%-0.25rem)] shrink-0 lg:w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 font-semibold text-sm border border-transparent transition-all cursor-pointer group" href="#"><div className="flex items-center gap-2.5 truncate"><i className="fa-regular fa-heart text-sm text-slate-400 group-hover:text-white transition-colors shrink-0"></i><span className="truncate">Favorites</span></div></a></nav></div><div className="h-px bg-white/[0.08] w-full hidden lg:block"></div><div><h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 px-1">BY PROVIDER</h2><nav aria-label="Poker Providers" className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}><a className="w-[calc(33.333%-0.5rem)] min-w-[110px] shrink-0 lg:w-full text-slate-400 hover:text-[#d4af37] hover:bg-white/[0.04] border border-white/[0.06] lg:border-transparent hover:border-[#d4af37]/30 rounded-xl px-3.5 py-2 flex items-center justify-between transition-all cursor-pointer group" href="#"><span className="text-xs font-medium tracking-wide truncate">LordPoker</span></a><a className="w-[calc(33.333%-0.5rem)] min-w-[110px] shrink-0 lg:w-full text-slate-400 hover:text-[#d4af37] hover:bg-white/[0.04] border border-white/[0.06] lg:border-transparent hover:border-[#d4af37]/30 rounded-xl px-3.5 py-2 flex items-center justify-between transition-all cursor-pointer group" href="#"><span className="text-xs font-medium tracking-wide truncate">Evolution Poker</span></a><a className="w-[calc(33.333%-0.5rem)] min-w-[110px] shrink-0 lg:w-full text-slate-400 hover:text-[#d4af37] hover:bg-white/[0.04] border border-white/[0.06] lg:border-transparent hover:border-[#d4af37]/30 rounded-xl px-3.5 py-2 flex items-center justify-between transition-all cursor-pointer group" href="#"><span className="text-xs font-medium tracking-wide truncate">Ezugi</span></a><a className="w-[calc(33.333%-0.5rem)] min-w-[110px] shrink-0 lg:w-full text-slate-400 hover:text-[#d4af37] hover:bg-white/[0.04] border border-white/[0.06] lg:border-transparent hover:border-[#d4af37]/30 rounded-xl px-3.5 py-2 flex items-center justify-between transition-all cursor-pointer group" href="#"><span className="text-xs font-medium tracking-wide truncate">Playtech Poker</span></a><a className="w-[calc(33.333%-0.5rem)] min-w-[110px] shrink-0 lg:w-full text-slate-400 hover:text-[#d4af37] hover:bg-white/[0.04] border border-white/[0.06] lg:border-transparent hover:border-[#d4af37]/30 rounded-xl px-3.5 py-2 flex items-center justify-between transition-all cursor-pointer group" href="#"><span className="text-xs font-medium tracking-wide truncate">Pragmatic Play</span></a></nav></div></aside>


      <section className="flex-1 flex flex-col gap-6" data-purpose="poker-games-view">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2"><div className="flex items-center gap-3.5"><div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.25)]"><svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2.25c-.32 0-.62.14-.83.39C9.28 4.96 4.5 10.64 4.5 14.5c0 3.17 2.47 5.75 5.56 5.75.96 0 1.86-.25 2.66-.69-.17.84-.52 2.15-1.97 2.69-.32.12-.5.45-.44.78.06.33.35.57.69.57h3c.34 0 .63-.24.69-.57.06-.33-.12-.66-.44-.78-1.45-.54-1.8-1.85-1.97-2.69.8.44 1.7.69 2.66.69 3.09 0 5.56-2.58 5.56-5.75 0-3.86-4.78-9.54-6.67-11.86-.21-.25-.51-.39-.83-.39z"></path></svg></div><div className="flex items-center gap-2.5"><h1 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">POKER</h1><span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-400 tracking-wider">24 Games</span></div></div><div className="relative w-full sm:w-72 md:w-80" data-purpose="poker-search-container"><div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"><i className="fa-solid fa-magnifying-glass text-xs"></i></div><input className="w-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 transition-all outline-none" placeholder="Search poker game..." type="text" /></div></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 xl:grid-cols-5 xl:gap-3" data-purpose="games-grid">
        {pokerGames.map((game) => (
          <GameCard key={game.id} game={game} to={`/games/${game.id}`} />
        ))}
      </div>


      <div className="mt-12 mb-6 flex flex-col items-center justify-center gap-3">
      <p className="text-xs text-slate-500 mb-3">Showing <span className="text-white font-medium">12</span> of <span className="text-white font-medium">24</span> games</p>
      <button className="mt-2 px-8 py-3 rounded-xl bg-[#121317] hover:bg-[#1c1e24] border border-white/10 text-white text-xs font-bold transition-all hover:border-[#d4af37]/40 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2.5">
      <i className="fa-solid fa-rotate-right text-[#d4af37] text-xs transition-transform duration-500 hover:rotate-180"></i>
      <span className="">LOAD MORE GAMES</span>
      </button>
      </div>
      </section>

      </div>











    </div>
  )
}
