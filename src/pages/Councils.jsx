import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/Animations'

const councils = [
  {
    img: 'https://i.ibb.co/N2W0d8HY/image.png',
    title: 'Water Council',
    link: '/water',
    color: 'var(--color-primary)',
    bg: 'var(--tint-blue)',
    desc: 'Driving interventions using appropriate technology at scale through multi-stakeholder partnerships — tackling contaminated water sources containing fluoride, arsenic, and toxic components in rural India.',
    highlights: ['Spring Rejuvenation in Himachal Pradesh', 'Community-level Clean Drinking Water Plants', 'Save India Farmers Initiative', 'Water Body Conservation'],
  },
  {
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&q=80',
    title: 'Health Council',
    link: '/health',
    color: 'var(--color-success)',
    bg: 'var(--tint-green)',
    desc: 'Providing affordable healthcare solutions to India\'s 800M+ rural and underserved population through technology-driven, practical programs bridging government, NGOs, and private sector.',
    highlights: ['Rural TeleMedicine Centers', 'SEVAK Model for Preventive Health', 'Sangini — Affordable Sanitary Pads', 'Mental Health Initiatives for Youth'],
  },
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    title: 'Education Council',
    link: '/education',
    color: 'var(--color-secondary)',
    bg: 'var(--tint-orange)',
    desc: 'Closing the global skills gap through technology-enabled solutions — reaching 220 million Indian youth lacking formal education, scaling IIT Bombay\'s innovations to the last mile.',
    highlights: ['Spoken Tutorials — IIT Bombay', 'NDLI — National Digital Library of India', 'Scholar Planet & KidEx', 'Footpathshala & Advanced STEM'],
  },
  {
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80',
    title: 'Energy Council',
    link: '/energy',
    color: 'var(--color-error)',
    bg: 'var(--tint-red)',
    desc: 'Decarbonizing rural development through micro-grid enterprises, innovative energy storage, and renewable consumer products — led by thought-leaders across four continents.',
    highlights: ['Micro-Grid Driven Rural Enterprises', 'Innovative Energy Storage Solutions', 'Consumer & Small-Enterprise Renewable Products', 'RuKart: Zero Energy Cold Storage'],
  },
  {
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
    title: 'Livelihood Council',
    link: '/livelihood',
    color: 'var(--color-accent)',
    bg: 'var(--tint-teal)',
    desc: 'Enhancing rural economy through co-created enterprises, science & technology innovations, and scalable livelihood models — supporting India\'s $5 trillion economy goal by 2025.',
    highlights: ['Aravalli — Integrated Smart Village', 'SVERI in Pandharpur', 'RuralShores / PeopleShores', 'WHEELS Smart Village Framework'],
  },
]

export default function Councils() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Councils</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Five sectoral councils — Water, Health, Education, Energy, and Livelihood — delivering technology-enabled solutions across rural India</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>WHEELS Council Overview</h2>
                <p>Each council is led by IIT alumni thought-leaders and applies technology to scale impact across six major challenge areas for rural and suburban populations</p>
              </div>
            </FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {councils.map((c, i) => (
                <motion.div
                  key={c.title}
                  className={`council-row ${i % 2 === 0 ? 'council-row-img-first' : 'council-row-text-first'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
                >
                  {i % 2 !== 0 && (
                    <div className="council-row-content" style={{ padding: 'var(--space-lg)' }}>
                      <h2>{c.title}</h2>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 'var(--space-md) 0' }}>{c.desc}</p>
                      <ul style={{ listStyle: 'none', marginBottom: 'var(--space-lg)' }}>
                        {c.highlights.map((h, j) => (
                          <motion.li key={h} style={{ padding: '6px 0', borderBottom: '1px solid var(--color-border)', fontSize: '15px' }}
                            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: j * 0.07 }}>
                            ✓ {h}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link to={c.link} className="btn btn-primary">Explore {c.title}</Link>
                      </motion.div>
                    </div>
                  )}
                  <motion.div
                    className="council-row-media"
                    whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}
                  >
                    <img src={c.img} alt={c.title} />
                    <div className="council-row-media-overlay">
                      <h3>{c.title}</h3>
                    </div>
                  </motion.div>
                  {i % 2 === 0 && (
                    <div className="council-row-content" style={{ padding: 'var(--space-lg)' }}>
                      <h2>{c.title}</h2>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 'var(--space-md) 0' }}>{c.desc}</p>
                      <ul style={{ listStyle: 'none', marginBottom: 'var(--space-lg)' }}>
                        {c.highlights.map((h, j) => (
                          <motion.li key={h} style={{ padding: '6px 0', borderBottom: '1px solid var(--color-border)', fontSize: '15px' }}
                            initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: j * 0.07 }}>
                            ✓ {h}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link to={c.link} className="btn btn-primary">Explore {c.title}</Link>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
