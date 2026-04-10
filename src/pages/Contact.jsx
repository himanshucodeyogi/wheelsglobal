import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlideLeft, SlideRight, FadeUp, PageTransition } from '../components/Animations'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Contact Us</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Get in touch with WHEELS Global Foundation</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container grid-2-equal">
            <SlideLeft>
              <motion.div
                style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-xl)' }}
                whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                  alt="Contact us"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
              </motion.div>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Get In Touch</h2>
              {[
                { icon: '📍', label: 'Address', value: '7306 Hooking Rd, McLean, VA 22101, USA' },
                { icon: '📧', label: 'Email', value: 'info@WHEELSGlobal.org', href: 'mailto:info@WHEELSGlobal.org' },
                { icon: '🌐', label: 'Website', value: 'wheelsglobal.org', href: 'https://wheelsglobal.org' },
              ].map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{ display: 'flex', gap: 'var(--space-lg)', padding: 'var(--space-lg) 0', borderBottom: '1px solid var(--color-border)' }}>
                  <motion.div
                    style={{ width: '48px', height: '48px', background: 'var(--tint-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}
                    whileHover={{ scale: 1.15, background: '#0057B7' }} transition={{ duration: 0.2 }}>
                    {c.icon}
                  </motion.div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>{c.label}</p>
                    {c.href ? <a href={c.href} target="_blank" rel="noreferrer" style={{ color: 'var(--color-link)' }}>{c.value}</a> : <p style={{ color: 'var(--color-text-secondary)' }}>{c.value}</p>}
                  </div>
                </motion.div>
              ))}

              <div style={{ marginTop: 'var(--space-xl)' }}>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>Connect on Social Media</h3>
                <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  {[{ label: 'LinkedIn', icon: '💼' }, { label: 'Twitter/X', icon: '🐦' }, { label: 'Facebook', icon: '📘' }].map((s) => (
                    <motion.a key={s.label} href="#" onClick={e => e.preventDefault()}
                      whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
                      {s.icon} {s.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Send a Message</h2>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ background: 'var(--tint-green)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', textAlign: 'center' }}>
                    <motion.div style={{ fontSize: '48px', marginBottom: '12px' }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                      ✅
                    </motion.div>
                    <h3>Message Sent!</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px' }}>We'll get back to you within 2-3 business days.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                    {[
                      { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                      { label: 'Organization (Optional)', type: 'text', placeholder: 'IIT / Company / NGO' },
                      { label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                    ].map((f, i) => (
                      <motion.div key={f.label}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-xs)' }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          required={!f.label.includes('Optional')}
                          style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '16px', transition: 'border-color 0.2s' }}
                          onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                          onBlur={e => e.target.style.borderColor = '#ddd'} />
                      </motion.div>
                    ))}
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-xs)' }}>Message</label>
                      <textarea rows={5} required placeholder="Tell us about your query..."
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '16px', resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={e => e.target.style.borderColor = '#ddd'} />
                    </div>
                    <motion.button type="submit" className="btn btn-primary"
                      style={{ fontSize: '17px', padding: '14px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(0,87,183,0.35)' }}
                      whileTap={{ scale: 0.98 }}>
                      Send Message →
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </SlideRight>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
