import { memo } from 'react'
import { motion } from 'framer-motion'

const gradientVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    scale: [1, 1.2, 1],
    rotate: [0, 10, -6, 0],
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const orbVariants = {
  float: (delay) => ({
    y: [0, -30, 0],
    x: [0, 20, 0],
    scale: [1, 1.05, 0.98, 1],
    transition: {
      duration: 18,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
}

const AuroraBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-radial-neon opacity-80 blur-[120px]"
        variants={gradientVariants}
        animate="animate"
      />
      <motion.div
        className="absolute left-1/4 top-1/5 h-72 w-72 rounded-full bg-neon-cyan/25 blur-[120px]"
        variants={orbVariants}
        animate="float"
        custom={2.5}
      />
      <motion.div
        className="absolute right-1/5 top-1/3 h-80 w-80 rounded-full bg-neon-magenta/25 blur-[140px]"
        variants={orbVariants}
        animate="float"
        custom={0}
      />
      <motion.div
        className="absolute bottom-1/5 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neon-violet/30 blur-[160px]"
        variants={orbVariants}
        animate="float"
        custom={4.2}
      />
      <div className="absolute inset-0 bg-[length:32px_32px] bg-grid-glow opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-night/5 via-night/40 to-night" />
    </div>
  )
}

export default memo(AuroraBackground)
