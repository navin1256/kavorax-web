<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  ShieldCheck,
  Calendar,
  Building2,
  Lock,
  RotateCcw
} from 'lucide-vue-next'
import { useKavoraxApi } from '~/composables/useKavoraxApi'

// Validation Schema using existing Zod library
const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  workEmail: z.string().trim().email({ message: 'Please enter a valid work email address.' }),
  companyName: z
    .string()
    .trim()
    .max(120, { message: 'Company name cannot exceed 120 characters.' })
    .optional(),
  inquiryType: z
    .string()
    .min(1, { message: 'Please select an inquiry type.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' })
})

type ContactFormData = z.infer<typeof contactSchema>

const { isSubmitting, submitContactMessage } = useKavoraxApi()

const formData = reactive<ContactFormData>({
  fullName: '',
  workEmail: '',
  companyName: '',
  inquiryType: '',
  message: ''
})

const errors = ref<Record<string, string>>({})
const apiError = ref<string | null>(null)
const submittedId = ref<number | null>(null)
const submittedName = ref('')
const submissionStatus = ref<'idle' | 'success'>('idle')

const inquiryOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Product Information', label: 'Product Information' },
  { value: 'Solutions', label: 'Solutions & Architecture' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Other', label: 'Other' }
]

const validateField = (field: keyof ContactFormData) => {
  try {
    const fieldSchema = contactSchema.shape[field]
    if (fieldSchema) {
      fieldSchema.parse(formData[field])
      if (errors.value[field]) {
        const remaining: Record<string, string> = {}
        for (const key of Object.keys(errors.value)) {
          if (key !== field && errors.value[key]) {
            remaining[key] = errors.value[key]
          }
        }
        errors.value = remaining
      }
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      const firstIssue = err.issues?.[0]
      if (firstIssue) {
        errors.value = {
          ...errors.value,
          [field]: firstIssue.message
        }
      }
    }
  }
}

const handleInput = (field: keyof ContactFormData) => {
  if (errors.value[field]) {
    validateField(field)
  }
}

const handleSubmit = async () => {
  errors.value = {}
  apiError.value = null

  const result = contactSchema.safeParse(formData)

  if (!result.success) {
    const newErrors: Record<string, string> = {}
    result.error.issues.forEach((err) => {
      const field = err.path[0] as string
      if (field && !newErrors[field]) {
        newErrors[field] = err.message
      }
    })
    errors.value = newErrors

    // Find first error field to set focus for accessibility
    const firstErrorKey = Object.keys(newErrors)[0]
    if (firstErrorKey) {
      const el = document.getElementById(firstErrorKey)
      if (el) {
        el.focus()
      }
    }
    return
  }

  // Build subject incorporating inquiry type and company name if present
  const subject = formData.companyName
    ? `[${formData.inquiryType}] ${formData.companyName}`
    : formData.inquiryType

  const response = await submitContactMessage({
    name: formData.fullName,
    email: formData.workEmail,
    subject,
    message: formData.message
  })

  if (response.success && response.data) {
    submittedId.value = response.data.id
    submittedName.value = formData.fullName
    submissionStatus.value = 'success'
    // Form data reset ONLY upon confirmed backend persistence
    formData.fullName = ''
    formData.workEmail = ''
    formData.companyName = ''
    formData.inquiryType = ''
    formData.message = ''
    errors.value = {}
  } else {
    // Preserve all entered form data for user retry
    if (response.validationErrors) {
      const backendErrors: Record<string, string> = {}
      if (response.validationErrors.name) backendErrors.fullName = response.validationErrors.name
      if (response.validationErrors.email) backendErrors.workEmail = response.validationErrors.email
      if (response.validationErrors.message) backendErrors.message = response.validationErrors.message
      if (response.validationErrors.subject) backendErrors.inquiryType = response.validationErrors.subject
      errors.value = { ...errors.value, ...backendErrors }
    }
    apiError.value = response.error || 'Unable to submit your inquiry. Please try again.'
    nextTick(() => {
      const errorEl = document.getElementById('contact-api-error')
      if (errorEl) {
        errorEl.focus()
      }
    })
  }
}

const handleReset = () => {
  submissionStatus.value = 'idle'
  apiError.value = null
  submittedId.value = null
}
</script>

