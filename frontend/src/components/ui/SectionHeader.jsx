import { motion } from 'framer-motion'
import clsx from 'clsx'

const SectionHeader = ({ kicker, heading, subheading, alignment = 'left', className }) => {
  const baseAlign = alignment === 'center' ? 'mx-auto text-center' : alignment === 'right' ? 'ml-auto text-right' : ''

  return (
    <motion.div
      className={clsx('max-w-3xl space-y-4', baseAlign, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      {kicker ? (
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">{kicker}</p>
      ) : null}
      {heading ? (
        <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {heading}
        </h2>
      ) : null}
      {subheading ? (
        <p className="text-base text-white/60 sm:text-lg">{subheading}</p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeader
