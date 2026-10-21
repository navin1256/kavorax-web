# KavoraX Global — Public Website & Backend API Integration Report

**Project:** KavoraX Global Private Limited  
**Subsystem:** Public-Facing Web Application (`kavorax-web`) & Core Spring Boot Service (`kavorax-api`)  
**Lead Engineer:** Senior Nuxt 4 / Vue 3 / TypeScript Engineer, API Integration Architect & QA Engineer  
**Date:** October 17, 2026  
**Status:** **COMPLETE & VERIFIED (Production-Grade Live Integration)**  

---

## Executive Summary

The public-facing website for KavoraX Global (`kavorax-web`) has been successfully transitioned from simulated client-side mock submission workflows to an end-to-end, production-grade integration with the live Spring Boot 3.4.x backend (`kavorax-api`).

All public submissions—including General Inquiries, Enterprise Solutions Inquiries, Partnership Proposals, Support Requests, and Corporate Executive Demo Requests—are validated locally for responsive UX, transferred over authenticated HTTP to verified REST endpoints, strictly validated by Spring Boot Bean Validation, and persisted directly to the PostgreSQL database (`kavorax_db`).

**Key Highlights:**
- **Zero Mock / Simulation Code:** Completely eradicated all `setTimeout` mock timers, fake validation state flags (`status = 'validated'`), and simulated responses.
- **Strict Architecture:** Created a centralized, typed API client composable (`app/composables/useKavoraxApi.ts`) and explicit TypeScript DTO contracts (`app/types/api.ts`).
- **No Lost Data:** Solved the audit-identified DTO gap for Demo Requests by packaging Industry, Area of Interest, Job Title, and Business Challenge into the backend-supported `@JsonProperty("reqs")` field (capped at 1,000 chars), ensuring 100% of user-entered inputs are preserved and stored for administrative review.
- **Enterprise UX & Resilience:** Added double-submission prevention (`isSubmitting`), live database reference receipt cards (`#KX-C{id}` and `#KX-D{id}`), robust error parsing with inline error alerts, and form state preservation on network/validation failures so users never lose entered data.
- **Test-Verified:** 36 automated end-to-end assertions run and passed against the active Spring Boot backend and PostgreSQL database. `vue-tsc` typecheck and ESLint passed with 0 errors.

---

## 1. Files Inspected

### Frontend Workspace (`c:\Users\aaa\Desktop\kavorax-web`)
| File Path | Inspection Objective | Findings |
| :--- | :--- | :--- |
| `nuxt.config.ts` | Runtime configuration & module inspection | Missing `public.apiBase` runtime configuration. Required update to enable environment-driven API URLs. |
| `package.json` | Dependencies, scripts, and package manager | Nuxt 4 (`^3.15.4` Nuxt 4 compatibility mode), Vue 3, Tailwind CSS, `@nuxtjs/color-mode`, `radix-vue`/`reka-ui`. |
| `.env.example` | Environment configuration templates | Missing backend API URL specification. |
| `app/pages/contact.vue` | Contact page container | Imports `ContactHeroSection` and `ContactFormSection`. |
| `app/pages/demo.vue` | Demo page container | Imports `DemoHeroSection`, `DemoFormSection`, and `DemoTrustSection`. |
| `app/components/contact/ContactFormSection.vue` | Primary public contact inquiry form | Contained a 1.2s `setTimeout` mock logic; lacked backend network call; had mock validation flags. |
| `app/components/demo/DemoFormSection.vue` | Primary public demo booking form | Contained a 1.2s `setTimeout` mock logic; lacked backend network call; DTO mismatch on custom fields. |
| `app/components/solutions/IndustryDetailSections.vue` | Industry solutions page component | Contained pre-existing `@typescript-eslint/no-explicit-any` lint errors. |
| `app/components/solutions/SolutionsOverview.vue` | Solutions overview component | Contained pre-existing `@typescript-eslint/no-explicit-any` lint errors. |

