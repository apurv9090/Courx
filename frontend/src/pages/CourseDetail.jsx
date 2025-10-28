import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckIcon, ClockIcon, PlayCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import GlowCard from '../components/ui/GlowCard'
import SectionHeader from '../components/ui/SectionHeader'
import { getCourseBySlug } from '../data/courses'
import { testimonials } from '../data/testimonials'

const CourseDetail = () => {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) {
    return <Navigate to="/courses" />
  }

  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
      <div className="mx-auto max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-magenta/15 to-neon-violet/20 opacity-70 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/80">{course.category}</p>
                <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">{course.title}</h1>
                <p className="max-w-2xl text-sm text-white/70">{course.description}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-night/70 p-6 text-sm uppercase tracking-[0.3em] text-white/60">
                <div className="flex flex-col gap-3">
                  <span className="text-white">₹{course.price.toLocaleString('en-IN')}</span>
                  <span>Course Level · {course.level}</span>
                  <span>{course.rating}★ ({course.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <GlowCard gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/25">
                <div className="flex items-center gap-4">
                  <img src={course.instructorAvatar} alt={course.instructor} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-white">{course.instructor}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">Lead Instructor</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckIcon className="mt-[2px] h-5 w-5 text-neon-cyan" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
              <GlowCard gradientClass="from-neon-magenta/25 via-neon-cyan/20 to-neon-violet/25">
                <dl className="grid gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      Duration
                    </dt>
                    <dd className="text-white">{course.duration}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-2">
                      <UserGroupIcon className="h-5 w-5" />
                      Learners onboarded
                    </dt>
                    <dd className="text-white">{course.students.toLocaleString()}</dd>
                  </div>
                  <div className="space-y-2">
                    <dt className="text-white">Technologies</dt>
                    <dd className="flex flex-wrap gap-2 text-[0.65rem] text-white/60">
                      {course.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </GlowCard>
            </div>
          </div>
        </motion.div>

        <section className="mt-10">
          <GlowCard gradientClass="from-neon-cyan/20 via-neon-magenta/20 to-neon-violet/20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Immersive preview</p>
                <h3 className="font-display text-2xl text-white">Watch the first ritual in cinematic detail.</h3>
                <p className="max-w-xl text-sm text-white/70">
                  Stream on any device with adaptive spatial audio, responsive captions, and AI mentor highlights that dance
                  alongside the lesson.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan"
                >
                  <PlayCircleIcon className="h-5 w-5" />
                  Launch preview
                </button>
              </div>
              <div className="relative w-full max-w-md self-stretch rounded-[2rem] border border-white/10 bg-gradient-to-br from-neon-magenta/15 via-night/60 to-neon-cyan/15 p-6">
                <div className="aspect-video w-full rounded-2xl border border-white/10 bg-black/60" />
                <p className="mt-3 text-center text-xs uppercase tracking-[0.35em] text-white/50">
                  4K stream · Spatial audio · Offline rituals
                </p>
              </div>
            </div>
          </GlowCard>
        </section>

        <section className="mt-16">
          <SectionHeader kicker="Curriculum" heading="Modules that evolve with your learners." alignment="center" />
          <div className="mt-10 grid gap-6">
            {course.modules.map((module, idx) => (
              <GlowCard key={module.title} gradientClass="from-neon-cyan/15 via-neon-magenta/15 to-neon-violet/15">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">Chapter {idx + 1}</p>
                    <h3 className="font-display text-2xl text-white">{module.title}</h3>
                  </div>
                  <p className="max-w-xl text-sm text-white/70">{module.summary}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader
            kicker="Reviews"
            heading="Learners are glowing."
            subheading="Real humans experiencing the CourX transformation."
            alignment="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((review) => (
              <GlowCard key={review.name} gradientClass="from-neon-cyan/15 via-neon-magenta/15 to-neon-violet/15">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">“{review.quote}”</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">Verified CourX Graduate</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CourseDetail
