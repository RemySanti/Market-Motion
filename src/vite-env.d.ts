/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Full Athene Alerts / stream embed URL (includes api_key query). */
  readonly VITE_ATHENE_STREAM_EMBED_URL?: string
  /** Optional URL for the FAB / demo AI avatar (defaults to bundled `src/assets/ai-avatar.png`). */
  readonly VITE_AI_AVATAR_IMAGE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
