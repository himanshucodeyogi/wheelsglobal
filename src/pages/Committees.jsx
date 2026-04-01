import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const committees = [
  {
    title: 'Marketing & Outreach',
    color: '#0057B7',
    leads: [
      { name: 'Ashish Kumar Deo', bio: 'Over 30 years of marketing and commercial experience at Procter & Gamble, Diageo, and Fairtrade Foundation. Currently focused on the nutrition sector.' },
      { name: 'Anurag Srivastava', bio: 'Data science and AI expert with background at HSBC, American Express, and PayU. Dual degree from IIT Kanpur.' },
    ],
    desc: 'Handles WGF communications, branding, and alumni engagement. Promotes WGF initiatives across digital and traditional channels.',
    responsibilities: ['Brand strategy', 'Alumni communications', 'Social media', 'Event promotion', 'PR & media'],
  },
  {
    title: 'Fund-raising',
    color: '#28A745',
    leads: [
      { name: 'Himanshu Verma', bio: 'Vice-President & Secretary of WGF. Specializes in AI, big data, and analytics with 20+ years across healthcare, federal, and financial sectors.' },
      { name: 'Sushil Bhatia', bio: 'Water Council Co-chairman. B.Tech from IIT Bombay (1966) and Ph.D. from Carnegie-Mellon University (1972). Advisor on finance strategy.' },
    ],
    desc: 'Manages donor relations, fundraising campaigns, and grant applications to ensure resources for all WGF programs.',
    responsibilities: ['Donor relations', 'Campaign management', 'Grant writing', 'Gala events', 'Corporate partnerships'],
  },
  {
    title: 'Project Sourcing, Selection & Support',
    color: '#FFA500',
    leads: [
      { name: 'Ratan Agarwal', bio: 'Nearly three decades building startups and leading Fortune 500 companies like Cisco. Co-founded CARBON Group Global with focus on sustainability.' },
      { name: 'Inderjit Chatterjee', bio: 'Energy Council Chair. Over 45 years in strategy, manufacturing, and engineering. IIT Kharagpur alumnus (1970), championing rural development.' },
    ],
    desc: 'Identifies, evaluates, and vets rural projects for implementation by WGF councils. Connects IIT expertise to community needs.',
    responsibilities: ['Project identification', 'Feasibility analysis', 'Partner NGO vetting', 'Impact assessment', 'Implementation support'],
  },
  {
    title: 'Business Operations',
    color: '#008080',
    leads: [
      { name: 'Sushil Shenoy', bio: 'Leads business operations and administrative oversight for WGF, ensuring seamless coordination across councils and chapters.' },
      { name: 'Pradip Nadkarni', bio: 'IIT Bombay alumnus. Founder of Paradigm Inc. consulting firm. Serves as Secretary on the WGF India board handling legal and statutory requirements.' },
    ],
    desc: 'Oversees day-to-day operations, legal compliance, and administrative functions for both the US and India entities of WGF.',
    responsibilities: ['Operations management', 'Legal compliance', 'WGF India board', 'Statutory requirements', 'Inter-council coordination'],
  },
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
                  whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.1)', y: -3 }}>
                  <div style={{ borderLeft: `4px solid ${c.color}`, paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{c.title} Committee</h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>{c.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
                    {c.leads.map((lead) => (
                      <div key={lead.name} style={{ background: 'var(--color-background)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', border: '1px solid var(--color-border)' }}>
                        <p style={{ fontWeight: 700, fontSize: '15px', color: c.color, marginBottom: '6px' }}>{lead.name}</p>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', lineHeight: 1.6 }}>{lead.bio}</p>
                      </div>
                    ))}
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
