import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowCard from '../../components/ui/GlowCard'

const Login = () => {
  return (
  <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 pb-32 pt-16">
      <GlowCard className="w-full max-w-lg" gradientClass="from-neon-cyan/30 via-neon-magenta/25 to-neon-violet/30" hover={false}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Welcome back</p>
            <h1 className="font-display text-3xl text-white">Sign in to your CourX universe</h1>
            <p className="text-sm text-white/60">
              Enter the immersive dashboards, unlock AI mentors, and pick up exactly where you left off.
            </p>
          </div>
          <form className="mt-10 space-y-5">
            <div className="space-y-2 text-left">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Email</label>
              <input
                type="email"
                placeholder="orbit@courx.io"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-magenta/60 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-neon-cyan" />
                Remember me
              </label>
              <Link to="/auth/forgot" className="text-neon-cyan">
                Forgot?
              </Link>
            </div>
            <button
              type="button"
              className="w-full rounded-full border border-neon-cyan/60 bg-neon-cyan/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan"
            >
              Enter dashboard
            </button>
          </form>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-white/50">
            New here?{' '}
            <Link to="/auth/register" className="text-neon-magenta">
              Create an account
            </Link>
          </p>
        </motion.div>
      </GlowCard>
    </div>
  )
}

export default Login
