/**
 * KavoraX Global — Frontend-Backend Integration Test Suite
 * Tests all 12 points defined in Master Prompt 1
 */

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const API_BASE = process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api'
let passed = 0
let failed = 0

function assert(condition, description) {
  if (condition) {
    console.log(`  [PASS] ${description}`)
    passed++
  } else {
    console.error(`  [FAIL] ${description}`)
    failed++
  }
}

async function test1_ValidContactSubmission() {
  console.log('\nTest 1: Valid Contact Submission')
  const payload = {
    name: 'Integration Test User',
    email: 'integration.tester@kavorax-test.com',
    subject: '[Solutions] Test Architecture Corp',
    message: 'This is an automated integration test verifying end-to-end database persistence.'
  }

  const res = await fetch(`${API_BASE}/v1/contact-messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  assert(res.status === 201, `Status is 201 Created (got ${res.status})`)
  const data = await res.json()
  assert(data.id > 0, `Returned valid database entity ID: ${data.id}`)
  assert(data.name === payload.name, `Persisted name matches: "${data.name}"`)
  assert(data.email === payload.email, `Persisted email matches: "${data.email}"`)
  assert(data.subject === payload.subject, `Persisted subject matches: "${data.subject}"`)
  assert(data.status === 'RECEIVED', `Entity status is RECEIVED (got "${data.status}")`)
  return data.id
}

async function test2_InvalidContactFormInput() {
  console.log('\nTest 2: Invalid Contact Form Input (Missing required fields)')
  const payload = {
    name: '',
    email: 'not-an-email',
    message: ''
  }

  const res = await fetch(`${API_BASE}/v1/contact-messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  assert(res.status === 400, `Status is 400 Bad Request (got ${res.status})`)
  const data = await res.json()
  assert(data.validationErrors !== null, 'Backend returns validationErrors object')
  assert(data.validationErrors.name !== undefined, 'Validation caught empty name')
  assert(data.validationErrors.email !== undefined, 'Validation caught invalid email')
  assert(data.validationErrors.message !== undefined, 'Validation caught empty message')
}

async function test3_ValidDemoRequestSubmission() {
  console.log('\nTest 3: Valid Demo Request Submission')
  const payload = {
    name: 'Eleanor Vance',
    email: 'eleanor.vance@apexlogistics.io',
    company: 'Apex Global Logistics Corp',
    reqs: '[Supply Chain & Logistics] [Operations Platform] Role: VP Logistics | Multi-terminal freight synchronization'
  }

  const res = await fetch(`${API_BASE}/v1/demo-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  assert(res.status === 201, `Status is 201 Created (got ${res.status})`)
  const data = await res.json()
  assert(data.id > 0, `Returned valid database entity ID: ${data.id}`)
  assert(data.name === payload.name, `Persisted name matches: "${data.name}"`)
  assert(data.email === payload.email, `Persisted email matches: "${data.email}"`)
  assert(data.company === payload.company, `Persisted company matches: "${data.company}"`)
  assert(data.requirements === payload.reqs, `Requirements correctly mapped and stored`)
  assert(data.status === 'PENDING', `Entity status is PENDING (got "${data.status}")`)
  return data.id
}

async function test4_MissingRequiredFieldsDemo() {
  console.log('\nTest 4: Missing Required Fields on Demo Request')
  const payload = {
    name: '',
    email: ''
  }

  const res = await fetch(`${API_BASE}/v1/demo-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  assert(res.status === 400, `Status is 400 Bad Request (got ${res.status})`)
  const data = await res.json()
  assert(data.validationErrors !== null, 'Backend returns validationErrors object')
  assert(data.validationErrors.name !== undefined, 'Validation caught empty name')
  assert(data.validationErrors.email !== undefined, 'Validation caught empty email')
}

async function test5_BackendValidationErrorShape() {
  console.log('\nTest 5: Backend Validation Error Handling Shape')
  const payload = {
    name: 'Valid Name',
    email: 'bad-email-format',
    message: 'Valid message content'
  }

  const res = await fetch(`${API_BASE}/v1/contact-messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const data = await res.json()
  assert(typeof data.validationErrors === 'object', 'validationErrors is a key-value map')
  assert(data.validationErrors.email === 'Email must be valid', `Correct error message: "${data.validationErrors.email}"`)
}

async function test6_NoMockCodeRemainsInComponents() {
  console.log('\nTest 6: Static Code Verification (No Mock Code Remaining)')
  
  const contactCode = readFileSync(resolve('./app/components/contact/ContactFormSection.vue'), 'utf-8')
  const demoCode = readFileSync(resolve('./app/components/demo/DemoFormSection.vue'), 'utf-8')

  assert(!contactCode.includes("setTimeout(resolve, 600)"), 'Contact form removed mock setTimeout simulation')
  assert(!contactCode.includes("submissionStatus.value = 'validated'"), "Contact form removed 'validated' mock status")
  assert(contactCode.includes('useKavoraxApi'), 'Contact form uses centralized useKavoraxApi')
  assert(contactCode.includes('submitContactMessage'), 'Contact form calls submitContactMessage')

  assert(!demoCode.includes("setTimeout(resolve, 600)"), 'Demo form removed mock setTimeout simulation')
  assert(!demoCode.includes("submissionStatus.value = 'validated'"), "Demo form removed 'validated' mock status")
  assert(demoCode.includes('useKavoraxApi'), 'Demo form uses centralized useKavoraxApi')
  assert(demoCode.includes('submitDemoRequest'), 'Demo form calls submitDemoRequest')
}

async function test7_RuntimeConfigAndEnvDeclared() {
  console.log('\nTest 7: Environment & Runtime Configuration Verification')
  
  const nuxtConfig = readFileSync(resolve('./nuxt.config.ts'), 'utf-8')
  assert(nuxtConfig.includes('runtimeConfig:'), 'nuxt.config.ts defines runtimeConfig')
  assert(nuxtConfig.includes('apiBase:'), 'nuxt.config.ts defines public.apiBase')
  assert(nuxtConfig.includes('siteUrl:'), 'nuxt.config.ts defines public.siteUrl')

  const envFile = readFileSync(resolve('./.env'), 'utf-8')
  assert(envFile.includes('NUXT_PUBLIC_API_BASE=http://localhost:8080'), '.env defines NUXT_PUBLIC_API_BASE')
}

async function runAll() {
  console.log('========================================================')
  console.log('KavoraX Public Frontend-Backend Integration Test Suite')
  console.log(`Target Backend Base URL: ${API_BASE}`)
  console.log('========================================================')

  try {
    await test1_ValidContactSubmission()
    await test2_InvalidContactFormInput()
    await test3_ValidDemoRequestSubmission()
    await test4_MissingRequiredFieldsDemo()
    await test5_BackendValidationErrorShape()
    await test6_NoMockCodeRemainsInComponents()
    await test7_RuntimeConfigAndEnvDeclared()

    console.log('\n========================================================')
    console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`)
    console.log('========================================================\n')

    if (failed > 0) {
      process.exit(1)
    }
  } catch (err) {
    console.error('Test execution failed with error:', err)
    process.exit(1)
  }
}

runAll()
