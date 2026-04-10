import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, PageTransition } from '../components/Animations'

const ambassadors = [
  { name: 'YagyaDatt Sharma', campus: 'NIT Allahabad', city: 'Germantown, MD', focus: 'Technology & Social Reform', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2022/07/YagyaDatt-Sharma.jpeg', bio: 'Director of Technology Services for WGF. Sr. Principal Engineer at Hughes Systique; established WGF\'s technical infrastructure including website, donation systems, and databases.' },
  { name: 'Ambuj Agarwal', campus: 'IIT Kharagpur', city: 'India', focus: 'Child Education & Rural Uplift', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/06/Ambuj-Agarwal.jpg', bio: 'Works at Impact Analytics with focus on AI/ML for retail. Deeply involved in social initiatives for child education and rural community development.' },
  { name: 'Abhishek Rishabh', campus: 'IIT Kanpur', city: 'USA', focus: 'Marketing Research & Social Impact', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/06/Abhishek-Rishabh.jpg', bio: 'Golub Capital Social Impact Fellow at Kellogg School of Management. Researches charitable giving, pricing, and social impact strategies.' },
  { name: 'Priyanka Sahoo', campus: 'IIT Kharagpur', city: 'India', focus: 'Healthcare Policy & SDG Impact', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/06/Priyanka-Sahoo.jpg', bio: 'Working on UNDP SDG Impact initiatives. Focuses on bridging white spaces in healthcare through policy solutions and sustainable development.' },
  { name: 'Shrey Goyal', campus: 'IIT Kharagpur', city: 'Delhi / Paris', focus: 'Climate Action & Sustainability', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/06/Shrey-Goyal.jpg', bio: 'Co-founder of Green Spider. Forbes India 30-Under-30 honoree. Leads WGF\'s Sustainable Growth Initiative for climate action and rural development.' },
  { name: 'Apurvi Bhartia', campus: 'University of Southern California', city: 'San Francisco, USA', focus: 'Economic Equity & Data Analytics', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2023/06/Apurva-Bhartia.jpeg', bio: 'Research Associate in Economic Consulting. Advocates for creating an equitable society through data-driven insights and analytics.' },
  { name: 'Sathvik Batte', campus: 'IIT Madras', city: 'India', focus: 'Clean Energy & Sustainability', img: 'https://wsrv.nl/?url=wheelsglobal.org/wp-content/uploads/2025/06/Satvik-WGF-Ambassador.jpg', bio: 'CEO of EQOedge. Experienced in finance, marketing, and clean energy sector expansion for sustainable rural communities.' },
]

export default function Ambassadors() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>WHEELS Ambassadors</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>Young IIT alumni and student volunteers promoting WGF's mission worldwide</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <FadeUp>
              <div className="section-title">
                <h2>Meet Our Ambassadors</h2>
                <p>Ambassadors are enthusiastic volunteers who represent WGF at their campuses and cities</p>
              </div>
            </FadeUp>
            <StaggerContainer className="grid-3" stagger={0.1}>
              {ambassadors.map((a, i) => (
                <StaggerItem key={i}>
                  <motion.div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }} transition={{ duration: 0.2 }}>
                    <motion.img src={a.img} alt={a.name}
                      style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', margin: '0 auto var(--space-md)', border: '3px solid var(--color-border)' }}
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }} />
                    <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{a.name}</h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>{a.campus}</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: 'var(--space-sm)' }}>{a.city}</p>
                    <motion.span
                      style={{ background: 'var(--tint-blue)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, display: 'inline-block', marginBottom: 'var(--space-md)' }}
                      whileHover={{ scale: 1.1 }}>
                      {a.focus}
                    </motion.span>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>{a.bio}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Become an Ambassador</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '600px' }}>
                Are you an IIT student or young alumni passionate about rural development? Join our ambassador program
                and represent WGF at your campus or city.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.a href="#apply" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Apply Now</motion.a>
                <motion.a href="mailto:info@WHEELSGlobal.org" className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Email Us</motion.a>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
