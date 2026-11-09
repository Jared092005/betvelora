import { useCallback, useEffect, useRef } from 'react'

/**
 * Casino — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
const WINNERS_INTERVAL_MS = 4000
const WINNERS_GAP_PX = 16

export default function Casino() {
  const winnersRef = useRef(null)

  const stepWinners = useCallback((direction) => {
    const track = winnersRef.current
    if (!track) return

    const card = track.firstElementChild
    const step = card
      ? card.getBoundingClientRect().width + WINNERS_GAP_PX
      : track.clientWidth
    const maxScroll = track.scrollWidth - track.clientWidth
    if (maxScroll <= 0) return

    if (direction > 0 && track.scrollLeft >= maxScroll - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction < 0 && track.scrollLeft <= 8) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: direction * step, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => stepWinners(1), WINNERS_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [stepWinners])

  return (
    <div className="bg-black text-slate-100 min-h-screen font-sans selection:bg-[#e60026] selection:text-white antialiased flex flex-col">





      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex-col justify-start p-6 transition-all duration-300 lg:hidden hidden" id="mobile-nav-drawer" style={{ display: 'none' }}>
      <div className="flex items-center justify-between pb-6 border-b border-velora-borderSubtle">
      <img alt="Velora Casino" className="h-7 w-auto" src="/screens/casino/bcee34ed446e.jpg" />
      <button aria-label="Close Menu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
      </div>
      </div>
      <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 pt-6 pb-2" data-purpose="top-winners-section"><div className="bg-gradient-to-b from-[#121317] via-[#0d0e12] to-black rounded-2xl border border-[#d4af37]/30 p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative overflow-hidden"><div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-5"><div className="flex items-center gap-3.5"><div><div className="flex items-center gap-2"><h2 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">TOP WINNERS OF THE MONTH</h2></div></div></div><div className="hidden lg:flex items-center gap-2 self-end md:self-auto"><div className="flex items-center gap-2"><button aria-label="Previous winners" onClick={() => stepWinners(-1)} className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-left text-xs"></i></button><button aria-label="Next winners" onClick={() => stepWinners(1)} className="w-9 h-9 rounded-full bg-[#121317] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center text-slate-300 hover:text-[#d4af37] hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)] group"><i className="fa-solid fa-chevron-right text-xs"></i></button></div></div></div><div id="winners-carousel" ref={winnersRef} className="flex overflow-x-auto gap-4 scroll-smooth pb-1" style={{ scrollbarWidth: 'none' }}>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Cleo's Gold" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/796042ea2c3c.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 15****84</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">18,710 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">06 oct., 2026 07:04</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Jolly Roger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/2154e07e214b.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 28****19</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">15,420 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">06 oct., 2026 05:32</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crocoman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/4f5ec0104cb2.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 44****91</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">12,850 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 22:15</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crystal Sevens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/846383f6b97b.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 73****55</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">10,780 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 19:42</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Caishen's Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/9932903d3cfa.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 82****30</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">9,450 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">05 oct., 2026 14:10</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Chinese Tigers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/8e9e7e87de7d.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 91****14</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">8,320 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 23:55</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Book of Egypt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/c22f51178487.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 36****62</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">7,835 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 23:18</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Bison Trail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/68b99a39688f.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 57****88</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,940 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 18:02</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Crazy Jelly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/9999ef74087a.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 64****23</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">6,315 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 15:30</div>
          </div>
        </div>
  
        <div className="shrink-0 w-[240px] sm:w-[260px] lg:w-[calc(25%-12px)] rounded-2xl bg-[#0d0e12] border border-white/[0.08] hover:border-white/20 p-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg group cursor-pointer">
          <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06]">
            <img alt="Zombie Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/screens/casino/2817d5f54810.jpg" />
          </div>
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-slate-400"><span className="">ID 19****77</span></div>
            <div className="text-base lg:text-lg font-extrabold text-[#d4af37] tracking-tight leading-tight mt-0.5 truncate">5,120 €</div>
            <div className="text-[11px] text-slate-300 font-normal mt-0.5 tracking-tight truncate">04 oct., 2026 11:45</div>
          </div>
        </div>
      </div></div></section><div className="flex-1 max-w-[1920px] w-full mx-auto flex border-t border-[#d4af37]/20 flex-col lg:flex-row">

      <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#07080b]/75 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 py-3 lg:py-6 px-4 flex flex-col gap-4 lg:gap-8 lg:overflow-y-auto lg:max-h-[calc(100vh-80px)] lg:sticky lg:top-20" data-purpose="casino-navigation-sidebar">

      <div><div className="flex items-center gap-2 mb-3 px-3"><h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase">Casino</h2></div><nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2.5 lg:gap-0 lg:space-y-1 pb-2 lg:pb-0 scroll-smooth" id="casino-nav-menu"><a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-white font-medium text-sm shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-house w-5 text-center mr-3 text-amber-400 text-sm drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"></i><span className="font-semibold text-white">Lobby</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-fire w-5 text-center mr-3 text-[#ff5722] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,87,34,0.4)]"></i><span className="">Popular Games</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-star w-5 text-center mr-3 text-[#38bdf8] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"></i><span className="">New Games</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-gem w-5 text-center mr-3 text-[#eab308] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"></i><span className="">Slots</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-rocket w-5 text-center mr-3 text-[#06b6d4] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"></i><span className="">Crash Games</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-ticket w-5 text-center mr-3 text-[#c084fc] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(192,132,252,0.4)]"></i><span className="">Scratch</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-dice w-5 text-center mr-3 text-[#10b981] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"></i><span className="">Table Games</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-gamepad w-5 text-center mr-3 text-[#818cf8] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]"></i><span className="">My Games</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a>
      <a className="casino-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
      <span className="flex items-center"><i className="fa-solid fa-heart w-5 text-center mr-3 text-[#f43f5e] text-sm group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]"></i><span className="">My Favorites</span></span>
      <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
      </a></nav></div>

      <div className="pt-2">
        <div className="flex items-center gap-2 mb-3 px-3">
          <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase">By Provider</h2>
        </div>
        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2.5 lg:gap-0 lg:space-y-1 pb-2 lg:pb-0 scroll-smooth" id="provider-nav-menu">
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-white font-medium text-sm shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center">
              <i className="fa-solid fa-gem w-5 text-center mr-3 text-amber-400 text-sm drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"></i>
              <span className="font-semibold text-white">All providers</span>
            </span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-dice w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">RubyPlay</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-fire w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">Habanero</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-star w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">IGT</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-gamepad w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">1X2 Gaming</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-gem w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">Betsoft</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-rocket w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">Booming Games</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-ticket w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">BNG</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-dice w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">BTG</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-gamepad w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">Evoplay</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
    
          <a className="provider-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent font-medium text-sm transition-all duration-200 cursor-pointer group shrink-0 min-w-[46%] sm:min-w-[32%] lg:min-w-0 lg:w-full" href="javascript:void(0)">
            <span className="flex items-center"><i className="fa-solid fa-heart w-5 text-center mr-3 text-slate-400 text-sm group-hover:text-[#d4af37] transition-colors"></i><span className="truncate">GameArt</span></span>
            <i className="fa-solid fa-chevron-right text-[10px] text-amber-400/80 chevron-icon hidden"></i>
          </a>
        </nav>
      </div>
      </aside>


      <div className="flex-1 min-w-0 bg-black/40 p-4 sm:p-6 lg:p-8" data-purpose="casino-games-catalog">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

      <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
      <i className="fa-solid fa-dice text-white text-2xl" style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.75) 0px 0px 8px)' }}></i>
      <h1 className="font-serif text-2xl font-bold tracking-wider uppercase text-white">Lobby</h1>
      </div>

      <span className="bg-white/[0.06] border border-white/10 text-xs font-medium tracking-wide px-3 py-1 rounded-full inline-flex items-center gap-1"><span className="font-bold text-white">1,669</span><span className="text-slate-400 font-normal">Games</span></span>
      </div>

      <div className="relative w-full md:w-80">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
      <i className="fa-solid fa-magnifying-glass text-xs"></i>
      </div>
      <input className="w-full bg-[#0d0e12] hover:bg-[#121317] focus:bg-[#121317] border border-white/[0.1] focus:border-[#E6A15C] rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#E6A15C] transition-all cursor-pointer" placeholder="Search game..." type="search" />
      </div>
      </div>


      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-3" data-purpose="games-grid">
      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Jolly Roger" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/2154e07e214b.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Jolly Roger</h3>
      <p className="text-xs text-slate-400 truncate">Octavian</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Crystal Sevens" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/846383f6b97b.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Crystal Sevens</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Crocoman" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/4f5ec0104cb2.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Crocoman</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Crazy Jelly" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/9999ef74087a.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Crazy Jelly</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Cleo's Gold" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/796042ea2c3c.jpg" />
      <div className="absolute top-0 left-0 bg-[#E6A15C] text-black font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-br-md shadow">
        Featured
      </div>
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Cleo's Gold</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Cinderella" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/0dd30c740be0.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Cinderella</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Chinese Tigers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/8e9e7e87de7d.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Chinese Tigers</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Caishen's Gifts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/9932903d3cfa.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Caishen's Gifts</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Book of Egypt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/c22f51178487.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Book of Egypt</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Bison Trail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/68b99a39688f.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Bison Trail</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Arabian Tales" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/1b5be7fd03d6.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Arabian Tales</h3>
      <p className="text-xs text-slate-400 truncate">Platipus</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Zombie Lab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/2817d5f54810.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Zombie Lab</h3>
      <p className="text-xs text-slate-400 truncate">Octavian</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Wily Fox" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/30616e11c62d.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Wily Fox</h3>
      <p className="text-xs text-slate-400 truncate">Octavian</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Sultan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/d72255d1ae68.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Sultan</h3>
      <p className="text-xs text-slate-400 truncate">Octavian</p>
      </div>
      </div>

      <div className="game-card-wrapper group flex flex-col">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a20] border border-white/[0.08] shadow-md group-hover:border-[#E6A15C]/40 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
      <img alt="Songkran Holidays" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/screens/casino/c802e26d0742.jpg" />
      <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-[#e60026] hover:scale-110 transition-all z-10" title="Add to favorites">
      <i className="fa-regular fa-heart text-xs"></i>
      </button>
      <div className="game-overlay absolute inset-0 bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
      <button className="px-5 py-2 rounded-full bg-[#e60026] hover:bg-[#b8001f] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/40 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
        Play Now
      </button>
      </div>
      </div>
      <div className="pt-2 px-1">
      <h3 className="font-bold text-white text-sm truncate group-hover:text-[#E6A15C] transition-colors">Songkran Holidays</h3>
      <p className="text-xs text-slate-400 truncate">Octavian</p>
      </div>
      </div></div>


      <div className="mt-12 mb-6 flex flex-col items-center justify-center gap-3">
      <p className="text-xs text-slate-500">Showing <span className="text-white font-bold">15</span> of <span className="text-white font-bold">1,669</span> games</p>
      <button className="mt-2 px-8 py-3 rounded-xl bg-[#121317] hover:bg-[#1c1e24] border border-white/10 text-white text-xs font-bold transition-all hover:border-[#E6A15C]/40 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2.5"><i className="fa-solid fa-rotate-right text-[#d4af37] text-xs transition-transform duration-500 hover:rotate-180"></i><span className="">LOAD MORE GAMES</span></button>
      </div>
      </div>

      </div>




















    </div>
  )
}
