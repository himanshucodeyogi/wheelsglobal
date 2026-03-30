import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const projects = [
  { title: 'Solar Microgrids', desc: 'Installing community-scale solar power systems to provide 24/7 electricity to off-grid villages.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=80' },
  { title: 'Clean Cookstoves', desc: 'Distributing efficient, smokeless cookstoves to reduce indoor air pollution and fuel consumption.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80' },
  { title: 'LED Street Lighting', desc: 'Solar-powered LED street lights for safer roads and public spaces in rural communities.', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80' },
  { title: 'Energy Education', desc: 'Training local youth as solar technicians to install and maintain renewable energy systems.', img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&q=80' },
]

export default function EnergyCouncil() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80') center/cover no-repeat` }}>
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Energy Council</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Promoting clean, renewable energy solutions in rural villages</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>The Energy Council champions clean, affordable energy solutions for India's rural communities. With millions still lacking reliable electricity, our work brings solar microgrids, clean cooking solutions, and energy education to transform daily life in villages.</p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>Our latest milestone: <strong>50kW solar microgrid in Rajasthan</strong> providing clean power to 3 villages.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: '#DC3545' }}>Support Energy Projects</Link>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-red)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(220,53,69,0.2)' }}>
                  <motion.div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}
                    animate={{ y: [0, -6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80" alt="Energy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  {[{ n: '10K+', l: 'Households Electrified' }, { n: '250kW', l: 'Solar Capacity Installed' }, { n: '5K+', l: 'Clean Cookstoves' }].map((s, i) => (
                    <motion.div key={s.l} style={{ marginBottom: 'var(--space-md)' }}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div style={{ fontSize: '36px', fontWeight: 700, color: '#DC3545' }}>{s.n}</div>
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
            <FadeUp><div className="section-title"><h2>Key Projects</h2></div></FadeUp>
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
              <h2>Power Rural India</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>Help us electrify more villages and build a sustainable energy future</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/donate" className="btn btn-primary">Donate to Energy Council</Link></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/contact" className="btn btn-outline">Partner With Us</Link></motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
