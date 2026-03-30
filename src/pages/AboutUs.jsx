import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'
import './AboutUs.css'

const timeline = [
  { year: '2006', event: 'Pan-IIT "Giving Back" Initiative launched', desc: 'WGF begins as a collective vision among IIT alumni to contribute to rural India.' },
  { year: '2013', event: 'US 501(c)(3) Incorporation', desc: 'Formally registered as a US public charity with EIN 46-2376177.' },
  { year: '2016', event: 'WGF India Registered', desc: 'Indian Section 8 company incorporated (CIN: U74995DL2016NPL303022) with 80G and FCRA registration.' },
  { year: '2020', event: 'Telemedicine Network Launched', desc: 'Health Council deploys rural telemedicine centers across multiple states.' },
  { year: '2023', event: 'Solar Microgrid Milestone', desc: 'Energy Council installs microgrids serving 10,000+ rural households.' },
  { year: '2030', event: 'Target: Transform 20% Rurban India', desc: 'WGF\'s ambitious goal to impact rural-urban communities through technology.' },
]

const values = [
  { img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80', title: 'Alumni Power', desc: 'Harnessing the expertise of Pan-IIT alumni worldwide for social good.' },
  { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80', title: 'Technology-First', desc: 'Using innovative, tech-enabled solutions for sustainable rural development.' },
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80', title: 'Community-Driven', desc: 'Working with and for local communities to build lasting change.' },
  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80', title: 'Transparency', desc: 'Full financial transparency with public 990 filings and annual reports.' },
  { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80', title: 'Sustainability', desc: 'Building solutions that communities can own and maintain long-term.' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80', title: 'Global Impact', desc: 'Think globally, act locally — with a worldwide volunteer network.' },
]

export default function AboutUs() {
  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              About WHEELS Global Foundation
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              Our mission, history, and the IIT alumni vision driving rural transformation
            </motion.p>
          </div>
        </div>

        {/* Mission */}
        <section className="section">
          <div className="container about-mission">
            <SlideLeft>
              <div className="mission-text">
                <span className="badge" style={{ background: 'var(--tint-blue)', color: 'var(--color-primary)' }}>Our Mission</span>
                <h2>Technology-Enabled Solutions for Rural India</h2>
                <p>
                  WHEELS Global Foundation leverages the collective strength of global IIT alumni to provide
                  technology-enabled solutions for rural and underserved communities. Our focus areas include
                  clean water, healthcare, education/skills, sustainable energy, and livelihood enhancement in rural India.
                </p>
                <p>
                  WGF embodies the vision of late President <strong>A.P.J. Abdul Kalam</strong>, mobilizing alumni
                  talent for nation-building. We aim to <strong>transform 20% of Rurban India by 2030</strong>.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/donate" className="btn btn-primary">Support Our Work</Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/councils" className="btn btn-outline">View Councils</Link>
                  </motion.div>
                </div>
              </div>
            </SlideLeft>
            <SlideRight>
              <div className="apj-quote">
                <div className="quote-mark">"</div>
                <p>Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.</p>
                <cite>— Dr. A.P.J. Abdul Kalam</cite>
              </div>
            </SlideRight>
          </div>
        </section>

        {/* Values */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Guiding Principles</h2>
                <p>The core values that drive everything we do at WHEELS Global Foundation</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <motion.div
                    className="card"
                    style={{ textAlign: 'center', padding: 0, overflow: 'hidden' }}
                    whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(0,0,0,0.12)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img src={v.img} alt={v.title}
                      style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
                      whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <h3 style={{ marginBottom: 'var(--space-sm)' }}>{v.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{v.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Journey</h2>
                <p>From a vision to a registered global nonprofit impacting millions</p>
              </div>
            </FadeUp>
            <div className="timeline">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="timeline-content">
                    <div className="timeline-year">{t.year}</div>
                    <h3>{t.event}</h3>
                    <p>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="section section-alt">
          <div className="container">
            <FadeUp>
              <div className="section-title"><h2>Legal & Registration</h2></div>
            </FadeUp>
            <div className="grid-2">
              {[
                {
                  flag: '🇺🇸', title: 'United States',
                  items: [['Status', 'US 501(c)(3) Public Charity'], ['EIN', '46-2376177'], ['Incorporated', '2013'], ['Address', '7306 Hooking Rd, McLean, VA 22101'], ['Donations', 'Tax-deductible under US federal law']],
                },
                {
                  flag: '🇮🇳', title: 'India',
                  items: [['Entity', 'Section 8 Company (Not-for-Profit)'], ['CIN', 'U74995DL2016NPL303022'], ['Incorporated', 'July 2016'], ['Registrar', 'Mumbai ROC'], ['Donations', '80G tax exemption + FCRA registered']],
                },
              ].map((l, i) => (
                <motion.div
                  key={l.title}
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <h3>{l.flag} {l.title}</h3>
                  <ul className="legal-list">
                    {l.items.map(([k, v]) => (
                      <li key={k}><strong>{k}:</strong> {v}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
