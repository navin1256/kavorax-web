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

  // Basic validation
  if (!body.email || !body.name) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }
  return { success: true, message: 'Enquiry received successfully', data: body }
})