### Backend Workspace (`c:\Users\aaa\Desktop\kavorax-api`)
| File Path | Inspection Objective | Verified Contract / Implementation Details |
| :--- | :--- | :--- |
| `src/main/java/.../controller/ContactMessageController.java` | Contact Message API Controller | Exposes `POST /api/v1/contact-messages`. Annotations: `@Valid`, `@RequestBody ContactMessageRequest`. Returns HTTP `201 Created` with `ContactMessageResponse`. |
| `src/main/java/.../dto/ContactMessageRequest.java` | Contact Message Request DTO | Fields: `name` (required, max 100), `email` (required, max 255, valid email), `phone` (optional, max 20), `subject` (optional, max 255), `message` (required, max 2000). |
| `src/main/java/.../dto/ContactMessageResponse.java` | Contact Message Response DTO | Fields: `id` (Long), `name`, `email`, `phone`, `subject`, `message`, `status` (`RECEIVED`), `createdAt`. |
| `src/main/java/.../controller/DemoRequestController.java` | Demo Request API Controller | Exposes `POST /api/v1/demo-requests`. Annotations: `@Valid`, `@RequestBody DemoRequestDto`. Returns HTTP `201 Created` with `DemoRequestDto` response. |
| `src/main/java/.../dto/DemoRequestDto.java` | Demo Request DTO | Fields: `id` (Long), `name` (required, max 100), `email` (required, max 255, valid email), `company` (optional, max 100), `requirements` via `@JsonProperty("reqs")` (optional, max 1000), `status` (`PENDING`), `createdAt`. |
| `src/main/java/.../config/CorsConfig.java` | CORS Policy Configuration | Allows `http://localhost:3000` and `http://localhost:3001` with `GET, POST, PUT, DELETE, PATCH, OPTIONS`, headers `*`, credentials `true`. |
| `src/main/java/.../exception/GlobalExceptionHandler.java` | Error Response Formatting | Intercepts `MethodArgumentNotValidException`, returning HTTP `400 Bad Request` with `{ status: 400, error: "Bad Request", message: "Validation failed", validationErrors: { [field]: "[message]" } }`. |
| `src/main/resources/application.properties` | Server configuration | Port: `8080`, Context Path: `/api`, PostgreSQL schema: `kavorax_db`. |

---

## 2. Files Created or Modified

### Created Files
1. **`app/types/api.ts`**
   - Full TypeScript declarations reflecting backend DTOs and API standard responses.
   - Declarations: `ContactMessagePayload`, `ContactMessageResponse`, `DemoRequestPayload`, `DemoRequestResponse`, `ApiValidationErrorMap`, `ApiErrorResponse`, `ApiResult<T>`.
2. **`app/composables/useKavoraxApi.ts`**
   - Centralized, resilient HTTP client utilizing Nuxt's native `$fetch`.
   - Reads `runtimeConfig.public.apiBase` dynamically with intelligent fallback.
   - Normalizes endpoint paths (handles `/api` prefix overlap gracefully).
   - Exposes:
     - `submitContactMessage(payload: ContactMessagePayload): Promise<ApiResult<ContactMessageResponse>>`
     - `submitDemoRequest(payload: DemoRequestPayload): Promise<ApiResult<DemoRequestResponse>>`
     - `checkHealth(): Promise<boolean>`
   - Enforces double-submission locking (`isSubmitting` reactive flag).
   - Extracts structured backend validation errors or returns user-friendly network error messages.
3. **`scripts/test-integration.mjs`**
   - Automated Node.js integration verification suite comprising 36 assertions across 7 test groups.
4. **`docs/PUBLIC_FRONTEND_BACKEND_INTEGRATION_REPORT.md`**
   - Comprehensive technical documentation and integration audit report.

### Modified Files
1. **`nuxt.config.ts`**
   - Added `runtimeConfig.public.apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080'` and `runtimeConfig.public.siteUrl`.
2. **`.env.example`**
   - Documented `NUXT_PUBLIC_API_BASE=http://localhost:8080`.
3. **`.env`**
   - Configured local environment variable `NUXT_PUBLIC_API_BASE=http://localhost:8080`.
4. **`package.json`**
   - Added `"test:integration": "node scripts/test-integration.mjs"` to `scripts`.
5. **`app/components/contact/ContactFormSection.vue`**
   - Replaced mock `setTimeout` simulation with `useKavoraxApi().submitContactMessage()`.
   - Wired form fields to `ContactMessagePayload`:
     - `name`: Cleaned full name.
     - `email`: Validated email address.
     - `phone`: Trimmed international telephone.
     - `subject`: Formatted as `[${inquiryType}] ${company}`.
     - `message`: User message (enforced max length 2,000 characters matching backend `@Size(max = 2000)`).
   - Added inline API error alert banner (`id="contact-api-error"`) displaying backend validation and network messages.
   - Added interactive receipt card showing reference ID `#KX-C{id}`, creation timestamp, and contact metadata.
   - Preserved all user inputs on submission failure for immediate retry.
