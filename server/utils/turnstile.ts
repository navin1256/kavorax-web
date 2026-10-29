import type { H3Event } from 'h3'

/**
 * Validates Cloudflare Turnstile tokens for server-side form submissions.
 * Fails closed: if NUXT_TURNSTILE_SECRET_KEY is missing or verification fails,
 * it returns success: false to protect endpoints from automated abuse.
 */
export async function validateTurnstile(
  token: string | undefined,
  event: H3Event
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.NUXT_TURNSTILE_SECRET_KEY

  if (!secretKey) {
    return {
      success: false,
      error: 'Turnstile security key is not configured on the server.'
    }
  }

  if (!token) {
    return {
      success: false,
      error: 'Security verification token is required.'
    }
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
