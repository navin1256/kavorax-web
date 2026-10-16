<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import {
  Calendar,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  RotateCcw
} from 'lucide-vue-next'

// Validation Schema using Zod
const demoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  workEmail: z.string().trim().email({ message: 'Please enter a valid work email address.' }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: 'Company name must be at least 2 characters.' })
    .max(120, { message: 'Company name cannot exceed 120 characters.' }),
  jobTitle: z
    .string()
    .trim()
    .max(100, { message: 'Job title cannot exceed 100 characters.' })
    .optional(),
  industry: z
    .string()
    .min(1, { message: 'Please select an industry.' }),
  areaOfInterest: z
    .string()
    .min(1, { message: 'Please select an area of interest.' }),
  businessChallenge: z
    .string()
    .trim()
    .min(10, { message: 'Please describe your business challenge or goals (minimum 10 characters).' })
    .max(3000, { message: 'Description cannot exceed 3000 characters.' })
})

type DemoFormData = z.infer<typeof demoSchema>

const formData = reactive<DemoFormData>({
  fullName: '',
  workEmail: '',
  companyName: '',
  jobTitle: '',
  industry: '',
  areaOfInterest: '',
  businessChallenge: ''
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const submissionStatus = ref<'idle' | 'validated'>('idle')

// Industry options with verified industry sectors from the project + "Other"
const industryOptions = [
  { value: 'Enterprise Technology & SaaS', label: 'Enterprise Technology & SaaS' },
  { value: 'Financial Services & FinTech', label: 'Financial Services & FinTech' },
  { value: 'Healthcare & Life Sciences', label: 'Healthcare & Life Sciences' },
  { value: 'Supply Chain & Logistics', label: 'Supply Chain & Logistics' },
  { value: 'Other', label: 'Other' }
]

// Area of Interest options populated from verified product and solution categories in the project + "Other"
const interestOptions = [
  {
    value: 'Operations Platform',
    label: 'Operations Platform (Workflow Coordination)'
  },
  {
    value: 'Analytics & Insights',
    label: 'Analytics & Insights (Operational Telemetry)'
  },
  {
    value: 'Integration Hub',
    label: 'Integration Hub (Cross-System Interoperability)'
  },
  {
    value: 'Comprehensive Platform',
    label: 'Comprehensive Platform Overview (All Capabilities)'
  },
  { value: 'Other', label: 'Other / Custom Inquiry' }
]

const validateField = (field: keyof DemoFormData) => {
  try {
    const fieldSchema = demoSchema.shape[field]
    if (fieldSchema) {
      fieldSchema.parse(formData[field])
      if (errors.value[field]) {
        const remaining = { ...errors.value }
        remaining[field] = ''
        errors.value = remaining
      }
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      const firstIssue = err.issues?.[0] || (err as unknown as { errors?: Array<{ message: string }> }).errors?.[0]
      if (firstIssue) {
        errors.value = {
          ...errors.value,
          [field]: firstIssue.message
        }
      }
    }
  }
}

const handleSubmit = async () => {
  errors.value = {}

  const result = demoSchema.safeParse(formData)

  if (!result.success) {
    const newErrors: Record<string, string> = {}
    const issues = (result.error.issues || []) as Array<{ path?: unknown[]; message: string }>
    issues.forEach((err) => {
      const field = String(err.path?.[0] || '')
      if (field) {
        newErrors[field] = err.message
      }
    })
    errors.value = newErrors
    return
  }

  isSubmitting.value = true

  // Short processing simulation for local client-side validation
  await new Promise((resolve) => setTimeout(resolve, 600))
  isSubmitting.value = false
  submissionStatus.value = 'validated'
}

const handleReset = () => {
  formData.fullName = ''
  formData.workEmail = ''
  formData.companyName = ''
  formData.jobTitle = ''
  formData.industry = ''
  formData.areaOfInterest = ''
  formData.businessChallenge = ''
  errors.value = {}
  submissionStatus.value = 'idle'
}
</script>

<template>
  <section
    id="demo-form"
    class="py-24 md:py-32 bg-[#080c10] relative border-t border-white/[0.06] scroll-mt-20"
  >
    <!-- Background Ambient Glow -->
    <div
      class="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Context Guidance & Reassurance -->
        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-4">
            <div
              class="inline-flex items-center gap-2 text-xs font-ui font-semibold uppercase tracking-widest text-brand"
            >
              Demo Preparation
            </div>
            <h2
              class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
            >
              Help Us Frame the
              <span class="italic font-light text-brand">Discussion</span>.
            </h2>
            <p class="font-editorial text-lg text-zinc-300 leading-relaxed">
              Every business runs on different operational systems and workflows. Providing context
              in advance enables us to focus on the capabilities most relevant to your goals.
            </p>
          </div>

          <!-- Helpful Points to Share -->
          <div class="space-y-4 font-ui">
            <div class="rounded-xl border border-white/[0.06] bg-[#0f1620]/60 p-5 space-y-2">
              <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                <span
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono"
                >
                  1
                </span>
                Current Operational Bottlenecks
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed">
                Highlight manual handoffs, disconnected software tools, or areas where operational
                delays frequently occur.
              </p>
            </div>

            <div class="rounded-xl border border-white/[0.06] bg-[#0f1620]/60 p-5 space-y-2">
              <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                <span
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono"
                >
                  2
                </span>
                Existing Software & Toolchains
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed">
                Mention key systems, enterprise databases, cloud tools, or custom internal
                applications you want to connect.
              </p>
            </div>

            <div class="rounded-xl border border-white/[0.06] bg-[#0f1620]/60 p-5 space-y-2">
              <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                <span
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono"
                >
                  3
                </span>
                Target Outcomes & Scope
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed">
                Outline what success looks like—whether higher execution speed, real-time telemetry,
                or automated cross-departmental coordination.
              </p>
            </div>
          </div>

          <!-- Trust & Reassurance Statement (Section 4.D) -->
          <div
            class="rounded-xl border border-brand/20 bg-brand/[0.03] p-5 sm:p-6 space-y-3 font-ui"
          >
            <div
              class="flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider"
            >
              <ShieldCheck class="h-4 w-4" />
              <span>Confidentiality & Accurate Context</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Providing accurate business context ensures a substantive, productive discussion. All
              organizational information and architectural details shared through this form are
              treated with strict confidentiality.
            </p>
            <div class="pt-1 flex items-center gap-2 text-xs text-zinc-400">
              <HelpCircle class="h-3.5 w-3.5 text-brand shrink-0" />
              <span>No automated marketing sequences or high-pressure tactics.</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Demo Request Form Card -->
        <div class="lg:col-span-7 relative">
          <!-- Subtle Glow Backplate -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none"
          />

          <div
            class="relative rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div class="pb-6 border-b border-white/[0.06]">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                    Request a Demo
                  </h3>
                  <p class="font-ui text-xs sm:text-sm text-zinc-400 mt-1">
                    Fields marked with <span class="text-brand">*</span> are required.
                  </p>
                </div>
                <div
                  class="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 text-brand"
                >
                  <Calendar class="h-5 w-5" />
                </div>
              </div>
            </div>

            <!-- Staging & Integration Notice (Truth in Messaging) -->
            <div
              v-if="submissionStatus === 'validated'"
              class="mt-6 rounded-xl border border-brand/30 bg-brand/[0.06] p-5 font-ui space-y-4"
            >
              <div class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div class="space-y-1.5">
                  <h4 class="text-sm font-semibold text-white">
                    Demo Request Successfully Validated
                  </h4>
                  <p class="text-xs text-zinc-300 leading-relaxed">
                    Thank you, {{ formData.fullName }}. Your demo request payload has been verified
                    against the demonstration criteria.
                  </p>
                  <div
                    class="rounded-lg border border-white/10 bg-[#0a0f16] p-3 text-xs text-zinc-400 space-y-1"
                  >
                    <div class="text-zinc-300 font-medium">Staging Status Note:</div>
                    <p class="leading-relaxed">
                      Automated calendar scheduling and CRM dispatch are currently in staging mode
                      for this deployment. No calendar slots were booked automatically.
                    </p>
                    <p class="leading-relaxed pt-1">
                      To coordinate your walkthrough directly, please email our advisory team at
                      <a
                        href="mailto:contact@kavorax.com"
                        class="text-brand underline hover:text-white"
                      >
                        contact@kavorax.com
                      </a>
                      referencing company
                      <span class="text-white font-mono">“{{ formData.companyName }}”</span>, or
                      visit our
                      <NuxtLink to="/contact" class="text-brand underline hover:text-white">
                        Contact Page
                      </NuxtLink>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-2 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  class="border-white/10 text-xs text-zinc-300 hover:text-white"
                  @click="handleReset"
                >
                  <RotateCcw class="mr-1.5 h-3.5 w-3.5" />
                  Submit Another Request
                </Button>
              </div>
            </div>

            <!-- Demo Form -->
            <form
              v-if="submissionStatus !== 'validated'"
              class="mt-6 space-y-5 font-ui"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <!-- 1. Full Name (Required) -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label for="fullName">
                    Full Name <span class="text-brand" aria-hidden="true">*</span>
                  </Label>
                  <span
                    v-if="errors.fullName"
                    id="fullName-error"
                    class="text-[11px] text-red-400 font-mono"
                    role="alert"
                  >
                    {{ errors.fullName }}
                  </span>
                </div>
                <Input
                  id="fullName"
                  v-model="formData.fullName"
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  :class="{ 'border-red-500/50 focus-visible:ring-red-500': errors.fullName }"
                  :aria-invalid="!!errors.fullName"
                  :aria-describedby="errors.fullName ? 'fullName-error' : undefined"
                  @blur="validateField('fullName')"
                />
              </div>

              <!-- 2. Work Email (Required) -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label for="workEmail">
                    Work Email <span class="text-brand" aria-hidden="true">*</span>
                  </Label>
                  <span
                    v-if="errors.workEmail"
                    id="workEmail-error"
                    class="text-[11px] text-red-400 font-mono"
                    role="alert"
                  >
                    {{ errors.workEmail }}
                  </span>
                </div>
                <Input
                  id="workEmail"
                  v-model="formData.workEmail"
                  type="email"
                  placeholder="e.g. eleanor.vance@company.com"
                  :class="{ 'border-red-500/50 focus-visible:ring-red-500': errors.workEmail }"
                  :aria-invalid="!!errors.workEmail"
                  :aria-describedby="errors.workEmail ? 'workEmail-error' : undefined"
                  @blur="validateField('workEmail')"
                />
              </div>

              <!-- 3. Company Name (Required) & 4. Job Title (Optional) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Company Name -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="companyName">
                      Company Name <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.companyName"
                      id="companyName-error"
                      class="text-[11px] text-red-400 font-mono"
                      role="alert"
                    >
                      {{ errors.companyName }}
                    </span>
                  </div>
                  <Input
                    id="companyName"
                    v-model="formData.companyName"
                    type="text"
                    placeholder="e.g. Acme Corporation"
                    :class="{ 'border-red-500/50 focus-visible:ring-red-500': errors.companyName }"
                    :aria-invalid="!!errors.companyName"
                    :aria-describedby="errors.companyName ? 'companyName-error' : undefined"
                    @blur="validateField('companyName')"
                  />
                </div>

                <!-- Job Title -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="jobTitle">
                      Job Title
                      <span class="text-zinc-500 font-normal font-mono text-[10px]">(Optional)</span>
                    </Label>
                    <span
                      v-if="errors.jobTitle"
                      id="jobTitle-error"
                      class="text-[11px] text-red-400 font-mono"
                      role="alert"
                    >
                      {{ errors.jobTitle }}
                    </span>
                  </div>
                  <Input
                    id="jobTitle"
                    v-model="formData.jobTitle"
                    type="text"
                    placeholder="e.g. Head of Operations"
                    :class="{ 'border-red-500/50 focus-visible:ring-red-500': errors.jobTitle }"
                    :aria-invalid="!!errors.jobTitle"
                    :aria-describedby="errors.jobTitle ? 'jobTitle-error' : undefined"
                    @blur="validateField('jobTitle')"
                  />
                </div>
              </div>

              <!-- 5. Industry (Required Dropdown with 'Other') -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label for="industry">
                    Industry <span class="text-brand" aria-hidden="true">*</span>
                  </Label>
                  <span
                    v-if="errors.industry"
                    id="industry-error"
                    class="text-[11px] text-red-400 font-mono"
                    role="alert"
                  >
                    {{ errors.industry }}
                  </span>
                </div>
                <div class="relative">
                  <select
                    id="industry"
                    v-model="formData.industry"
                    :class="[
                      'flex h-11 w-full rounded-md border border-white/10 bg-[#0c121a] px-3.5 py-2 font-ui text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:border-brand/60 cursor-pointer appearance-none',
                      formData.industry ? 'text-white' : 'text-zinc-500',
                      errors.industry ? 'border-red-500/50 focus-visible:ring-red-500' : ''
                    ]"
                    :aria-invalid="!!errors.industry"
                    :aria-describedby="errors.industry ? 'industry-error' : undefined"
                    @change="validateField('industry')"
                  >
                    <option value="" disabled selected class="bg-[#0c121a] text-zinc-500">
                      Select your industry
                    </option>
                    <option
                      v-for="opt in industryOptions"
                      :key="opt.value"
                      :value="opt.value"
                      class="bg-[#0e1622] text-white py-1"
                    >
                      {{ opt.label }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-400"
                  >
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- 6. Area of Interest (Required Dropdown from Verified Offerings) -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label for="areaOfInterest">
                    Area of Interest <span class="text-brand" aria-hidden="true">*</span>
                  </Label>
                  <span
                    v-if="errors.areaOfInterest"
                    id="areaOfInterest-error"
                    class="text-[11px] text-red-400 font-mono"
                    role="alert"
                  >
                    {{ errors.areaOfInterest }}
                  </span>
                </div>
                <div class="relative">
                  <select
                    id="areaOfInterest"
                    v-model="formData.areaOfInterest"
                    :class="[
                      'flex h-11 w-full rounded-md border border-white/10 bg-[#0c121a] px-3.5 py-2 font-ui text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:border-brand/60 cursor-pointer appearance-none',
                      formData.areaOfInterest ? 'text-white' : 'text-zinc-500',
                      errors.areaOfInterest ? 'border-red-500/50 focus-visible:ring-red-500' : ''
                    ]"
                    :aria-invalid="!!errors.areaOfInterest"
                    :aria-describedby="errors.areaOfInterest ? 'areaOfInterest-error' : undefined"
                    @change="validateField('areaOfInterest')"
                  >
                    <option value="" disabled selected class="bg-[#0c121a] text-zinc-500">
                      Select area of interest
                    </option>
                    <option
                      v-for="opt in interestOptions"
                      :key="opt.value"
                      :value="opt.value"
                      class="bg-[#0e1622] text-white py-1"
                    >
                      {{ opt.label }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-400"
                  >
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- 7. Business Challenge or Goals (Required Multiline) -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <Label for="businessChallenge">
                    Business Challenge or Goals <span class="text-brand" aria-hidden="true">*</span>
                  </Label>
                  <span
                    v-if="errors.businessChallenge"
                    id="businessChallenge-error"
                    class="text-[11px] text-red-400 font-mono"
                    role="alert"
                  >
                    {{ errors.businessChallenge }}
                  </span>
                </div>
                <Textarea
                  id="businessChallenge"
                  v-model="formData.businessChallenge"
                  placeholder="Outline your current business friction, operational objectives, and what you would like to evaluate during the demonstration..."
                  rows="4"
                  :class="{
                    'border-red-500/50 focus-visible:ring-red-500': errors.businessChallenge
                  }"
                  :aria-invalid="!!errors.businessChallenge"
                  :aria-describedby="errors.businessChallenge ? 'businessChallenge-error' : undefined"
                  @blur="validateField('businessChallenge')"
                />
              </div>

              <!-- Submit Button -->
              <div class="pt-3">
                <Button
                  type="submit"
                  size="lg"
                  :disabled="isSubmitting"
                  class="w-full bg-brand text-black font-semibold hover:bg-brand/90 py-6 text-base rounded-md shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_0px_rgba(16,185,129,0.4)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin text-black" />
                  <Send v-else class="mr-2 h-4 w-4" />
                  <span>{{ isSubmitting ? 'Validating Demo Request...' : 'Request a Demo' }}</span>
                </Button>
              </div>

              <!-- Privacy & Confidentiality Footnote -->
              <div class="text-center pt-2">
                <span class="text-xs text-zinc-500 font-ui">
                  Submitted data is used strictly to prepare your technical demonstration.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
