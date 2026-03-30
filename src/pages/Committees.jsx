import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const committees = [
  { img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80', title: 'Marketing & Outreach', color: '#0057B7', leads: ['Ashish Kumar Deo', 'Anurag Srivastava'], desc: 'Handles WGF communications, branding, and alumni engagement. Promotes WGF initiatives across digital and traditional channels.', responsibilities: ['Brand strategy', 'Alumni communications', 'Social media', 'Event promotion', 'PR & media'] },
  { img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=200&q=80', title: 'Fundraising', color: '#28A745', leads: ['Himanshu Verma', 'Sushil Bhatia'], desc: 'Manages donor relations, fundraising campaigns, and grant applications to ensure resources for all WGF programs.', responsibilities: ['Donor relations', 'Campaign management', 'Grant writing', 'Gala events', 'Corporate partnerships'] },
  { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80', title: 'Project Sourcing', color: '#FFA500', leads: ['Ratan Agarwal', 'Inderjit Chatterjee'], desc: 'Identifies, evaluates, and vets rural projects for implementation by WGF councils. Connects IIT expertise to community needs.', responsibilities: ['Project identification', 'Feasibility analysis', 'Partner NGO vetting', 'Impact assessment', 'Implementation support'] },
  { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80', title: 'IT & Technology', color: '#008080', leads: ['Technology Volunteers'], desc: 'Supports WGF\'s digital infrastructure, website, data management, and technology deployment for council projects.', responsibilities: ['Website management', 'Data systems', 'Digital tools', 'Tech project support', 'Cybersecurity'] },
  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80', title: 'Finance & Audit', color: '#DC3545', leads: ['Finance Committee'], desc: 'Oversees financial management, budget planning, and audit compliance for both US and India entities.', responsibilities: ['Budget planning', 'Financial reporting', 'IRS compliance', 'Audit coordination', 'Donor fund tracking'] },
]

export default function Committees() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Committees</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Horizontal committees that support and enable all WGF councils and programs</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>How Committees Work</h2>
                <p>While Councils focus on specific program areas, Committees provide cross-cutting support functions that enable all programs to succeed</p>
              </div>
            </FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {committees.map((c, i) => (
                <motion.div key={c.title} className="card"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.1)', y: -3 }}
                  style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-xl)', alignItems: 'start' }}>
                  <motion.div
                    style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', minWidth: '160px', width: '160px', position: 'relative' }}
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <img src={c.img} alt={c.title}
                      style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ background: c.color, padding: '6px 8px', textAlign: 'center' }}>
                      <h3 style={{ color: '#fff', fontSize: '13px', margin: 0 }}>{c.title}</h3>
                    </div>
                  </motion.div>
                  <div>
                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{c.title} Committee</h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', marginBottom: 'var(--space-sm)' }}>Leads: {c.leads.join(' & ')}</p>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>{c.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                      {c.responsibilities.map((r, j) => (
                        <motion.span key={r}
                          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }} transition={{ delay: j * 0.05 }}
                          whileHover={{ scale: 1.08 }}
                          style={{ background: c.color + '15', color: c.color, padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'default' }}>
                          {r}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Join a Committee</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>
                WGF committees welcome volunteers with diverse skills — from marketing to finance to technology
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn btn-primary">Get Involved</Link>
              </motion.div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
