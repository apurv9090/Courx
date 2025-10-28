import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Platform',
    items: [
      { label: 'All Courses', to: '/courses' },
      { label: 'Student Dashboard', to: '/dashboard/student' },
      { label: 'Instructor Lab', to: '/dashboard/instructor' },
      { label: 'Admin Nexus', to: '/dashboard/admin' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Center', to: '/support' },
      { label: 'Payment Status', to: '/checkout' },
      { label: 'Report Issue', to: '/support/report' },
      { label: 'System Status', to: '/status' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms', to: '/legal/terms' },
      { label: 'Privacy', to: '/legal/privacy' },
      { label: 'Security', to: '/legal/security' },
      { label: 'Compliance', to: '/legal/compliance' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/5 bg-night/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-20">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="glass-surface relative overflow-hidden rounded-3xl border border-white/10 p-8"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-neon-cyan/20 blur-3xl" />
              <div className="relative space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Join the orbit</p>
                <h3 className="font-display text-3xl font-semibold leading-tight text-white">
                  Breathe life into your learning universe with CourX.
                </h3>
                <p className="text-sm text-white/60">
                  We choreograph the impossible so your learners feel the future in every interaction.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs uppercase tracking-[0.3em]">
                  <NavLink to="/auth/register" className="rounded-full border border-neon-magenta/40 bg-neon-magenta/15 px-6 py-2 text-white">
                    Activate account
                  </NavLink>
                  <NavLink to="/demo" className="rounded-full border border-white/10 px-6 py-2 text-white/70">
                    Request a lucid demo
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{section.title}</p>
              <ul className="flex flex-col gap-3 text-sm text-white/65">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <NavLink to={item.to} className="transition hover:text-neon-cyan">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CourX Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <NavLink to="/brand">Brand Assets</NavLink>
            <NavLink to="/legal/privacy">Privacy</NavLink>
            <NavLink to="/legal/security">Security</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
