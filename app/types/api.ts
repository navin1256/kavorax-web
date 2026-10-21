/**
 * KavoraX Global — API Types & Backend DTO Contracts
 * Aligned with Spring Boot backend (com.kavorax.api.dto)
 */

/**
 * Request payload for POST /api/v1/contact-messages
 * Validated by Spring Boot ContactMessageRequest
 */
export interface ContactMessagePayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

/**
 * Successful response entity from POST /api/v1/contact-messages
 */
export interface ContactMessageResponse {
  id: number
  name: string
  email: string
  phone?: string | null
  subject?: string | null
  message: string
  status: string
  createdAt: string
}

/**
 * Request payload for POST /api/v1/demo-requests
 * Validated by Spring Boot DemoRequestDto (requirements mapped via @JsonProperty("reqs"))
 */
export interface DemoRequestPayload {
  name: string
  email: string
  company?: string
  reqs?: string
}

/**
 * Successful response entity from POST /api/v1/demo-requests
 */
export interface DemoRequestResponse {
  id: number
  name: string
  email: string
  company?: string | null
  type?: string
  phone?: string | null
  requirements?: string | null
  message?: string | null
  date?: string | null
  timeSlot?: string | null
  status: string
  createdAt: string
}

/**
 * Spring Boot Standard Error Response
 */
export interface ApiErrorResponse {
  status?: number
  error?: string
  message?: string
  timestamp?: string
  validationErrors?: Record<string, string> | null
}

/**
 * Unified Client Result Wrapper
 */
export interface ApiResult<T> {
  success: boolean
  data?: T
  error?: string
  validationErrors?: Record<string, string>
  statusCode?: number
}
