import { Link } from 'react-router-dom'
import logo from '../../assets/logoBetVelora.png'

/**
 * Login — copiado de Stitch (proyecto 10370446589462300119).
 * Ajustado al sistema de estilos de la app (mismas clases que Register).
 */
export default function Login() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-x-hidden bg-black font-sans text-slate-200 antialiased selection:bg-[#e60026] selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(0, 0, 0, 0.95) 75%, rgb(0, 0, 0) 100%)',
        }}
      >
        <div className="absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[450px] rounded-full bg-[#d4af37]/5 blur-[120px]" />
        <div className="absolute left-12 top-20 select-none text-8xl text-white/[0.015]">
          <i className="fa-solid fa-diamond" />
        </div>
        <div className="absolute bottom-32 left-24 select-none text-9xl text-white/[0.02]">
          <i className="fa-solid fa-spade" />
        </div>
        <div className="absolute right-20 top-40 select-none text-8xl text-white/[0.015]">
          <i className="fa-solid fa-club" />
        </div>
        <div className="absolute bottom-20 right-32 select-none text-9xl text-white/[0.02]">
          <i className="fa-solid fa-heart" />
        </div>
      </div>

      <div className="relative z-10 flex flex-grow flex-col items-center justify-center px-4 py-6 sm:py-10">
        <div className="mb-5 flex flex-col items-center" data-purpose="brand-logo-container">
          <img
            src={logo}
            alt="Velora Casino"
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-12"
          />
        </div>

        <section className="auth-card relative w-full max-w-[470px] rounded-[28px] border border-white/10 bg-[#0e0f13] p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div
            className="mb-7 flex w-full items-center justify-between rounded-full border border-white/10 bg-[#07080a] p-1.5"
            data-purpose="auth-tabs"
          >
            <Link
              to="/auth/login"
              className="w-1/2 rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 py-2.5 text-center text-sm font-bold text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="w-1/2 rounded-full py-2.5 text-center text-sm font-semibold text-slate-400 transition-all duration-200 hover:text-white"
            >
              Register
            </Link>
          </div>

          <div className="mb-6 text-left">
            <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-[26px]">
              Welcome Back.
            </h1>
            <p className="mt-1 text-sm font-normal text-slate-400">
              Enter your credentials to access the high-stakes lobby.
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label
                className="block text-[11px] font-bold uppercase tracking-wider text-slate-400"
                htmlFor="username"
              >
                Email or Username
              </label>
              <input
                autoComplete="username"
                className="w-full rounded-xl border border-white/10 bg-[#121317] px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 placeholder:text-neutral-500 focus:border-[#d4af37] focus:bg-[#1a1b20] focus:ring-1 focus:ring-[#d4af37]"
                id="username"
                name="username"
                placeholder="email@email.com"
                required
                type="text"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  className="block text-[11px] font-bold uppercase tracking-wider text-slate-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  to="/auth/forgot-password"
                  className="text-[11px] font-semibold text-[#d4af37] transition-colors hover:text-[#f3e5ab]"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative flex items-center">
                <input
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/10 bg-[#121317] px-4 py-3.5 pr-11 text-sm font-medium text-white outline-none transition-all duration-200 placeholder:text-neutral-500 focus:border-[#d4af37] focus:bg-[#1a1b20] focus:ring-1 focus:ring-[#d4af37]"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-3 p-1.5 text-sm text-slate-500 transition-colors hover:text-slate-300"
                  id="toggle-password"
                  type="button"
                >
                  <i className="fa-regular fa-eye" id="toggle-password-icon" />
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                className="btn-primary group w-full rounded-full px-6 py-4 text-sm font-extrabold uppercase tracking-wider"
                type="submit"
              >
                <span>Enter the Lobby</span>
                <i className="fa-solid fa-arrow-right text-xs opacity-90 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="pt-2 text-center text-[11px] leading-relaxed text-slate-500">
              By entering, you confirm you are 18+ and agree to our{' '}
              <a
                className="font-medium text-[#d4af37] transition-colors hover:text-[#f3e5ab] hover:underline"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="font-medium text-[#d4af37] transition-colors hover:text-[#f3e5ab] hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </p>

            <div className="pt-2 text-center">
              <p className="text-xs text-slate-400">
                Don&apos;t have an account?{' '}
                <Link
                  to="/auth/register"
                  className="ml-1 font-bold text-[#d4af37] transition-colors hover:text-[#f3e5ab] hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