<template>
  <section
    id="inquiry-form"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] scroll-mt-20 overflow-hidden"
  >
    <!-- Subtle ambient glow -->
    <div
      class="absolute top-1/3 -right-36 w-96 h-96 bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Tag & Coordinate Metadata Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400">
        <ChapterLabel
          index="CHAPTER 02"
          label="INQUIRY FORM"
          sublabel="STRUCTURED CORRESPONDENCE"
        />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            SECURE TRANSMISSION
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">ENCRYPTED TLS</span>
        </div>
      </div>

      <!-- Main Asymmetric Spread: Visual Companion on Left + Form on Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Left Column: Supporting Visual & Editorial Guidance -->
        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-4">
            <h2
              class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.12]"
            >
              What to Share With
              <span class="italic font-light text-brand">Our Team</span>.
            </h2>
            <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              To help us prepare for an informative initial exchange, consider sharing the general
              context of your business objectives and software environment.
            </p>
          </div>

          <!-- The ONE Supporting Visual: Architectural Consultation Photo Frame -->
          <div class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <!-- Active Theory Corner Crosshairs -->
            <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <div class="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/executive-briefing.jpg"
                alt="Architectural briefing room where technology strategy aligns with business operations"
                loading="eager"
                class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />

              <!-- Metadata Bar -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-zinc-300">
                <span class="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>CONSULTATION CONTEXT</span>
                </span>
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-brand font-mono">
                  DIRECT_DIALOGUE
                </span>
              </div>

              <!-- Editorial Photo Caption -->
              <div class="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-4 space-y-1">
                <div class="flex items-center justify-between font-ui text-xs">
                  <span class="text-zinc-200 font-semibold flex items-center gap-1.5">
                    <Building2 class="h-3.5 w-3.5 text-brand" />
                    Direct Architectural Review
                  </span>
                  <span class="font-mono text-zinc-400 text-[10px]">VERIFIED</span>
                </div>
                <p class="text-zinc-400 font-editorial italic text-xs leading-snug">
                  Direct engagement with solutions engineers to evaluate system compatibility and workflow cohesion.
                </p>
              </div>
            </div>
          </div>

          <!-- Structured Preparation Points -->
          <div class="space-y-3.5 font-ui">
            <div class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">1</span>
                <span>Operational Challenges</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Describe the specific workflow handoffs, communication lags, or operational friction your teams encounter.
              </p>
            </div>

            <div class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">2</span>
                <span>Existing Software Topology</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Mention the core software stacks, on-premise databases, cloud tools, or third-party APIs you wish to synchronize.
              </p>
            </div>

            <div class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">3</span>
                <span>Organizational Priorities & Scale</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Outline target delivery timelines, compliance prerequisites, or growth milestones driving your evaluation.
              </p>
            </div>
          </div>

          <!-- Direct Verified Channels Box -->
          <div class="rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 p-6 space-y-4 font-ui">
            <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
              <span class="font-semibold text-white uppercase tracking-wider">Direct Advisory Channels</span>
              <span class="font-mono text-[10px] text-brand">OFFICIAL</span>
            </div>
            <div class="space-y-3 text-xs">
              <div class="flex items-center justify-between">
                <span class="text-zinc-400 flex items-center gap-2">
                  <Mail class="h-3.5 w-3.5 text-brand" />
                  Written Inquiries:
                </span>
                <a href="mailto:contact@kavorax.com" class="text-white hover:text-brand font-mono transition-colors">
                  contact@kavorax.com
                </a>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-zinc-400 flex items-center gap-2">
                  <Calendar class="h-3.5 w-3.5 text-brand" />
                  Live Walkthrough:
                </span>
                <NuxtLink to="/demo" class="text-brand hover:underline font-semibold">
                  Schedule Demo →
                </NuxtLink>
              </div>
              <div class="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[11px] text-zinc-500 font-mono">
                <span>CORPORATE ENTITY:</span>
                <span class="text-zinc-400">KAVORAX GLOBAL PVT LTD</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Carefully Designed Inquiry Form -->
        <div class="lg:col-span-7 relative">
          <!-- Subtle Glow Backplate -->
          <div
            class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none"
            aria-hidden="true"
          />

          <div
            class="relative rounded-3xl border border-white/10 bg-[#0c141e]/95 p-7 sm:p-12 lg:p-14 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group"
          >
            <!-- Active Theory Corner Crosshairs -->
            <div class="absolute top-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Form Header with Clear Title & Helper Note -->
            <div class="pb-6 border-b border-white/[0.08]">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-xs text-brand uppercase tracking-wider">FORM // CORRESPONDENCE</span>
                <span class="font-mono text-[11px] text-zinc-500">FIELDS WITH <span class="text-brand">*</span> REQUIRED</span>
              </div>
              <h3 class="font-editorial text-2xl sm:text-4xl font-semibold text-white">
                Send an Inquiry
              </h3>
              <p class="font-ui text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Provide your details below to initiate dialogue with our technical solutions team.
              </p>
            </div>

            <!-- Real Backend Success Notice -->
            <div
              v-if="submissionStatus === 'success'"
              class="mt-6 rounded-2xl border border-brand/40 bg-brand/[0.08] p-6 font-ui space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.18)]"
              role="status"
            >
              <div class="flex items-start gap-3.5">
                <CheckCircle2 class="h-6 w-6 text-brand shrink-0 mt-0.5" />
                <div class="space-y-2">
                  <h4 class="text-base font-semibold text-white">Inquiry Successfully Registered</h4>
                  <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    Thank you, <span class="font-medium text-white">{{ submittedName }}</span>. Your inquiry has been securely stored in our system and assigned reference <span class="font-mono text-brand font-semibold">#KX-C{{ submittedId }}</span>.
                  </p>
                  <p class="text-xs text-zinc-300 leading-relaxed">
                    Our technical solutions team reviews incoming requests continuously and will reach out to you within one business day.
                  </p>
                  <div class="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      class="border-white/15 text-xs text-zinc-300 hover:text-white bg-[#0e1622] hover:bg-[#142030]"
                      @click="handleReset"
                    >
                      <RotateCcw class="mr-1.5 h-3.5 w-3.5" />
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Error Alert Banner -->
            <div
              v-if="apiError"
              id="contact-api-error"
              tabindex="-1"
              class="mt-6 rounded-2xl border border-red-500/40 bg-red-500/[0.08] p-5 font-ui text-xs sm:text-sm text-red-200 flex items-start gap-3.5 focus:outline-none focus:ring-1 focus:ring-red-500"
              role="alert"
            >
              <AlertCircle class="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <div class="space-y-1">
                <div class="font-semibold text-white">Submission Notice</div>
                <p>{{ apiError }}</p>
              </div>
            </div>

            <!-- The Form (Hidden upon confirmed success) -->
            <form
              v-if="submissionStatus !== 'success'"
              class="mt-8 space-y-8 font-ui"
              novalidate
              @submit.prevent="handleSubmit"
            >

              <!-- Group 1: Contact Details -->
              <div class="space-y-5">
                <div class="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                  <span class="font-mono text-[11px] text-brand tracking-widest uppercase">01 // CONTACT DETAILS</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Full Name -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <Label for="fullName" class="text-xs font-medium text-zinc-200">
                        Full Name <span class="text-brand font-semibold">*</span>
                      </Label>
                    </div>
                    <div class="relative">
                      <Input
                        id="fullName"
                        v-model="formData.fullName"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        class="h-12 text-sm bg-[#090e16] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c141e] focus-visible:border-brand transition-all"
                        :class="{ 'border-red-500/70 focus-visible:ring-red-500': errors.fullName }"
                        :aria-invalid="!!errors.fullName"
                        :aria-describedby="errors.fullName ? 'fullName-error' : undefined"
                        @blur="validateField('fullName')"
                        @input="handleInput('fullName')"
                      />
                    </div>
                    <p
                      v-if="errors.fullName"
                      id="fullName-error"
                      class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                      role="alert"
                    >
                      <AlertCircle class="h-3 w-3 shrink-0" />
                      <span>{{ errors.fullName }}</span>
                    </p>
                  </div>

                  <!-- Work Email -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <Label for="workEmail" class="text-xs font-medium text-zinc-200">
                        Work Email <span class="text-brand font-semibold">*</span>
                      </Label>
                    </div>
                    <div class="relative">
                      <Input
                        id="workEmail"
                        v-model="formData.workEmail"
                        type="email"
                        placeholder="e.g. eleanor.vance@company.com"
                        class="h-12 text-sm bg-[#090e16] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c141e] focus-visible:border-brand transition-all"
                        :class="{ 'border-red-500/70 focus-visible:ring-red-500': errors.workEmail }"
                        :aria-invalid="!!errors.workEmail"
                        :aria-describedby="errors.workEmail ? 'workEmail-error' : undefined"
                        @blur="validateField('workEmail')"
                        @input="handleInput('workEmail')"
                      />
                    </div>
                    <p
                      v-if="errors.workEmail"
                      id="workEmail-error"
                      class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                      role="alert"
                    >
                      <AlertCircle class="h-3 w-3 shrink-0" />
                      <span>{{ errors.workEmail }}</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Group 2: Organization & Scope -->
              <div class="space-y-5">
                <div class="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                  <span class="font-mono text-[11px] text-brand tracking-widest uppercase">02 // ORGANIZATION & SCOPE</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Company Name (Optional) -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <Label for="companyName" class="text-xs font-medium text-zinc-200">
                        Company Name
                        <span class="text-zinc-500 font-mono text-[10px] ml-1">(Optional)</span>
                      </Label>
                    </div>
                    <div class="relative">
                      <Input
                        id="companyName"
                        v-model="formData.companyName"
                        type="text"
                        placeholder="e.g. Acme Enterprises Ltd"
                        class="h-12 text-sm bg-[#090e16] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c141e] focus-visible:border-brand transition-all"
                        :class="{ 'border-red-500/70 focus-visible:ring-red-500': errors.companyName }"
                        :aria-invalid="!!errors.companyName"
                        :aria-describedby="errors.companyName ? 'companyName-error' : undefined"
                        @blur="validateField('companyName')"
                        @input="handleInput('companyName')"
                      />
                    </div>
                    <p
                      v-if="errors.companyName"
                      id="companyName-error"
                      class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                      role="alert"
                    >
                      <AlertCircle class="h-3 w-3 shrink-0" />
                      <span>{{ errors.companyName }}</span>
                    </p>
                  </div>

                  <!-- Inquiry Type (Required Dropdown) -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <Label for="inquiryType" class="text-xs font-medium text-zinc-200">
                        Inquiry Type <span class="text-brand font-semibold">*</span>
                      </Label>
                    </div>
                    <div class="relative">
                      <select
                        id="inquiryType"
                        v-model="formData.inquiryType"
                        :class="[
                          'flex h-12 w-full rounded-lg border border-white/15 bg-[#090e16] px-4 py-2 font-ui text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c141e] focus-visible:border-brand cursor-pointer appearance-none',
                          formData.inquiryType ? 'text-white' : 'text-zinc-500',
                          errors.inquiryType ? 'border-red-500/70 focus-visible:ring-red-500' : ''
                        ]"
                        :aria-invalid="!!errors.inquiryType"
                        :aria-describedby="errors.inquiryType ? 'inquiryType-error' : undefined"
                        @change="validateField('inquiryType')"
                      >
                        <option value="" disabled selected class="bg-[#0c121a] text-zinc-500">
                          Select an inquiry category
                        </option>
                        <option
                          v-for="opt in inquiryOptions"
                          :key="opt.value"
                          :value="opt.value"
                          class="bg-[#0e1622] text-white py-2"
                        >
                          {{ opt.label }}
                        </option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <p
                      v-if="errors.inquiryType"
                      id="inquiryType-error"
                      class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                      role="alert"
                    >
                      <AlertCircle class="h-3 w-3 shrink-0" />
                      <span>{{ errors.inquiryType }}</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Group 3: Project Context & Objectives -->
              <div class="space-y-5">
                <div class="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span class="font-mono text-[11px] text-brand tracking-widest uppercase">03 // PROJECT CONTEXT</span>
                  <span class="font-mono text-[10px] text-zinc-500">{{ formData.message.length }} / 2000 chars</span>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <Label for="message" class="text-xs font-medium text-zinc-200">
                      Message <span class="text-brand font-semibold">*</span>
                    </Label>
                  </div>
                  <Textarea
                    id="message"
                    v-model="formData.message"
                    placeholder="Share a brief overview of your business challenges, current systems, and what you are looking to achieve..."
                    rows="5"
                    class="min-h-[140px] text-sm bg-[#090e16] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c141e] focus-visible:border-brand transition-all"
                    :class="{ 'border-red-500/70 focus-visible:ring-red-500': errors.message }"
                    :aria-invalid="!!errors.message"
                    :aria-describedby="errors.message ? 'message-error' : undefined"
                    @blur="validateField('message')"
                    @input="handleInput('message')"
                  />
                  <p
                    v-if="errors.message"
                    id="message-error"
                    class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                    role="alert"
                  >
                    <AlertCircle class="h-3 w-3 shrink-0" />
                    <span>{{ errors.message }}</span>
                  </p>
                </div>
              </div>

              <!-- Confidentiality Notice & Assurance -->
              <div class="rounded-xl border border-white/[0.06] bg-[#090e16]/80 p-4 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
                <Lock class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span>
                  Your inquiry is reviewed directly by KavoraX solution specialists. We maintain strict non-disclosure across all prospective architecture discussions.
                </span>
              </div>

              <!-- Submit Button with Clear States -->
              <div class="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  :disabled="isSubmitting"
                  class="w-full h-14 bg-brand text-black font-semibold hover:bg-brand/90 text-base rounded-lg shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_0px_rgba(16,185,129,0.48)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                >
                  <Loader2 v-if="isSubmitting" class="mr-2.5 h-5 w-5 animate-spin text-black" />
                  <Send v-else class="mr-2.5 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  <span>{{ isSubmitting ? 'Submitting to KavoraX...' : 'Send Inquiry' }}</span>
                </Button>
              </div>

              <!-- Bottom Security Footer -->
              <div class="pt-3 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                <span class="flex items-center gap-1.5">
                  <ShieldCheck class="h-3 w-3 text-brand" />
                  Zero Spam · Non-Disclosure Respected
                </span>
                <span>AUTHENTICITY GUARANTEED</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
