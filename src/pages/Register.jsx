/**
 * Register — copiado desde Stitch (proyecto 10370446589462300119).
 * Generado automáticamente; el marcado es el original del diseño.
 */
export default function Register() {
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






      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-6 sm:py-10">

      <div className="mb-5 flex flex-col items-center" data-purpose="brand-logo-container">
      <img alt="Velora Casino" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" src="/screens/register/92d01d896f3c.jpg" />
      </div>

      <section className="auth-card w-full max-w-[470px] bg-[#0e0f13] border border-white/10 rounded-[28px] p-6 sm:p-8 relative backdrop-blur-md">


      <div className="w-full bg-[#07080a] p-1.5 rounded-full border border-white/10 flex items-center justify-between mb-7" data-purpose="auth-tabs">

      <a className="w-1/2 py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-white rounded-full transition-all duration-200" href="#">
                Login
              </a>

      <a className="w-1/2 py-2.5 text-center text-sm font-bold text-[#d4af37] rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-200" href="#">Register</a>
      </div>


      <div className="mb-6 text-left">
      <h1 className="text-2xl sm:text-[26px] font-black tracking-tight text-white uppercase font-sans">
                Create Your Account
              </h1>
      <p className="text-sm text-slate-400 mt-1 font-normal">
                Create your account and start winning today.
              </p>
      </div>


      <form action="#" className="space-y-4" method="POST">

      <div className="space-y-1.5">
      <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400" htmlFor="username">
                  Username
                </label>
      <div className="relative rounded-xl bg-[#060709] border border-white/10 focus-within:border-[#d4af37] focus-within:ring-1 focus-within:ring-[#d4af37] transition-all duration-200 flex items-center px-4 py-3.5 shadow-inner">
      <span className="text-slate-500 mr-3 text-sm flex items-center justify-center">
      <i className="fa-regular fa-user"></i>
      </span>
      <input autoComplete="username" className="w-full bg-transparent border-0 p-0 text-white text-sm focus:ring-0 focus:outline-none placeholder-slate-500 font-medium" id="username" name="username" placeholder="Your table alias" required type="text" />
      </div>
      </div>

      <div className="space-y-1.5">
      <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400" htmlFor="password">
                  Password
                </label>
      <div className="relative rounded-xl bg-[#060709] border border-white/10 focus-within:border-[#d4af37] focus-within:ring-1 focus-within:ring-[#d4af37] transition-all duration-200 flex items-center px-4 py-3.5 shadow-inner">
      <span className="text-slate-500 mr-3 text-sm flex items-center justify-center">
      <i className="fa-solid fa-lock"></i>
      </span>
      <input autoComplete="new-password" className="w-full bg-transparent border-0 p-0 text-white text-sm focus:ring-0 focus:outline-none placeholder-slate-500 tracking-widest font-mono" id="password" name="password" placeholder="••••••••" required type="password" />
      <button aria-label="Toggle password visibility" className="text-slate-500 hover:text-slate-300 ml-2 focus:outline-none text-sm transition-colors" id="toggle-password" type="button">
      <i className="fa-regular fa-eye-slash" id="toggle-password-icon"></i>
      </button>
      </div>
      <p className="text-[11px] text-slate-500 leading-tight pt-0.5">
                  Password must be 8-20 characters and contain at least one letter and one number
                </p>
      </div>

      <div className="space-y-1.5">
      <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400" htmlFor="confirm-password">
                  Confirm Password
                </label>
      <div className="relative rounded-xl bg-[#060709] border border-white/10 focus-within:border-[#d4af37] focus-within:ring-1 focus-within:ring-[#d4af37] transition-all duration-200 flex items-center px-4 py-3.5 shadow-inner">
      <span className="text-slate-500 mr-3 text-sm flex items-center justify-center">
      <i className="fa-solid fa-shield-halved"></i>
      </span>
      <input autoComplete="new-password" className="w-full bg-transparent border-0 p-0 text-white text-sm focus:ring-0 focus:outline-none placeholder-slate-500 tracking-widest font-mono" id="confirm-password" name="confirm-password" placeholder="••••••••" required type="password" />
      <button aria-label="Toggle confirm password visibility" className="text-slate-500 hover:text-slate-300 ml-2 focus:outline-none text-sm transition-colors" id="toggle-confirm-password" type="button">
      <i className="fa-regular fa-eye-slash" id="toggle-confirm-icon"></i>
      </button>
      </div>
      </div>

      <div className="pt-2 pb-2">
      <label className="flex items-start gap-3 cursor-pointer group select-none">
      <div className="relative flex items-center pt-0.5">
      <input className="w-4 h-4 rounded bg-[#060709] border border-white/30 text-[#d4af37] focus:ring-0 focus:ring-offset-0 cursor-pointer checked:border-[#d4af37] checked:bg-[#d4af37] transition-all" id="age-terms-check" name="terms" required type="checkbox" />
      </div>
      <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed font-normal">
                    I accept the general conditions and I am over 18 years old
                  </span>
      </label>
      </div>

      <div className="pt-2">
      <button className="w-full py-4 px-6 rounded-2xl bg-[#d4af37] hover:bg-[#e6c35c] text-black font-extrabold uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)]" type="submit"><span className="">Create Account</span><i className="fa-solid fa-arrow-right text-xs opacity-90"></i></button>
      </div>
      </form>


      <div className="mt-6 text-center">
      <p className="text-xs text-slate-400">
                Already have an account? 
                <a className="font-bold text-[#d4af37] hover:text-[#f3e5ab] transition-colors hover:underline ml-1" href="#">
                  Login
                </a>
      </p>
      </div>


      <div className="mt-4 pt-4 border-t border-white/[0.06] text-center">
      <p className="text-[11px] leading-relaxed text-slate-500 font-normal">By entering, you confirm you are 18+ and agree to our <a className="text-[#d4af37] hover:text-[#f3e5ab] underline font-medium transition-colors" href="#">Terms of Service</a> and <a className="text-[#d4af37] hover:text-[#f3e5ab] underline font-medium transition-colors" href="#">Privacy Policy</a>.</p>
      </div>

      </section>


      </div>










    </div>
  )
}
