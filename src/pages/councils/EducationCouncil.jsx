import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/Animations'

const programs = [
  { title: 'Digital Literacy Program', desc: 'Teaching basic computer and internet skills to rural youth and women for economic opportunities.', img: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=200&q=80' },
  { title: 'Vocational Training Centers', desc: 'Skill development centers teaching trades like electronics repair, tailoring, and welding.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&q=80' },
  { title: 'EdTech for Village Schools', desc: 'Deploying tablets and software to improve learning outcomes in under-resourced rural schools.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80' },
  { title: 'Scholarship Programs', desc: 'Merit-based scholarships for talented rural students to access higher education opportunities.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80' },
]

export default function EducationCouncil() {
  return (
    <PageTransition>
      <div>
        <div className="page-hero" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80') center/cover no-repeat` }}>
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Education Council</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Empowering youth through technology and skill development</motion.p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xxl)', alignItems: 'start' }}>
              <SlideLeft>
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0', fontSize: '17px' }}>The Education Council focuses on bridging the education gap in rural India through technology-enabled learning. We believe every child deserves access to quality education regardless of geography, and we use digital tools to make this a reality.</p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 'var(--space-md) 0' }}>From basic digital literacy to vocational training for employable skills, our programs prepare rural youth for the modern economy while staying rooted in local needs.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>
                  <Link to="/donate" className="btn btn-secondary">Support Education</Link>
                </motion.div>
              </SlideLeft>
              <SlideRight>
                <motion.div style={{ background: 'var(--tint-orange)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', textAlign: 'center' }}
                  whileHover={{ boxShadow: '0 12px 36px rgba(255,165,0,0.2)' }}>
                  <motion.div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  {[{ n: '50K+', l: 'Students Reached' }, { n: '300+', l: 'Schools Supported' }, { n: '20+', l: 'Skill Centers' }].map((s, i) => (
                    <motion.div key={s.l} style={{ marginBottom: 'var(--space-md)' }}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div style={{ fontSize: '36px', fontWeight: 700, color: '#FFA500' }}>{s.n}</div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{s.l}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </SlideRight>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <FadeUp><div className="section-title"><h2>Our Programs</h2></div></FadeUp>
            <StaggerContainer className="grid-2" stagger={0.12}>
              {programs.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div className="card" whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}>
                    <motion.div style={{ width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', marginBottom: 'var(--space-sm)' }} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}><img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></motion.div>
                    <h3 style={{ marginBottom: 'var(--space-sm)' }}>{p.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeUp>
              <h2>Get Involved</h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 'var(--space-md) auto var(--space-xl)', fontSize: '18px' }}>Volunteer as a tutor, donate devices, or fund a scholarship for a rural student</p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/donate" className="btn btn-secondary">Donate to Education</Link></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}><Link to="/contact" className="btn btn-outline">Volunteer</Link></motion.div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
