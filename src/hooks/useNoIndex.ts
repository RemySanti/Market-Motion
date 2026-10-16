import { useEffect } from 'react'

/** Keep proposal URLs out of search indexes while the page is mounted. */
export function useNoIndex() {
  useEffect(() => {
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (existing) {
      const prev = existing.content
      existing.content = 'noindex, nofollow'
      return () => {
        existing.content = prev
      }
    }

    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      meta.remove()
    }
  }, [])
}
