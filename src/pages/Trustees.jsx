import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const trustees = [
  { name: 'Ratan Agarwal', role: 'President & CEO; Board Member', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/09/Ratan-Agarwal.png', bio: 'IIT alumnus and serial entrepreneur with a tech startup background. Leading WGF\'s strategy since its founding. Also co-leads the Project Sourcing Committee.' },
  { name: 'Suresh V. Shenoy', role: 'President Emeritus / Vice-Chair', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/09/suresh_shenoy.png', bio: 'IIT Bombay graduate and long-time Silicon Valley executive. Co-founded WGF and provides strategic guidance, leveraging his extensive IIT alumni network.' },
  { name: 'Dr. Hitendra Ghosh', role: 'President Emeritus (Founder)', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2022/07/Hiten-Ghosh.jpg', bio: 'Renowned physicist and humanitarian who served as WGF\'s founding president. Focused on rural science and technology projects in health and education.' },
  { name: 'Sujata Roy', role: 'President, WGF India; Chapter Lead', img: 'https://wsrv.nl/?url=wheelsglobalindia.org/wp-content/uploads/2025/08/Sujata-Roy.jpg', bio: 'IIT Kharagpur alumna and former IT industry leader. Heads the Indian arm of WGF and leads the Eastern India chapter\'s village development initiatives.' },
]

export default function Trustees() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Trustees & Board of Directors</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>The governance leadership of WHEELS Global Foundation</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Trustees</h2>
                <p>WGF's Board of Trustees oversees governance, strategy, and fiduciary responsibilities</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {trustees.map((t) => (
                <StaggerItem key={t.name}>
                  <motion.div className="card person-card" style={{ padding: 'var(--space-xl)' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <motion.img src={t.img} alt={t.name}
                      style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0, border: '3px solid var(--color-border)' }}
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }} />
                    <div>
                      <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{t.name}</h3>
                      <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', marginBottom: 'var(--space-sm)' }}>{t.role}</p>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>{t.bio}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <h2>Governance Structure</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '17px', margin: 'var(--space-md) 0' }}>
                WGF's governance follows US nonprofit standards with a Board of Trustees (directors) responsible for
                fiduciary oversight, strategic direction, and organizational compliance.
              </p>
              <div style={{ marginTop: 'var(--space-xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-md)' }}>
                {['Annual Board Meetings', 'Financial Oversight', 'Program Governance'].map((g, i) => (
                  <motion.div key={g}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
                    style={{ background: 'var(--color-card)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--elevation-1)', textAlign: 'center' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{g}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
