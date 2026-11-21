<script setup lang="ts">
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import { ref, reactive, nextTick } from 'vue'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { useKavoraxApi } from '~/composables/useKavoraxApi'
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Cpu,
  Layers,
  Loader2,
  Lock,
  Mail,
  RotateCcw,
  Send,
  ShieldCheck,
  UserCheck
} from 'lucide-vue-next'

useHead({
  title: 'Contact Us | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'Let’s start a conversation. Tell us about your business, your challenges, and what you’re looking to achieve. Connect with KavoraX Global Private Limited.'
    }
  ]
})


// Hero
const isHeroMounted = ref(true)

const heroPrinciples = [
  {
    icon: UserCheck,
    title: 'Direct Architect Access',
    description: 'Discussions are reviewed directly by technical solution specialists rather than sales SDRs.',
    delay: '750ms'
  },
  {
    icon: ShieldCheck,
    title: 'Strict Confidentiality',
    description: 'All shared business contexts, system schemas, and operational requirements remain confidential.',
    delay: '850ms'
  },
  {
    icon: Cpu,
    title: 'Pragmatic Guidance',
    description: 'Objective evaluation of architectural compatibility with zero pressure for unnecessary replacements.',
    delay: '950ms'
  }
]

// Form & Guidance
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

const defaultForm: ContactFormData = {
  fullName: '',
  workEmail: '',
  companyName: '',
  inquiryType: '',
  message: ''
}

const { isSubmitting, submitContactMessage } = useKavoraxApi()
const formData = reactive<ContactFormData>({ ...defaultForm })
const errors = ref<Record<string, string>>({})
const apiError = ref<string | null>(null)
const submittedId = ref<number | null>(null)
const submittedName = ref('')
const submissionStatus = ref<'idle' | 'success'>('idle')
const turnstileToken = ref('')
const turnstileRef = ref<{ reset?: () => void } | null>(null)

const inquiryOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Product Information', label: 'Product Information' },
  { value: 'Solutions', label: 'Solutions & Architecture' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Other', label: 'Other' }
]

const preparationPoints = [
  {
    num: '1',
    title: 'Operational Challenges',
    description: 'Describe the specific workflow handoffs, communication lags, or operational friction your teams encounter.',
    stagger: 'stagger-1'
  },
  {
    num: '2',
    title: 'Existing Software Topology',
    description: 'Mention the core software stacks, on-premise databases, cloud tools, or third-party APIs you wish to synchronize.',
    stagger: 'stagger-2'
  },
  {
    num: '3',
    title: 'Organizational Priorities & Scale',
    description: 'Outline target delivery timelines, compliance prerequisites, or growth milestones driving your evaluation.',
    stagger: 'stagger-3'
  }
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
    const firstErrorKey = Object.keys(newErrors)[0]
    if (firstErrorKey) {
      const el = document.getElementById(firstErrorKey)
      if (el) {
        el.focus()
      }
    }
    return
  }
  if (!turnstileToken.value) {
    errors.value = {
      ...errors.value,
      turnstile: 'Please complete the anti-spam security verification.'
    }
    return
  }

  const subject = formData.companyName
    ? `[${formData.inquiryType}] ${formData.companyName}`
    : formData.inquiryType
  try {
    const response = await submitContactMessage({
      name: formData.fullName,
      email: formData.workEmail,
      subject,
      message: formData.message,
      turnstileToken: turnstileToken.value
    })
    if (response.success && response.data) {
      submittedId.value = response.data.id
      submittedName.value = formData.fullName
      submissionStatus.value = 'success'
      Object.assign(formData, defaultForm)
      errors.value = {}
    } else {
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
  } finally {
    turnstileToken.value = ''
    turnstileRef.value?.reset?.()
  }
}

const handleReset = () => {
  submissionStatus.value = 'idle'
  apiError.value = null
  submittedId.value = null
  turnstileToken.value = ''
  turnstileRef.value?.reset?.()
}

const formSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isFormRevealed } = useScrollReveal(formSectionRef, {
  threshold: 0.12,
  delay: 40
})

