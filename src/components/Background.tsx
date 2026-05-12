import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function Background() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const gridY = useTransform(scrollYProgress, (p) => p * (reduceMotion ? 0 : 56))
  const blobScroll1 = useTransform(scrollYProgress, (p) => p * (reduceMotion ? 0 : -52))
  const blobScroll2 = useTransform(scrollYProgress, (p) => p * (reduceMotion ? 0 : 40))
  const washY = useTransform(scrollYProgress, (p) => p * (reduceMotion ? 0 : -36))

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(167,139,250,0.11),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(56,189,248,0.07),transparent_45%)]"
        style={{ y: washY }}
      />
      <motion.div
        className="absolute right-0 top-0 h-[min(55vw,420px)] w-[min(55vw,420px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-cyan-400/10 blur-[120px]"
        style={{ y: blobScroll2 }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[min(50vw,380px)] w-[min(50vw,380px)] -translate-x-1/4 translate-y-1/4 rounded-full bg-blue-500/10 blur-[110px]"
        style={{ y: blobScroll1 }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          y: gridY,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 72% 62% at 50% 38%, black 12%, transparent 100%)',
        }}
      />
      {reduceMotion ? (
        <>
          <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-500/16 blur-[100px]" />
          <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/12 blur-[110px]" />
        </>
      ) : (
        <>
          <motion.div className="absolute -left-32 top-1/4" style={{ y: blobScroll1 }}>
            <motion.div
              className="h-72 w-72 rounded-full bg-cyan-500/16 blur-[100px]"
              animate={{
                x: [0, 40, 0],
                y: [0, 12, 0],
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.div className="absolute -right-24 bottom-1/4" style={{ y: blobScroll2 }}>
            <motion.div
              className="h-80 w-80 rounded-full bg-violet-500/12 blur-[110px]"
              animate={{
                x: [0, -30, 0],
                y: [0, -10, 0],
                scale: [1, 1.06, 1],
                opacity: [0.22, 0.42, 0.22],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </>
      )}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,4,10,0.35)_85%,rgba(3,4,10,0.72)_100%)]"
        aria-hidden
      />
    </div>
  )
}
