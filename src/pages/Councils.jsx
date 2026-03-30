import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/Animations'

const councils = [
  { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', title: 'Water Council', link: '/water', color: '#0057B7', bg: 'var(--tint-blue)', desc: 'Bringing safe drinking water and sanitation solutions to rural communities through filtration systems, rainwater harvesting, and water portal apps.', highlights: ['Water filtration systems', 'Rainwater harvesting', 'Sanitation infrastructure', 'Government partnerships'] },
  { img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&q=80', title: 'Health Council', link: '/health', color: '#28A745', bg: 'var(--tint-green)', desc: 'Ensuring affordable healthcare for 800M+ rural Indians through telemedicine networks, mobile clinics, and preventive health camps.', highlights: ['Telemedicine centers', 'Mobile health clinics', 'Preventive health camps', 'Community health workers'] },
  { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', title: 'Education Council', link: '/education', color: '#FFA500', bg: 'var(--tint-orange)', desc: 'Empowering rural youth through technology-enabled skills training, digital literacy programs, and vocational education.', highlights: ['Digital literacy programs', 'Vocational training', 'EdTech tools for villages', 'Rural school support'] },
  { img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80', title: 'Energy Council', link: '/energy', color: '#DC3545', bg: 'var(--tint-red)', desc: 'Promoting renewable energy through solar microgrid installations, clean cookstoves, and sustainable energy solutions for villages.', highlights: ['Solar microgrids', 'Clean cookstoves', 'Energy access programs', 'Renewable solutions'] },
  { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80', title: 'Livelihood Council', link: '/livelihood', color: '#008080', bg: 'var(--tint-teal)', desc: 'Building sustainable livelihoods through agriculture technology, entrepreneurship support, and women\'s economic empowerment programs.', highlights: ['Agriculture tech', 'Entrepreneurship support', 'Women empowerment', 'Vocational programs'] },
]

export default function Councils() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Councils</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Five sectoral councils working across critical areas of rural development</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>WHEELS Council Overview</h2>
                <p>Each council is led by expert IIT alumni and focuses on a specific area of rural transformation</p>
              </div>
            </FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {councils.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
                  style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr', gap: 'var(--space-xl)', background: 'var(--color-card)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', boxShadow: 'var(--elevation-1)', border: '1px solid var(--color-border)' }}
                >
                  {i % 2 !== 0 && (
                    <div style={{ padding: 'var(--space-lg)' }}>
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
                    style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', minHeight: '220px' }}
                    whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}
                  >
                    <img src={c.img} alt={c.title}
                      style={{ width: '100%', height: '100%', minHeight: '220px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.55))', padding: 'var(--space-md)' }}>
                      <h3 style={{ color: '#fff', margin: 0 }}>{c.title}</h3>
                    </div>
                  </motion.div>
                  {i % 2 === 0 && (
                    <div style={{ padding: 'var(--space-lg)' }}>
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
