import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/Animations'

const allNews = [
  { date: 'Mar 2025', title: 'WGF Annual Gala 2025', excerpt: 'Join us at the annual gala celebrating a decade of rural transformation through IIT alumni collaboration.', tag: 'Event', category: 'Events' },
  { date: 'Feb 2025', title: 'Solar Microgrid Launch in Rajasthan', excerpt: 'Energy Council deploys 50kW solar microgrid providing clean power to 3 villages, benefiting 500+ families.', tag: 'Project', category: 'Projects' },
  { date: 'Jan 2025', title: 'Telemedicine Centers Reach 100,000 Patients', excerpt: 'Health Council milestone: Our rural telemedicine network has served over 100,000 patients since inception.', tag: 'Milestone', category: 'Milestones' },
  { date: 'Dec 2024', title: 'Digital Literacy Program Graduation', excerpt: '500 rural youth graduate from WGF Education Council\'s digital literacy program in Uttar Pradesh.', tag: 'Event', category: 'Events' },
  { date: 'Nov 2024', title: 'WGF Newsletter — Autumn 2024', excerpt: 'Read the latest updates on our Water, Health, and Livelihood projects from across India.', tag: 'Newsletter', category: 'Newsletters' },
  { date: 'Oct 2024', title: 'Smart Village Initiative Expansion', excerpt: 'Livelihood Council expands Smart Village framework to 10 new villages in Maharashtra and Rajasthan.', tag: 'Project', category: 'Projects' },
  { date: 'Sep 2024', title: 'IIT Alumni Fundraising Webinar', excerpt: 'Over 300 IIT alumni joined our virtual fundraising webinar, raising $50,000 for rural health programs.', tag: 'Event', category: 'Events' },
  { date: 'Aug 2024', title: 'WGF India FCRA Renewal Confirmed', excerpt: 'WGF India\'s FCRA registration renewed, enabling continued international fundraising for Indian programs.', tag: 'Governance', category: 'Governance' },
  { date: 'Jul 2024', title: '5,000 Clean Cookstoves Distributed', excerpt: 'Energy Council completes distribution of 5,000 clean cookstoves, reducing indoor air pollution for rural families.', tag: 'Milestone', category: 'Milestones' },
]

const categories = ['All', 'Events', 'Projects', 'Milestones', 'Newsletters', 'Governance']
const tagColors = { Event: 'var(--tint-blue)', Project: 'var(--tint-green)', Milestone: 'var(--tint-orange)', Newsletter: 'var(--tint-blue)', Governance: 'var(--tint-red)' }
const tagTextColors = { Event: '#0057B7', Project: '#28A745', Milestone: '#FFA500', Newsletter: '#0057B7', Governance: '#DC3545' }

export default function NewsEvents() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? allNews : allNews.filter(n => n.category === filter)

  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>News & Events</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Latest updates, milestones, and upcoming events from WHEELS Global Foundation</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            {/* Filter buttons */}
            <FadeUp>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)', justifyContent: 'center' }}>
                {categories.map(c => (
                  <motion.button
                    key={c}
                    onClick={() => setFilter(c)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer',
                      background: filter === c ? 'var(--color-primary)' : 'var(--color-border)',
                      color: filter === c ? '#fff' : 'var(--color-text)',
                      fontWeight: 600, fontSize: '14px',
                    }}
                  >{c}</motion.button>
                ))}
              </div>
            </FadeUp>

            {/* News Grid with AnimatePresence for filter transitions */}
            <motion.div className="grid-3" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((n, i) => (
                  <motion.div
                    key={n.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
                    className="card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                      <span style={{ background: tagColors[n.tag] || 'var(--tint-blue)', color: tagTextColors[n.tag] || 'var(--color-primary)', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                        {n.tag}
                      </span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{n.date}</span>
                    </div>
                    <h3 style={{ fontSize: '18px', margin: 'var(--space-sm) 0' }}>{n.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>{n.excerpt}</p>
                    <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>Read More →</a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section section-alt">
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <h2>Subscribe to Our Newsletter</h2>
              <p style={{ color: 'var(--color-text-secondary)', margin: 'var(--space-md) 0 var(--space-xl)' }}>
                Stay updated with WGF's programs, events, and impact stories. We send quarterly newsletters.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!') }}
                style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
                <motion.input
                  type="email" placeholder="Your email address" required
                  whileFocus={{ scale: 1.02, borderColor: 'var(--color-primary)' }}
                  style={{ flex: 1, minWidth: '240px', padding: '12px 16px', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '16px', outline: 'none' }}
                />
                <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Subscribe
                </motion.button>
              </form>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
