import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">404 · Lost in orbit</p>
        <h1 className="font-display text-5xl text-white">This portal does not exist yet.</h1>
        <p className="text-sm text-white/60">
          Perhaps the course is still being woven. Return to the dashboard and continue your luminous journey.
        </p>
        <Link to="/" className="rounded-full border border-neon-cyan/50 bg-neon-cyan/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan">
          Back to CourX
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound
