import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Councils from './pages/Councils'
import WaterCouncil from './pages/councils/WaterCouncil'
import HealthCouncil from './pages/councils/HealthCouncil'
import EducationCouncil from './pages/councils/EducationCouncil'
import EnergyCouncil from './pages/councils/EnergyCouncil'
import LivelihoodCouncil from './pages/councils/LivelihoodCouncil'
import Committees from './pages/Committees'
import Chapters from './pages/Chapters'
import BoardOfAdvisors from './pages/BoardOfAdvisors'
import Trustees from './pages/Trustees'
import Ambassadors from './pages/Ambassadors'
import NewsEvents from './pages/NewsEvents'
import FinancialRecords from './pages/FinancialRecords'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/councils" element={<Councils />} />
        <Route path="/water" element={<WaterCouncil />} />
        <Route path="/health" element={<HealthCouncil />} />
        <Route path="/education" element={<EducationCouncil />} />
        <Route path="/energy" element={<EnergyCouncil />} />
        <Route path="/livelihood" element={<LivelihoodCouncil />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/board-of-advisors" element={<BoardOfAdvisors />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/events-and-news" element={<NewsEvents />} />
        <Route path="/financial-records" element={<FinancialRecords />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
