const encoder = new TextEncoder()

export async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value))
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function readGateUnlock(storageKey: string): boolean {
  try {
    return sessionStorage.getItem(storageKey) === '1'
  } catch {
    return false
  }
}

export function writeGateUnlock(storageKey: string, unlocked: boolean): void {
  try {
    if (unlocked) {
      sessionStorage.setItem(storageKey, '1')
      return
    }
    sessionStorage.removeItem(storageKey)
  } catch {
    // Private browsing or blocked storage should not crash the gate.
  }
}
