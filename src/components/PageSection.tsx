import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'section'> & {
  /** When true, section is picked up by GSAP scroll reveal in `PageShell`. */
  reveal?: boolean
}

export function PageSection({ reveal = true, children, ...rest }: Props) {
  return (
    <section {...(reveal ? { 'data-reveal': '' as const } : {})} {...rest}>
      {children}
    </section>
  )
}