// Channels
const channelsSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isChannelsRevealed } = useScrollReveal(channelsSectionRef, {
  threshold: 0.15,
  delay: 50
})
const channels = [
  {
    title: 'General Inquiries',
    icon: Mail,
    code: 'CHANNEL_01',
    category: 'Direct Communication',
    description: 'Reach our team directly for business, partnership, and corporate inquiries.',
    contactText: 'contact@kavorax.com',
    link: 'mailto:contact@kavorax.com',
    linkLabel: 'Email Directly',
    staggerClass: 'stagger-1'
  },
  {
    title: 'Demo & Technical Walkthrough',
    icon: Calendar,
    code: 'CHANNEL_02',
    category: 'Executive Briefing',
    description: 'Schedule a structured 45-minute technical briefing with our systems architects.',
    contactText: 'Executive Walkthrough Request',
    link: '/demo',
    linkLabel: 'Book a Demo',
    staggerClass: 'stagger-2'
  },
  {
    title: 'Solutions Architecture',
    icon: Layers,
    code: 'CHANNEL_03',
    category: 'Platform Exploration',
    description: 'Explore our Operations Platform, Analytics & Insights, and Integration Hub.',
    contactText: 'Connected Enterprise Platform',
    link: '/products',
    linkLabel: 'Explore Solutions',
    staggerClass: 'stagger-3'
  }
]

// Closing CTA
const closingSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isClosingRevealed } = useScrollReveal(closingSectionRef, {
  threshold: 0.18,
  delay: 50
})
</script>

<template>
  <div class="relative bg-[#0A0A0A] overflow-x-hidden">
    <section class="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0A0A0A] border-b border-white/[0.08]">
      
      <div class="absolute inset-0 opacity-35 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-14 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <ChapterLabel label="Contact Us" />
        </div>

        <div class="max-w-4xl space-y-7">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words reveal-base transition-editorial duration-700 delay-200" :class="{ 'is-revealed': isHeroMounted }">
  Let’s Start a <span class="text-brand font-normal">Conversation.</span>
