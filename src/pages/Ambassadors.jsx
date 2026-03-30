import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const ambassadors = [
  { name: 'Ambassador 1', campus: 'IIT Bombay', city: 'Mumbai', focus: 'Health & Education', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80' },
  { name: 'Ambassador 2', campus: 'IIT Delhi', city: 'Delhi', focus: 'Energy & Livelihood', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  { name: 'Ambassador 3', campus: 'IIT Madras', city: 'Chennai', focus: 'Water & Sanitation', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Ambassador 4', campus: 'IIT Kharagpur', city: 'Kolkata', focus: 'Education', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Ambassador 5', campus: 'IIT Kanpur', city: 'Kanpur', focus: 'Health', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { name: 'Ambassador 6', campus: 'University of California', city: 'San Francisco, USA', focus: 'Fundraising', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
]

export default function Ambassadors() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>WHEELS Ambassadors</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Young IIT alumni and student volunteers promoting WGF's mission worldwide</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Meet Our Ambassadors</h2>
                <p>Ambassadors are enthusiastic volunteers who represent WGF at their campuses and cities</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {ambassadors.map((a, i) => (
                <StaggerItem key={i}>
                  <motion.div className="card" style={{ textAlign: 'center', padding: 0, overflow: 'hidden' }}
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <motion.img src={a.img} alt={a.name}
                      style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                      whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{a.name}</h3>
                      <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>{a.campus}</p>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>📍 {a.city}</p>
                      <motion.span
                        style={{ background: 'var(--tint-blue)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}
                        whileHover={{ scale: 1.1 }}>
                        {a.focus}
                      </motion.span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Become an Ambassador</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>
                Are you an IIT student or young alumni passionate about rural development? Join our ambassador program
                and represent WGF at your campus or city.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.a href="#apply" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Apply Now</motion.a>
                <motion.a href="mailto:info@WHEELSGlobal.org" className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Email Us</motion.a>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
