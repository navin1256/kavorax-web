export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 1. Verify Turnstile token with Cloudflare (fail closed)
  const turnstileToken = body?.turnstileToken || body?.['cf-turnstile-response']
  const turnstileCheck = await validateTurnstile(turnstileToken, event)
  if (!turnstileCheck.success) {
    throw createError({
      statusCode: 403,
      statusMessage: turnstileCheck.error || 'Turnstile verification failed'
    })
  }

  // 2. Validate required fields
  if (!body?.name?.trim() || !body?.email?.trim() || !body?.company?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields (name, email, company)'
    })
  }

  // 3. Extract only known fields for Spring Boot DTO (DemoRequestDto)
  const cleanPayload = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    company: String(body.company).trim(),
    reqs: body.reqs ? String(body.reqs).trim() : null
  }

  // 4. Forward to Spring Boot backend
  const config = useRuntimeConfig(event)
  const rawBase = (config.public.apiBase || 'http://localhost:8080').replace(/\/+$/, '')
  const prefix = rawBase.endsWith('/api') ? rawBase : `${rawBase}/api`
  const targetUrl = `${prefix}/v1/demo-requests`

  try {
    const response = await $fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: cleanPayload
    })
    return response
  } catch (err: any) {
    const statusCode = err?.response?.status || err?.statusCode || 500
    const errorData = err?.response?._data || err?.data
    throw createError({
      statusCode,
      statusMessage: errorData?.message || errorData?.error || err?.message || 'Failed to submit demo request',
      data: errorData
    })
  }
})
