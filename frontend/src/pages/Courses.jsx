import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CourseCard from '../components/courses/CourseCard'
import SectionHeader from '../components/ui/SectionHeader'
import GlowCard from '../components/ui/GlowCard'
import { courses } from '../data/courses'

const Courses = () => {
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const categories = useMemo(() => ['All', ...new Set(courses.map((course) => course.category))], [])
  const levels = useMemo(() => ['All', ...new Set(courses.map((course) => course.level))], [])

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())
      const matchesLevel = levelFilter === 'All' || course.level === levelFilter
      const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter
      return matchesSearch && matchesLevel && matchesCategory
    })
  }, [search, levelFilter, categoryFilter])

  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
      <div className="mx-auto max-w-6xl pt-20">
        <SectionHeader
          kicker="Course constellation"
          heading="Choose the experience that ignites you."
          subheading="Filter through adaptive curricula crafted for students, instructors, and admins ready to push beyond boundaries."
        />

        <GlowCard className="mt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
              <input
                type="search"
                placeholder="Search by title, instructor, or magic keyword"
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
              <div className="flex items-center gap-2">
                <FunnelIcon className="h-5 w-5" />
                Level
              </div>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setLevelFilter(level)}
                    className={`rounded-full border px-4 py-2 ${levelFilter === level ? 'border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan' : 'border-white/10 bg-white/5 text-white/60'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategoryFilter(category)}
                  className={`rounded-full border px-4 py-2 ${categoryFilter === category ? 'border-neon-magenta/60 bg-neon-magenta/10 text-neon-magenta' : 'border-white/10 bg-white/5 text-white/60'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </GlowCard>

        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course, idx) => (
            <CourseCard key={course.id} course={course} index={idx} variant={course.featured ? 'featured' : 'default'} />
          ))}
        </div>

        {filteredCourses.length === 0 ? (
          <motion.div
            className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No courses match your current filters. Reset to explore the full constellation.
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}

export default Courses
