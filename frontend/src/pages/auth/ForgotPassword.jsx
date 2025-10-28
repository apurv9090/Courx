import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowCard from '../../components/ui/GlowCard'

const ForgotPassword = () => {
  return (
  <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 pb-32 pt-16">
      <GlowCard className="w-full max-w-lg" gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/25" hover={false}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Reset your access</p>
            <h1 className="font-display text-3xl text-white">Reactivate your cosmic credentials.</h1>
            <p className="text-sm text-white/60">
              We will send an OTP to your registered email. Enter the code to restore your CourX experience.
            </p>
          </div>
          <form className="mt-10 space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Email</label>
              <input
                type="email"
                placeholder="you@courx.io"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full border border-neon-cyan/60 bg-neon-cyan/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan"
            >
              Send OTP
            </button>
          </form>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-white/50">
            Recalled your key?{' '}
            <Link to="/auth/login" className="text-neon-magenta">
              Go back to login
            </Link>
          </p>
        </motion.div>
      </GlowCard>
    </div>
  )
}

export default ForgotPassword
