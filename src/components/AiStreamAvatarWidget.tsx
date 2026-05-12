import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useId, useState } from 'react'
import { Link } from 'react-router-dom'

import defaultAiAvatar from '../assets/ai-avatar.png'

const EMBED_URL = import.meta.env.VITE_ATHENE_STREAM_EMBED_URL?.trim() ?? ''
const hasStream = Boolean(EMBED_URL)

/** Replace `src/assets/ai-avatar.png` with your headshot (same path/name) for the exact photo in FAB + demo. */
const DEFAULT_AVATAR_SRC = defaultAiAvatar
const AVATAR_SRC = import.meta.env.VITE_AI_AVATAR_IMAGE_URL?.trim() || DEFAULT_AVATAR_SRC

const AI_AVATAR_ALT =
  'Professional headshot of a smiling man with a beard in an office setting, used as the AI avatar.'

function WarningTriangle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function HeaderAvatar({
  src,
  broken,
  onError,
}: {
  src: string
  broken: boolean
  onError: () => void
}) {
  return (
    <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/15 bg-black/40 ring-1 ring-amber-500/20">
      {!broken ? (
        <img
          src={src}
          alt=""
          aria-hidden
          width={36}
          height={36}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
          onError={onError}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-600/80 to-zinc-800 text-xs font-bold text-white">
          AI
        </span>
      )}
    </span>
  )
}

