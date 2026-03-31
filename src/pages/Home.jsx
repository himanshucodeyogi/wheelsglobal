import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, AnimatedCard, ScaleIn, PageTransition } from '../components/Animations'
import './Home.css'

const heroImages = [
  { url: 'https://plus.unsplash.com/premium_photo-1682092655459-2ba62ad1ee17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVyYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D', label: 'Rural India Village' },
  { url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1400&q=80', label: 'Clean Water' },
  { url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80', label: 'Clean Energy' },
  { url: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1400&q=80', label: 'Rural Education' },
]

const councils = [
  { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80', title: 'Water Council', desc: 'Safe drinking water and sanitation solutions for rural communities.', link: '/water', color: '#0057B7' },
  { img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&q=80', title: 'Health Council', desc: 'Affordable healthcare for 800M+ rural Indians via telemedicine networks.', link: '/health', color: '#28A745' },
  { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80', title: 'Education Council', desc: 'Tech-enabled skills training, digital literacy for rural youth.', link: '/education', color: '#FFA500' },
  { img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80', title: 'Energy Council', desc: 'Renewable energy microgrids and clean cookstoves for villages.', link: '/energy', color: '#DC3545' },
  { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80', title: 'Livelihood Council', desc: 'Economic empowerment through agriculture tech and vocational training.', link: '/livelihood', color: '#008080' },
]

const stats = [
  { number: 2013, label: 'US 501(c)(3) Since', suffix: '' },
  { number: 5, label: 'Focus Councils', suffix: '+' },
  { number: 2030, label: 'Vision Target Year', suffix: '' },
  { number: 20, label: 'Rurban India Goal', suffix: '%' },
]

const news = [
  { date: 'Mar 2025', title: 'WGF Annual Gala 2025', excerpt: 'Join us at the annual gala celebrating a decade of rural transformation through IIT alumni collaboration.', tag: 'Event' },
  { date: 'Feb 2025', title: 'Solar Microgrid Launch in Rajasthan', excerpt: 'Energy Council deploys 50kW solar microgrid providing clean power to 3 villages.', tag: 'Project' },
  { date: 'Jan 2025', title: 'Telemedicine Centers Reach 100,000 Patients', excerpt: 'Health Council milestone: Our rural telemedicine network has served over 100,000 patients.', tag: 'Milestone' },
]

// Animated counter hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return [count, ref]
}

function StatItem({ number, label, suffix }) {
  const [count, ref] = useCounter(number, 1800)
  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

const slideVariants = {
  enter: { x: '100%' },
  center: { x: 0 },
  exit: { x: '-100%' },
}

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex(i => (i + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageTransition>
      <div className="home">

        {/* Auto Slideshow Hero */}
        <section className="home-hero">

            {/* Right-to-left sliding images */}
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={imgIndex}
                className="hero-bg"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImages[imgIndex].url})` }}
              />
            </AnimatePresence>

            <div className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Transforming Rural India Through Technology
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                WHEELS Global Foundation is a Pan-IIT alumni giving-back platform bringing technology-enabled solutions to rural and underserved communities across India.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link to="/donate" className="btn btn-secondary">Donate Now</Link>
                <Link to="/about-us" className="btn btn-outline-white">Learn More</Link>
              </motion.div>

              <div className="hero-stats">
                {stats.map((s) => (
                  <StatItem key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Image dots indicator */}
            <div className="hero-dots">
              {heroImages.map((img, i) => (
                <motion.div
                  key={i}
                  className={`hero-dot ${i === imgIndex ? 'active' : ''}`}
                  animate={{ scale: i === imgIndex ? 1.4 : 1, opacity: i === imgIndex ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  title={img.label}
                />
              ))}
            </div>

            {/* Floating orbs */}
            <motion.div
              className="hero-orb orb1"
              animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="hero-orb orb2"
              animate={{ y: [12, -12, 12], x: [10, -10, 10] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </section>

        {/* Councils */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Mission Areas</h2>
                <p>Five councils working across critical areas of rural transformation</p>
              </div>
            </FadeUp>
            <StaggerContainer className="mission-grid" stagger={0.1}>
              {councils.map((c) => (
                <StaggerItem key={c.link}>
                  <motion.div whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                    <Link to={c.link} className="mission-card">
                      <motion.div
                        className="mission-icon"
                        style={{ background: c.color + '15' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <img src={c.img} alt={c.title} />
                      </motion.div>
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                      <span className="mission-link" style={{ color: c.color }}>Learn More →</span>
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* About Banner */}
        <section className="about-banner section-alt section">
          <div className="container about-banner-inner">
            <SlideLeft>
              <div className="about-text">
                <span className="badge" style={{ background: 'var(--tint-blue)', color: 'var(--color-primary)' }}>About WGF</span>
                <h2>IIT Alumni Driving Rural Change Since 2013</h2>
                <p>
                  WHEELS Global Foundation began as a Pan-IIT "Giving Back" initiative around 2006 and was formally
                  incorporated as a US 501(c)(3) nonprofit in 2013. Inspired by the vision of late President A.P.J. Abdul Kalam,
                  WGF mobilizes IIT alumni talent for nation-building.
                </p>
                <p>Our goal: <strong>Transform 20% of Rurban India by 2030</strong> through technology, innovation, and collective action.</p>
                <div className="about-actions">
                  <Link to="/about-us" className="btn btn-primary">Read Our Story</Link>
                  <Link to="/trustees" className="btn btn-outline">Meet the Team</Link>
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="about-highlights">
                {[
                  { icon: '🎓', title: 'Pan-IIT Network', desc: 'Alumni from all IIT campuses worldwide contributing expertise' },
                  { icon: '🌍', title: 'Global Reach', desc: 'US headquarters with India chapters and international volunteers' },
                  { icon: '🏛️', title: 'Dual Registration', desc: 'US 501(c)(3) & India 80G/FCRA registered nonprofit' },
                  { icon: '🎯', title: '5 Focus Areas', desc: 'Water, Health, Education, Energy, Livelihood' },
                ].map((h, i) => (
                  <motion.div
                    key={h.title}
                    className="highlight-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <span className="highlight-icon">{h.icon}</span>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SlideRight>
          </div>
        </section>

        {/* News */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Latest News & Events</h2>
                <p>Stay updated with WGF's projects, milestones and upcoming events</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.12}>
              {news.map((n) => (
                <StaggerItem key={n.title}>
                  <motion.div
                    className="card news-card"
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)', transition: { duration: 0.2 } }}
                  >
                    <div className="news-meta">
                      <span className="news-tag">{n.tag}</span>
                      <span className="news-date">{n.date}</span>
                    </div>
                    <h3>{n.title}</h3>
                    <p>{n.excerpt}</p>
                    <Link to="/events-and-news" className="news-readmore">Read More →</Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <FadeUp delay={0.3}>
              <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
                <Link to="/events-and-news" className="btn btn-outline">View All News</Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Donate CTA */}
        <section className="donate-cta">
          <div className="container">
            <FadeUp>
              <h2>Make a Difference Today</h2>
              <p>Your contribution helps bring clean water, healthcare, and education to millions in rural India. Donations are tax-deductible in the US (501(c)(3)) and India (80G).</p>
              <div className="donate-actions">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/donate" className="btn btn-secondary">Donate Now</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn btn-outline-white">Get Involved</Link>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
