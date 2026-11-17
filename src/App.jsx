import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import AppLoader from './components/spinners/AppLoader'
import {
  Home,
  Casino,
  CrashGames,
  CasinoLive,
  Poker,
  Virtual,
  Promotions,
  Login,
  Register,
  ForgotPassword,
  Game,
  NotFound,
} from './pages'
import { AccountLayout } from './components'
import {
  Dashboard,
  Deposit,
  Withdrawal,
  Transactions,
  AccountPromotions,
  VerifyAccount,
  ResponsibleGambling,
  Messages,
  PersonalInformation,
} from './pages/account'

function App() {
  return (
    <>
      <AppLoader />
      <Routes>
      {/* Todas las rutas comparten Header + Footer + ScrollToTop */}
      <Route element={<Layout />}>
        {/* La home vive en "/" y "/home" redirige a ella */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/crash-games" element={<CrashGames />} />
        <Route path="/casino-live" element={<CasinoLive />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/promotions" element={<Promotions />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />

        {/* Compatibilidad con las rutas antiguas */}
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="/register" element={<Navigate to="/auth/register" replace />} />

        <Route path="/games" element={<Navigate to="/casino" replace />} />
        <Route path="/games/:gameId" element={<Game />} />

        {/* Área de cuenta */}
        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="promotions" element={<AccountPromotions />} />
          <Route path="verify-account" element={<VerifyAccount />} />
          <Route path="responsible-gambling" element={<ResponsibleGambling />} />
          <Route path="messages" element={<Navigate to="/account/message" replace />} />
          <Route path="message" element={<Messages />} />
          <Route path="personal-information" element={<PersonalInformation />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
