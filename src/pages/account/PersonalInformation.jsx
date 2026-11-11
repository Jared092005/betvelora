import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Personal Information — copiado de la pantalla "Personal Information" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function PersonalInformation() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div>

        <div className="mb-8" data-purpose="section-heading">
        <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-sm">
        <i className="fa-solid fa-id-card text-sm"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white font-sans">
        PERSONAL INFORMATION
        </h1>
        </div>
        <p className="mt-1.5 text-sm sm:text-base text-zinc-400 font-normal pl-11">
        Keep your account details up to date.
        </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">

        <section className="bg-[#0f111a] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-card-glow relative overflow-hidden" data-purpose="user-profile-card">

        <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
        <i className="fa-solid fa-shield-halved text-brand-gold text-lg"></i>
        <h2 className="text-lg font-bold text-white tracking-wide">User profile</h2>
        </div>
        <form action="#" className="space-y-4" method="POST">

        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="username">Username</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="username" name="username" placeholder="Enter username" type="text" />
        </div>

        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="email">Email</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="email" name="email" placeholder="Enter your email address" type="email" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="first-name">First name</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="first-name" name="first_name" placeholder="First name" type="text" />
        </div>
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="last-name">Last name</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="last-name" name="last_name" placeholder="Last name" type="text" />
        </div>
        </div>

        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="current-password">Current password</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="current-password" name="current_password" placeholder="••••••••••••" type="password" />
        <p className="mt-2 text-xs text-zinc-400 font-normal">
        Only needed if you are changing your password.
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="new-password">New password</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="new-password" name="new_password" placeholder="New password" type="password" />
        </div>
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="confirm-new-password">Confirm new password</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="confirm-new-password" name="confirm_new_password" placeholder="Confirm password" type="password" />
        </div>
        </div>

        <div className="pt-6 flex justify-end">
        <button className="btn-primary px-7 py-3 text-sm" type="submit">
        <i className="fa-solid fa-floppy-disk text-sm"></i>
        <span>Save</span>
        </button>
        </div>
        </form>
        </section>

        <section className="bg-[#0f111a] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-card-glow relative overflow-hidden" data-purpose="personal-data-card">

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
        <i className="fa-solid fa-address-book text-brand-gold text-lg"></i>
        <h2 className="text-lg font-bold text-white tracking-wide">Personal data</h2>
        </div>
        <form action="#" className="space-y-4" method="POST">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="birth-date">Birth date</label>
        <div className="relative">
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="birth-date" name="birth_date" type="date" />
        </div>
        </div>
        <div className="sm:col-span-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="phone-code">Phone</label>
        <div className="flex gap-2">
        <div className="relative w-auto min-w-[6.5rem] max-w-[9rem] shrink-0">
        <select className="w-full appearance-none bg-[#161824] border border-white/10 rounded-xl pl-3 pr-8 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" defaultValue="+34" id="phone-code" name="phone_code">
        <option value="+34">+34 ES</option>
        <option value="+377">+377 MC</option>
        <option value="+33">+33 FR</option>
        <option value="+44">+44 GB</option>
        <option value="+49">+49 DE</option>
        <option value="+43">+43 AT</option>
        <option value="+41">+41 CH</option>
        <option value="+39">+39 IT</option>
        <option value="+351">+351 PT</option>
        <option value="+1">+1 US/CA</option>
        <option value="+52">+52 MX</option>
        <option value="+54">+54 AR</option>
        <option value="+57">+57 CO</option>
        <option value="+56">+56 CL</option>
        <option value="+51">+51 PE</option>
        </select>
        <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[10px] pointer-events-none"></i>
        </div>
        <div className="relative flex-1">
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="phone" name="phone" placeholder="612 345 678" type="tel" />
        <i className="fa-solid fa-phone absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs pointer-events-none"></i>
        </div>
        </div>
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="country">Country</label>
        <div className="relative">
        <select className="w-full appearance-none bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" defaultValue="" id="country" name="country">
        <option disabled value="">Select country</option>
        <option value="MC">Monaco</option>
        <option value="CH">Switzerland</option>
        <option value="UK">United Kingdom</option>
        <option value="DE">Germany</option>
        <option value="FR">France</option>
        <option value="AT">Austria</option>
        <option value="CA">Canada</option>
        </select>
        <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none"></i>
        </div>
        </div>
        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="city">City</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="city" name="city" placeholder="City" type="text" />
        </div>
        </div>

        <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2" htmlFor="address">Address</label>
        <input className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition duration-150 cursor-pointer" id="address" name="address" placeholder="Street address, apartment, suite, etc." type="text" />
        </div>

        <div className="hidden sm:block h-[58px]"></div>

        <div className="pt-6 flex justify-end">
        <button className="btn-primary px-7 py-3 text-sm" type="submit">
        <i className="fa-solid fa-floppy-disk text-sm"></i>
        <span>Save</span>
        </button>
        </div>
        </form>
        </section>
        </div>
        </div>





      </div>
    </div>
  )
}