</h1>

          <p
            class="font-editorial text-xl sm:text-2xl md:text-3xl text-zinc-300 leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Tell us about your business, your challenges, and what you’re looking to achieve.
            Let’s explore how KavoraX can help move your business forward.
          </p>

          <p
            class="font-ui text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed reveal-base transition-editorial duration-700 delay-600"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Enterprise technology discussions should be straightforward, thoughtful, and grounded in operational reality.
            We operate without high-pressure sales funnels—connecting you directly with solution specialists who understand
            interoperable systems, data governance, and long-term business objectives.
          </p>

          <div
            class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <a href="#inquiry-form" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group"
              >
                <span>Send an Inquiry</span>
                <ArrowDown class="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>

            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <Calendar class="mr-2 h-4 w-4 text-brand" />
                <span>Book an Executive Demo</span>
              </Button>
            </NuxtLink>
          </div>

          <div class="pt-12 mt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 font-ui">
            <div
              v-for="item in heroPrinciples"
              :key="item.title"
              class="rounded-xl border border-white/[0.06] bg-[#111111] p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
              :class="{ 'is-revealed': isHeroMounted }"
              :style="{ transitionDelay: isHeroMounted ? item.delay : '0ms' }"
            >
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <component :is="item.icon" class="h-4 w-4 text-brand shrink-0" />
                <span>{{ item.title }}</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed">
                {{ ' ' + item.description + ' ' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="inquiry-form"
      ref="formSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] relative border-t border-white/[0.08] scroll-mt-20 overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isFormRevealed }"
        >
          <ChapterLabel label="Send Us a Message" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-5 space-y-8">
            <div class="space-y-4">
              <h2 class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.12]">
  What to Share With Our Team.
</h2>
              <p
                class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-150"
                :class="{ 'is-revealed': isFormRevealed }"
              >
                To help us prepare for an informative initial exchange, consider sharing the general
                context of your business objectives and software environment.
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group reveal-card transition-editorial duration-700 delay-100"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              

              <div class="w-full p-2">
                <UiDeviceFrame type="terminal" title="Direct Advisory">
                  <OutletsOverview embedded />
                </UiDeviceFrame>
              </div>
              <div class="p-4 border-t border-white/10 bg-[#161616]">
                <p class="text-zinc-400 font-ui text-xs leading-snug">
                  Connect directly with our solutions team to discuss your operational requirements.
                </p>
              </div>
            </div>

            <div class="space-y-3.5 font-ui">
              <div
                v-for="point in preparationPoints"
                :key="point.num"
                :class="[
                  'rounded-xl border border-white/[0.07] bg-[#111111] p-4.5 space-y-1.5 hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700',
                  point.stagger,
                  { 'is-revealed': isFormRevealed }
                ]"
              >
                <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                  <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">{{ point.num }}</span>
                  <span>{{ point.title }}</span>
                </div>
                <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                  {{ ' ' + point.description + ' ' }}
                </p>
              </div>
            </div>

            <div
              class="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 space-y-4 font-ui reveal-card transition-editorial duration-700 delay-300"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                <span class="font-semibold text-white uppercase tracking-wider">Direct Advisory Channels</span>
              </div>
              <div class="space-y-3 text-xs">
                <div class="flex items-center justify-between">
                  <span class="text-zinc-400 flex items-center gap-2">
                    <Mail class="h-3.5 w-3.5 text-brand" />
                    Written Inquiries:
                  </span>
                  <a href="mailto:contact@kavorax.com" class="text-white hover:text-brand transition-colors">
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
                <div class="flex items-center justify-between pt-1 border-t border-white/[0.04] text-xs text-zinc-400">
                  <span>Entity:</span>
                  <span class="text-zinc-300">KavoraX Global Pvt Ltd</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 relative">
            <div
              class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            />

            <div
              class="relative rounded-3xl border border-white/10 bg-[#111111] p-7 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group reveal-card transition-editorial duration-700 delay-150"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              

              <div class="pb-6 border-b border-white/[0.08]">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-ui text-xs text-brand uppercase tracking-wider font-medium">Contact Form</span>
                  <span class="font-ui text-xs text-zinc-400">Fields with <span class="text-brand">*</span> are required</span>
                </div>
                <h3 class="font-editorial text-2xl sm:text-4xl font-semibold text-white">
                  Send an Inquiry
                </h3>
                <p class="font-ui text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  Provide your details below to initiate dialogue with our technical solutions team.
                </p>
              </div>

              <div
                v-if="submissionStatus === 'success'"
                class="mt-6 rounded-2xl border border-brand/40 bg-brand/[0.08] p-6 font-ui space-y-4"
                role="status"
              >
                <div class="flex items-start gap-3.5">
                  <CheckCircle2 class="h-6 w-6 text-brand shrink-0 mt-0.5" />
                  <div class="space-y-2">
                    <h4 class="text-base font-semibold text-white font-ui">Inquiry Successfully Registered</h4>
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
                        class="border-white/15 text-xs text-zinc-300 hover:text-white bg-[#161616] hover:bg-[#1C1C1C]"
                        @click="handleReset"
                      >
                        <RotateCcw class="mr-1.5 h-3.5 w-3.5" />
                        Send Another Inquiry
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

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

              <form
                v-if="submissionStatus !== 'success'"
                class="mt-8 space-y-8 font-ui"
                novalidate
                @submit.prevent="handleSubmit"
              >
                <div class="space-y-5">
                  <div class="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                    <span class="font-ui text-xs text-brand font-medium tracking-wider uppercase">01. Contact Details</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                          class="h-12 text-sm bg-[#111111] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] focus-visible:border-brand transition-all"
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
                        class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                        role="alert"
                      >
                        <AlertCircle class="h-3 w-3 shrink-0" />
                        <span>{{ errors.fullName }}</span>
                      </p>
                    </div>

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
                          class="h-12 text-sm bg-[#111111] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] focus-visible:border-brand transition-all"
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
                        class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                        role="alert"
                      >
                        <AlertCircle class="h-3 w-3 shrink-0" />
                        <span>{{ errors.workEmail }}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="space-y-5">
                  <div class="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                    <span class="font-ui text-xs text-brand font-medium tracking-wider uppercase">02. Organization & Scope</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <Label for="companyName" class="text-xs font-medium text-zinc-200">
                          Company Name
                          <span class="text-zinc-500 font-ui text-xs ml-1">(Optional)</span>
                        </Label>
                      </div>
                      <div class="relative">
                        <Input
                          id="companyName"
                          v-model="formData.companyName"
                          type="text"
                          placeholder="e.g. Acme Enterprises Ltd"
                          class="h-12 text-sm bg-[#111111] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] focus-visible:border-brand transition-all"
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
                        class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                        role="alert"
                      >
                        <AlertCircle class="h-3 w-3 shrink-0" />
                        <span>{{ errors.companyName }}</span>
                      </p>
                    </div>

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
                            'flex h-12 w-full rounded-lg border border-white/15 bg-[#111111] px-4 py-2 font-ui text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] focus-visible:border-brand cursor-pointer appearance-none',
                            formData.inquiryType ? 'text-white' : 'text-zinc-500',
                            errors.inquiryType ? 'border-red-500/70 focus-visible:ring-red-500' : ''
                          ]"
                          :aria-invalid="!!errors.inquiryType"
                          :aria-describedby="errors.inquiryType ? 'inquiryType-error' : undefined"
                          @change="validateField('inquiryType')"
                        >
                          <option value="" disabled selected class="bg-[#111111] text-zinc-500">
                            Select an inquiry category
                          </option>
                          <option
                            v-for="opt in inquiryOptions"
                            :key="opt.value"
                            :value="opt.value"
                            class="bg-[#161616] text-white py-2"
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
                        class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                        role="alert"
                      >
                        <AlertCircle class="h-3 w-3 shrink-0" />
                        <span>{{ errors.inquiryType }}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="space-y-5">
                  <div class="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span class="font-ui text-xs text-brand font-medium tracking-wider uppercase">03. Project Context</span>
                    <span class="font-ui text-xs text-zinc-500">{{ formData.message.length }} / 2000 chars</span>
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
                      class="min-h-[140px] text-sm bg-[#111111] border-white/15 text-white placeholder:text-zinc-500 rounded-lg focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] focus-visible:border-brand transition-all"
                      :class="{ 'border-red-500/70 focus-visible:ring-red-500': errors.message }"
                      :aria-invalid="!!errors.message"
                      :aria-describedby="errors.message ? 'message-error' : undefined"
                      @blur="validateField('message')"
                      @input="handleInput('message')"
                    />
                    <p
                      v-if="errors.message"
                      id="message-error"
                      class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                      role="alert"
                    >
                      <AlertCircle class="h-3 w-3 shrink-0" />
                      <span>{{ errors.message }}</span>
                    </p>
                  </div>
                </div>

                <div class="rounded-xl border border-white/[0.06] bg-[#111111]/80 p-4 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
                  <Lock class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>
                    Your inquiry is reviewed directly by KavoraX solution specialists. We maintain strict non-disclosure across all prospective architecture discussions.
                  </span>
                </div>

                <div class="space-y-2">
                  <NuxtTurnstile
                    ref="turnstileRef"
                    v-model="turnstileToken"
                    :options="{ theme: 'dark', size: 'normal' }"
                  />
                  <p
                    v-if="errors.turnstile"
                    id="turnstile-error"
                    class="text-xs text-red-400 font-ui flex items-center gap-1.5 mt-1"
                    role="alert"
                  >
                    <AlertCircle class="h-3 w-3 shrink-0" />
                    <span>{{ errors.turnstile }}</span>
                  </p>
                </div>

                <div class="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    :disabled="isSubmitting"
                    class="w-full h-14 bg-brand text-black font-semibold hover:bg-brand/90 text-base rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                  >
                    <Loader2 v-if="isSubmitting" class="mr-2.5 h-5 w-5 animate-spin text-black" />
                    <Send v-else class="mr-2.5 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    <span>{{ isSubmitting ? 'Submitting to KavoraX...' : 'Send Inquiry' }}</span>
                  </Button>
                </div>

                <div class="pt-3 flex items-center justify-between font-ui text-xs text-zinc-400">
                  <span class="flex items-center gap-1.5">
                    <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                    Zero spam · Non-disclosure respected
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="channelsSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] relative border-t border-white/[0.08] overflow-hidden"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isChannelsRevealed }"
        >
          <ChapterLabel label="Direct Contact Channels" />
        </div>

        <div class="max-w-3xl space-y-4 mb-16">
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
  Verified Channels for Direct Dialogue.
