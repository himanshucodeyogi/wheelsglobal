import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/Animations'

const allNews = [
  { date: 'Apr 2026', title: 'IIT 2026 Global Conference', excerpt: 'WHEELS Global Foundation participates in the IIT 2026 Global Conference, April 22–25 in Long Beach, CA. Join IIT alumni from around the world.', tag: 'Event', category: 'Events' },
  { date: 'Apr 2026', title: 'Interactive Session with WHEELS Partners LaBike & Eldearly', excerpt: 'Join us for an interactive evening with WHEELS partners LaBike & Eldearly on April 2, 2026, 6–8:30 PM EST at 145 Talmadge Road, Edison, NJ.', tag: 'Event', category: 'Events' },
  { date: 'Apr 2026', title: 'Webinar: Calmness, Clarity & Success in Challenging Times', excerpt: 'Free live webinar on April 11, 2026 at 10 AM EST / 7:30 PM IST. A session on building resilience and clarity for impactful leadership.', tag: 'Webinar', category: 'Webinars' },
  { date: 'Mar 2026', title: 'A Vision Beyond Borders', excerpt: 'Connecting Youth in USA with Bharat\'s Deep Values, Cultures & Impact Experiences — a blog by Sudesh Agrawal, PhD.', tag: 'Blog', category: 'Blogs' },
  { date: 'Mar 2026', title: 'SAI\'s Sustainable Agroforestry Journey in Odisha', excerpt: 'Reviving land and empowering tribal farmers in the Rayagada-Koraput belt through SAI\'s sustainable agroforestry initiatives.', tag: 'Blog', category: 'Blogs' },
  { date: 'Feb 2026', title: 'Launch of Handbook on Water Conservation by RK Malhotra', excerpt: 'WHEELS Global Foundation celebrated the release of a landmark handbook on water conservation at IIT Kharagpur\'s Impact RISE team event.', tag: 'Announcement', category: 'Announcements' },
  { date: 'Feb 2026', title: 'Nitesh Kumar Appointed to Advisory Board of CFMAR', excerpt: 'WGF Board Member Nitesh Kumar joins the CFMAR Advisory Board, strengthening WGF\'s presence in global rural development circles.', tag: 'Announcement', category: 'Announcements' },
  { date: 'Feb 2026', title: 'Powered Eri Silk Initiative in Meghalaya', excerpt: 'Exploring eri silk as a cornerstone of Meghalaya\'s textile heritage — a blog by Riya Vazirani Laheja on WGF\'s livelihood initiatives.', tag: 'Blog', category: 'Blogs' },
  { date: 'Jan 2026', title: 'Essence of WHEELS', excerpt: 'WGF President Ratan Agarwal reflects on WHEELS\' founding in 2006 from the PanIIT movement and the journey of transforming rural India.', tag: 'Blog', category: 'Blogs' },
  { date: 'Oct 2025', title: 'Highlights from Gala 2025', excerpt: 'The WGF Gala held on October 4 at Marriott Marquis, New York was a culmination of tireless work by IIT alumni and philanthropists.', tag: 'Announcement', category: 'Announcements' },
  { date: 'Oct 2025', title: 'At Times Square Gala 2025, WHEELS Expands Vision', excerpt: 'Indian American leaders and philanthropists gathered at the Times Square Gala to expand the vision for rural India\'s transformation.', tag: 'Blog', category: 'Blogs' },
  { date: 'Oct 2025', title: 'WHEELS Gala Event 2025 — New York', excerpt: 'Working towards sustainable development through Rural Transformation. The Gala was held at Marriott Marquis, 1535 Broadway, New York.', tag: 'Event', category: 'Events' },
  { date: 'Sep 2025', title: 'Wellness Program at IIT Ropar', excerpt: 'WHEELS collaborates with IIT Ropar to build resilience amid academic stress through a structured wellness program for students.', tag: 'Announcement', category: 'Announcements' },
  { date: 'Sep 2025', title: 'WHEELS at SPRINT North Edition 2025 – IIT Ropar', excerpt: 'Mr. Kishan Goenka represented WHEELS at SPRINT North Edition 2025, catalyzing innovation and collaboration with IIT Ropar.', tag: 'Announcement', category: 'Announcements' },
  { date: 'Aug 2025', title: 'Interactive Session with WHEELS Partner RuralShores', excerpt: 'An inspiring evening with WHEELS partner RuralShores, showcasing how rural BPO models create sustainable livelihoods in India.', tag: 'Event', category: 'Events' },
]

const categories = ['All', 'Events', 'Announcements', 'Blogs', 'Webinars']
const tagColors = { Event: 'var(--tint-blue)', Announcement: 'var(--tint-orange)', Blog: 'var(--tint-green)', Webinar: 'var(--tint-blue)' }
const tagTextColors = { Event: '#0057B7', Announcement: '#FFA500', Blog: '#28A745', Webinar: '#0057B7' }

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
