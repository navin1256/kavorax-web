export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Verify Turnstile security token if configured
  const turnstileCheck = await validateTurnstile(
    body.turnstileToken || body['cf-turnstile-response'],
    event
  )
  if (!turnstileCheck.success) {
    throw createError({ statusCode: 403, statusMessage: turnstileCheck.error })
  }

  if (!body.email || !body.name || !body.date || !body.time) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }
  return { success: true, message: 'Demo booked successfully', data: body }
})