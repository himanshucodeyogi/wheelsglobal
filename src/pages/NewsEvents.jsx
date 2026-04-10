import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/Animations'

const allNews = [
  {
    date: 'Apr 2026',
    title: 'From Smartphones to Software Careers: Unlocking India\'s Hidden Talent',
    excerpt: 'In underserved India, talent is not the constraint – Access is. Millions of students in government schools complete their education without meaningful digital exposure.',
    tag: 'Blog', category: 'Blogs',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/04/CodeYogi-1.jpg',
    link: 'https://wheelsglobal.org/from-smartphones-to-software-careers-unlocking-indias-hidden-talent/',
  },
  {
    date: 'Apr 2026',
    title: 'IIT 2026 Global Conference',
    excerpt: 'WHEELS Global Foundation participates in the IIT 2026 Global Conference, April 22–25 in Long Beach, CA. Join IIT alumni from around the world.',
    tag: 'Event', category: 'Events',
    img: null,
    link: 'https://www.iit2026.org/about',
  },
  {
    date: 'Apr 2026',
    title: 'Interactive Session with WHEELS Partners LaBike & Eldearly',
    excerpt: 'WHEELS Global Foundation hosts an interactive session featuring two remarkable social entrepreneurs transforming lives through affordable healthcare in rural India.',
    tag: 'Event', category: 'Events',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/03/Healthcare-WGF-Interactive-Session-1.jpg',
    link: 'https://wheelsglobal.org/interactive-session-with-wheels-partner-labike-eldearly/',
  },
  {
    date: 'Apr 2026',
    title: 'Webinar: Calmness, Clarity & Success in Challenging Times',
    excerpt: 'Free live webinar on April 11, 2026 exploring how professionals can navigate life\'s turbulence using ancient wisdom to achieve sustained professional growth.',
    tag: 'Webinar', category: 'Webinars',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/03/April-Webinar-Flyer.png',
    link: 'https://wheelsglobal.org/webinar-calmness-clarity-success-in-challenging-times/',
  },
  {
    date: 'Mar 2026',
    title: 'A Vision Beyond Borders',
    excerpt: 'Connecting Youth in USA with Bharat\'s Deep Values, Cultures & Impact Experiences — a blog by Sudesh Agrawal, PhD.',
    tag: 'Blog', category: 'Blogs',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/03/Sudesh-Agrawal.jpg',
    link: 'https://wheelsglobal.org/a-vision-beyond-borders/',
  },
  {
    date: 'Mar 2026',
    title: 'SAI\'s Sustainable Agroforestry Journey in Odisha',
    excerpt: 'Reviving over 1500 hectares of degraded land and empowering nearly 2,000 tribal farmers in the Rayagada-Koraput belt through sustainable agroforestry.',
    tag: 'Blog', category: 'Blogs',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/03/Sai-Agro-Pic2.png',
    link: 'https://wheelsglobal.org/sais-sustainable-agroforestry-journey-in-odisha/',
  },
  {
    date: 'Feb 2026',
    title: 'Launch of Handbook on Water Conservation by RK Malhotra',
    excerpt: 'WHEELS Global Foundation celebrated the release of a landmark handbook on water conservation at IIT Kharagpur\'s Impact RISE team event.',
    tag: 'Announcement', category: 'Announcements',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2026/02/A-Handbook-on-Waterbody-Conservation.jpg',
    link: 'https://wheelsglobal.org/honoring-a-legacy-launch-of-handbook-on-water-conservation-by-rk-malhotra/',
  },
  {
    date: 'Feb 2026',
    title: 'Nitesh Kumar Appointed to Advisory Board of CFMAR',
    excerpt: 'WGF Board Member Nitesh Kumar joins the Center for Financial Mathematics and Actuarial Research at UC Santa Barbara, strengthening WGF\'s global presence.',
    tag: 'Announcement', category: 'Announcements',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/09/Nitesh-Kumar.jpg',
    link: 'https://wheelsglobal.org/nitesh-kumar-appointed-on-the-advisory-board-of-cfmar/',
  },
  {
    date: 'Feb 2026',
    title: 'Powered Eri Silk Initiative in Meghalaya',
    excerpt: 'Eri silk has long been a cornerstone of Meghalaya\'s textile heritage. WGF\'s livelihood initiative explores its potential for sustainable, scalable production.',
    tag: 'Blog', category: 'Blogs',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2024/09/Riya-Vazirani.jpg',
    link: 'https://wheelsglobal.org/powered-eri-silk-initiative-in-meghalaya/',
  },
  {
    date: 'Oct 2025',
    title: 'Highlights from Gala 2025',
    excerpt: 'The WGF Gala held on October 4 at Marriott Marquis, New York was a culmination of tireless work by IIT alumni and philanthropists, achieving full capacity attendance.',
    tag: 'Announcement', category: 'Announcements',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/10/Gala2025-1.jpg',
    link: 'https://wheelsglobal.org/highlights-from-the-gala2025-event/',
  },
  {
    date: 'Oct 2025',
    title: 'At Times Square Gala 2025, WHEELS Expands Vision for Rural India',
    excerpt: 'Indian American leaders and philanthropists gathered at the Marriott Marquis, Times Square to expand the vision for rural India\'s transformation through innovation.',
    tag: 'Blog', category: 'Blogs',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2025/10/Gala2025-1.jpg',
    link: 'https://wheelsglobal.org/at-times-square-gala2025-wheels-expands-vision-for-rural-india/',
  },
  {
    date: 'Oct 2025',
    title: 'WHEELS Gala Event 2025 — New York City',
    excerpt: 'Working towards sustainable development through Rural Transformation. The Gala was held at Marriott Marquis, 1535 Broadway, New York.',
    tag: 'Event', category: 'Events',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2025/06/Gala-2025-poster-3.jpeg',
    link: 'https://wheelsglobal.org/gala2025/',
  },
  {
    date: 'Sep 2025',
    title: 'Wellness Program at IIT Ropar',
    excerpt: 'WHEELS partners with IIT Ropar to build resilience amid academic stress through evidence-based meditation practices rooted in Indian Knowledge Systems.',
    tag: 'Announcement', category: 'Announcements',
    img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2025/09/Wellness-Program-IIT-Ropar.jpg',
    link: 'https://wheelsglobal.org/wellness-program-at-iit-ropar/',
  },
]

