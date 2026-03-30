import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const advisors = [
  { name: 'Amb. Pradeep K. Kapur', role: 'Advisor – Policy & International', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', bio: 'Former Indian Ambassador and diplomat. Leads Smart Village and policy initiatives for WGF, guiding international relations and government partnerships.' },
  { name: 'Dr. Vikas Khurana', role: 'Chair, Board of Advisors', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80', bio: 'Physician specializing in medical diagnostics. Chairs the Board of Advisors and advocates for telehealth and diagnostic solutions for rural health.' },
  { name: 'Gauri Kumar', role: 'Advisor – Education', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', bio: 'Education specialist advising WGF on school education programs and women\'s empowerment initiatives across rural communities.' },
  { name: 'Rajesh Tripathi', role: 'Advisor – Technology & Business', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', bio: 'Business leader in the technology sector. Advises WGF on entrepreneurship programs and technology collaborations with industry.' },
  { name: 'Vinay Karle', role: 'Advisor – Research & Policy', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', bio: 'Principal research scientist at J-PAL/MIT. Advises on poverty-alleviation projects and data-driven policy for WGF programs.' },
  { name: 'Sushil Bhatia', role: 'Advisor – Finance & Fundraising', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', bio: 'IIT alumnus with background in finance and management. Co-leads fundraising committee and advises on financial strategy.' },
  { name: 'Nitesh Kumar', role: 'Board Member', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80', bio: 'Long-time WGF volunteer and IIT alumnus. Active in governance, program implementation, and connecting WGF with the broader IIT community.' },
]

export default function BoardOfAdvisors() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Board of Advisors</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Distinguished professionals from diplomacy, medicine, industry, and academia guiding WGF's strategy</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Our Advisors</h2>
                <p>WGF is guided by a Board of Advisors comprising eminent IIT alumni and professionals</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {advisors.map((a) => (
                <StaggerItem key={a.name}>
                  <motion.div className="card" style={{ textAlign: 'center', padding: 0, overflow: 'hidden' }}
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <motion.img src={a.img} alt={a.name}
                      style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                      whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{a.name}</h3>
                      <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', marginBottom: 'var(--space-md)' }}>{a.role}</p>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>{a.bio}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <h2>Advisory Role</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '17px', margin: 'var(--space-md) 0' }}>
                The Board of Advisors provides strategic guidance to WGF's leadership team, lending their expertise in
                diplomacy, healthcare, education, research, and business to ensure programs achieve maximum impact.
                Advisors participate in annual strategy sessions and provide ongoing mentorship to council leads.
              </p>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
