import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const iconMap = {
  featured: SparklesIcon,
  preview: PlayCircleIcon,
}

const CourseCard = ({ course, variant = 'default', index = 0 }) => {
  const { slug, title, description, instructor, instructorAvatar, level, price, rating, reviews, lessons, duration, accent } = course
  const Icon = variant === 'featured' ? iconMap.featured : iconMap.preview

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={clsx(
        'relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night/90 p-8',
        variant === 'featured' && 'shadow-aurora'
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-6">
        <header className="flex items-center justify-between">
          <span className={clsx('rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60', variant === 'featured' && 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan')}>{level}</span>
          <Icon className="h-6 w-6 text-neon-cyan" />
        </header>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold leading-tight text-white">{title}</h3>
          <p className="text-sm text-white/65">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={instructorAvatar} alt={instructor} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
          <div>
            <p className="text-sm font-semibold text-white">{instructor}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Lead Instructor</p>
          </div>
        </div>
        <dl className="grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
          <div>
            <dt className="text-[0.6rem] text-white/40">Lessons</dt>
            <dd className="text-white">{lessons}</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] text-white/40">Duration</dt>
            <dd className="text-white">{duration}</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] text-white/40">Reviews</dt>
            <dd className="text-white">{rating}★ ({reviews})</dd>
          </div>
        </dl>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-neon-cyan">₹{price.toLocaleString('en-IN')}</p>
          <Link to={`/courses/${slug}`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-white">
            Explore
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className={clsx('absolute inset-x-0 bottom-0 h-32 bg-gradient-to-br opacity-35 blur-3xl', accent)} />
      </div>
    </motion.article>
  )
}

export default CourseCard
