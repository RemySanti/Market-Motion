import { Outlet } from 'react-router-dom'
import { AiStreamAvatarWidget } from '../components/AiStreamAvatarWidget'
import { Background } from '../components/Background'
import { ScrollProgressBar } from '../components/ScrollProgressBar'
import { SkipLink } from '../components/SkipLink'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function MainLayout() {
  return (
    <div className="relative flex min-h-svh min-w-0 flex-col overflow-x-hidden">
      <Background />
      <ScrollProgressBar />
      <SkipLink />
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 flex-1 scroll-mt-[var(--header-offset)] outline-none"
      >
        <Outlet />
      </main>
      <SiteFooter />
      <AiStreamAvatarWidget />
    </div>
  )
}
