import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, SlideLeft, SlideRight, PageTransition } from '../components/Animations'

const filings = [
  { year: '2019', title: '2019 IRS Form 990 – Detailed Tax Return', desc: 'Annual tax filing for fiscal year 2019. Includes revenue, expenses, and program service accomplishments.' },
  { year: '2018', title: '2018 IRS Form 990 – Detailed Tax Return', desc: 'Annual tax filing for fiscal year 2018.' },
  { year: '2017', title: '2017 IRS Form 990 – Detailed Tax Return', desc: 'Annual tax filing for fiscal year 2017.' },
  { year: '2016', title: '2016 IRS Form 990 – Detailed Tax Return', desc: 'Annual tax filing for fiscal year 2016. First year of WGF India incorporation.' },
]

export default function FinancialRecords() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Financial Transparency</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>WHEELS Global Foundation's financial records and IRS filings for public accountability</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', marginBottom: 'var(--space-xxl)' }}>
              <SlideLeft>
                <motion.div style={{ background: 'var(--tint-blue)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)' }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,87,183,0.15)' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>🇺🇸 US Entity</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                    <strong>Name:</strong> WHEELS Global Foundation<br />
                    <strong>EIN:</strong> 46-2376177<br />
                    <strong>Status:</strong> US 501(c)(3) Public Charity<br />
                    <strong>Since:</strong> 2013
                  </p>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-blue)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)' }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,87,183,0.15)' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>🇮🇳 India Entity</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                    <strong>Name:</strong> WHEELS Global Foundation India<br />
                    <strong>CIN:</strong> U74995DL2016NPL303022<br />
                    <strong>Status:</strong> Section 8 + 80G + FCRA<br />
                    <strong>Since:</strong> 2016
                  </p>
                </motion.div>
              </SlideRight>
            </div>

            <FadeUp>
              <div className="section-title">
                <h2>IRS Form 990 Filings</h2>
                <p>All filings are publicly available through IRS Nonprofit Explorer (EIN: 46-2376177)</p>
              </div>
            </FadeUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {filings.map((f, i) => (
                <motion.div key={f.year} className="card"
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4, boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
                    <motion.div
                      style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '8px 16px', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}
                      whileHover={{ scale: 1.05 }}>
                      {f.year}
                    </motion.div>
                    <div>
                      <h3 style={{ fontSize: '17px', marginBottom: '4px' }}>{f.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{f.desc}</p>
                    </div>
                  </div>
                  <motion.div style={{ flexShrink: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href="https://apps.irs.gov/app/eos/" target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 20px' }}>
                      📄 View PDF
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <FadeUp delay={0.2}>
              <motion.div
                style={{ background: 'var(--tint-orange)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', marginTop: 'var(--space-xxl)', textAlign: 'center' }}
                whileHover={{ boxShadow: '0 8px 24px rgba(255,165,0,0.2)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-sm)' }}>🔍 Access All Public Filings</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: 'var(--space-md)' }}>
                  All WGF Form 990 filings are publicly accessible through the IRS Nonprofit Explorer by searching EIN 46-2376177.
                </p>
                <motion.a href="https://apps.irs.gov/app/eos/" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  Visit IRS Nonprofit Explorer
                </motion.a>
              </motion.div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