</h2>
          <p
            class="font-ui text-xl sm:text-2xl text-zinc-300 leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': isChannelsRevealed }"
          >
            Select the channel that best matches your timeline, preferred communication style, and
            organizational prerequisites.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-ui">
          <div
            v-for="ch in channels"
            :key="ch.title"
            class="rounded-2xl border border-white/10 bg-[#111111] p-8 sm:p-10 hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between relative reveal-card transition-editorial duration-700"
            :class="[ch.staggerClass, { 'is-revealed': isChannelsRevealed }]"
          >
            

            <div>
              <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1C1C1C] border border-white/10 text-brand group-hover:scale-105 transition-transform"
                  >
                    <component :is="ch.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <span class="font-ui text-xs text-brand uppercase tracking-wider block font-medium">{{ ch.category }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 space-y-3">
                <h3
                  class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors leading-snug"
                >
                  {{ ch.title }}
                </h3>
                <p class="font-ui text-sm text-zinc-400 leading-relaxed font-normal">
                  {{ ch.description }}
                </p>
              </div>

              <div class="mt-6 pt-5 border-t border-white/[0.06] font-ui">
                <span class="text-xs font-ui text-zinc-400 uppercase tracking-wider block">
                  Primary Channel
                </span>
                <span class="text-xs text-white font-ui font-medium mt-1 block">
                  {{ ch.contactText }}
                </span>
              </div>
            </div>

            <div class="pt-8 border-t border-white/[0.06] mt-8 font-ui">
              <NuxtLink
                :to="ch.link"
                class="inline-flex items-center justify-between w-full py-1 text-xs font-semibold text-brand hover:text-white transition-colors group/link"
              >
                <span>{{ ch.linkLabel }}</span>
                <ArrowRight
                  class="h-4 w-4 text-brand group-hover/link:translate-x-1 transition-transform"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="closingSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group reveal-card transition-editorial duration-700"
          :class="{ 'is-revealed': isClosingRevealed }"
        >
          

          <div
            class="flex justify-center mb-8 reveal-base transition-editorial duration-700 delay-75"
            :class="{ 'is-revealed': isClosingRevealed }"
          >
            <ChapterLabel label="Schedule a Briefing" />
          </div>

          <h2
            class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isClosingRevealed }"
          >
            Let’s Move Your Business Forward.
          </h2>

          <p
            class="mt-6 font-ui text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': isClosingRevealed }"
          >
            Start a conversation about your business goals and technology needs with our solutions team.
          </p>

          <div
            class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isClosingRevealed }"
          >
            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group/btn"
              >
                <Calendar class="mr-2 h-4 w-4" />
                <span>Book an Executive Demo</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/10 bg-[#1C1C1C] hover:bg-[#1C1C1C] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
              >
                <Layers class="mr-2 h-4 w-4 text-brand" />
                <span>Explore Platform Products</span>
              </Button>
            </NuxtLink>
          </div>

          <div
            class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-ui text-zinc-400 reveal-base transition-editorial duration-700 delay-400"
            :class="{ 'is-revealed': isClosingRevealed }"
          >
            <span>KavoraX Global Private Limited</span>
            <span>Enterprise Operations Platform · Direct Advisory</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
