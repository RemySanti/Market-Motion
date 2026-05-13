import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { GlassAlert } from './ui/GlassAlert'
import { fadeUpItem, staggerContainer } from '../motion/variants'

const alerts = [
  {
    variant: 'critical' as const,
    title: 'Heads up',
    body: (
      <>
        Deleting this workspace removes live dashboards. After the 24-hour grace window, historical exports are{' '}
        <strong>gone for good</strong>.
      </>
    ),
  },
  {
    variant: 'success' as const,
    title: 'All set',
    body: (
      <>
        Workspace <strong>archived safely</strong>. Billing is paused and seats go back to your organization pool.
      </>
    ),
  },
  {
    variant: 'warning' as const,
    title: 'Check with finance',
    body: (
      <>
        This step is <strong>irreversible</strong> for connected ad accounts. Give finance a quick heads-up before you continue.
      </>
    ),
  },
  {
    variant: 'info' as const,
    title: 'On the calendar',
    body: (
      <>
        Workspace deletion is <strong>queued for tonight</strong> (02:00 ET). You can still cancel from the runbook until then.
      </>
    ),
  },
  {
    variant: 'loading' as const,
    title: 'Hang tight',
    body: (
      <>
        Purging caches and rotating API keys—<strong>please keep this tab open</strong> until we finish.
      </>
    ),
  },
]

export function GlassAlertShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="relative mt-16 sm:mt-20"
      aria-labelledby="glass-alerts-heading"
    >
      <div className="pointer-events-none absolute -inset-x-4 -top-8 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(34,211,238,0.08),transparent_55%)] opacity-90 sm:-inset-x-10 sm:-top-10" />
      <SectionHeading
        className="relative z-[1] mb-6 max-w-2xl"
        id="glass-alerts-heading"
        title="Alerts that stay legible when things get loud"
        description="Glass toasts with a soft neon edge—same voice we use in launch checklists and runbooks so on-call folks see the point fast."
      />

      <motion.div
        className="mx-auto flex max-w-2xl flex-col gap-3 sm:gap-3.5"
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-10%' }}
        variants={reduceMotion ? undefined : staggerContainer(0.08, 0.04)}
      >
        {alerts.map((a) => (
          <motion.div key={a.title} variants={reduceMotion ? undefined : fadeUpItem}>
            <GlassAlert variant={a.variant} title={a.title}>
              {a.body}
            </GlassAlert>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
