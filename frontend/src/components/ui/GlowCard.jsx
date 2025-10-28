import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const GlowCard = forwardRef(function GlowCard(
  { className, children, gradientClass = 'from-neon-cyan/40 via-neon-magenta/30 to-neon-violet/40', hover = true, ...props },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      {...props}
      className={clsx('group relative overflow-hidden rounded-3xl border border-white/10 p-[1px] backdrop-blur-xl', className)}
      whileHover={hover ? { scale: 1.015 } : undefined}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
    >
      <div className={clsx('absolute inset-0 rounded-3xl bg-gradient-to-br opacity-80 blur-3xl', gradientClass)} />
  <div className="relative rounded-[calc(1.5rem-2px)] bg-night/90 p-6">
        {children}
      </div>
    </motion.div>
  )
})

export default GlowCard
