import { useState } from 'react'

const tabs = [
  {
    id: 'available',
    label: 'Available Bonuses',
    title: 'No bonuses available',
    description: 'No bonuses available at the moment.',
  },
  {
    id: 'active',
    label: 'Active Bonuses',
    title: 'No active bonuses',
    description: "You don't have any active bonuses right now.",
  },
  {
    id: 'history',
    label: 'Bonus History',
    title: 'No bonus history',
    description: 'Your claimed bonuses will appear here once you use them.',
    icon: 'fa-solid fa-clock-rotate-left',
  },
]

const activeTabClass =
  'group flex items-center justify-between rounded-lg bg-white/[0.04] border-l-2 border-[#d4af37] px-3.5 py-2.5 text-sm font-bold tracking-wide text-white transition-all'
const idleTabClass =
  'group flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-all hover:bg-white/[0.02] hover:text-white'

export default function Promotions() {
  const [activeTab, setActiveTab] = useState('available')
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]

  return (
    <div className="flex min-h-screen flex-col bg-[#000000] text-slate-200 antialiased selection:bg-[#d4af37]/30 selection:text-white">
      <div className="w-full flex-1 bg-black/40" data-purpose="bonuses-main-content">
        <div className="mx-auto max-w-[1920px] px-6 py-10 lg:px-12 lg:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <aside
              className="flex flex-col gap-6 lg:col-span-3 xl:col-span-2"
              data-purpose="bonus-sidebar-nav"
            >
              <div>
                <h1 className="text-xl font-black uppercase tracking-wider text-white md:text-2xl">
                  Bonuses
                </h1>
              </div>

              <nav aria-label="Bonus Categories" className="flex flex-col gap-2 pt-2">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`cursor-pointer text-left ${isActive ? activeTabClass : idleTabClass}`}
                    >
                      <span className={isActive ? 'text-xs uppercase tracking-wider' : ''}>
                        {tab.label}
                      </span>
                      {tab.icon && (
                        <i
                          className={`${tab.icon} text-[11px] transition-colors ${
                            isActive ? 'text-[#d4af37]' : 'text-slate-600 group-hover:text-slate-400'
                          }`}
                        />
                      )}
                    </button>
                  )
                })}
              </nav>
            </aside>

            <section className="lg:col-span-9 xl:col-span-10" data-purpose="bonus-display-area">
              <div className="relative flex min-h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.05] bg-[#090a0e]/60 p-8 shadow-2xl md:p-14 lg:min-h-[540px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/[0.03] via-transparent to-transparent" />

                <div className="z-10 mx-auto flex max-w-md flex-col items-center text-center">
                  <div className="group relative mb-6 cursor-default">
                    <div className="absolute -inset-3 rounded-full bg-[#d4af37]/15 opacity-60 blur-xl transition-opacity group-hover:opacity-100" />

                    <div className="gift-glow relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                      <svg
                        className="h-14 w-14 sm:h-16 sm:w-16"
                        fill="none"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect fill="#E5A638" height="11" rx="2" width="44" x="10" y="20" />
                        <rect fill="#C5221F" height="11" width="7" x="28.5" y="20" />
                        <path
                          d="M14 31H50V52C50 53.6569 48.6569 55 47 55H17C15.3431 55 14 53.6569 14 52V31Z"
                          fill="#C98B28"
                        />
                        <path d="M14 31H50V33H14V31Z" fill="#B37719" />
                        <rect fill="#C5221F" height="24" width="7" x="28.5" y="31" />
                        <path
                          d="M32 20C32 20 27 12 21 14C15 16 20 21 30 20.5"
                          fill="#E2302D"
                        />
                        <path
                          d="M32 20C32 20 37 12 43 14C49 16 44 21 34 20.5"
                          fill="#E2302D"
                        />
                        <circle cx="32" cy="20" fill="#A81916" r="3" />
                      </svg>
                    </div>
                  </div>

                  <h2 className="mb-2 text-lg font-bold tracking-tight text-white sm:text-xl">
                    {current.title}
                  </h2>

                  <p className="mb-8 text-sm font-normal text-slate-400">
                    {current.description}
                  </p>

                  <div className="flex w-full flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-[#14161f] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 shadow-sm transition-all duration-200 hover:border-[#d4af37]/40 hover:bg-[#1a1d28] hover:text-white"
                    >
                      <i className="fa-solid fa-arrows-rotate text-[11px] text-slate-400" />
                      <span>Refresh</span>
                    </button>
                    <button
                      type="button"
                      className="btn-primary gap-2 rounded-lg px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider"
                    >
                      <i className="fa-solid fa-wallet text-[11px]" />
                      <span>Deposit to Unlock</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
