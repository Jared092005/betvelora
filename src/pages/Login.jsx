/**
 * Login — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Login() {
  return (
    <div className="h-full text-slate-200 font-sans bg-black antialiased selection:bg-[#e60026] selection:text-white flex flex-col justify-between relative overflow-x-hidden">



      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-casino-radial" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(0, 0, 0, 0.95) 75%, rgb(0, 0, 0) 100%)' }}>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#d4af37]/10 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-[#d4af37]/5 blur-[120px] rounded-full"></div>

      <div className="absolute top-20 left-12 text-white/[0.015] text-8xl select-none"><i className="fa-solid fa-diamond"></i></div>
      <div className="absolute bottom-32 left-24 text-white/[0.02] text-9xl select-none"><i className="fa-solid fa-spade"></i></div>
      <div className="absolute top-40 right-20 text-white/[0.015] text-8xl select-none"><i className="fa-solid fa-club"></i></div>
      <div className="absolute bottom-20 right-32 text-white/[0.02] text-9xl select-none"><i className="fa-solid fa-heart"></i></div>
      </div>





      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-6 sm:py-10"><div className="flex flex-col w-full items-center justify-center">

      <div className="mb-6 flex items-center justify-center">
      <img alt="Velora Casino" className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" src="/screens/login/d0872bdae49a.jpg" />
      </div>

      <div className="auth-card w-full max-w-[470px] bg-[#0e0f13] border border-white/10 rounded-[28px] p-6 sm:p-8 relative backdrop-blur-md shadow-2xl">

      <div className="w-full bg-[#07080a] p-1.5 rounded-full border border-white/10 flex items-center justify-between mb-8" data-purpose="auth-tabs">
        <a className="w-1/2 py-2.5 text-center text-sm font-bold text-[#d4af37] rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-200" href="#">
          Login
        </a>
        <a className="w-1/2 py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-white rounded-full transition-all duration-200" href="#">
          Register
        </a>
      </div>

      <div className="mb-7">
      <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase">
              Welcome Back.
            </h1>
      <p className="font-body-md text-body-md text-on-surface-variant/70 mt-1">
              Enter your credentials to access the high-stakes lobby.
            </p>
      </div>

      <form className="space-y-5">

      <div className="flex flex-col space-y-1.5">
      <label className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant/80" htmlFor="username">
                Email or Username
              </label>
      <div className="relative">
      <input autoComplete="username" className="w-full bg-[#121317] border border-white/10 text-white font-body-md text-body-md px-4 py-3.5 rounded-xl outline-none placeholder:text-neutral-500 transition-all duration-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:bg-[#1a1b20]" id="username" name="username" placeholder="email@email.com" required type="text" />
      </div>
      </div>

      <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between">
      <label className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant/80" htmlFor="password">
                  Password
                </label>
      <a className="font-label-sm text-label-sm text-[#d4af37] hover:text-[#f3e5ab] transition-colors font-medium" href="#">Forgot?</a>
      </div>
      <div className="relative flex items-center">
      <input autoComplete="current-password" className="w-full bg-[#121317] border border-white/10 text-white font-body-md text-body-md px-4 py-3.5 pr-11 rounded-xl outline-none placeholder:text-neutral-500 transition-all duration-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:bg-[#1a1b20]" id="password" name="password" placeholder="••••••••" required type="password" />
      <button aria-label="Toggle password visibility" className="absolute right-3 p-1.5 text-on-surface-variant/50 hover:text-on-surface transition-colors" id="toggle-password" type="button">
      <i className="fa-regular fa-eye text-sm" id="toggle-password-icon"></i>
      </button>
      </div>
      </div>

      <div className="pt-2">
      <button className="btn-primary group w-full rounded-full px-6 py-4 font-label-lg text-label-lg uppercase tracking-wider" type="submit">
      <span className="">Enter the Lobby</span>
      <span className="material-symbols-outlined text-base font-bold transition-transform group-hover:translate-x-1">arrow_forward</span>
      </button>
      </div>

      <p className="font-body-sm text-body-sm text-center text-on-surface-variant/60 leading-relaxed pt-2">By entering, you confirm you are 18+ and agree to our 
      <a className="text-[#d4af37] hover:underline transition-colors font-medium" href="#">Terms of Service</a> 
      and 
      <a className="text-[#d4af37] hover:underline transition-colors font-medium" href="#">Privacy Policy</a>.</p>

      <div className="pt-4 text-center">
      <p className="font-body-sm text-body-sm text-on-surface-variant/70">
                Don't have an account? 
                <a className="text-[#d4af37] hover:underline font-semibold transition-colors ml-1" href="#">Register</a>
      </p>
      </div>
      </form>
      </div>
      </div>
      </div>









    </div>
  )
}
