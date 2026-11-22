
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import CreateEvent from './pages/CreateEvent'
import Participants from './pages/Participants'
import RegistrationHistory from './pages/RegistrationHistory'
import Footer from './components/Footer'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />

        <Route
          path="/create-event"
          element={
            <>
              <Home />
              <CreateEvent />
            </>
          }
        />

        <Route path="/participants" element={<Participants />} />
        <Route path="/history" element={<RegistrationHistory />} />
      </Routes>

      {location.pathname !== '/create-event' && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
