/**
 * Game View — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Game() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-brand-crimson selection:text-white">





      <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8">

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" data-purpose="game-theater-view">

      <div className="lg:col-span-9 bg-[#0b0d14] border border-brand-border/80 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">

      <div className="relative w-full aspect-[16/10] bg-[#0c1610] overflow-hidden flex flex-col justify-between select-none slot-vignette"><img src="/screens/game/8f43979c416c.jpg" alt="Aztec Empire Slot Game" className="w-full h-full object-cover rounded-xl" /></div>

      <div className="w-full bg-[#07080d] border-t border-brand-border px-4 py-2.5 flex flex-wrap items-center justify-between text-xs text-gray-300 gap-3" data-purpose="game-footer-bar">

      <div className="flex items-center gap-3">
      <button aria-label="Información" className="text-gray-400 hover:text-white cursor-pointer transition" type="button">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd"></path>
      </svg>
      </button>
      <button aria-label="Configuración de sonido" className="text-gray-400 hover:text-white cursor-pointer transition" type="button">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>

      <div className="flex items-center gap-1.5 ml-2">
      <span className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider">Credit</span>
      <span className="font-bold text-white text-sm">0,00 €</span>
      </div>
      </div>

      <a className="text-[11px] text-gray-400 hover:text-brand-gold transition duration-150 cursor-pointer" href="#lobby">
                  Back to Games
                </a>

      <div className="flex items-center gap-2">
      <span className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider">Bet</span>
      <div className="flex items-center bg-[#151822] rounded-full p-0.5 border border-white/10">
      <button aria-label="Disminuir apuesta" className="w-6 h-6 rounded-full bg-[#202533] hover:bg-[#2c3346] text-white flex items-center justify-center font-bold text-xs cursor-pointer transition" type="button">-</button>
      <span className="px-3 font-semibold text-white text-xs">€0.30</span>
      <button aria-label="Aumentar apuesta" className="w-6 h-6 rounded-full bg-[#202533] hover:bg-[#2c3346] text-white flex items-center justify-center font-bold text-xs cursor-pointer transition" type="button">+</button>
      </div>
      </div>
      </div>
      </div>

      <aside className="lg:col-span-3 flex flex-col gap-4" data-purpose="sidebar-wallet">

      <div className="bg-gradient-to-b from-[#121520] to-[#0c0e14] border border-brand-border rounded-2xl p-5 shadow-xl flex flex-col gap-5">
      <div>
      <span className="text-xs uppercase font-medium tracking-wider text-gray-400">Saldo</span>
      <div className="text-3xl font-extrabold text-white mt-1 flex items-baseline gap-1">
      <span className="">0</span>
      <span className="text-white">€</span>
      </div>
      </div>

      <button className="w-full py-3.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#e6c35c] to-[#b89628] hover:from-[#ffe088] hover:to-[#d4af37] text-black font-extrabold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center text-sm tracking-wide flex items-center justify-center gap-2" type="button"><svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="">Depositar</span></button>

      <div className="pt-3 border-t border-white/5 flex flex-col gap-1">
      <h2 className="text-sm font-bold text-white tracking-wide">Aztec Empire</h2>
      <p className="text-xs text-gray-400">ChimeraSpin</p>
      </div>
      </div>


      </aside>
      </section>


      <section className="w-full mt-2" data-purpose="more-games-section">

      <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg sm:text-xl font-normal text-white tracking-wide flex items-center" style={{ fontWeight: '400' }}>Más de ChimeraSpin</h2>
      <a className="text-xs font-semibold text-gray-400 hover:text-brand-gold transition duration-150 cursor-pointer" href="#ver-todos">
                Ver todos →
              </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <article className="group bg-[#11131b] border border-brand-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-brand-gold/50 hover:shadow-brand-gold/10 hover:-translate-y-1 flex flex-col">
      <div className="relative w-full aspect-square bg-[#1f1728] overflow-hidden">

      <img src="/screens/game/7c731a91f5c2.jpg" alt="The Last Queen of Nile" className="w-full h-full object-cover rounded-xl absolute inset-0" />

      <button aria-label="Añadir a favoritos" className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-brand-crimson hover:bg-black/90 transition duration-150 cursor-pointer z-20" type="button">
      <svg className="w-3.5 h-3.5 fill-transparent stroke-current" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </button>



      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-10">
      <button className="w-12 h-12 rounded-full bg-brand-crimson hover:bg-brand-crimson-hover text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-200 cursor-pointer" type="button">
      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
      </button>
      </div>
      </div>
      <div className="p-3">
      <h3 className="text-sm font-bold text-white truncate">The Last Queen of Nile</h3>
      <p className="text-[11px] text-gray-400">ChimeraSpin</p>
      </div>
      </article>

      <article className="group bg-[#11131b] border border-brand-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-brand-gold/50 hover:shadow-brand-gold/10 hover:-translate-y-1 flex flex-col">
      <div className="relative w-full aspect-square bg-[#0c2420] overflow-hidden">

      <img src="/screens/game/2c8e59220905.jpg" alt="Coco Time" className="w-full h-full object-cover rounded-xl absolute inset-0" />

      <button aria-label="Añadir a favoritos" className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-brand-crimson hover:bg-black/90 transition duration-150 cursor-pointer z-20" type="button">
      <svg className="w-3.5 h-3.5 fill-transparent stroke-current" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </button>



      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-10">
      <button className="w-12 h-12 rounded-full bg-brand-crimson hover:bg-brand-crimson-hover text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-200 cursor-pointer" type="button">
      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
      </button>
      </div>
      </div>
      <div className="p-3">
      <h3 className="text-sm font-bold text-white truncate">Coco Time</h3>
      <p className="text-[11px] text-gray-400">ChimeraSpin</p>
      </div>
      </article>

      <article className="group bg-[#11131b] border border-brand-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-brand-gold/50 hover:shadow-brand-gold/10 hover:-translate-y-1 flex flex-col">
      <div className="relative w-full aspect-square bg-[#241328] overflow-hidden">

      <img src="/screens/game/6fe3f8ca498a.jpg" alt="Halloween Ritual" className="w-full h-full object-cover rounded-xl absolute inset-0" />

      <button aria-label="Añadir a favoritos" className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-brand-crimson hover:bg-black/90 transition duration-150 cursor-pointer z-20" type="button">
      <svg className="w-3.5 h-3.5 fill-transparent stroke-current" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </button>



      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-10">
      <button className="w-12 h-12 rounded-full bg-brand-crimson hover:bg-brand-crimson-hover text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-200 cursor-pointer" type="button">
      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
      </button>
      </div>
      </div>
      <div className="p-3">
      <h3 className="text-sm font-bold text-white truncate">Halloween Ritual</h3>
      <p className="text-[11px] text-gray-400">ChimeraSpin</p>
      </div>
      </article>

      <article className="group bg-[#11131b] border border-brand-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-brand-gold/50 hover:shadow-brand-gold/10 hover:-translate-y-1 flex flex-col">
      <div className="relative w-full aspect-square bg-[#152414] overflow-hidden">

      <img src="/screens/game/929c322042e2.jpg" alt="Lucky Little Puppies" className="w-full h-full object-cover rounded-xl absolute inset-0" />

      <button aria-label="Añadir a favoritos" className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-brand-crimson hover:bg-black/90 transition duration-150 cursor-pointer z-20" type="button">
      <svg className="w-3.5 h-3.5 fill-transparent stroke-current" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </button>



      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-10">
      <button className="w-12 h-12 rounded-full bg-brand-crimson hover:bg-brand-crimson-hover text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-200 cursor-pointer" type="button">
      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
      </button>
      </div>
      </div>
      <div className="p-3">
      <h3 className="text-sm font-bold text-white truncate">Lucky Little Puppies</h3>
      <p className="text-[11px] text-gray-400">ChimeraSpin</p>
      </div>
      </article>
      </div>
      </section>

      </div>











    </div>
  )
}
