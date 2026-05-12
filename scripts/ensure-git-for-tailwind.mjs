import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'

// Tailwind v4 Oxide uses git to bound ignore scanning; without `.git`, parent
// `.gitignore` rules can exclude all of `src` and utilities won't be generated.
if (!existsSync('.git')) {
  try {
    execSync('git init', { stdio: 'ignore' })
    console.log('[ensure-git-for-tailwind] Ran `git init` so Tailwind can scan this project.')
  } catch {
    console.warn(
      '[ensure-git-for-tailwind] No `.git` and `git init` failed. Install Git or run `git init` here; otherwise Tailwind may omit most utility CSS.',
    )
  }
}