function PortalHero({
  src,
  alt,
  broken,
  onError,
  reduceMotion,
}: {
  src: string
  alt: string
  broken: boolean
  onError: () => void
  reduceMotion: boolean | null
}) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center justify-end overflow-hidden bg-[#0a0a0a] pb-1 pt-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[radial-gradient(ellipse_75%_55%_at_50%_100%,rgba(245,158,11,0.42),rgba(180,83,9,0.12)_45%,transparent_70%)]"
        animate={reduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-[1] w-[min(115%,28rem)] -translate-x-1/2" aria-hidden>
        <svg viewBox="0 0 400 120" className="w-full text-amber-400/95 drop-shadow-[0_0_20px_rgba(245,158,11,0.45)]" preserveAspectRatio="xMidYMax meet">
          <motion.ellipse
            cx="200"
            cy="108"
            rx="178"
            ry="38"
            fill="none"
            stroke="#fde68a"
            strokeWidth="2.5"
            animate={reduceMotion ? undefined : { ry: [36, 40, 36] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ellipse cx="200" cy="108" rx="132" ry="28" fill="none" stroke="currentColor" strokeWidth="1.75" opacity={0.88} />
        </svg>
      </div>
      <motion.div
        className="relative z-[2] flex w-full max-w-[min(100%,20rem)] flex-1 items-end justify-center px-3"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {!broken ? (
          <img
            src={src}
            alt={alt}
            width={320}
            height={400}
            className="max-h-[min(48vh,380px)] w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
            loading="lazy"
            decoding="async"
            onError={onError}
          />
        ) : (
          <div className="mb-8 flex h-64 w-full items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 text-sm text-zinc-500">
            Avatar unavailable
          </div>
        )}
      </motion.div>
    </div>
  )
}

/**
 * Floating AI video-avatar widget: Studio AI–style chrome (dark header, portal hero, cream controls footer).
 * With `VITE_ATHENE_STREAM_EMBED_URL` set, the hero embeds the stream; otherwise the bundled portrait shows in demo mode.
 */
export function AiStreamAvatarWidget() {
  const labelId = useId()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [micOn, setMicOn] = useState(false)
  const [camOn, setCamOn] = useState(false)
  const [micStream, setMicStream] = useState<MediaStream | null>(null)
  const [camStream, setCamStream] = useState<MediaStream | null>(null)
  const [avatarBroken, setAvatarBroken] = useState(false)

  const stopMic = useCallback(() => {
    micStream?.getTracks().forEach((t) => t.stop())
    setMicStream(null)
    setMicOn(false)
  }, [micStream])

  const stopCam = useCallback(() => {
    camStream?.getTracks().forEach((t) => t.stop())
    setCamStream(null)
    setCamOn(false)
  }, [camStream])

  const enableMic = useCallback(async () => {
    if (!hasStream) return
    if (micOn) {
      stopMic()
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicStream(stream)
      setMicOn(true)
    } catch (e) {
      console.error(e)
      window.alert('Microphone access is needed for voice chat. Please allow access and try again.')
    }
  }, [micOn, stopMic])

  const enableCam = useCallback(async () => {
    if (!hasStream) return
    if (camOn) {
      stopCam()
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      setCamStream(stream)
      setCamOn(true)
    } catch (e) {
      console.error(e)
      window.alert('Camera access was denied. Video chat may still work with audio only.')
    }
  }, [camOn, stopCam])

  const close = useCallback(() => {
    setOpen(false)
    setMinimized(false)
    stopMic()
    stopCam()
  }, [stopCam, stopMic])

  return (
    <>
      {!open && (
        <button
          type="button"
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-[100] cursor-pointer rounded-full border-0 bg-transparent p-0 text-left shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          onClick={() => {
            setOpen(true)
            setMinimized(false)
          }}
          aria-expanded={false}
          aria-haspopup="dialog"
          aria-controls={labelId}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/35 opacity-50 blur-lg transition-opacity group-hover:opacity-80 motion-reduce:opacity-40" />
          <span className="relative flex max-w-[min(22rem,calc(100vw-2rem))] items-center gap-2 rounded-full border border-white/15 bg-[rgba(14,11,9,0.78)] px-3 py-2.5 text-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6),0_0_36px_-14px_rgba(245,158,11,0.14)] ring-1 ring-inset ring-amber-500/10 backdrop-blur-3xl backdrop-saturate-150 transition-[transform,box-shadow] duration-300 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_20px_56px_-18px_rgba(0,0,0,0.55),0_0_48px_-12px_rgba(245,158,11,0.2)] motion-reduce:group-hover:scale-100 sm:gap-3 sm:px-4 sm:py-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-amber-500/25 bg-zinc-950 shadow-inner ring-2 ring-amber-400/15">
              {!avatarBroken ? (
                <img
                  src={AVATAR_SRC}
                  alt=""
                  aria-hidden
                  width={40}
                  height={40}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  onError={() => setAvatarBroken(true)}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-800">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              )}
            </span>
            <span className="min-w-0 pr-0.5">
              <span className="block truncate text-sm font-medium text-white">Studio AI</span>
              <span className="block truncate text-[11px] text-amber-100/70 sm:text-xs">
                {hasStream ? 'Tap to open' : 'Demo · tap to open'}
              </span>
            </span>
          </span>
        </button>
      )}

      {open && (
        <div
          id={labelId}
          role="dialog"
          aria-modal="true"
          aria-label={hasStream ? 'Studio AI video chat' : 'Studio AI demo'}
          className={`fixed z-[100] transition-all duration-300 ${
            minimized
              ? 'bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] w-[min(100vw-2rem,22rem)]'
              : 'bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] h-[min(100dvh-6.5rem,680px)] w-[min(100vw-2rem,400px)] sm:h-[680px] sm:w-[400px]'
          }`}
        >
          <motion.div
            layout
            className="flex h-full max-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[rgba(10,8,7,0.82)] shadow-[0_24px_64px_-28px_rgba(0,0,0,0.75),0_0_0_1px_rgba(245,158,11,0.06)_inset] ring-1 ring-inset ring-white/[0.06] backdrop-blur-2xl backdrop-saturate-150"
          >
            <header className="flex shrink-0 items-start justify-between gap-3 border-b border-black/30 bg-gradient-to-b from-[#1f1814] via-[#14100d] to-[#0c0a08] px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <HeaderAvatar src={AVATAR_SRC} broken={avatarBroken} onError={() => setAvatarBroken(true)} />
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold tracking-tight text-white">Studio AI</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-emerald-400/95">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 pt-0.5 text-[13px] font-medium text-white/90">
                <button
                  type="button"
                  className="rounded-md px-1 py-0.5 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setMinimized((m) => !m)}
                >
                  {minimized ? 'Expand' : 'Minimize'}
                </button>
                <button type="button" className="rounded-md px-1 py-0.5 transition hover:bg-white/10 hover:text-white" onClick={close}>
                  Close
                </button>
              </div>
            </header>

            {!minimized && (
              <>
                {hasStream ? (
                  <div className="relative min-h-0 flex-1 overflow-hidden bg-[#0a0a0a]">
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] opacity-[0.08]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                      aria-hidden
                    />
                    <iframe
                      title="Studio AI stream"
                      src={EMBED_URL}
                      className="relative z-[1] h-full w-full border-0"
                      style={{
                        width: '135%',
                        height: '135%',
                        marginLeft: '-5%',
                        marginTop: '-5%',
                      }}
                      allow="camera; microphone; autoplay; fullscreen"
                    />
                  </div>
                ) : (
                  <PortalHero
                    src={AVATAR_SRC}
                    alt={AI_AVATAR_ALT}
                    broken={avatarBroken}
                    onError={() => setAvatarBroken(true)}
                    reduceMotion={reduceMotion}
                  />
                )}

                <footer className="shrink-0 border-t border-black/10 bg-[#efe6d4] px-3 pb-[max(1rem,env(safe-area-inset-bottom,0px))] pt-3 text-[#3a3630] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-4 sm:pb-4">
                  <div className="flex min-w-0 gap-2 text-[13px] leading-snug">
                    <WarningTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p className="min-w-0 break-words">
                      AI responses can be unpredictable. Use discretion; do not share secrets on camera or mic.
                      {hasStream && (
                        <span className="mt-1 block text-[11px] leading-relaxed text-[#5c574e]">
                          Third-party stream — not legal or financial advice.
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="mt-3 min-w-0 break-words text-xs leading-relaxed text-[#5c574e]">
                    {hasStream
                      ? micOn
                        ? 'Mic is on — use controls inside the video or your provider’s shortcuts.'
                        : 'Enable your microphone (recommended) before you start speaking.'
                      : 'Optional: enable microphone or camera when you connect this widget to your voice stack.'}
                  </p>
                  <div className="mt-4 flex min-w-0 flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={enableMic}
                      disabled={!hasStream}
                      title={!hasStream ? 'Connect a stream URL in .env.local to enable' : undefined}
                      className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold text-white shadow-sm transition ${
                        !hasStream
                          ? 'cursor-not-allowed bg-zinc-500/45 opacity-70'
                          : micOn
                            ? 'bg-emerald-700 hover:bg-emerald-600'
                            : 'bg-zinc-700 hover:bg-zinc-600'
                      }`}
                    >
                      <svg className="h-5 w-5 shrink-0 opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                      {micOn ? 'Mic off' : 'Enable mic'}
                    </button>
                    <button
                      type="button"
                      onClick={enableCam}
                      disabled={!hasStream}
                      title={!hasStream ? 'Connect a stream URL in .env.local to enable' : undefined}
                      className={`flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold text-white shadow-sm transition ${
                        !hasStream
                          ? 'cursor-not-allowed bg-zinc-500/45 opacity-70'
                          : camOn
                            ? 'bg-emerald-700 hover:bg-emerald-600'
                            : 'bg-zinc-700 hover:bg-zinc-600'
                      }`}
                    >
                      <svg className="h-5 w-5 shrink-0 opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      {camOn ? 'Cam off' : 'Enable cam'}
                    </button>
                  </div>
                  {!hasStream && (
                    <p className="mt-3 min-w-0 break-words text-center text-[11px] leading-relaxed text-[#6b655a] sm:text-left">
                      Live stream: add{' '}
                      <span className="font-mono text-[10px] text-[#4a453d]">VITE_ATHENE_STREAM_EMBED_URL</span> to{' '}
                      <span className="font-mono text-[10px]">.env.local</span> and restart the dev server.{' '}
                      <Link to="/contact" className="font-medium text-amber-900/90 underline decoration-amber-800/30 underline-offset-2 hover:text-amber-950" onClick={close}>
                        Contact
                      </Link>
                    </p>
                  )}
                </footer>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
}
