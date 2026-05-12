import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { GlassAlert } from './ui/GlassAlert'
import { fadeUpItem, staggerContainer } from '../motion/variants'

const alerts = [
  {
    variant: 'critical' as const,
    title: 'Warning',
    body: (
      <>
        Deleting this workspace removes live dashboards. Historical exports are{' '}
        <strong>permanently lost</strong> after the 24-hour grace window.
      </>
    ),
  },
  {
    variant: 'success' as const,
    title: 'Success',
    body: (
      <>
        Workspace <strong>archived safely</strong>. Billing paused and seats returned to your
        org pool.
      </>
    ),
  },
  {
    variant: 'warning' as const,
    title: 'Caution',
    body: (
      <>
        This action is <strong>irreversible</strong> for connected ad accounts. Confirm with
        finance before you proceed.
      </>
    ),
  },
  {
    variant: 'info' as const,
    title: 'Scheduled',
    body: (
      <>
        Workspace deletion is <strong>queued for tonight</strong> (02:00 ET). You can cancel
        from the runbook until then.
      </>
    ),
  },
  {
    variant: 'loading' as const,
    title: 'Working',
    body: <>Purging caches and rotating API keys—<strong>do not close this tab</strong>.</>,
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
        title="System-grade alerts"
        description="Glass toasts with neon edge lighting—built for clarity under pressure. Same language we use in launch consoles and runbooks."
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
