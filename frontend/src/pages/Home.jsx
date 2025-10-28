import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import CourseCard from '../components/courses/CourseCard'
import GlowCard from '../components/ui/GlowCard'
import SectionHeader from '../components/ui/SectionHeader'
import { courses } from '../data/courses'
import { globalStats } from '../data/stats'
import { testimonials } from '../data/testimonials'

const experiencePills = [
  'Immersive Web3 Studios',
  'AI Mentor Holograms',
  'Razorpay Neuro Checkout',
  'Adaptive Course Rituals',
]

const roleHighlights = [
  {
    role: 'Students',
    headline: 'Holographic journeys that adapt in real-time.',
    points: [
      'Progress constellation dashboard with cinematic milestones',
      'Seamless Razorpay moments with celebratory micro-interactions',
      'AI mentors that respond with emotional resonance',
    ],
  },
  {
    role: 'Instructors',
    headline: 'Orchestrate cosmic curricula with intuitive controls.',
    points: [
      'Drag-and-drop lesson galaxies with instant preview portals',
      'Quiz lab for narrative-driven assessments and rewards',
      'Revenue analytics synced across chains and currencies',
    ],
  },
  {
    role: 'Admins',
    headline: 'Monitor the entire learning universe in one pane.',
    points: [
      'Live transaction skyline with anomaly flares',
      'User lifecycle heatmap with predictive retention pulses',
      'Compliance cockpit for Razorpay + blockchain insights',
    ],
  },
]

const Home = () => {
  const featuredCourses = courses.filter((course) => course.featured)

  return (
    <div className="relative z-10 flex-1">
  <section className="relative overflow-hidden px-6 pt-12 sm:pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
          <motion.div
            className="flex-1 space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em]">
              {experiencePills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/60">
                  {pill}
                </span>
              ))}
            </div>
            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                CourX — where neon-soaked wisdom and Web3 artistry collide.
              </h1>
              <p className="max-w-xl text-lg text-white/65 sm:text-xl">
                Craft immersive course dimensions, orchestrate cosmic dashboards, and celebrate every Razorpay ritual with
                breath-taking finesse. The future of learning is a living, breathing, animated universe.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/courses"
                className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-magenta/40 via-neon-cyan/30 to-neon-violet/40 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <span className="relative">Explore Courses</span>
                <ArrowRightIcon className="relative h-5 w-5" />
              </Link>
              <Link
                to="/auth/register"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-white/65 transition hover:text-white"
              >
                <PlayCircleIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
                Launch the Experience
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-1 justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="relative h-[520px] w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-gradient-to-br from-neon-cyan/10 via-night/40 to-neon-magenta/10 p-8">
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/70">Live Progress</p>
                    <p className="text-4xl font-semibold text-white">86% Course Flow</p>
                  </div>
                  <div className="grid gap-3">
                    {[72, 86, 94].map((value, idx) => (
                      <div key={value} className="space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                          <span>Module 0{idx + 1}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">Next Ritual</p>
                    <p className="mt-2 text-sm text-white">Neural mentor sync in 38 minutes</p>
                    <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                      <span>Razorpay Ready</span>
                      <span className="text-neon-cyan">Autopilot</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-12 -z-10 animate-blob rounded-[40%] bg-neon-magenta/30 blur-3xl" />
              <div className="absolute -right-10 top-10 h-32 w-32 animate-float rounded-full bg-neon-cyan/40 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6">
        <SectionHeader
          kicker="Realtime metrics"
          heading="Numbers that feel like stardust."
          subheading="Track impact in a dashboard that pulses with every learner win."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {globalStats.map((stat, idx) => (
            <GlowCard key={stat.label} gradientClass="from-neon-cyan/30 via-neon-magenta/30 to-neon-violet/30">
              <div className="space-y-3 text-xs uppercase tracking-[0.4em] text-white/60">
                <span>{stat.label}</span>
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-neon-cyan">{stat.delta}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6">
        <SectionHeader
          kicker="Featured constellations"
          heading="Courses that bend reality."
          subheading="Mix autonomous AI mentors, Razorpay rituals, and multi-sensory storytelling to architect unforgettable learning."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredCourses.map((course, idx) => (
            <CourseCard key={course.id} course={course} variant="featured" index={idx} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Link to="/courses" className="text-sm font-semibold uppercase tracking-[0.4em] text-neon-cyan">
            Browse the entire catalog →
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6">
        <SectionHeader
          kicker="Razorpay symphony"
          heading="Payments reimagined as rituals."
          subheading="Delight learners with luminous checkout flows, risk-aware retries, and celebratory confirmations that echo across the dashboard."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlowCard className="min-h-[320px]" gradientClass="from-neon-magenta/30 via-neon-cyan/20 to-neon-violet/30">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-neon-magenta">Razorpay Orchestrator</span>
                <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-neon-cyan">
                  live
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold text-white">Sequence every state, from idle to victorious.</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>• Cinematic success states with ripple lighting and confetti shaders</li>
                <li>• Intelligent retries that reframe failure as guidance</li>
                <li>• Split-pay, card, UPI, and tokenized flows visualized in real-time</li>
              </ul>
            </div>
          </GlowCard>
          <GlowCard gradientClass="from-neon-cyan/20 via-neon-magenta/25 to-neon-violet/25">
            <div className="space-y-5">
              <h4 className="text-sm uppercase tracking-[0.3em] text-white/60">Checkout Snapshot</h4>
              <p className="font-display text-2xl text-white">₹12,499 Razorpay order confirmed</p>
              <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-white/60">
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-neon-cyan">Settled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Method</span>
                  <span>UPI • orbit@upi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Latency</span>
                  <span>178ms</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 p-3 text-xs uppercase tracking-[0.3em] text-white/50">
                <p>Webhook sync → Dashboard animation triggered → Learner access unlocked</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6">
        <SectionHeader
          kicker="Role based mastery"
          heading="Dashboards that bend to each role."
          subheading="Give every actor a cockpit that radiates clarity, story, and momentum."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {roleHighlights.map((role) => (
            <GlowCard key={role.role} gradientClass="from-neon-cyan/20 via-neon-magenta/20 to-neon-violet/20">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{role.role}</p>
                <h3 className="font-display text-2xl text-white">{role.headline}</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  {role.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Link
                  to={`/dashboard/${role.role.toLowerCase()}`}
                  className="mt-auto text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan"
                >
                  View dashboard →
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6">
        <SectionHeader
          kicker="Resonance"
          heading="Trusted by future-first academies."
          subheading="Listen to the architects building breathtaking learning galaxies on CourX."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <GlowCard key={t.name} gradientClass="from-neon-magenta/25 via-neon-cyan/15 to-neon-violet/25">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={`${t.name} avatar`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">“{t.quote}”</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-5xl px-6 pb-32">
        <GlowCard
          gradientClass="from-neon-cyan/35 via-neon-magenta/30 to-neon-violet/35"
          className="text-center"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Ready to transcend?</p>
            <h3 className="font-display text-4xl font-semibold text-white">
              Ignite a universe where every learner is a luminous explorer.
            </h3>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The CourX dashboard is your gravity-defying canvas. Sculpt experiences, orchestrate payments, and unleash
              mesmerizing dashboards in minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/auth/register"
                className="rounded-full border border-neon-cyan/50 bg-neon-cyan/15 px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan"
              >
                Start building
              </Link>
              <Link
                to="/demo"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60 hover:text-white"
              >
                Request immersive demo →
              </Link>
            </div>
          </div>
        </GlowCard>
      </section>
    </div>
  )
}

export default Home
