import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoBetVelora.png'

/**
 * Forgot password — diseñada a partir de `assets/forgotPassword.png`.
 * Mantiene la estética de Login/Register con el CTA dorado del sistema.
 */
export default function ForgotPassword() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

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
        <div className="mb-6 flex flex-col items-center">
          <img
            src={logo}
            alt="Velora Casino"
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-12"
          />
        </div>

        <section className="auth-card relative w-full max-w-[470px] rounded-[28px] border border-white/10 bg-[#0e0f13] p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-[26px]">
              Reset your password
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label
                className="block text-[11px] font-bold uppercase tracking-wider text-slate-400"
                htmlFor="reset-email"
              >
                Email address
              </label>
              <input
                className="w-full rounded-xl border border-white/10 bg-[#121317] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-neutral-500 focus:border-[#d4af37] focus:bg-[#1a1b20] focus:ring-1 focus:ring-[#d4af37]"
                id="reset-email"
                name="email"
                placeholder="email@email.com"
                required
                type="email"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full rounded-full px-6 py-4 text-sm font-extrabold uppercase tracking-wider"
            >
              Send reset link
            </button>

            {sent && (
              <p className="text-center text-xs text-emerald-400" role="status">
                If the email exists, we&apos;ve sent you a link to reset your password.
              </p>
            )}

            <p className="pt-2 text-center text-sm text-slate-400">
              Remembered your password?{' '}
              <Link
                to="/auth/login"
                className="ml-1 font-semibold text-[#d4af37] transition-colors hover:text-[#f3e5ab] hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}
