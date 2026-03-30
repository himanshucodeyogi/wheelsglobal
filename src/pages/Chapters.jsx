import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const chapters = [
  { region: '🇺🇸 North America', lead: 'Ratan Agarwal / Suresh V. Shenoy', location: 'McLean, VA (HQ)', desc: 'The founding chapter and US headquarters. Leads fundraising, IIT alumni network outreach, and international partnerships.', highlights: ['US HQ in Virginia', 'Pan-IIT alumni network', 'Annual Gala events', 'Donor management'] },
  { region: '🇮🇳 Eastern India', lead: 'Sujata Roy', location: 'Kolkata, India', desc: 'Led by IIT Kharagpur alum Sujata Roy, this chapter focuses on village development in eastern states like West Bengal, Odisha, and Bihar.', highlights: ['West Bengal programs', 'IIT Kharagpur collaboration', 'Community health camps', 'Village electrification'] },
  { region: '🇮🇳 Western India', lead: 'Chapter Leadership', location: 'Mumbai, India', desc: 'The Mumbai-based chapter coordinates WGF India operations and manages FCRA-compliant fundraising for projects across western states.', highlights: ['Mumbai operations', 'FCRA compliance', 'Corporate CSR partnerships', 'Maharashtra village programs'] },
  { region: '🇮🇳 Northern India', lead: 'Chapter Volunteers', location: 'Delhi, India', desc: 'Works on Smart Village initiatives and policy advocacy, leveraging proximity to national government and IIT Delhi alumni.', highlights: ['Smart Villages', 'Policy advocacy', 'IIT Delhi network', 'Punjab & Haryana projects'] },
]

export default function Chapters() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Chapters</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>WHEELS Global Foundation chapters across USA and India driving local impact</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Global Network of Chapters</h2>
                <p>Each chapter is led by dedicated IIT alumni volunteers and focuses on regional programs and community needs</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {chapters.map((c) => (
                <StaggerItem key={c.region}>
                  <motion.div className="card"
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '22px' }}>{c.region}</h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--space-xs)' }}>📍 {c.location}</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}><strong>Lead:</strong> {c.lead}</p>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>{c.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                      {c.highlights.map((h, i) => (
                        <motion.span key={h}
                          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                          style={{ background: 'var(--tint-blue)', color: 'var(--color-primary)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                          {h}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Start or Join a Chapter</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>
                Are you an IIT alumnus wanting to make a difference in your region? Connect with us to start a new chapter or join an existing one.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </motion.div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
