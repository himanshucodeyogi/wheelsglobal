import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, PageTransition } from '../components/Animations'

const amounts = [25, 50, 100, 250, 500, 1000]
const councils = ['General Fund', 'Water Council', 'Health Council', 'Education Council', 'Energy Council', 'Livelihood Council']

export default function Donate() {
  const [amount, setAmount] = useState(100)
  const [custom, setCustom] = useState('')
  const [council, setCouncil] = useState('General Fund')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <div>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="thanks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="page-hero" style={{ background: 'linear-gradient(135deg, #28A745, #1a6e2e)' }}>
                <div className="container">
                  <motion.div style={{ fontSize: '64px', marginBottom: '16px' }}
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
                    🙏
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Thank You!</motion.h1>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Your generosity helps transform rural India through technology</motion.p>
                </div>
              </div>
              <section className="section">
                <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    style={{ background: 'var(--tint-green)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xxl)' }}>
                    <h2>Donation Received</h2>
                    <p style={{ color: 'var(--color-text-secondary)', margin: 'var(--space-md) 0', fontSize: '17px' }}>
                      Your donation of <strong>${custom || amount}</strong> to <strong>{council}</strong> has been recorded.
                      A tax receipt will be emailed to you. Donations are tax-deductible under US 501(c)(3) law.
                    </p>
                    <motion.a href="/" className="btn btn-primary" whileHover={{ scale: 1.05 }}>Back to Home</motion.a>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="page-hero">
                <div className="container">
                  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Support Our Work</motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Your donation brings clean water, healthcare, and education to millions in rural India</motion.p>
                </div>
              </div>

              <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }}>
                  <SlideLeft>
                    <h2 style={{ marginBottom: 'var(--space-xl)' }}>Make a Donation</h2>
                    <form onSubmit={handleSubmit}>
                      <div style={{ marginBottom: 'var(--space-lg)' }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Select Amount (USD)</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                          {amounts.map((a) => (
                            <motion.button
                              key={a} type="button"
                              onClick={() => { setAmount(a); setCustom('') }}
                              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                              style={{
                                padding: '12px', border: `2px solid ${!custom && amount === a ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                background: !custom && amount === a ? 'var(--tint-blue)' : 'var(--color-card)',
                                color: !custom && amount === a ? 'var(--color-primary)' : 'var(--color-text)',
                                borderRadius: 'var(--radius-sm)', fontWeight: 700, cursor: 'pointer', fontSize: '16px',
                              }}
                            >${a}</motion.button>
                          ))}
                        </div>
                        <input
                          type="number" placeholder="Custom amount"
                          value={custom} onChange={e => { setCustom(e.target.value); setAmount('') }}
                          style={{ width: '100%', padding: '12px 16px', border: `2px solid ${custom ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-sm)', fontSize: '16px', transition: 'border-color 0.2s', background: 'var(--color-card)', color: 'var(--color-text)' }}
                        />
                      </div>

                      <div style={{ marginBottom: 'var(--space-lg)' }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Designate to Council</label>
                        <select value={council} onChange={e => setCouncil(e.target.value)}
                          style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '16px', background: 'var(--color-card)', color: 'var(--color-text)' }}>
                          {councils.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>

                      {['Full Name', 'Email Address'].map((label, i) => (
                        <div key={label} style={{ marginBottom: 'var(--space-lg)' }}>
                          <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>{label}</label>
                          <input required type={i === 1 ? 'email' : 'text'} placeholder={i === 1 ? 'your@email.com' : 'Your full name'}
                            style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '16px', background: 'var(--color-card)', color: 'var(--color-text)' }} />
                        </div>
                      ))}

                      <motion.button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '18px', padding: '16px' }}
                        whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(0,87,183,0.35)' }}
                        whileTap={{ scale: 0.98 }}>
                        Donate ${custom || amount} Now →
                      </motion.button>
                      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '13px', marginTop: '12px' }}>
                        🔒 Secure donation | Tax-deductible under US 501(c)(3)
                      </p>
                    </form>
                  </SlideLeft>

                  <SlideRight>
                    <motion.div style={{ background: 'var(--tint-blue)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
                      <h3 style={{ marginBottom: 'var(--space-md)' }}>Your Impact</h3>
                      {[
                        { a: '$25', t: 'Provides clean water for a family for 1 month' },
                        { a: '$50', t: 'Funds one telemedicine consultation for 10 patients' },
                        { a: '$100', t: 'Supports a student in digital literacy for 3 months' },
                        { a: '$500', t: 'Helps install a solar street light in a village' },
                        { a: '$1000', t: 'Funds a rural health camp serving 200+ people' },
                      ].map((item, i) => (
                        <motion.div key={item.a}
                          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                          style={{ display: 'flex', gap: 'var(--space-md)', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                          <span style={{ fontWeight: 700, color: 'var(--color-primary)', minWidth: '60px' }}>{item.a}</span>
                          <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{item.t}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <div style={{ background: 'var(--tint-green)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)' }}>
                      <h4 style={{ marginBottom: 'var(--space-sm)' }}>Tax Deductibility</h4>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        🇺🇸 <strong>US donors:</strong> Fully tax-deductible under 501(c)(3)<br />
                        🇮🇳 <strong>India donors:</strong> Eligible under Section 80G<br />
                        🌍 <strong>International:</strong> Contact us for local tax guidance
                      </p>
                    </div>
                  </SlideRight>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
