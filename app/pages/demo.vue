<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { useKavoraxApi } from '~/composables/useKavoraxApi'
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Compass,
  Cpu,
  HelpCircle,
  Layers,
  Loader2,
  MessageSquare,
  Network,
  RotateCcw,
  Send,
  ShieldCheck,
  Target
} from 'lucide-vue-next'

useHead({
  title: 'Book a Demo | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'See what better-connected business looks like. Request a product demonstration of the KavoraX Operations Platform, Analytics, and Integration Hub.'
    },
    {
      property: 'og:title',
      content: 'Book a Demo | KavoraX Global Private Limited'
    },
    {
      property: 'og:description',
      content:
        'See what better-connected business looks like. Request a product demonstration of the KavoraX Operations Platform, Analytics, and Integration Hub.'
    }
  ],
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/executive-briefing.webp',
      type: 'image/webp',
      fetchpriority: 'high'
    }
  ]
})

const isHeroMounted = ref(true)


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
    .max(800, { message: 'Description cannot exceed 800 characters.' })
})
type DemoFormData = z.infer<typeof demoSchema>

const defaultForm: DemoFormData = {
  fullName: '',
  workEmail: '',
  companyName: '',
  jobTitle: '',
  industry: '',
  areaOfInterest: '',
  businessChallenge: ''
}

const { isSubmitting, submitDemoRequest } = useKavoraxApi()
const formData = reactive<DemoFormData>({ ...defaultForm })
const errors = ref<Record<string, string>>({})
const apiError = ref<string | null>(null)
const submittedReference = ref<number | null>(null)
const submittedName = ref('')
const submittedCompany = ref('')
const submissionStatus = ref<'idle' | 'success'>('idle')
const turnstileToken = ref('')
const turnstileRef = ref<{ reset?: () => void } | null>(null)

const industryOptions = [
  { value: 'Enterprise Technology & SaaS', label: 'Enterprise Technology & SaaS' },
  { value: 'Financial Services & FinTech', label: 'Financial Services & FinTech' },
  { value: 'Healthcare & Life Sciences', label: 'Healthcare & Life Sciences' },
  { value: 'Supply Chain & Logistics', label: 'Supply Chain & Logistics' },
  { value: 'Other', label: 'Other' }
]

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
  apiError.value = null
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
  if (!turnstileToken.value) {
    errors.value = {
      ...errors.value,
      turnstile: 'Please complete the anti-spam security verification.'
    }
    return
  }

  const reqsFormatted = `[${formData.industry}] [${formData.areaOfInterest}]${formData.jobTitle ? ` Role: ${formData.jobTitle} |` : ''} ${formData.businessChallenge}`.slice(0, 1000)
  try {
    const response = await submitDemoRequest({
      name: formData.fullName,
      email: formData.workEmail,
      company: formData.companyName,
      reqs: reqsFormatted,
      turnstileToken: turnstileToken.value
    })
    if (response.success && response.data) {
      submittedReference.value = response.data.id
      submittedName.value = formData.fullName
      submittedCompany.value = formData.companyName
      submissionStatus.value = 'success'
      Object.assign(formData, defaultForm)
      errors.value = {}
    } else {
      if (response.validationErrors) {
        const backendErrors: Record<string, string> = {}
        if (response.validationErrors.name) backendErrors.fullName = response.validationErrors.name
        if (response.validationErrors.email) backendErrors.workEmail = response.validationErrors.email
        if (response.validationErrors.company) backendErrors.companyName = response.validationErrors.company
        if (response.validationErrors.reqs) backendErrors.businessChallenge = response.validationErrors.reqs
        errors.value = { ...errors.value, ...backendErrors }
      }
      apiError.value = response.error || 'Failed to submit demonstration request. Please try again.'
      nextTick(() => {
        const errorEl = document.getElementById('demo-api-error')
        if (errorEl) {
          errorEl.focus()
        }
      })
    }
  } finally {
    turnstileToken.value = ''
    turnstileRef.value?.reset?.()
  }
}

