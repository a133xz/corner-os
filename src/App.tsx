import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DesktopPage from './pages/DesktopPage'
import LabPage from './pages/LabPage'
import LegalPage from './pages/LegalPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DesktopPage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/aviso-legal" element={<LegalPage slug="aviso-legal" />} />
        <Route path="/privacidad" element={<LegalPage slug="privacidad" />} />
        <Route path="/terminos" element={<LegalPage slug="terminos" />} />
      </Routes>
    </BrowserRouter>
  )
}