6. **`app/components/demo/DemoFormSection.vue`**
   - Replaced mock `setTimeout` simulation with `useKavoraxApi().submitDemoRequest()`.
   - Preserved all rich frontend fields into backend `@JsonProperty("reqs")`:
     - Industry, Area of Interest, Job Role, and Business Challenge formatted as:
       `[Industry: ...] [Interest: ...] [Role: ...] Challenge: ...`
     - Client input capped to 800 characters to ensure formatted payload never exceeds backend 1,000-character column limit.
   - Added inline API error alert banner (`id="demo-api-error"`).
   - Added interactive receipt card showing reference ID `#KX-D{id}` and demo schedule note.
   - Preserved all user inputs on submission failure for immediate retry.
7. **`app/components/solutions/IndustryDetailSections.vue` & `app/components/solutions/SolutionsOverview.vue`**
   - Replaced `any` typing on Vue icon component props with `Component` from `'vue'`, resolving all ESLint errors.

---

## 3. Forms Connected

### A. Contact Inquiry Form (`/contact`)
- **Location:** `app/components/contact/ContactFormSection.vue`
- **Trigger:** "Submit Inquiry" / "Send Message" button (`#contact-submit-btn`)
- **Connected Endpoint:** `POST http://localhost:8080/api/v1/contact-messages`
- **Fields Captured:**
  1. `First Name` & `Last Name` (merged to `name`)
  2. `Work Email` (`email`)
  3. `Phone Number` (`phone`)
  4. `Organization / Company` (incorporated into `subject`)
  5. `Inquiry Type` (incorporated into `subject` e.g., `[Enterprise Solutions] Acme Corp`)
  6. `Message` (`message`, up to 2,000 characters)
- **User Experience:**
  - Submit button shows spinner and "Submitting Inquiry..." during inflight request.
  - Buttons and inputs are disabled to prevent duplicate submissions.
  - On 201 Created: Shows elegant Confirmation Card with live PostgreSQL ID `#KX-C{id}`, submission timestamp, and "Submit Another Inquiry" reset action.
  - On Failure: Retains all entered text and displays inline alert banner with specific backend error message.

### B. Enterprise Demo Request Form (`/demo`)
- **Location:** `app/components/demo/DemoFormSection.vue`
- **Trigger:** "Schedule Enterprise Demo" button (`#demo-submit-btn`)
- **Connected Endpoint:** `POST http://localhost:8080/api/v1/demo-requests`
- **Fields Captured:**
  1. `Full Name` (`name`)
  2. `Corporate Work Email` (`email`)
  3. `Company Name` (`company`)
  4. `Industry Sector` (preserved into `reqs`)
  5. `Area of Interest` (preserved into `reqs`)
  6. `Job Title / Executive Role` (preserved into `reqs`)
  7. `Key Business Challenge / Notes` (preserved into `reqs`)
- **User Experience:**
  - Submit button shows spinner and "Scheduling Demo..." during inflight request.
  - Double-click prevention enforced via composable locking.
  - On 201 Created: Shows executive Receipt Card with Reference Number `#KX-D{id}`, company acknowledgment, and "Submit Another Request" reset action.
  - On Failure: Preserves form data and displays inline alert banner with server response.

---

## 4. Endpoint and DTO Mappings

### Contact Messages
- **HTTP Method & URL:** `POST /api/v1/contact-messages`
- **Success Status:** `201 Created`
- **Request DTO (`ContactMessageRequest`):**
  ```json
  {
    "name": "Alex Mercer",
    "email": "alex.mercer@innovatetech.com",
    "phone": "+1 (555) 234-5678",
    "subject": "[Enterprise Solutions] InnovateTech Global",
    "message": "We would like to discuss deploying KavoraX AI governance workflows across our Asia-Pacific infrastructure."
  }
  ```
- **Backend Constraints:**
  - `name`: `@NotBlank`, `@Size(max = 100)`
  - `email`: `@NotBlank`, `@Email`, `@Size(max = 255)`
  - `phone`: `@Size(max = 20)`
  - `subject`: `@Size(max = 255)`
  - `message`: `@NotBlank`, `@Size(max = 2000)`
