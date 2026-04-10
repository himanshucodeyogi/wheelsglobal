import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const projects = [
  {
    title: 'Micro-Grid Driven Sustainable Rural Enterprises',
    desc: 'Building community-scale solar micro-grids that power rural enterprises — enabling productive economic activities 24/7 in villages previously dependent on kerosene and diesel.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
  },
  {
    title: 'Innovative Energy Storage Solutions',
    desc: 'Deploying cutting-edge battery and energy storage technologies designed for rural India — ensuring reliable power even during cloudy days and at night.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    title: 'Consumer & Small-Enterprise Renewable Products',
    desc: 'Bringing solar-powered consumer products and small-enterprise tools to rural markets — from solar lanterns to productive-use appliances that replace fossil fuel dependence.',
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80',
  },
  {
    title: 'RuKart: Zero Energy Cold Storage',
    desc: 'An innovative zero-energy cold storage solution for small and marginal farmers — reducing post-harvest losses and improving incomes without requiring grid electricity.',
    img: 'https://i.ibb.co/5Xzm8FvJ/image.png',
  },
]

const technologies = [
  { icon: '☀️', title: 'Solar Energy', desc: 'From rooftop panels to Concentrated Solar Power multi-gigawatt mega projects powering entire regions.' },
  { icon: '🔋', title: 'Energy Storage', desc: 'Advanced battery technologies enabling reliable round-the-clock power from intermittent renewable sources.' },
  { icon: '💨', title: 'Wind & Geothermal', desc: 'Harnessing wind and geothermal resources where available for diversified clean energy generation.' },
  { icon: '🌿', title: 'Biomass Energy', desc: 'Converting agricultural waste and biomass into clean energy — turning a rural problem into a rural asset.' },
]

const focusStats = [
  { number: '4', label: 'Continents where Energy Council thought-leaders operate' },
  { number: '3', label: 'Core focus areas: Micro-grids, Storage, Consumer products' },
  { number: '1', label: 'Active flagship project: RuKart Zero Energy Cold Storage' },
]

export default function EnergyCouncil() {
  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <div
          className="page-hero"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80') center/cover no-repeat`,
          }}
        >
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Energy Council
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Decarbonizing development — micro-grids, energy storage, and renewable products for rural India across four continents of leadership
            </motion.p>
          </div>
        </div>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div className="split-2-1">
              <SlideLeft>
                <span
                  className="badge"
                  style={{ background: 'var(--tint-red)', color: 'var(--color-error)', marginBottom: 'var(--space-md)', display: 'inline-block' }}
                >
                  Our Mission
                </span>
                <h2>Decarbonizing Rural Development</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>
                  The energy landscape faces <strong>profound challenges — linked to the long-term survival of humanity</strong> — and by the same token, equally exciting opportunities. Rapid innovations in renewable energy technologies are being productized from consumer products to country-level mega projects such as Concentrated Solar Power multi-gigawatt projects.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>
                  The WGF Energy Council brings together thought-leaders across all key domains with active leadership roles across <strong>four continents</strong>. We channel this global expertise toward three focused impact areas for rural India: micro-grid enterprises, innovative energy storage, and renewable consumer products.
                </p>
                <div
                  style={{
                    background: 'var(--tint-red)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-lg)',
                    margin: 'var(--space-lg) 0',
                    borderLeft: '4px solid var(--color-error)',
                  }}
                >
                  <strong style={{ color: 'var(--color-error)', display: 'block', marginBottom: 'var(--space-sm)' }}>Our Approach</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    We focus on scalable, technology-enabled solutions — from solar micro-grids powering rural enterprises to zero-energy cold storage for farmers — all driven by IIT ecosystem innovation and global thought leadership.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: 'var(--color-error)', borderColor: 'var(--color-error)' }}>
                    Support Energy Projects
                  </Link>
                </motion.div>
              </SlideLeft>

              <SlideRight>
                <motion.div
                  style={{ background: 'var(--tint-red)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(220,53,69,0.15)' }}
                >
                  <motion.div
                    style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px' }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80"
                      alt="Energy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>
                  <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-error)' }}>Energy Council at a Glance</h3>
                  {focusStats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      style={{
                        marginBottom: 'var(--space-lg)',
                        paddingBottom: 'var(--space-md)',
                        borderBottom: i < focusStats.length - 1 ? '1px solid rgba(220,53,69,0.15)' : 'none',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-error)' }}>{s.number}</div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginTop: '4px' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Key Projects</h2>
                <p>Our flagship initiatives tackling rural India's energy challenges through innovation and technology</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.1}>
              {projects.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div
                    className="card"
                    style={{ padding: 0, overflow: 'hidden' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
                  >
                    <motion.img
                      src={p.img}
                      alt={p.title}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '16px' }}>{p.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: '14px' }}>{p.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Technologies */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Technologies We Champion</h2>
                <p>Renewable energy innovations being productized from consumer products to multi-gigawatt mega projects</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.1}>
              {technologies.map((t) => (
                <StaggerItem key={t.title}>
                  <motion.div
                    className="card"
                    style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ fontSize: '36px', flexShrink: 0 }}>{t.icon}</div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-sm)' }}>{t.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-alt">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Power Rural India</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>
                Help us bring clean, reliable energy to rural communities — and build a sustainable future for all
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: 'var(--color-error)', borderColor: 'var(--color-error)' }}>
                    Donate to Energy Council
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn btn-outline">Partner With Us</Link>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
