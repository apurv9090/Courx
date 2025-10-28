import { motion } from 'framer-motion'
import { BoltIcon, CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/outline'
import GlowCard from '../../components/ui/GlowCard'
import SectionHeader from '../../components/ui/SectionHeader'

const streaks = [
  { title: 'Neural Mentor Sync', value: 'Day 12', detail: 'AI mentor engaged in 3 sessions today.' },
  { title: 'Progress Velocity', value: '124%', detail: 'Surpassed cohort benchmark by 24%.' },
  { title: 'Peer Resonance', value: '8', detail: 'New collaborative sparks this week.' },
]

const modules = [
  { title: 'Orbital Interface Rituals', status: 'Complete', score: '98%' },
  { title: 'Adaptive Quiz Journeys', status: 'In Flight', score: '72%' },
  { title: 'Razorpay Experience Lab', status: 'Queued', score: '—' },
]

const StudentDashboard = () => {
  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
  <div className="mx-auto max-w-6xl pt-12">
        <SectionHeader
          kicker="Student cockpit"
          heading="Your learning constellation is thriving."
          subheading="Track momentum, unlock rewards, and feel every milestone reverberate across your dashboard."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {streaks.map((item) => (
            <GlowCard key={item.title} gradientClass="from-neon-cyan/20 via-neon-magenta/20 to-neon-violet/20">
              <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-white/60">
                <p>{item.title}</p>
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-white/70">{item.detail}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlowCard gradientClass="from-neon-magenta/25 via-neon-cyan/20 to-neon-violet/25">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Mission: Orbit Design System</p>
                  <h3 className="font-display text-2xl text-white">86% Complete</h3>
                </div>
                <div className="rounded-full border border-neon-cyan/40 bg-neon-cyan/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neon-cyan">
                  Hyper focus
                </div>
              </div>
              <div className="grid gap-3">
                {[68, 86, 94].map((value, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                      <span>Section {idx + 1}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>Mentor Sync</p>
                  <p className="mt-2 text-sm text-white">Kaia will unlock Mentor Quest: Aurora Bridge in 2h</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>Next Ritual</p>
                  <p className="mt-2 text-sm text-neon-cyan">Augmented reality sprint scheduled</p>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/20">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.34em] text-white/50">Achievements</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircleIcon className="h-5 w-5 text-neon-cyan" />
                  <span>Unlocked Quantum Learner badge</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <BoltIcon className="h-5 w-5 text-neon-magenta" />
                  <span>Maintained 7-day streak</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <TrophyIcon className="h-5 w-5 text-neon-violet" />
                  <span>Top 5% in cohort leaderboard</span>
                </li>
              </ul>
            </div>
          </GlowCard>
        </div>

        <div className="mt-12">
          <SectionHeader
            kicker="Module status"
            heading="Each chapter pulses with life."
            subheading="Move through learning arcs that adapt to your momentum."
          />
          <div className="mt-8 grid gap-4">
            {modules.map((module) => (
              <GlowCard key={module.title} gradientClass="from-neon-cyan/15 via-neon-magenta/15 to-neon-violet/15" hover={false}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">{module.status}</p>
                    <h3 className="font-display text-xl text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-white/70">Performance: {module.score}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
