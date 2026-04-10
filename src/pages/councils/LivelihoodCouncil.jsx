import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const projects = [
  {
    title: 'Aravalli — Integrated Smart Village',
    desc: 'A guiding framework deployment for digital entrepreneurship and sustainable livelihood models, with business proposals co-created by IIT students through campus visits and field engagement.',
    img: 'https://i.ibb.co/M5kbxbMS/image.png',
  },
  {
    title: 'SVERI in Pandharpur',
    desc: 'Enhancing social entrepreneurship initiatives in Pandharpur through the SVERI model — building rural enterprise ecosystems that create dignified, living-wage employment.',
    img: 'https://i.ibb.co/mVn8vdbQ/image.png',
  },
  {
    title: 'RuralShores / PeopleShores',
    desc: 'Breaking cycles of generational poverty through technology-enabled employment — connecting rural talent to digital economy opportunities without requiring urban migration.',
    img: 'https://i.ibb.co/6cmX88RJ/image.png',
  },
  {
    title: 'WHEELS Smart Village Framework',
    desc: 'The overarching guiding framework integrating science & technology innovations, training, co-created rural enterprises, and scalable models across India and globally.',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
  },
]

const pillars = [
  {
    icon: '🔬',
    title: 'Science & Technology Innovations',
    desc: 'Applying IIT-driven scientific and technological innovations to solve real challenges faced by rural enterprises and agricultural communities.',
  },
  {
    icon: '🎓',
    title: 'Training & Skill Development',
    desc: 'Building human capital in rural India through targeted skills training, vocational education, and entrepreneurship development programs.',
  },
  {
    icon: '🏗️',
    title: 'Co-Creating Rural Enterprises',
    desc: 'Working alongside rural communities, IIT students, and local institutions to design and launch sustainable enterprises from the ground up.',
  },
  {
    icon: '🌐',
    title: 'Scaling Nationally & Globally',
    desc: 'Replicating successful models across India and internationally — turning proven local solutions into scalable blueprints for rural prosperity.',
  },
]

const partners = [
  { category: 'IITs & Academia', names: ['IIT Gandhinagar', 'IIT Delhi', 'IIT Madras', 'IIT Mumbai', 'IIT Tirupati', 'IIT Guwahati', 'IIT BHU', 'Shamlaji College', 'SVERI'] },
  { category: 'NGOs & Organizations', names: ['MaganSangrahalaya Samiti (MSS)', 'IEEE-ISV', 'SOBUS', 'Mission Samriddhi', 'SEVAK', 'Pratham', 'Ekal', 'TIE'] },
  { category: 'Foundations & Government', names: ['America India Foundation (AIF)', 'BOSCH', 'SBI', 'Niti Aayog', 'NIRD-PR', 'USAID'] },
]

const visionStats = [
  { number: '$5T', label: 'India\'s economy target the council supports by 2025' },
  { number: '4', label: 'Core strategic pillars driving rural enterprise growth' },
  { number: '3+', label: 'Active flagship projects across rural India' },
]

export default function LivelihoodCouncil() {
  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <div
          className="page-hero"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&q=80') center/cover no-repeat`,
          }}
        >
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Livelihood Council
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Enhancing rural economy through co-created enterprises, technology innovation, and scalable livelihoods for India's $5 trillion economy goal
            </motion.p>
          </div>
        </div>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <span
                  className="badge"
                  style={{ background: 'var(--tint-teal)', color: 'var(--color-accent)', marginBottom: 'var(--space-md)', display: 'inline-block' }}
                >
                  Our Mission
                </span>
                <h2>Building Living-Wage Rural Enterprises</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>
                  The WGF Livelihood Council aims to <strong>enhance rural economy through co-creating and advancing rural enterprises</strong> — using technology innovations and scientific processes, sharing best practices, and developing techniques to foster trade and employment for rural populations.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>
                  Supporting India's goal of becoming a <strong>$5 trillion economy by 2025</strong>, the council drives increased rural economic contribution through technology-enabled solutions — ensuring that growth reaches the last mile.
                </p>
                <div
                  style={{
                    background: 'var(--tint-teal)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-lg)',
                    margin: 'var(--space-lg) 0',
                    borderLeft: '4px solid var(--color-accent)',
                  }}
                >
                  <strong style={{ color: 'var(--color-accent)', display: 'block', marginBottom: 'var(--space-sm)' }}>Our Vision</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    Improving the lives of rural India through technology-enabled solutions — with the <strong>WHEELS Smart Village</strong> concept as the guiding framework integrating all four strategic pillars into comprehensive rural development.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
                    Support Livelihood Programs
                  </Link>
                </motion.div>
              </SlideLeft>

              <SlideRight>
                <motion.div
                  style={{ background: 'var(--tint-teal)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(0,128,128,0.15)' }}
                >
                  <motion.div
                    style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&q=80"
                      alt="Livelihood"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>
                  <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-accent)' }}>Council at a Glance</h3>
                  {visionStats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      style={{
                        marginBottom: 'var(--space-lg)',
                        paddingBottom: 'var(--space-md)',
                        borderBottom: i < visionStats.length - 1 ? '1px solid rgba(0,128,128,0.15)' : 'none',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-accent)' }}>{s.number}</div>
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
                <p>Our flagship initiatives co-creating rural enterprises with IIT expertise, NGOs, and community leaders</p>
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

        {/* Four Pillars */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Four Strategic Pillars</h2>
                <p>The integrated framework driving sustainable rural enterprise creation and scale</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.1}>
              {pillars.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div
                    className="card"
                    style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ fontSize: '36px', flexShrink: 0 }}>{p.icon}</div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-sm)' }}>{p.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partners */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Partner Network</h2>
                <p>A broad coalition of IITs, NGOs, government bodies, and foundations driving rural enterprise at scale</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {partners.map((group, i) => (
                <StaggerItem key={group.category}>
                  <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  >
                    <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-md)', fontSize: '15px' }}>{group.category}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {group.names.map((name) => (
                        <li
                          key={name}
                          style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '14px',
                            padding: '5px 0',
                            borderBottom: '1px solid var(--color-border)',
                            lineHeight: 1.5,
                          }}
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Build Rural Prosperity</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>
                Your support helps rural families build sustainable, dignified livelihoods and contribute to India's $5 trillion economy
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/donate" className="btn btn-primary" style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
                    Donate to Livelihood Council
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
