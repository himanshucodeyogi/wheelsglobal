import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const initiatives = [
  { title: 'Agriculture Technology', desc: 'Introducing precision farming, soil testing, and agri-tech apps to improve crop yields for small farmers.', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80' },
  { title: 'Women Entrepreneurship', desc: 'Empowering rural women with microfinance, business training, and market linkages for self-employment.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  { title: 'Vocational Training', desc: 'Skills training in trades with local market demand: construction, beauty, hospitality, and manufacturing.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&q=80' },
  { title: 'Smart Village Framework', desc: 'Comprehensive village development model integrating technology, governance, and economic development.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80' },
]

export default function LivelihoodCouncil() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80') center/cover no-repeat` }}>
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Livelihood Council</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Building sustainable livelihoods and entrepreneurship in rural communities</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>The Livelihood Council promotes economic empowerment in rural India through agriculture technology, entrepreneurship development, and skills training. We believe sustainable livelihoods are the foundation of long-term rural prosperity.</p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>Our <strong>Smart Village framework</strong> integrates all WGF councils into comprehensive village development, guided by Ambassador Pradeep Kapur's policy expertise.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: '#008080' }}>Support Livelihood Programs</Link>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-teal)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(0,128,128,0.2)' }}>
                  <motion.div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80" alt="Livelihood" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  {[{ n: '25K+', l: 'Farmers Supported' }, { n: '5K+', l: 'Women Entrepreneurs' }, { n: '30%', l: 'Avg Income Increase' }].map((s, i) => (
                    <motion.div key={s.l} style={{ marginBottom: 'var(--space-md)' }}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div style={{ fontSize: '36px', fontWeight: 700, color: '#008080' }}>{s.n}</div>
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
              <h2>Build Rural Prosperity</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>Your support helps rural families build sustainable, dignified livelihoods</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/donate" className="btn btn-primary">Donate to Livelihood Council</Link></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/contact" className="btn btn-outline">Apply for Program</Link></motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
