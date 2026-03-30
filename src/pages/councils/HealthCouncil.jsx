import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const initiatives = [
  { title: 'Telemedicine Centers', desc: 'Rural telemedicine hubs connecting patients with specialist doctors in cities via video consultation.', img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=200&q=80' },
  { title: 'Mobile Health Clinics', desc: 'Mobile units visiting remote villages for diagnostics, medicines, and preventive care.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80' },
  { title: 'Preventive Health Camps', desc: 'Community health camps for eye check-ups, diabetes screening, and maternal care.', img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&q=80' },
  { title: 'Community Health Workers', desc: 'Training local women as community health workers (Aarogya Sakhis) for first-line healthcare.', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&q=80' },
]

export default function HealthCouncil() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1400&q=80') center/cover no-repeat` }}>
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Health Council</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Ensuring affordable healthcare for India's 800M+ rural population</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>The Health Council works to make affordable, quality healthcare accessible to India's vast rural population. Led by Dr. Raj Shah and a network of medical professionals and IIT alumni, we deploy innovative healthcare delivery models that reach the last mile.</p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>Our telemedicine network has already served over <strong>100,000 patients</strong>, and we continue to scale through partnerships with hospitals, NGOs, and state governments.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: '#28A745' }}>Support Health Projects</Link>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-green)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(40,167,69,0.2)' }}>
                  <motion.div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}
                    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&q=80" alt="Health" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  {[{ n: '100K+', l: 'Patients Served' }, { n: '50+', l: 'Telemedicine Centers' }, { n: '200+', l: 'Health Workers Trained' }].map((s, i) => (
                    <motion.div key={s.l} style={{ marginBottom: 'var(--space-md)' }}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div style={{ fontSize: '36px', fontWeight: 700, color: '#28A745' }}>{s.n}</div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{s.l}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </SlideRight>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <FadeUp><div className="section-title"><h2>Our Initiatives</h2></div></FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {initiatives.map((i) => (
                <StaggerItem key={i.title}>
                  <motion.div className="card" whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}>
                    <motion.div style={{ width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', marginBottom: 'var(--space-sm)' }} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}><img src={i.img} alt={i.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></motion.div>
                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{i.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{i.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Council Leadership</h2>
              <motion.div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', maxWidth: '400px', margin: 'var(--space-xl) auto', textAlign: 'center' }}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                <motion.div style={{ fontSize: '48px', marginBottom: '8px' }} animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>👨‍⚕️</motion.div>
                <h3>Dr. Raj Shah</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Chair, Health Council</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '8px' }}>Medical doctor and IIT alumnus leading health council projects including telemedicine and preventive healthcare for rural communities.</p>
              </motion.div>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/donate" className="btn btn-primary">Donate to Health Council</Link></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/contact" className="btn btn-outline">Contact Us</Link></motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