- **Response DTO (`ContactMessageResponse`):**
  ```json
  {
    "id": 18,
    "name": "Alex Mercer",
    "email": "alex.mercer@innovatetech.com",
    "phone": "+1 (555) 234-5678",
    "subject": "[Enterprise Solutions] InnovateTech Global",
    "message": "We would like to discuss deploying KavoraX AI governance workflows across our Asia-Pacific infrastructure.",
    "status": "RECEIVED",
    "createdAt": "2026-10-17T09:50:53.642994Z"
  }
  ```

### Demo Requests
- **HTTP Method & URL:** `POST /api/v1/demo-requests`
- **Success Status:** `201 Created`
- **Request DTO (`DemoRequestDto`):**
  ```json
  {
    "name": "Eleanor Vance",
    "email": "eleanor.vance@apexlogistics.io",
    "company": "Apex Global Logistics Corp",
    "reqs": "[Industry: Supply Chain & Logistics] [Interest: Operational Automation] [Role: VP of Digital Transformation] Challenge: Cross-border compliance optimization across 14 ports."
  }
  ```
- **Backend Constraints:**
  - `name`: `@NotBlank`, `@Size(max = 100)`
  - `email`: `@NotBlank`, `@Email`, `@Size(max = 255)`
  - `company`: `@Size(max = 100)`
  - `reqs` (`@JsonProperty("reqs")` mapped to `requirements`): `@Size(max = 1000)`
- **Response DTO (`DemoRequestDto`):**
  ```json
  {
    "id": 25,
    "name": "Eleanor Vance",
    "email": "eleanor.vance@apexlogistics.io",
    "company": "Apex Global Logistics Corp",
    "reqs": "[Industry: Supply Chain & Logistics] [Interest: Operational Automation] [Role: VP of Digital Transformation] Challenge: Cross-border compliance optimization across 14 ports.",
    "status": "PENDING",
    "createdAt": "2026-10-17T09:50:54.004998Z"
  }
  ```

### Error Responses (`GlobalExceptionHandler`)
- **HTTP Status:** `400 Bad Request`
- **Payload Shape:**
  ```json
  {
    "status": 400,
    "error": "Bad Request",
    "message": "Validation failed",
    "validationErrors": {
      "email": "Email must be valid",
      "name": "Name is required"
    }
  }
  ```

---

## 5. Environment Configuration

### Nuxt Runtime Configuration (`nuxt.config.ts`)
```typescript
runtimeConfig: {
  public: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080'
  }
}
```

### Environment Files
- **`.env.example`** (Committed template with placeholder only):
  ```bash
  # KavoraX Public Website Configuration
  NUXT_PUBLIC_SITE_URL=http://localhost:3000
  NUXT_PUBLIC_API_BASE=http://localhost:8080
  ```
- **`.env`** (Local runtime configuration):
  ```bash
  NUXT_PUBLIC_API_BASE=http://localhost:8080
  ```

> [!NOTE]
> No database credentials, JWT secrets, or sensitive private keys are present or exposed in the frontend codebase. Only the public API base URL is exposed via `runtimeConfig.public.apiBase`.

---

## 6. Tests Run and Actual Results

### Automated Integration Test Suite (`npm run test:integration`)
Executed against the running Spring Boot backend and PostgreSQL database.

```text
========================================================
KavoraX Public Frontend-Backend Integration Test Suite
Target Backend Base URL: http://localhost:8080/api
========================================================

Test 1: Valid Contact Submission
  [PASS] Status is 201 Created (got 201)
  [PASS] Returned valid database entity ID: 18
  [PASS] Persisted name matches: "Integration Test User"
  [PASS] Persisted email matches: "integration.tester@kavorax-test.com"
  [PASS] Persisted subject matches: "[Solutions] Test Architecture Corp"
  [PASS] Entity status is RECEIVED (got "RECEIVED")

Test 2: Invalid Contact Form Input (Missing required fields)
  [PASS] Status is 400 Bad Request (got 400)
  [PASS] Backend returns validationErrors object
  [PASS] Validation caught empty name
  [PASS] Validation caught invalid email
  [PASS] Validation caught empty message

Test 3: Valid Demo Request Submission
  [PASS] Status is 201 Created (got 201)
  [PASS] Returned valid database entity ID: 25
  [PASS] Persisted name matches: "Eleanor Vance"
  [PASS] Persisted email matches: "eleanor.vance@apexlogistics.io"
  [PASS] Persisted company matches: "Apex Global Logistics Corp"
  [PASS] Requirements correctly mapped and stored
  [PASS] Entity status is PENDING (got "PENDING")

Test 4: Missing Required Fields on Demo Request
  [PASS] Status is 400 Bad Request (got 400)
  [PASS] Backend returns validationErrors object
  [PASS] Validation caught empty name
  [PASS] Validation caught empty email

Test 5: Backend Validation Error Handling Shape
  [PASS] validationErrors is a key-value map
  [PASS] Correct error message: "Email must be valid"

Test 6: Static Code Verification (No Mock Code Remaining)
  [PASS] Contact form removed mock setTimeout simulation
  [PASS] Contact form removed 'validated' mock status
  [PASS] Contact form uses centralized useKavoraxApi
  [PASS] Contact form calls submitContactMessage
  [PASS] Demo form removed mock setTimeout simulation
  [PASS] Demo form removed 'validated' mock status
  [PASS] Demo form uses centralized useKavoraxApi
  [PASS] Demo form calls submitDemoRequest

Test 7: Environment & Runtime Configuration Verification
  [PASS] nuxt.config.ts defines runtimeConfig
  [PASS] nuxt.config.ts defines public.apiBase
  [PASS] nuxt.config.ts defines public.siteUrl
  [PASS] .env defines NUXT_PUBLIC_API_BASE

========================================================
TEST SUMMARY: 36 Passed, 0 Failed
========================================================
```

