/**
 * Banderas en SVG (los emoji de bandera no se renderizan en Windows).
 */
export default function Flag({ code, className = '' }) {
  if (code === 'es') {
    return (
      <svg viewBox="0 0 60 40" className={className} aria-hidden="true" focusable="false">
        <rect width="60" height="40" fill="#AA151B" />
        <rect y="10" width="60" height="20" fill="#F1BF00" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}
