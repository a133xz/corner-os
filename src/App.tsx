import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DesktopPage from './pages/DesktopPage'
import LabPage from './pages/LabPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DesktopPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </BrowserRouter>
  )
}
