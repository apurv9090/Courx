import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowCard from '../../components/ui/GlowCard'

const planOptions = [
  { label: 'Student', description: 'Immersive progress constellations + AI mentor rituals.' },
  { label: 'Instructor', description: 'Course authoring lab, Razorpay rituals, collaborative storyboards.' },
  { label: 'Admin', description: 'Realtime telemetry, compliance cockpit, revenue galaxies.' },
]

const Register = () => {
  return (
  <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 pb-32 pt-16">
      <GlowCard className="w-full max-w-4xl" gradientClass="from-neon-magenta/30 via-neon-cyan/25 to-neon-violet/30" hover={false}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Create your CourX identity</p>
            <h1 className="font-display text-3xl text-white">Choose your orbit, then ignite it.</h1>
            <p className="text-sm text-white/60">
              Tailor your immersive dashboard by selecting the role that resonates with your mission.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {planOptions.map((plan) => (
              <label key={plan.label} className="group flex cursor-pointer flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-neon-cyan/50">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em]">
                  <span className="text-white/60">{plan.label}</span>
                  <input type="radio" name="plan" className="h-4 w-4 rounded-full border-white/30 bg-white/10 text-neon-cyan" />
                </div>
                <p className="text-sm text-white/70">{plan.description}</p>
              </label>
            ))}
          </div>

          <form className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Full name</label>
              <input
                type="text"
                placeholder="Selena Shaw"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-magenta/60 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Email</label>
              <input
                type="email"
                placeholder="selena@courx.io"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Password</label>
              <input
                type="password"
                placeholder="Create a passphrase"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-violet/60 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">Invite code</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-cyan/60 focus:outline-none"
              />
            </div>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-white/20 bg-white/5 text-neon-cyan" />
              Agree to terms
            </label>
            <Link to="/legal/privacy" className="text-neon-cyan">
              Read policy
            </Link>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full border border-neon-magenta/60 bg-neon-magenta/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-magenta"
          >
            Ignite account
          </button>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-white/50">
            Already inside?{' '}
            <Link to="/auth/login" className="text-neon-cyan">
              Sign in
            </Link>
          </p>
        </motion.div>
      </GlowCard>
    </div>
  )
}

export default Register
