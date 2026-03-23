'use client'

/**
 * I18nProvider
 *
 * Imports the i18next instance (initialised synchronously) so it's available
 * on both server and client. No delayed render — avoids hydration mismatches.
 */

import '@/i18n'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
