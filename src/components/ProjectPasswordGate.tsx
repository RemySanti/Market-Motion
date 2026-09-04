import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { readGateUnlock, sha256Hex, writeGateUnlock } from '../lib/projectGate'
import { GlassPanel } from './GlassPanel'

type GateRender = (api: { lock: () => void }) => ReactNode

type Props = {
  storageKey: string
  passwordSha256: string
  kicker: string
  title: string
  lead: string
  children: GateRender
}

export function ProjectPasswordGate({
  storageKey,
  passwordSha256,
  kicker,
  title,
  lead,
  children,
}: Props) {
  const passwordId = useId()
  const errorId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [unlocked, setUnlocked] = useState(() => readGateUnlock(storageKey))
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    if (unlocked) return
    inputRef.current?.focus()
  }, [unlocked])

  useEffect(() => {
    if (unlocked) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [unlocked])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (checking) return

    const trimmed = password.trim()
    if (!trimmed) {
      setError('Enter the project password to continue.')
      return
    }

    setChecking(true)
    setError('')
    try {
      const hash = await sha256Hex(trimmed)
      if (hash !== passwordSha256) {
        setError('That password does not match.')
        setPassword('')
        inputRef.current?.focus()
        return
      }
      writeGateUnlock(storageKey, true)
      setUnlocked(true)
      setPassword('')
    } catch {
      setError('Could not verify the password in this browser. Try again.')
    } finally {
      setChecking(false)
    }
  }

  function lock() {
    writeGateUnlock(storageKey, false)
    setUnlocked(false)
    setPassword('')
    setError('')
  }

  if (!unlocked) {
    return createPortal(
      <div
        className="fixed inset-0 z-[110] flex items-center justify-center bg-[rgba(3,4,10,0.94)] px-4 py-10 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-gate-title"
      >
        <GlassPanel className="w-full max-w-md p-6 sm:p-8" hover>
          <p className="mm-pill-kicker mm-pill-shimmer-host eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
            {kicker}
          </p>
          <h1 id="project-gate-title" className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{lead}</p>
          <form className="mt-7 space-y-4" onSubmit={handleSubmit} aria-describedby={error ? errorId : undefined}>
            <div className="text-left">
              <label htmlFor={passwordId} className="field-label">
                Project password
              </label>
              <div className="relative">
                <input
                  ref={inputRef}
                  id={passwordId}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  className="field-input pr-24"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    if (error) setError('')
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 min-h-11 -translate-y-1/2 rounded-lg px-3 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {error ? (
              <p id={errorId} role="alert" className="text-sm text-rose-300">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn-primary w-full justify-center" disabled={checking}>
              {checking ? 'Checking…' : 'Unlock brief'}
            </button>
          </form>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            This page stays unlocked for the rest of this browser tab. Close the tab to lock it again.
          </p>
        </GlassPanel>
      </div>,
      document.body,
    )
  }

  return <>{children({ lock })}</>
}
