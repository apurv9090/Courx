import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navLinks = [
  { label: 'Experience', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Dashboards', to: '/dashboard/student' },
  { label: 'Instructors', to: '/dashboard/instructor' },
  { label: 'Admin', to: '/dashboard/admin' },
  { label: 'Checkout', to: '/checkout' },
]

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const glowVariant = {
    initial: { opacity: 0, scaleX: 0 },
    animate: { opacity: 1, scaleX: 1, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, scaleX: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-night/85 backdrop-blur-xl">
      <nav className="flex w-full items-center gap-6 px-6 py-4 sm:px-8 sm:py-5">
        <NavLink to="/" className="group relative inline-flex shrink-0 items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-neon-cyan">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-neon-cyan/15 blur-lg" />
            <span className="relative text-xl font-semibold">CX</span>
          </div>
          <div className="flex flex-col leading-none whitespace-nowrap">
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-white/50">CourX</span>
            <span className="font-display text-lg font-semibold text-white">Immersive Learning</span>
          </div>
        </NavLink>

        <div className="hidden flex-1 items-center justify-center gap-14 overflow-hidden lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive: routeActive }) =>
                  clsx(
                    'relative whitespace-nowrap text-sm font-medium uppercase tracking-[0.35em] text-white/65 transition-colors hover:text-white',
                    (isActive || routeActive) && 'text-neon-cyan'
                  )
                }
              >
                <span className="relative">
                  {link.label}
                  {(isActive || (link.to !== '/' && location.pathname.startsWith(link.to))) && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute -bottom-3 left-1/2 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                    />
                  )}
                </span>
              </NavLink>
            )
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-4 whitespace-nowrap lg:flex">
          <NavLink
            to="/auth/login"
            className="text-sm font-medium uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/auth/register"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/40 via-neon-magenta/40 to-neon-violet/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative">Join Now</span>
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            className="glass-surface mx-6 mb-6 overflow-hidden rounded-3xl border border-white/10 p-6 lg:hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={glowVariant}
            style={{ transformOrigin: 'top center' }}
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.05 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'flex items-center justify-between rounded-2xl border border-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/75 transition',
                        isActive && 'border-neon-cyan/60 bg-neon-cyan/10 text-white'
                      )}
                    >
                      {link.label}
                      {isActive && <span className="text-[0.6rem] text-neon-cyan">LIVE</span>}
                    </NavLink>
                  </li>
                )
              })}
            </motion.ul>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em]">
              <NavLink to="/auth/login" onClick={() => setIsOpen(false)} className="rounded-2xl border border-white/5 px-4 py-3 text-white/70">Sign In</NavLink>
              <NavLink
                to="/auth/register"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-neon-magenta/40 bg-neon-magenta/15 px-4 py-3 text-white"
              >
                Join
              </NavLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default NavigationBar
