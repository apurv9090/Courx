import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowCard from '../components/ui/GlowCard'
import SectionHeader from '../components/ui/SectionHeader'

const paymentSummary = [
  { label: 'Subtotal', value: '₹12,499' },
  { label: 'Razorpay fee', value: '₹99' },
  { label: 'Scholarship credit', value: '-₹500' },
]

const Checkout = () => {
  return (
    <div className="relative z-10 flex-1 px-6 pb-24">
  <div className="mx-auto max-w-5xl pt-12">
        <SectionHeader
          kicker="Razorpay ritual"
          heading="Complete your purchase with a heartbeat."
          subheading="Experience a checkout crafted with micro-interactions, razor-sharp clarity, and delightful confirmations."
          alignment="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <GlowCard gradientClass="from-neon-magenta/25 via-neon-cyan/20 to-neon-violet/25" hover={false}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Course</p>
                  <p className="font-display text-2xl text-white">Neural Course Authoring</p>
                </div>
                <div className="rounded-full border border-neon-cyan/50 bg-neon-cyan/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neon-cyan">
                  Live session
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                You’re moments away from unlocking AI mentors, adaptive rituals, and a dashboard that celebrates every win.
              </div>
              <form className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">Full name</label>
                  <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-cyan/60 focus:outline-none" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">Email</label>
                  <input type="email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-magenta/60 focus:outline-none" placeholder="you@courx.io" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">Phone</label>
                  <input type="tel" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-violet/60 focus:outline-none" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">Coupon</label>
                  <input type="text" className="w-full rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-cyan/60 focus:outline-none" placeholder="COURX2025" />
                </div>
              </form>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                <span>Choose payment method</span>
                <div className="flex flex-wrap gap-3">
                  {['UPI', 'Card', 'EMI', 'NetBanking'].map((method) => (
                    <button key={method} type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/60 transition hover:border-neon-cyan/40 hover:text-neon-cyan">
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard gradientClass="from-neon-cyan/25 via-neon-magenta/20 to-neon-violet/25">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                <span>Payment Summary</span>
                <span>Razorpay • Secure</span>
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                {paymentSummary.map((item) => (
                  <li key={item.label} className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.35em] text-white/60">
                <div className="flex items-center justify-between text-white">
                  <span>Total due</span>
                  <span className="text-2xl">₹12,098</span>
                </div>
                <p className="mt-2 text-[0.65rem] text-white/50">Instant access is granted once Razorpay confirms your payment.</p>
              </div>
              <button type="button" className="w-full rounded-full border border-neon-cyan/60 bg-neon-cyan/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan">
                Pay with Razorpay
              </button>
              <p className="text-center text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
                Need assistance? <Link to="/support" className="text-neon-cyan">Contact support</Link>
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  )
}

export default Checkout
