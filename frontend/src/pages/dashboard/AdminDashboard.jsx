import SectionHeader from '../../components/ui/SectionHeader'
import GlowCard from '../../components/ui/GlowCard'

const alerts = [
  {
    title: 'Razorpay settlement spike',
    description: '₹2.4M processed in the last hour. All transactions synced with ledgers.',
    status: 'Healthy',
  },
  {
    title: 'Learner anomaly detected',
    description: 'Drop in engagement for cohort Beta-028. Nudges queued.',
    status: 'Investigate',
  },
  {
    title: 'Uptime',
    description: 'API latency baseline holding at 178ms across all regions.',
    status: 'Optimal',
  },
]

const AdminDashboard = () => {
  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
      <div className="mx-auto max-w-6xl pt-20">
        <SectionHeader
          kicker="Admin nexus"
          heading="Monitor every orbit with crystalline clarity."
          subheading="Real-time telemetry, compliance rituals, and revenue constellations—everything within a single pane of glass."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlowCard gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/25">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Revenue galaxy</p>
                  <p className="font-display text-4xl text-white">₹12.4M • 24h</p>
                </div>
                <div className="rounded-full border border-neon-magenta/40 bg-neon-magenta/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neon-magenta">
                  +18%
                </div>
              </div>
              <div className="grid gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <div className="flex items-center justify-between">
                  <span>Courses live</span>
                  <span className="text-white">248</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mentors active</span>
                  <span className="text-white">4.6K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Checkout success</span>
                  <span className="text-neon-cyan">99.87%</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <p>Live compliance log</p>
                <p className="mt-2 text-sm text-white/70">SOC2 • ISO 27001 • GDPR signals all green. Razorpay webhooks validated.</p>
              </div>
            </div>
          </GlowCard>

          <GlowCard gradientClass="from-neon-magenta/25 via-neon-cyan/20 to-neon-violet/20">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.34em] text-white/50">Critical signals</p>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                      <span>{alert.title}</span>
                      <span className={alert.status === 'Investigate' ? 'text-neon-yellow' : 'text-neon-cyan'}>{alert.status}</span>
                    </div>
                    <p className="mt-3 text-sm text-white/70">{alert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="mt-16">
          <SectionHeader
            kicker="User management"
            heading="Command the entire community with ease."
            subheading="Activate, deactivate, and spotlight power users in a single interaction."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {['Students', 'Instructors', 'Admins', 'Partners'].map((label) => (
              <GlowCard key={label} gradientClass="from-neon-cyan/15 via-neon-magenta/15 to-neon-violet/15" hover={false}>
                <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>{label}</p>
                  <p className="text-2xl text-white">{Math.floor(Math.random() * 8000 + 1200)}</p>
                  <p className="text-white/50">Live in the ecosystem</p>
                </div>
              </GlowCard>
            ))}
          </div>

          <GlowCard className="mt-10" gradientClass="from-neon-magenta/20 via-neon-cyan/20 to-neon-violet/20" hover={false}>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Quick actions</p>
              <div className="grid gap-3 text-sm text-white/70">
                {[
                  { name: 'Kaia Chen', role: 'Instructor', status: 'Active' },
                  { name: 'Aarav Sharma', role: 'Student', status: 'Pending review' },
                  { name: 'Mira Okoye', role: 'Admin', status: 'Active' },
                ].map((user) => (
                  <div key={user.name} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-semibold text-white">{user.name}</p>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">{user.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
                      <button type="button" className="rounded-full border border-neon-cyan/60 bg-neon-cyan/15 px-4 py-2 text-neon-cyan">
                        Activate
                      </button>
                      <button type="button" className="rounded-full border border-neon-magenta/40 bg-neon-magenta/10 px-4 py-2 text-neon-magenta">
                        Deactivate
                      </button>
                      <button type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/60">
                        View profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
