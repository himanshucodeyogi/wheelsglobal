import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const councilLinks = [
  { to: '/water', label: 'Water Council' },
  { to: '/health', label: 'Health Council' },
  { to: '/education', label: 'Education Council' },
  { to: '/energy', label: 'Energy Council' },
  { to: '/livelihood', label: 'Livelihood Council' },
]

const aboutLinks = [
  { to: '/about-us', label: 'About Us' },
  { to: '/trustees', label: 'Trustees / Board' },
  { to: '/board-of-advisors', label: 'Board of Advisors' },
  { to: '/ambassadors', label: 'Ambassadors' },
  { to: '/chapters', label: 'Chapters' },
]

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
  exit: { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.12 } },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400 }}>
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-icon">🌐</span>
            <span className="brand-text">
              <span className="brand-wheels">WHEELS</span>
              <span className="brand-global"> Global Foundation</span>
            </span>
          </Link>
        </motion.div>

        <motion.button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {menuOpen ? '✕' : '☰'}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {/* About dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdown('about')}
            onMouseLeave={() => setDropdown(null)}
          >
            <NavLink to="/about-us" className="nav-link">About ▾</NavLink>
            <AnimatePresence>
              {dropdown === 'about' && (
                <motion.div
                  className="dropdown-menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {aboutLinks.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link to={l.to} className="dropdown-item" onClick={() => { setMenuOpen(false); setDropdown(null) }}>
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Councils dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdown('councils')}
            onMouseLeave={() => setDropdown(null)}
          >
            <NavLink to="/councils" className="nav-link">Councils ▾</NavLink>
            <AnimatePresence>
              {dropdown === 'councils' && (
                <motion.div
                  className="dropdown-menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {councilLinks.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link to={l.to} className="dropdown-item" onClick={() => { setMenuOpen(false); setDropdown(null) }}>
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/committees" className="nav-link" onClick={() => setMenuOpen(false)}>Committees</NavLink>
          <NavLink to="/events-and-news" className="nav-link" onClick={() => setMenuOpen(false)}>News</NavLink>
          <NavLink to="/financial-records" className="nav-link" onClick={() => setMenuOpen(false)}>Financials</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggle}
            className="theme-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
            title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? '☀️' : '🌙'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            <Link to="/donate" className="btn btn-secondary btn-sm" onClick={() => setMenuOpen(false)}>Donate</Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}
