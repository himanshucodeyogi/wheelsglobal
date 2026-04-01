import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const indiaChapters = [
  { region: 'East Chapter', flag: '🇮🇳', lead: 'Sujata Roy & Jayanta K Saha', location: 'Eastern India', desc: 'Sujata Roy serves as President of WHEELS Global Foundation India and Chairperson of the Eastern India chapter, focused on transformation of the rural-urban population across West Bengal, Odisha, and Bihar.' },
  { region: 'North Chapter', flag: '🇮🇳', lead: 'Kishen Goenka & Prashant Singh', location: 'Northern India', desc: 'Leads Smart Village initiatives and policy advocacy, leveraging proximity to national government and IIT alumni across northern states.' },
  { region: 'South Chapter', flag: '🇮🇳', lead: 'Sunil Khanna & Ramnath S. Mani', location: 'Southern India', desc: 'Drives rural development, healthcare access, and education programs across southern states in partnership with local IIT alumni networks.' },
  { region: 'West Chapter', flag: '🇮🇳', lead: 'Mahesh Vaidya & Subrahmanyam KV', location: 'Western India', desc: 'Coordinates WGF India FCRA-compliant fundraising and corporate CSR partnerships for projects across Maharashtra and western states.' },
]

const usaChapters = [
  { region: 'Chicago, IL', flag: '🇺🇸', lead: 'Gaurav Kumar', location: 'Chicago, Illinois' },
  { region: 'Dallas, TX', flag: '🇺🇸', lead: 'Sanjeev Kumar & Prashant Newaskar', location: 'Dallas, Texas' },
  { region: 'Seattle, WA', flag: '🇺🇸', lead: 'Nishant Singh & Shirish Nadkarni', location: 'Seattle, Washington' },
  { region: 'Philadelphia, PA', flag: '🇺🇸', lead: 'Amit Bhowmik', location: 'Philadelphia, Pennsylvania' },
  { region: 'Phoenix, AZ', flag: '🇺🇸', lead: 'Ravi Sharma', location: 'Phoenix, Arizona' },
  { region: 'Mid-West', flag: '🇺🇸', lead: 'Viji Narayanan', location: 'Mid-West, USA' },
]

const intlChapters = [
  { region: 'Australia', flag: '🇦🇺', lead: 'Ravi Bhatia & Tirthankar Banerjee', location: 'Australia' },
  { region: 'EU / UK', flag: '🇬🇧', lead: 'Farid Khan & Yogesh Sharma', location: 'Europe & UK' },
]

export default function Chapters() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Chapters</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>WHEELS Global Foundation chapters across India, USA, and the world driving local impact</motion.p>
          </div>
        </div>

        {/* Global Co-Convenors */}
        <section className="section">
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <div className="section-title">
                <h2>Global Co-Convenors</h2>
                <p>WGF's global chapter network is co-convened by</p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Dr. Ram Ramanan', 'Indrajit Chatterjee'].map((name) => (
                  <motion.div key={name} className="card" style={{ padding: 'var(--space-lg) var(--space-xl)', minWidth: '200px' }}
                    whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                    <p style={{ fontWeight: 700, fontSize: '17px', color: 'var(--color-text)' }}>{name}</p>
                    <p style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>Global Co-Convenor</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* India Chapters */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>India Chapters</h2>
                <p>Four regional chapters covering all of India</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {indiaChapters.map((c) => (
                <StaggerItem key={c.region}>
                  <motion.div className="card"
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '20px' }}>{c.flag} {c.region}</h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', marginBottom: 'var(--space-xs)' }}>📍 {c.location}</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}><strong>Lead:</strong> {c.lead}</p>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: '14px' }}>{c.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* USA Chapters */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>USA Chapters</h2>
                <p>Active chapters across major US cities</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.08}>
              {usaChapters.map((c) => (
                <StaggerItem key={c.region}>
                  <motion.div className="card" style={{ textAlign: 'center', padding: 'var(--space-lg)' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }} transition={{ duration: 0.2 }}>
                    <div style={{ fontSize: '32px', marginBottom: 'var(--space-sm)' }}>{c.flag}</div>
                    <h3 style={{ fontSize: '17px', marginBottom: '6px' }}>{c.region}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: '4px' }}>📍 {c.location}</p>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px' }}>{c.lead}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* International Chapters */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>International Chapters</h2>
                <p>WGF's reach extends beyond India and the USA</p>
              </div>
            </FadeUp>
            <StaggerContainer style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }} stagger={0.1}>
              {intlChapters.map((c) => (
                <StaggerItem key={c.region}>
                  <motion.div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)', minWidth: '220px' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }} transition={{ duration: 0.2 }}>
                    <div style={{ fontSize: '36px', marginBottom: 'var(--space-sm)' }}>{c.flag}</div>
                    <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{c.region}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: '4px' }}>📍 {c.location}</p>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px' }}>{c.lead}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Start or Join a Chapter</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>
                Are you an IIT alumnus wanting to make a difference in your region? Connect with us to start a new chapter or join an existing one.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </motion.div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