const handleReset = () => {
  Object.assign(formData, defaultForm)
  errors.value = {}
  apiError.value = null
  submittedReference.value = null
  submittedName.value = ''
  submittedCompany.value = ''
  submissionStatus.value = 'idle'
  turnstileToken.value = ''
  turnstileRef.value?.reset?.()
}

const expectSteps = [
  {
    step: '01',
    title: 'Understand Your Goals',
    description: 'Share your business priorities and current challenges.',
    details:
      'We begin by listening to how your teams currently coordinate, which systems are in place, and where operational bottlenecks create friction.',
    icon: Target
  },
  {
    step: '02',
    title: 'Explore Relevant Solutions',
    description: 'Discuss which capabilities may be relevant to your needs.',
    details:
      'We walk through KavoraX capabilities—such as the Operations Platform, Analytics, or Integration Hub—that directly address your stated priorities.',
    icon: Compass
  },
  {
    step: '03',
    title: 'Discuss Next Steps',
    description: 'Identify potential next steps based on the conversation.',
    details:
      'If there is a mutual fit, we identify clear next steps, whether that involves further technical exploration, architectural review, or scoping.',
    icon: ArrowUpRight
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#0A0A0A] text-white">
    <section class="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      

      <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-6 xl:col-span-7 space-y-6">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium reveal-base transition-editorial duration-700 delay-75"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <span class="flex h-2 w-2 rounded-full bg-brand" />
              <span>Schedule a Demo</span>
            </div>

            <h1 class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-white leading-[1.08] text-balance max-w-full break-words reveal-base transition-editorial duration-700 delay-200" :class="{ 'is-revealed': isHeroMounted }">
  See What Better-Connected Business <span class="text-brand font-normal">Looks Like.</span>
</h1>

            <p
              class="font-editorial text-xl sm:text-2xl text-zinc-300 max-w-xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              Tell us a little about your business and what you want to achieve. We’ll use that context
              to help guide the conversation.
            </p>

            <div
              class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 font-ui reveal-base transition-editorial duration-700 delay-700"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <a href="#demo-form" class="w-full sm:w-auto">
                <Button
                  size="lg"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200"
                >
                  Request a Demo
                  <ArrowDown class="ml-2 h-4 w-4" />
                </Button>
              </a>

              <NuxtLink to="/products" class="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  class="w-full sm:w-auto border-white/10 bg-[#1C1C1C] hover:bg-[#1C1C1C] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
                >
                  <Layers class="mr-2 h-4 w-4 text-brand" />
                  View Solutions
                </Button>
              </NuxtLink>
            </div>

            <div
              class="pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <div>
                <div class="font-editorial text-2xl font-semibold text-white">Contextual</div>
                <div class="text-xs text-zinc-400 mt-0.5">Guided Discussion</div>
              </div>
              <div>
                <div class="font-editorial text-2xl font-semibold text-white">Confidential</div>
                <div class="text-xs text-zinc-400 mt-0.5">Non-Disclosure</div>
              </div>
              <div>
                <div class="font-editorial text-2xl font-semibold text-white">Tailored</div>
                <div class="text-xs text-zinc-400 mt-0.5">Solution Scope</div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-6 xl:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <div
              class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-60 pointer-events-none"
            />

            <div
              class="relative rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group"
            >
              <div class="relative h-44 w-full overflow-hidden bg-zinc-900">
                <img
                  src="/images/executive-briefing.webp"
                  alt="Executive briefing room for architectural demonstration walkthrough"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  width="600"
                  height="176"
                  class="h-full w-full object-cover img-editorial-zoom opacity-70 group-hover:opacity-90 transition-opacity"
                >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"
                />
                <div class="absolute top-3 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
                  <span
                    class="text-xs uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/10 shrink-0 truncate max-w-[210px] sm:max-w-none"
                  >
                    Product Demo Session
                  </span>
                  <span
                    class="font-ui text-xs text-brand bg-brand/20 px-2.5 py-0.5 rounded border border-brand/30 flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                  >
                    <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                    Live Walkthrough
                  </span>
                </div>
              </div>

              <div class="p-6 sm:p-7 space-y-3 font-ui">
                <div class="rounded-xl border border-white/[0.07] bg-[#1C1C1C] p-3.5">
                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-brand shrink-0"
                    >
                      <Cpu class="h-4 w-4" />
                    </div>
                    <div>
                      <h4 class="font-editorial text-base font-semibold text-white leading-snug">
                        Operations Platform Walkthrough
                      </h4>
                      <p class="text-xs text-zinc-400 mt-0.5">
                        Workflow execution, automated handoffs & policy monitoring
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center -my-1.5">
                  <div class="h-3 w-px bg-brand/30" />
                </div>

                <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-4">
                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 border border-brand/30 text-brand shrink-0"
                    >
                      <BarChart3 class="h-4 w-4" />
                    </div>
                    <div>
                      <h4 class="font-editorial text-lg font-semibold text-brand leading-snug">
                        Analytics & Telemetry Visibility
                      </h4>
                      <p class="text-xs text-zinc-300 mt-0.5">
                        Operational telemetry aggregation & real-time business activity
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center -my-1.5">
                  <div class="h-3 w-px bg-brand/30" />
                </div>

                <div class="rounded-xl border border-white/[0.07] bg-[#1C1C1C] p-4">
                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 shrink-0"
                    >
                      <Network class="h-4 w-4 text-brand" />
                    </div>
                    <div>
                      <h4 class="font-editorial text-lg font-semibold text-white leading-snug">
                        Integration Hub Bridging
                      </h4>
                      <p class="text-xs text-zinc-400 mt-0.5">
                        Multi-system data exchange & legacy-to-cloud compatibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mt-5 px-6 sm:px-7 pb-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-ui text-xs text-zinc-400"
              >
                <span class="flex items-center gap-2 text-zinc-300">
                  <ShieldCheck class="h-4 w-4 text-brand" />
                  Structured Around Your Real Priorities
                </span>
                <span class="font-mono text-xs text-zinc-400 shrink-0 pr-1">KavoraX Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="demo-form"
      class="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.06] scroll-mt-20"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-5 space-y-8">
            <div class="space-y-4">
              <div
                class="inline-flex items-center gap-2 text-xs font-ui font-medium text-brand"
              >
                Demo Preparation
              </div>
              <h2
                class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
              >
                Help Us Frame the Discussion.
              </h2>
              <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                Every business runs on different operational systems and workflows. Providing context
                in advance enables us to focus on the capabilities most relevant to your goals.
              </p>
            </div>

            <div class="space-y-4 font-ui">
              <div class="rounded-xl border border-white/[0.06] bg-[#161616] p-5 space-y-2">
                <h3 class="text-sm font-semibold text-white flex items-center gap-2 font-ui">
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

              <div class="rounded-xl border border-white/[0.06] bg-[#161616] p-5 space-y-2">
                <h3 class="text-sm font-semibold text-white flex items-center gap-2 font-ui">
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

              <div class="rounded-xl border border-white/[0.06] bg-[#161616] p-5 space-y-2">
                <h3 class="text-sm font-semibold text-white flex items-center gap-2 font-ui">
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

            <div
              class="rounded-xl border border-brand/20 bg-brand/[0.03] p-5 sm:p-6 space-y-3 font-ui"
            >
              <div
                class="flex items-center gap-2 text-brand text-xs font-medium"
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

          <div class="lg:col-span-7 relative">
            <div
              class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none"
            />

            <div
              class="relative rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
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

              <div
                v-if="submissionStatus === 'success'"
                class="mt-6 rounded-xl border border-brand/40 bg-brand/[0.08] p-6 font-ui space-y-4"
                role="status"
              >
                <div class="flex items-start gap-3.5">
                  <CheckCircle2 class="h-6 w-6 text-brand shrink-0 mt-0.5" />
                  <div class="space-y-2">
                    <h4 class="text-base font-semibold text-white font-ui">
                      Demo Request Registered
                    </h4>
                    <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      Thank you, <span class="font-medium text-white">{{ submittedName }}</span>. Your product demonstration request for <span class="font-medium text-white">{{ submittedCompany }}</span> has been assigned reference <span class="font-mono text-brand font-semibold">#KX-D{{ submittedReference }}</span>.
                    </p>
                    <p class="text-xs text-zinc-300 leading-relaxed">
                      Our technical solutions architects will review your evaluation scope and contact you within one business day to coordinate the live walkthrough.
                    </p>
                  </div>
                </div>

                <div class="pt-2 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    class="border-white/15 text-xs text-zinc-300 hover:text-white bg-[#161616] hover:bg-[#1C1C1C]"
                    @click="handleReset"
                  >
                    <RotateCcw class="mr-1.5 h-3.5 w-3.5" />
                    Request Another Demonstration
                  </Button>
                </div>
              </div>

              <div
                v-if="apiError"
                id="demo-api-error"
                tabindex="-1"
                class="mt-6 rounded-xl border border-red-500/40 bg-red-500/[0.08] p-5 font-ui text-xs sm:text-sm text-red-200 flex items-start gap-3.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                role="alert"
              >
                <AlertCircle class="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <div class="space-y-1">
                  <div class="font-semibold text-white">Submission Notice</div>
                  <p>{{ apiError }}</p>
                </div>
              </div>

              <form
                v-if="submissionStatus !== 'success'"
                class="mt-6 space-y-5 font-ui"
                novalidate
                @submit.prevent="handleSubmit"
              >
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="fullName">
                      Full Name <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.fullName"
                      id="fullName-error"
                      class="text-xs text-red-400 font-mono"
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

                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="workEmail">
                      Work Email <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.workEmail"
                      id="workEmail-error"
                      class="text-xs text-red-400 font-mono"
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

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <Label for="companyName">
                        Company Name <span class="text-brand" aria-hidden="true">*</span>
                      </Label>
                      <span
                        v-if="errors.companyName"
                        id="companyName-error"
                        class="text-xs text-red-400 font-mono"
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

                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <Label for="jobTitle">
                        Job Title
                        <span class="text-zinc-500 font-normal font-mono text-xs">(Optional)</span>
                      </Label>
                      <span
                        v-if="errors.jobTitle"
                        id="jobTitle-error"
                        class="text-xs text-red-400 font-mono"
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

                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="industry">
                      Industry <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.industry"
                      id="industry-error"
                      class="text-xs text-red-400 font-mono"
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
                        'flex h-11 w-full rounded-md border border-white/10 bg-[#111111] px-3.5 py-2 font-ui text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:border-brand/60 cursor-pointer appearance-none',
                        formData.industry ? 'text-white' : 'text-zinc-500',
                        errors.industry ? 'border-red-500/50 focus-visible:ring-red-500' : ''
                      ]"
                      :aria-invalid="!!errors.industry"
                      :aria-describedby="errors.industry ? 'industry-error' : undefined"
                      @change="validateField('industry')"
                    >
                      <option value="" disabled selected class="bg-[#111111] text-zinc-500">
                        Select your industry
                      </option>
                      <option
                        v-for="opt in industryOptions"
                        :key="opt.value"
                        :value="opt.value"
                        class="bg-[#161616] text-white py-1"
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

                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="areaOfInterest">
                      Area of Interest <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.areaOfInterest"
                      id="areaOfInterest-error"
                      class="text-xs text-red-400 font-mono"
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
                        'flex h-11 w-full rounded-md border border-white/10 bg-[#111111] px-3.5 py-2 font-ui text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:border-brand/60 cursor-pointer appearance-none',
                        formData.areaOfInterest ? 'text-white' : 'text-zinc-500',
                        errors.areaOfInterest ? 'border-red-500/50 focus-visible:ring-red-500' : ''
                      ]"
                      :aria-invalid="!!errors.areaOfInterest"
                      :aria-describedby="errors.areaOfInterest ? 'areaOfInterest-error' : undefined"
                      @change="validateField('areaOfInterest')"
                    >
                      <option value="" disabled selected class="bg-[#111111] text-zinc-500">
                        Select area of interest
                      </option>
                      <option
                        v-for="opt in interestOptions"
                        :key="opt.value"
                        :value="opt.value"
                        class="bg-[#161616] text-white py-1"
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

                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <Label for="businessChallenge">
                      Business Challenge or Goals <span class="text-brand" aria-hidden="true">*</span>
                    </Label>
                    <span
                      v-if="errors.businessChallenge"
                      id="businessChallenge-error"
                      class="text-xs text-red-400 font-mono"
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

                <div class="space-y-1.5">
                  <NuxtTurnstile
                    ref="turnstileRef"
                    v-model="turnstileToken"
                    :options="{ theme: 'dark', size: 'normal' }"
                  />
                  <span
                    v-if="errors.turnstile"
                    id="turnstile-error"
                    class="text-xs text-red-400 font-mono flex items-center gap-1.5"
                    role="alert"
                  >
                    <AlertCircle class="h-3 w-3 shrink-0" />
                    {{ errors.turnstile }}
                  </span>
                </div>

                <div class="pt-3">
                  <Button
                    type="submit"
                    size="lg"
                    :disabled="isSubmitting"
                    class="w-full bg-brand text-black font-semibold hover:bg-brand/90 py-6 text-base rounded-md transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin text-black" />
                    <Send v-else class="mr-2 h-4 w-4" />
                    <span>{{ isSubmitting ? 'Submitting to KavoraX...' : 'Request a Demo' }}</span>
                  </Button>
                </div>

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

    <section class="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.06]">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div
            class="inline-flex items-center gap-2 text-xs font-ui font-medium text-brand"
          >
            Process Guidance
          </div>
          <h2
            class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            What to Expect from the Conversation.
          </h2>
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Our demonstration conversations are designed to be focused, collaborative, and grounded in
            your operational reality.
          </p>
        </div>

        <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="item in expectSteps"
            :key="item.step"
            class="rounded-2xl border border-white/[0.08] bg-[#161616] p-7 sm:p-8 relative group hover:border-brand/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                  STEP {{ item.step }}
                </span>
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-brand group-hover:bg-brand/10 group-hover:border-brand/20 transition-colors"
                >
                  <component :is="item.icon" class="h-4 w-4" />
                </div>
              </div>

              <div class="mt-6 space-y-3">
                <h3 class="font-editorial text-2xl font-semibold text-white leading-snug">
                  {{ item.title }}
                </h3>
                <p class="font-ui text-sm text-brand font-medium leading-relaxed">
                  {{ item.description }}
                </p>
                <p class="font-ui text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                  {{ item.details }}
                </p>
              </div>
            </div>

            <div class="mt-8 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs text-zinc-500 font-ui">
              <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
              <span>Structured Process Guidance</span>
            </div>
          </div>
        </div>

        <div
          class="mt-12 rounded-xl border border-white/[0.07] bg-[#0A0A0A] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-zinc-400"
        >
          <div class="flex items-start sm:items-center gap-3">
            <div class="h-2 w-2 rounded-full bg-brand shrink-0 mt-1 sm:mt-0" />
            <p class="leading-relaxed">
              <span class="text-white font-medium">Clear, Respectful Dialogue:</span> These points
              serve as general process guidance to ensure your time is spent purposefully. We focus on
              practical technical context without aggressive sales sequences.
            </p>
          </div>
          <span class="font-mono text-xs text-zinc-500 shrink-0">
            KavoraX Global Advisory
          </span>
        </div>
      </div>
    </section>

    <section
      class="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/[0.06] relative overflow-hidden"
    >
      

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-3.5 py-1 text-xs font-ui text-brand font-medium mb-6"
          >
            <span>DIRECT ADVISORY</span>
          </div>

          <h2
            class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
          >
            Let’s Explore What’s Possible.
          </h2>

          <p
            class="mt-6 font-editorial text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Start a conversation about your business needs and goals.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200"
              >
                <MessageSquare class="mr-2 h-4 w-4" />
                Contact Us
                <ArrowRight class="ml-2 h-4 w-4" />
              </Button>
            </NuxtLink>
          </div>

          <div class="mt-8 pt-6 border-t border-white/[0.06] text-xs font-ui text-zinc-500">
            KavoraX Global Private Limited · Enterprise Business Architecture
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
