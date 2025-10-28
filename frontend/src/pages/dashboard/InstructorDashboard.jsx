import SectionHeader from '../../components/ui/SectionHeader'
import GlowCard from '../../components/ui/GlowCard'

const pipelines = [
  {
    name: 'Neural Course Authoring',
    stage: 'Prototype',
    efficiency: '92%',
    notes: 'AI mentor persona calibrated. Awaiting narrative QA.',
  },
  {
    name: 'Immersive Quiz Lab',
    stage: 'Storyboard',
    efficiency: '68%',
    notes: 'Need holographic scoreboard assets from creative team.',
  },
  {
    name: 'Razorpay Rituals',
    stage: 'Live',
    efficiency: '100%',
    notes: 'Checkout funnel synced with celebratory animations.',
  },
]

const InstructorDashboard = () => {
  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
  <div className="mx-auto max-w-6xl pt-12">
        <SectionHeader
          kicker="Instructor lab"
          heading="Design, deploy, and iterate with lucid control."
          subheading="Craft modules, choreograph animations, and release updates in a living authoring environment."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlowCard gradientClass="from-neon-magenta/25 via-neon-cyan/20 to-neon-violet/25">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Course Creation Velocity</p>
                  <p className="font-display text-3xl text-white">12 Modules This Week</p>
                </div>
                <div className="rounded-full border border-neon-cyan/50 bg-neon-cyan/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neon-cyan">
                  +42%
                </div>
              </div>
              <div className="grid gap-3">
                {[78, 56, 92].map((percent, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                      <span>Pipeline {index + 1}</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-violet" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>Collaboration</p>
                  <p className="mt-2 text-sm text-white">5 co-creators are live in the storyboard.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>Revenue</p>
                  <p className="mt-2 text-sm text-neon-magenta">₹3.2L earned in the last 24h.</p>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/25">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Production pipeline</p>
              <div className="space-y-5">
                {pipelines.map((pipeline) => (
                  <div key={pipeline.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                      <span>{pipeline.stage}</span>
                      <span>{pipeline.efficiency}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{pipeline.name}</p>
                    <p className="text-xs text-white/60">{pipeline.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlowCard gradientClass="from-neon-cyan/20 via-neon-magenta/20 to-neon-violet/20" hover={false}>
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Create a course</p>
              <form className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Course title</label>
                  <input type="text" placeholder="Name your immersive journey" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-magenta/60 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Category</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-neon-cyan/60 focus:outline-none">
                    <option className="bg-night">Design Systems</option>
                    <option className="bg-night">Payments</option>
                    <option className="bg-night">AI Curriculum</option>
                    <option className="bg-night">Dashboards</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Level</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-neon-violet/60 focus:outline-none">
                    <option className="bg-night">Beginner</option>
                    <option className="bg-night">Intermediate</option>
                    <option className="bg-night">Advanced</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Price (₹)</label>
                  <input type="number" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none" placeholder="0" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Course synopsis</label>
                  <textarea className="h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-magenta/60 focus:outline-none" placeholder="Describe the transformation your learners will feel." />
                </div>
                <button type="button" className="md:col-span-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan">
                  Stage course
                </button>
              </form>
            </div>
          </GlowCard>
          <GlowCard gradientClass="from-neon-magenta/20 via-neon-cyan/20 to-neon-violet/20" hover={false}>
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Upload center</p>
              <div className="flex flex-col gap-4">
                {['Video lectures', 'Thumbnail', 'Curriculum JSON', 'Quiz blueprints'].map((asset) => (
                  <button key={asset} type="button" className="flex items-center justify-between rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:border-neon-magenta/50 hover:text-neon-magenta">
                    <span>{asset}</span>
                    <span>Upload</span>
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <p>Publish when ready — QA, compliance, and Razorpay sync run automatically.</p>
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="mt-16">
          <SectionHeader
            kicker="Upcoming releases"
            heading="Launch updates that shimmer with precision."
            subheading="Schedule unlocks, orchestrate notifications, and preview every animation in the corridor before it goes live."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((slot) => (
              <GlowCard key={slot} gradientClass="from-neon-cyan/15 via-neon-magenta/15 to-neon-violet/15" hover={false}>
                <div className="space-y-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  <p>Release Window {slot}</p>
                  <p className="text-sm text-white/70">Storyboards, mentors, and interactions staged for {slot * 6}:00 UTC.</p>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-neon-cyan">
                    Auto QA + Publish
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboard
