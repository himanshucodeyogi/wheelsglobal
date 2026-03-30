import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const projects = [
  { title: 'Water Filtration Systems', desc: 'Deploying low-cost, maintainable water filtration units in villages lacking access to clean drinking water.', img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=200&q=80' },
  { title: 'Rainwater Harvesting', desc: 'Designing and implementing community rainwater harvesting structures to augment groundwater in drought-prone areas.', img: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=200&q=80' },
  { title: 'Sanitation Infrastructure', desc: 'Building sanitation facilities and promoting hygiene education to reduce water-borne diseases.', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=200&q=80' },
  { title: 'Smart Water Portal', desc: 'A technology app to monitor and manage rural water sources, ensuring real-time quality and availability data.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80' },
]

const stats = [
  { number: '500+', label: 'Villages Served' },
  { number: '2M+', label: 'People Impacted' },
  { number: '15+', label: 'States Covered' },
]

export default function WaterCouncil() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80') center/cover no-repeat` }}>
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Water Council</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Bringing safe water and sanitation solutions to rural communities</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>The Water Council focuses on providing safe drinking water and improved sanitation to rural communities across India. We partner with local governments and leverage technology solutions to address the critical water needs of underserved villages.</p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>Access to clean water is a fundamental right. Our programs combine engineering expertise from IIT alumni with grassroots community mobilization to create sustainable water solutions.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary">Support Water Projects</Link>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-blue)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(0,87,183,0.2)' }}>
                  <motion.div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80" alt="Water" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  {stats.map((s, i) => (
                    <motion.div key={s.label} style={{ marginBottom: 'var(--space-md)' }}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div style={{ fontSize: '36px', fontWeight: 700, color: '#0057B7' }}>{s.number}</div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </SlideRight>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <FadeUp><div className="section-title"><h2>Key Projects</h2><p>Our flagship initiatives to address India's rural water crisis</p></div></FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {projects.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div className="card" whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}>
                    <motion.div style={{ width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', marginBottom: 'var(--space-sm)' }} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}><img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></motion.div>
                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{p.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Get Involved</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>Join the Water Council as a volunteer, donor, or project partner</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/donate" className="btn btn-primary">Donate to Water Council</Link></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/contact" className="btn btn-outline">Contact Us</Link></motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
