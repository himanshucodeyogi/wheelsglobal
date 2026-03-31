import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 2
      })
    }, 28)
    const timer = setTimeout(() => setVisible(false), 1600)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'linear-gradient(135deg, #0057B7 0%, #003F8A 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '28px'
          }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Logo */}
          <motion.img
            src="/image-removebg-preview.png"
            alt="WHEELS Global"
            style={{ height: '90px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

          {/* Tagline */}
          <motion.p
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', letterSpacing: '1px' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforming Rural India...
          </motion.p>

          {/* Progress bar */}
          <motion.div
            style={{ width: '200px', height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '99px', overflow: 'hidden' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              style={{
                height: '100%', borderRadius: '99px',
                background: '#FFA500',
                width: `${progress}%`,
                transition: 'width 0.03s linear'
              }}
            />
          </motion.div>

          {/* Spinning wheel icon */}
          <motion.div
            style={{ fontSize: '28px', position: 'absolute', bottom: '40px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          >
            ⚙️
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
