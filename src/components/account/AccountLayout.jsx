import { Outlet } from 'react-router-dom'

/**
 * Contenedor común del área de cuenta.
 * El header y el footer siguen viniendo del Layout global.
 */
export default function AccountLayout() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Outlet />
    </div>
  )
}
