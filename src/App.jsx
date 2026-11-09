import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import {
  Home,
  Casino,
  CasinoLive,
  Poker,
  Virtual,
  Promotions,
  Login,
  Register,
  Game,
  NotFound,
} from './pages'

function App() {
  return (
    <Routes>
      {/* Todas las rutas comparten Header + Footer + ScrollToTop */}
      <Route element={<Layout />}>
        {/* "/" redirige a la URL canónica de la home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/casino-live" element={<CasinoLive />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/promotions" element={<Promotions />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game/aztec-empire" element={<Game />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