const categories = ['All', 'Events', 'Announcements', 'Blogs', 'Webinars']
const tagColors = { Event: 'var(--tint-blue)', Announcement: 'var(--tint-orange)', Blog: 'var(--tint-green)', Webinar: 'var(--tint-blue)' }
const tagTextColors = { Event: '#0057B7', Announcement: '#FFA500', Blog: '#28A745', Webinar: '#0057B7' }
const tagBgFallback = { Event: '#dbeafe', Announcement: '#fef3c7', Blog: '#d1fae5', Webinar: '#dbeafe' }

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

            {/* News Grid */}
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
                    style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Image */}
                    <div style={{ width: '100%', height: '190px', overflow: 'hidden', background: tagBgFallback[n.tag] || '#e8f0fe', flexShrink: 0 }}>
                      {n.img ? (
                        <img
                          src={n.img}
                          alt={n.title}
                          onError={(e) => { e.target.style.display = 'none' }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src="/image-removebg-preview.png" alt="WHEELS Global Foundation" style={{ width: '120px', opacity: 0.4 }} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                        <span style={{ background: tagColors[n.tag] || 'var(--tint-blue)', color: tagTextColors[n.tag] || 'var(--color-primary)', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                          {n.tag}
                        </span>
                        <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{n.date}</span>
                      </div>
                      <h3 style={{ fontSize: '17px', margin: 'var(--space-sm) 0', lineHeight: 1.4 }}>{n.title}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: 'var(--space-md)', flex: 1 }}>{n.excerpt}</p>
                      <a
                        href={n.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
                      >
                        Read More →
                      </a>
                    </div>
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
