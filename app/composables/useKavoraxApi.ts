import { ref } from 'vue'
import type {
  ContactMessagePayload,
  ContactMessageResponse,
  DemoRequestPayload,
  DemoRequestResponse,
  ApiErrorResponse,
  ApiResult
} from '~/types/api'

/**
 * Centralized API Composable for KavoraX Global Public Website
 * Interfaces with the Spring Boot backend (`kavorax-api`).
 */
export function useKavoraxApi() {
  const isSubmitting = ref(false)

  /**
   * Resolves the full URL for a given API endpoint path.
   * Handles trailing slashes and ensures /api prefix is normalized.
   */
  function resolveEndpoint(path: string): string {
    const config = useRuntimeConfig()
    const base = (config.public.apiBase || 'http://localhost:8080').replace(/\/+$/, '')
    const prefix = base.endsWith('/api') ? base : `${base}/api`
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${prefix}${cleanPath}`
  }

  /**
   * Safe parser for fetch errors from Spring Boot or network layer.
   */
  function parseApiError<T>(err: unknown): ApiResult<T> {
    const fetchErr = err as {
      statusCode?: number
      status?: number
      response?: { _data?: ApiErrorResponse; status?: number }
      message?: string
    }

    const statusCode = fetchErr.statusCode || fetchErr.status || fetchErr.response?.status || 0
    const responseData = fetchErr.response?._data

    if (responseData && typeof responseData === 'object') {
      const validationErrors: Record<string, string> = {}
      if (responseData.validationErrors && typeof responseData.validationErrors === 'object') {
        for (const [key, val] of Object.entries(responseData.validationErrors)) {
          if (typeof val === 'string') {
            validationErrors[key] = val
          }
        }
      }

      return {
        success: false,
        statusCode,
        error: responseData.message || responseData.error || 'The request could not be processed.',
        validationErrors: Object.keys(validationErrors).length > 0 ? validationErrors : undefined
      }
    }

    // Network disconnection or backend offline
    if (statusCode === 0 || !fetchErr.response) {
      return {
        success: false,
        statusCode: 0,
        error:
          'Unable to reach KavoraX services. Please verify your connection or try again shortly.'
      }
    }

    if (statusCode >= 500) {
      return {
        success: false,
        statusCode,
        error:
          'A server error occurred while processing your request. Please try again in a few moments.'
      }
    }

    return {
      success: false,
      statusCode,
      error: fetchErr.message || 'An unexpected error occurred during submission.'
    }
  }

  /**
   * Submits a public contact message to POST /api/v1/contact-messages
   */
  async function submitContactMessage(
    payload: ContactMessagePayload
  ): Promise<ApiResult<ContactMessageResponse>> {
    if (isSubmitting.value) {
      return {
        success: false,
        error: 'A submission is already in progress. Please wait.'
      }
    }

    isSubmitting.value = true
    try {
      const url = resolveEndpoint('/v1/contact-messages')
      const response = await $fetch<ContactMessageResponse>(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: {
          name: payload.name.trim(),
          email: payload.email.trim(),
          phone: payload.phone?.trim() || null,
          subject: payload.subject?.trim() || null,
          message: payload.message.trim()
        }
      })

      return {
        success: true,
        data: response,
        statusCode: 201
      }
    } catch (err) {
      return parseApiError<ContactMessageResponse>(err)
    } finally {
      isSubmitting.value = false
    }
  }

  /**
   * Submits an enterprise demo booking request to POST /api/v1/demo-requests
   */
  async function submitDemoRequest(
    payload: DemoRequestPayload
  ): Promise<ApiResult<DemoRequestResponse>> {
    if (isSubmitting.value) {
      return {
        success: false,
        error: 'A submission is already in progress. Please wait.'
      }
    }

    isSubmitting.value = true
    try {
      const url = resolveEndpoint('/v1/demo-requests')
      const response = await $fetch<DemoRequestResponse>(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: {
          name: payload.name.trim(),
          email: payload.email.trim(),
          company: payload.company?.trim() || null,
          reqs: payload.reqs?.trim() || null
        }
      })

      return {
        success: true,
        data: response,
        statusCode: 201
      }
    } catch (err) {
      return parseApiError<DemoRequestResponse>(err)
    } finally {
      isSubmitting.value = false
    }
  }

  /**
   * Optional health probe to verify API connectivity
   */
  async function checkHealth(): Promise<boolean> {
    try {
      const url = resolveEndpoint('/health')
      const response = await $fetch<{ status: string }>(url)
      return response.status === 'UP'
    } catch {
      return false
    }
  }

  return {
    isSubmitting,
    submitContactMessage,
    submitDemoRequest,
    checkHealth,
    resolveEndpoint
  }
}
