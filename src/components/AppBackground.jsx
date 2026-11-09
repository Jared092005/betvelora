import backgroundImage from '../assets/fondoBet-velora.webp'

/**
 * Fondo global de la aplicación.
 * La imagen se importa desde src/assets para que Vite la procese
 * (hash + caché). Se muestra fija detrás de todas las rutas.
 */
export default function AppBackground() {
  return (
    <div
      aria-hidden="true"
      className="app-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="app-background__overlay" />
    </div>
  )
}
