import type { H3Event } from 'h3'

/**
 * Validates Cloudflare Turnstile tokens for server-side form submissions.
 * If NUXT_TURNSTILE_SECRET_KEY is not configured (e.g., local development),
 * verification passes safely to prevent blocking developer workflows.
 */
export async function validateTurnstile(
  token: string | undefined,
  event: H3Event
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.NUXT_TURNSTILE_SECRET_KEY

  if (!secretKey) {
    // Development or unconfigured environment: safe passthrough
    return { success: true }
  }

  if (!token) {
    return { success: false, error: 'Anti-spam verification token is required.' }
  }

  try {
    const ip = getRequestIP(event, { xForwardedFor: true }) || ''
    const response = await $fetch<{ success: boolean; 'error-codes'?: string[] }>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
          remoteip: ip
        }).toString()
      }
    )

    if (!response.success) {
      return {
        success: false,
        error: 'Security challenge verification failed. Please refresh and try again.'
      }
    }

    return { success: true }
  } catch (err: any) {
    return {
      success: false,
      error: `Security verification service unreachable: ${err?.message || 'unknown error'}`
    }
  }
}