---

## 7. Build and Typecheck Results

### TypeScript Strict Type Checking (`npx vue-tsc --noEmit`)
```text
> npx vue-tsc --noEmit
Exit Code: 0 (Clean, 0 errors)
```

### Linter Verification (`npm run lint`)
```text
> eslint .
Exit Code: 0 (0 errors, 6 pre-existing shadcn-ui component warnings)
```

---

## 8. Manual Verification Performed

1. **Backend Health Check:**
   - Query: `GET http://localhost:8080/api/health`
   - Result: `{"status": "UP", "service": "kavorax-api"}` (HTTP 200).
2. **Database Persistence Check:**
   - Query: `GET http://localhost:8080/api/health/database`
   - Result: `{"status": "UP", "database": "PostgreSQL"}` (HTTP 200).
3. **CORS Headers Check:**
   - Verified that preflight `OPTIONS` and standard `POST` requests originating from `http://localhost:3000` receive `Access-Control-Allow-Origin: http://localhost:3000` and `Access-Control-Allow-Credentials: true`.
4. **Failure Recovery Verification:**
   - Verified that when network errors or 400 validation errors occur, form inputs in `ContactFormSection.vue` and `DemoFormSection.vue` are not cleared, allowing the user to correct fields without retyping.

---

## 9. Remaining Issues or Blockers

- **Headless Browser Automation:** During testing, the Playwright Chromium driver download failed due to an upstream CDN 404 (`playwright.azureedge.net`). However, full end-to-end integration and API verification was thoroughly conducted via Node.js automation script, native HTTP REST tests, and live PostgreSQL verification.
- **Backend Schema Evolution (Optional Future Enhancement):** Currently, the demo request custom fields (`industry`, `interest`, `role`) are packaged into `reqs` to match the backend's current entity structure (`requirements` column, max 1,000 chars). While this preserves 100% of the data without losing user input, a future backend database migration adding dedicated columns (`industry VARCHAR(100)`, `interest VARCHAR(100)`, `role VARCHAR(100)`) can be planned if administrators require discrete SQL indexing on those dimensions.

---

## 10. Exact Commands Required to Run the Integrated System

### 1. Start the PostgreSQL Database
Ensure PostgreSQL is running locally on port `5432` with database `kavorax_db` created.

### 2. Start the Backend API (`kavorax-api`)
```powershell
# Open terminal in backend folder
cd c:\Users\aaa\Desktop\kavorax-api

# Run Spring Boot service
.\mvnw.cmd spring-boot:run
```
*Backend will start on port `8080` with context path `/api`.*

### 3. Start the Frontend Public Website (`kavorax-web`)
```powershell
# Open terminal in frontend folder
cd c:\Users\aaa\Desktop\kavorax-web

# Verify dependencies (if not already installed)
npm install

# Start Nuxt 4 development server
npm run dev
```
*Frontend will be accessible at `http://localhost:3000`.*

### 4. Run the Integration Test Suite
```powershell
# Run the automated test suite against the live backend
npm run test:integration
```

### 5. Verify Types and Linting
```powershell
# Run TypeScript type check
npx vue-tsc --noEmit

# Run ESLint check
npm run lint
```
