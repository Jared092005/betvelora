import AccountSidebar from '../../components/account/AccountSidebar'

/**
 * Verify account — copiado de la pantalla "Account Verification (KYC)" de Stitch.
 * Header y footer son los de la app (Layout global) y la barra lateral
 * es el AccountSidebar compartido.
 */
export default function VerifyAccount() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
      <AccountSidebar />

      <div className="min-w-0 lg:col-span-9">





        <div>
        <div>

        <section className="mb-8" data-purpose="page-title-banner">
        <div className="flex flex-wrap items-center gap-3.5 mb-2.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-sans">
        ACCOUNT VERIFICATION (KYC)
        </h1>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14161f] border border-white/10 text-xs font-medium text-slate-400 shadow-sm">
        <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
        <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fillRule="evenodd"></path>
        </svg>
        <span>Unverified</span>
        </div>
        </div>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
        To comply with regulations, we need to verify your identity. Please upload the following documents.
        </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

        <div className="lg:col-span-7 space-y-4" data-purpose="required-documents-section">

        <div className="bg-[#090b10] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
        <h2 className="text-base sm:text-lg font-bold text-white mb-5 tracking-wide">
        Required documents
        </h2>
        <div className="space-y-3.5">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all gap-4">
        <div className="space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
        Identity document (ID / Passport)
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
        Front and back, all four corners visible.
        </p>
        </div>

        <div className="self-start sm:self-center">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#181b24] text-xs font-medium text-slate-300 border border-white/5 whitespace-nowrap">
        Not uploaded
        </span>
        </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all gap-4">
        <div className="space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
        Proof of address (utility bill / bank statement)
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
        Issued within the last 3 months.
        </p>
        </div>

        <div className="self-start sm:self-center">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#181b24] text-xs font-medium text-slate-300 border border-white/5 whitespace-nowrap">
        Not uploaded
        </span>
        </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all gap-4">
        <div className="space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
        Selfie with ID
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
        Your face and the document in the same photo.
        </p>
        </div>

        <div className="self-start sm:self-center">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#181b24] text-xs font-medium text-slate-300 border border-white/5 whitespace-nowrap">
        Not uploaded
        </span>
        </div>
        </div>
        </div>


        </div>
        </div>


        <div className="lg:col-span-5" data-purpose="document-upload-form-panel">
        <div className="bg-[#090b10] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">

        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none"></div>
        <h2 className="text-base sm:text-lg font-bold text-white mb-5 tracking-wide">
        Upload a document
        </h2>
        <form action="#" className="space-y-5" method="POST">

        <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-medium text-slate-400" htmlFor="document-type">
        Document type
        </label>
        <div className="relative">
        <select className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] appearance-none cursor-pointer transition-colors" id="document-type" name="document_type">
        <option selected value="id_passport">Identity document (ID / Passport)</option>
        <option value="proof_address">Proof of address (utility bill / bank statement)</option>
        <option value="selfie_id">Selfie with ID</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        </div>
        </div>
        </div>

        <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-medium text-slate-400">
        File
        </label>

        <div className="flex items-center gap-3 p-2 bg-[#0d0f17] border border-white/10 rounded-xl relative">
        <input accept=".jpg,.jpeg,.png,.pdf" className="hidden" id="file-upload-input" type="file" />

        <button className="btn-primary shrink-0 px-4 py-2 text-xs font-semibold sm:text-sm" type="button">
        Seleccionar archivo
        </button>
        <span className="text-xs sm:text-sm text-slate-300 truncate pr-2" id="file-chosen-text">
        Ningún archivo seleccionado
        </span>
        </div>

        <p className="text-xs text-slate-500 pt-0.5">
        JPG, PNG or PDF, up to 5 MB.
        </p>
        </div>

        <div className="pt-2">
        <button className="btn-primary w-full sm:text-base" type="submit">
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span>Upload document</span>
        </button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2 text-xs sm:text-sm text-slate-400">
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span>Documents are reviewed manually and may take up to 72 hours.</span>
        </div>
        </form>
        </div>
        </div>

        </div>
        </div>
        </div>










      </div>
    </div>
  )
}
