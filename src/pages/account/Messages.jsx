import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Messages — copiado de la pantalla "Mensajes" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function Messages() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div><div className="w-full pt-4 pb-20 flex flex-col min-h-[55vh]">
  
        <div className="flex items-center gap-3 mb-16 select-none">
        <svg className="w-6 h-6 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        <h1 className="text-white font-bold text-xl sm:text-2xl tracking-wider uppercase font-headline-md">MENSAJES</h1>
        </div>

  
        <div className="w-full rounded-2xl bg-[#0e0f14]/80 border border-[#232634] p-6 sm:p-12 min-h-[420px] flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm relative"><div className="flex flex-col items-center justify-center my-auto text-center px-4 py-8 mx-auto w-full max-w-lg"><div className="relative flex flex-col items-center mb-5"><div className="mb-1"><svg className="w-6 h-6 text-[#9e1c40] fill-current" viewBox="0 0 24 24"><path d="M11 3v10.17l-3.59-3.58L6 11l6 6 6-6-1.41-1.41L13 13.17V3h-2z"></path></svg></div><div className="w-14 h-10 rounded-sm bg-gradient-to-b from-[#7e768e] to-[#605872] relative flex items-center justify-center shadow-md overflow-hidden border border-[#8e85a0]/40"><div className="absolute top-0 inset-x-0 h-5 bg-[#968ca8] [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-black/20"></div><div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-black/20 to-transparent"></div></div></div><h2 className="text-white font-bold text-lg sm:text-xl mb-2 font-title-lg tracking-normal">No hay mensajes</h2><p className="text-gray-400 font-normal text-sm font-body-md tracking-normal">No tienes mensajes en este momento.</p></div></div>
        </div></div>










      </div>
    </div>
  )
}
