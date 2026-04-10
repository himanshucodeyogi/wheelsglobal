import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const programs = [
  {
    title: 'Spoken Tutorials',
    desc: 'Technology-driven skills development scaling IIT Bombay\'s pioneering spoken tutorial platform to prepare youth for the digital economy workforce.',
    img: 'data:image/jpeg;base64,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',
  },
  {
    title: 'NDLI — National Digital Library of India',
    desc: 'Collaboration with the National Digital Library of India to educate students across all levels, bridging the knowledge gap through open digital access.',
    img: 'https://i.ibb.co/B20ZMzZj/image.png',
  },
  {
    title: 'Scholar Planet',
    desc: 'Breaking barriers of cost, access, and language — making digital-first education affordable and inclusive for India\'s underserved youth.',
    img: 'https://i.ibb.co/DfwdHXdy/image.png',
  },
  {
    title: 'School-In-A-Box',
    desc: 'A scalable, self-contained educational delivery solution that brings structured learning directly to remote villages lacking school infrastructure.',
    img: 'https://i.ibb.co/93WB8pYb/image.png',
  },
  {
    title: 'KidEx',
    desc: 'Positioning India\'s next generation for a competitive world — making Indian youth skilled, confident, and employable through experiential learning.',
    img: 'https://i.ibb.co/Tqxm9QKK/image.png',
  },
  {
    title: 'Footpathshala',
    desc: 'Bringing teaching directly to children living on streets and in underserved communities — education without walls, without barriers.',
    img: 'https://i.ibb.co/sJcqs7J0/image.png',
  },
  {
    title: 'Advanced STEM Education',
    desc: 'Targeting underprivileged children with high-quality science, technology, engineering, and mathematics training to build India\'s future innovators.',
    img: 'https://i.ibb.co/tw5mtYz5/image.png',
  },

]

const statsIndia = [
  { number: '750M', label: 'People at bottom-of-pyramid lacking upward mobility' },
  { number: '220M', label: 'Youth lacking formal education or trade skills' },
  { number: '60%', label: 'of India\'s population are young people' },
]

const statsUSA = [
  { number: 'Every 26s', label: 'A student drops out in the United States' },
  { number: '$335B', label: 'Annual US education costs' },
  { number: '20.4%', label: 'Gulf War Era II veteran unemployment (2012)' },
]

const focusAreas = [
  { icon: '💻', title: 'Technology-Enabled Skills', desc: 'Leveraging digital platforms and IIT expertise to deliver scalable skills training.' },
  { icon: '👶', title: 'Youth Workforce Preparation', desc: 'Equipping young people with skills for the modern digital economy.' },
  { icon: '🤝', title: 'Disadvantaged Segments', desc: 'Reaching street children, women, veterans, and rural communities left behind.' },
  { icon: '🌐', title: 'Digital Economy Readiness', desc: 'Preparing India\'s next billion for participation in the global digital workforce.' },
]

export default function EducationCouncil() {
  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <div
          className="page-hero"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('data:image/jpeg;base64,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') center/cover no-repeat`,
          }}
        >
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Education Council
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Equitable and extensive education — bridging the global skills gap through technology for India's 750M+ underserved youth
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
                  style={{ background: 'var(--tint-orange)', color: 'var(--color-secondary)', marginBottom: 'var(--space-md)', display: 'inline-block' }}
                >
                  Our Mission
                </span>
                <h2>Closing the Global Skills Gap</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>
                  Lack of access to affordable education and rapid advancement in technology have created an <strong>under-skilled global workforce</strong>. The WGF Education Council addresses this through technology-enabled solutions targeting youth and disadvantaged populations — because innovation depends on having an intelligent, educated, and highly skilled workforce.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>
                  From IIT Bombay's Spoken Tutorials to street-level Footpathshala, our programs span the full spectrum — reaching 220 million Indian youth lacking formal education or trade skills, and extending support to unemployed veterans in the USA.
                </p>
                <div
                  style={{
                    background: 'var(--tint-orange)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-lg)',
                    margin: 'var(--space-lg) 0',
                    borderLeft: '4px solid var(--color-secondary)',
                  }}
                >
                  <strong style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: 'var(--space-sm)' }}>Our Approach</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    We scale pioneering work from the IIT ecosystem — combining spoken tutorials, digital libraries, and on-ground delivery models to make quality education accessible regardless of cost, geography, or language.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-secondary">Support Education</Link>
                </motion.div>
              </SlideLeft>

              <SlideRight>
                <motion.div
                  style={{ background: 'var(--tint-orange)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(255,165,0,0.15)' }}
                >
                  <motion.div
                    style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img src="data:image/jpeg;base64,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" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-secondary)' }}>India's Education Gap</h3>
                  {statsIndia.map((s, i) => (
                    <motion.div
                      key={s.label}
                      style={{
                        marginBottom: 'var(--space-lg)',
                        paddingBottom: 'var(--space-md)',
                        borderBottom: i < statsIndia.length - 1 ? '1px solid rgba(255,165,0,0.2)' : 'none',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-secondary)' }}>{s.number}</div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginTop: '4px' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Programs</h2>
                <p>Eight initiatives addressing education and skill gaps across India and the USA</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {programs.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div
                    className="card"
                    style={{ padding: 0, overflow: 'hidden' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
                  >
                    <motion.img
                      src={p.img}
                      alt={p.title}
                      style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
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

        {/* US Stats */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>The Challenge — USA</h2>
                <p>WGF also addresses the education and employment crisis facing American veterans and at-risk youth</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {statsUSA.map((s, i) => (
                <StaggerItem key={s.label}>
                  <motion.div
                    className="card"
                    style={{ textAlign: 'center' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: 'var(--space-sm)' }}>{s.number}</div>
                    <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>{s.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Focus Areas</h2>
                <p>Four pillars guiding how we design and deliver education programs</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.1}>
              {focusAreas.map((f) => (
                <StaggerItem key={f.title}>
                  <motion.div
                    className="card"
                    style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ fontSize: '36px', flexShrink: 0 }}>{f.icon}</div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-sm)' }}>{f.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </div>
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
              <h2>Get Involved</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>
                Volunteer as a tutor, donate devices, or fund a program to help India's 220 million under-skilled youth reach their potential
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/donate" className="btn btn-secondary">Donate to Education</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
