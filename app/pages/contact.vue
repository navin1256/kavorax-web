<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
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

// --- ContactHero ---
const isHeroMounted = ref(true)

// --- ContactFormSection ---
// Validation Schema using existing Zod libraryconst contactSchema = z.object({  fullName: z    .string()    .trim()    .min(2, { message: 'Full name must be at least 2 characters.' })    .max(100, { message: 'Full name cannot exceed 100 characters.' }),  workEmail: z.string().trim().email({ message: 'Please enter a valid work email address.' }),  companyName: z    .string()    .trim()    .max(120, { message: 'Company name cannot exceed 120 characters.' })    .optional(),  inquiryType: z    .string()    .min(1, { message: 'Please select an inquiry type.' }),  message: z    .string()    .trim()    .min(10, { message: 'Message must be at least 10 characters long.' })    .max(2000, { message: 'Message cannot exceed 2000 characters.' })})type ContactFormData = z.infer<typeof contactSchema>const { isSubmitting, submitContactMessage } = useKavoraxApi()const formData = reactive<ContactFormData>({  fullName: '',  workEmail: '',  companyName: '',  inquiryType: '',  message: ''})const errors = ref<Record<string, string>>({})const apiError = ref<string | null>(null)const submittedId = ref<number | null>(null)const submittedName = ref('')const submissionStatus = ref<'idle' | 'success'>('idle')const turnstileToken = ref('')const turnstileRef = ref<{ reset?: () => void } | null>(null)const inquiryOptions = [  { value: 'General Inquiry', label: 'General Inquiry' },  { value: 'Product Information', label: 'Product Information' },  { value: 'Solutions', label: 'Solutions & Architecture' },  { value: 'Partnership', label: 'Partnership' },  { value: 'Other', label: 'Other' }]const validateField = (field: keyof ContactFormData) => {  try {    const fieldSchema = contactSchema.shape[field]    if (fieldSchema) {      fieldSchema.parse(formData[field])      if (errors.value[field]) {        const remaining: Record<string, string> = {}        for (const key of Object.keys(errors.value)) {          if (key !== field && errors.value[key]) {            remaining[key] = errors.value[key]          }        }        errors.value = remaining      }    }  } catch (err) {    if (err instanceof z.ZodError) {      const firstIssue = err.issues?.[0]      if (firstIssue) {        errors.value = {          ...errors.value,          [field]: firstIssue.message        }      }    }  }}const handleInput = (field: keyof ContactFormData) => {  if (errors.value[field]) {    validateField(field)  }}const handleSubmit = async () => {  errors.value = {}  apiError.value = null  const result = contactSchema.safeParse(formData)  if (!result.success) {    const newErrors: Record<string, string> = {}    result.error.issues.forEach((err) => {      const field = err.path[0] as string      if (field && !newErrors[field]) {        newErrors[field] = err.message      }    })    errors.value = newErrors    // Find first error field to set focus for accessibility    const firstErrorKey = Object.keys(newErrors)[0]    if (firstErrorKey) {      const el = document.getElementById(firstErrorKey)      if (el) {        el.focus()      }    }    return  }  if (!turnstileToken.value) {    errors.value = {      ...errors.value,      turnstile: 'Please complete the anti-spam security verification.'    }    return  }  // Build subject incorporating inquiry type and company name if present  const subject = formData.companyName    ? `[${formData.inquiryType}] ${formData.companyName}`    : formData.inquiryType  try {    const response = await submitContactMessage({      name: formData.fullName,      email: formData.workEmail,      subject,      message: formData.message,      turnstileToken: turnstileToken.value    })    if (response.success && response.data) {      submittedId.value = response.data.id      submittedName.value = formData.fullName      submissionStatus.value = 'success'      // Form data reset ONLY upon confirmed backend persistence      formData.fullName = ''      formData.workEmail = ''      formData.companyName = ''      formData.inquiryType = ''      formData.message = ''      errors.value = {}    } else {      // Preserve all entered form data for user retry      if (response.validationErrors) {        const backendErrors: Record<string, string> = {}        if (response.validationErrors.name) backendErrors.fullName = response.validationErrors.name        if (response.validationErrors.email) backendErrors.workEmail = response.validationErrors.email        if (response.validationErrors.message) backendErrors.message = response.validationErrors.message        if (response.validationErrors.subject) backendErrors.inquiryType = response.validationErrors.subject        errors.value = { ...errors.value, ...backendErrors }      }      apiError.value = response.error || 'Unable to submit your inquiry. Please try again.'      nextTick(() => {        const errorEl = document.getElementById('contact-api-error')        if (errorEl) {          errorEl.focus()        }      })    }  } finally {    turnstileToken.value = ''    turnstileRef.value?.reset?.()  }}const handleReset = () => {  submissionStatus.value = 'idle'  apiError.value = null  submittedId.value = null  turnstileToken.value = ''  turnstileRef.value?.reset?.()}const formSectionRef = ref<HTMLElement | null>(null)const { isFormRevealed } = useScrollReveal(formSectionRef, {  threshold: 0.12,  delay: 40})

// --- ContactChannels ---
const channelsSectionRef = ref<HTMLElement | null>(null)const { isChannelsRevealed } = useScrollReveal(channelsSectionRef, {  threshold: 0.15,  delay: 50})const channels = [  {    title: 'General Inquiries',    icon: Mail,    code: 'CHANNEL_01',    category: 'Direct Communication',    description: 'Reach our team directly for business, partnership, and corporate inquiries.',    contactText: 'contact@kavorax.com',    link: 'mailto:contact@kavorax.com',    linkLabel: 'Email Directly',    staggerClass: 'stagger-1'  },  {    title: 'Demo & Technical Walkthrough',    icon: Calendar,    code: 'CHANNEL_02',    category: 'Executive Briefing',    description: 'Schedule a structured 45-minute technical briefing with our systems architects.',    contactText: 'Executive Walkthrough Request',    link: '/demo',    linkLabel: 'Book a Demo',    staggerClass: 'stagger-2'  },  {    title: 'Solutions Architecture',    icon: Layers,    code: 'CHANNEL_03',    category: 'Platform Exploration',    description: 'Explore our Operations Platform, Analytics & Insights, and Integration Hub.',    contactText: 'Connected Enterprise Platform',    link: '/products',    linkLabel: 'Explore Solutions',    staggerClass: 'stagger-3'  }]

// --- ContactClosingCta ---
const closingSectionRef = ref<HTMLElement | null>(null)const { isClosingRevealed } = useScrollReveal(closingSectionRef, {  threshold: 0.18,  delay: 50})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Contact Hero -->
    <section class="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow with subtle atmospheric drift -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Editorial Eyebrow & Corporate Coordinate Header -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-14 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <ChapterLabel label="Contact Us" />
        <div class="flex items-center gap-6 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            CONFIDENTIAL ADVISORY
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">DIRECT TECHNICAL LEADERSHIP</span>
        </div>
      </div>

      <!-- Main Editorial Headline & Introduction Spread -->
      <div class="max-w-4xl space-y-7">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
          <span>START A CONVERSATION</span>
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          text="Let’s Start a Conversation."
          as="h1"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
          :italic-words="['Conversation.']"
          :delay="240"
          :immediate="true"
        />

        <!-- Supporting Text: Restored to Cormorant serif (font-editorial) per approved reference design -->
        <p
          class="font-editorial text-xl sm:text-2xl md:text-3xl text-zinc-300 leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Tell us about your business, your challenges, and what you’re looking to achieve.
          Let’s explore how KavoraX can help move your business forward.
        </p>

        <!-- Narrative Context -->
        <p
          class="font-ui text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed reveal-base transition-editorial duration-700 delay-600"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Enterprise technology discussions should be straightforward, thoughtful, and grounded in operational reality.
          We operate without high-pressure sales funnels—connecting you directly with solution specialists who understand
          interoperable systems, data governance, and long-term business objectives.
        </p>

        <!-- Action CTAs -->
        <div
          class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <a href="#inquiry-form" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
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

        <!-- 3 Approachable Principles Strip with Individual Staggered Card Entrance -->
        <div class="pt-12 mt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 font-ui">
          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '750ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <UserCheck class="h-4 w-4 text-brand shrink-0" />
              <span>Direct Architect Access</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Discussions are reviewed directly by technical solution specialists rather than sales SDRs.
            </p>
          </div>

          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '850ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
              <span>Strict Confidentiality</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              All shared business contexts, system schemas, and operational requirements remain confidential.
            </p>
          </div>

          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '950ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <Cpu class="h-4 w-4 text-brand shrink-0" />
              <span>Pragmatic Guidance</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Objective evaluation of architectural compatibility with zero pressure for unnecessary replacements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Two-Column Contact Inquiry & Form Section -->
    <section
    id="inquiry-form"
    ref="formSectionRef"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] scroll-mt-20 overflow-hidden"
  >
    <!-- Subtle ambient glow with gentle atmospheric drift -->
    <div
      class="absolute top-1/3 -right-36 w-96 h-96 bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Tag & Coordinate Metadata Bar -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isFormRevealed }"
      >
        <ChapterLabel label="Send Us a Message" />
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
            <!-- Section H2 with WordReveal -->
            <WordReveal
              text="What to Share With Our Team."
              as="h2"
              class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.12]"
              :italic-words="['Our Team.']"
              :delay="120"
            />
            <!-- Corrected to font-ui font-light -->
            <p
              class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-light reveal-base transition-editorial duration-700 delay-150"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              To help us prepare for an informative initial exchange, consider sharing the general
              context of your business objectives and software environment.
            </p>
          </div>

          <!-- The ONE Supporting Visual: Architectural Consultation Photo Frame with Reveal -->
          <div
            class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group reveal-card transition-editorial duration-700 delay-100"
            :class="{ 'is-revealed': isFormRevealed }"
          >
            <!-- Active Theory Corner Crosshairs -->
            <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <div class="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/executive-briefing.webp"
                alt="Architectural briefing room where technology strategy aligns with business operations"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="600"
                height="288"
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

              <!-- Editorial Photo Caption (Corrected to font-ui) -->
              <div class="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-4 space-y-1">
                <div class="flex items-center justify-between font-ui text-xs">
                  <span class="text-zinc-200 font-semibold flex items-center gap-1.5">
                    <Building2 class="h-3.5 w-3.5 text-brand" />
                    Direct Architectural Review
                  </span>
                  <span class="font-mono text-zinc-400 text-[10px]">VERIFIED</span>
                </div>
                <p class="text-zinc-400 font-ui text-xs leading-snug">
                  Direct engagement with solutions engineers to evaluate system compatibility and workflow cohesion.
                </p>
              </div>
            </div>
          </div>

          <!-- Structured Preparation Points with Staggered Card Reveals -->
          <div class="space-y-3.5 font-ui">
            <div
              class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700 stagger-1"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">1</span>
                <span>Operational Challenges</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Describe the specific workflow handoffs, communication lags, or operational friction your teams encounter.
              </p>
            </div>

            <div
              class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700 stagger-2"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">2</span>
                <span>Existing Software Topology</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Mention the core software stacks, on-premise databases, cloud tools, or third-party APIs you wish to synchronize.
              </p>
            </div>

            <div
              class="rounded-xl border border-white/[0.07] bg-[#0c141e]/80 p-4.5 space-y-1.5 hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700 stagger-3"
              :class="{ 'is-revealed': isFormRevealed }"
            >
              <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">3</span>
                <span>Organizational Priorities & Scale</span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed pl-7">
                Outline target delivery timelines, compliance prerequisites, or growth milestones driving your evaluation.
              </p>
            </div>
          </div>

          <!-- Direct Verified Channels Box with Reveal -->
          <div
            class="rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 p-6 space-y-4 font-ui reveal-card transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isFormRevealed }"
          >
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

        <!-- Right Column: Carefully Designed Inquiry Form with Stable Cohesive Reveal -->
        <div class="lg:col-span-7 relative">
          <!-- Subtle Glow Backplate with Atmospheric Ambient Drift -->
          <div
            class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none animate-ambient-drift"
            aria-hidden="true"
          />

          <!-- Form Outer Container Card: Reveals as one unit approximately 150ms after guidance -->
          <div
            class="relative rounded-3xl border border-white/10 bg-[#0c141e]/95 p-7 sm:p-12 lg:p-14 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group reveal-card transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isFormRevealed }"
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

              <!-- Cloudflare Turnstile Anti-Spam Security Challenge -->
              <div class="space-y-2">
                <NuxtTurnstile
                  ref="turnstileRef"
                  v-model="turnstileToken"
                  :options="{ theme: 'dark', size: 'normal' }"
                />
                <p
                  v-if="errors.turnstile"
                  id="turnstile-error"
                  class="text-[11px] text-red-400 font-mono flex items-center gap-1.5 mt-1"
                  role="alert"
                >
                  <AlertCircle class="h-3 w-3 shrink-0" />
                  <span>{{ errors.turnstile }}</span>
                </p>
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

    <!-- Additional Verified Engagement Channels -->
    <section
    ref="channelsSectionRef"
    class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08] overflow-hidden"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with ChapterLabel -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isChannelsRevealed }"
      >
        <ChapterLabel label="Direct Contact Channels" />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            OFFICIAL ADVISORY
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">AUTHENTIC DIRECT REACH</span>
        </div>
      </div>

      <!-- Section Title Area -->
      <div class="max-w-3xl space-y-4 mb-16">
        <!-- Section H2 with WordReveal -->
        <WordReveal
          text="Verified Channels for Enterprise Dialogue."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          :italic-words="['Enterprise Dialogue.']"
          :delay="120"
        />
        <!-- Subtitle Corrected to font-ui font-light -->
        <p
          class="font-ui text-xl sm:text-2xl text-zinc-300 leading-relaxed font-light reveal-base transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isChannelsRevealed }"
        >
          Select the channel that best matches your timeline, preferred communication style, and
          organizational prerequisites.
        </p>
      </div>

      <!-- 3 Channels Grid with Staggered Card Entrance -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-ui">
        <div
          v-for="ch in channels"
          :key="ch.title"
          class="rounded-2xl border border-white/10 bg-[#0c141e]/90 p-8 sm:p-10 backdrop-blur-xl hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.16)] relative reveal-card transition-editorial duration-700"
          :class="[ch.staggerClass, { 'is-revealed': isChannelsRevealed }]"
        >
          <!-- Active Theory Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <div>
            <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
              <div class="flex items-center gap-3.5">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#121c29] border border-white/10 text-brand group-hover:scale-105 transition-transform"
                >
                  <component :is="ch.icon" class="h-5 w-5" />
                </div>
                <div>
                  <span class="font-mono text-xs text-brand uppercase tracking-wider block">{{ ch.category }}</span>
                  <div class="font-mono text-[10px] text-zinc-500">{{ ch.code }}</div>
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
              <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Primary Channel
              </span>
              <span class="text-xs text-white font-mono font-medium mt-1 block">
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

    <!-- Closing Call to Action -->
    <section
    ref="closingSectionRef"
    class="py-24 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Subtle Ambient Glow with Atmospheric Drift -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- Container Card with Progressive Reveal -->
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group reveal-card transition-editorial duration-700"
        :class="{ 'is-revealed': isClosingRevealed }"
      >
        <!-- Active Theory Corner Crosshairs -->
        <div class="absolute top-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Chapter Label -->
        <div
          class="flex justify-center mb-8 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isClosingRevealed }"
        >
          <ChapterLabel label="Schedule a Briefing" />
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          text="Let’s Move Your Business Forward."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
          :italic-words="['Business Forward.']"
          :delay="120"
        />

        <!-- Supporting text (Corrected to font-ui font-light) -->
        <p
          class="mt-6 font-ui text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light reveal-base transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isClosingRevealed }"
        >
          Start a conversation about your business goals and technology needs with our solutions team.
        </p>

        <!-- Action CTAs with Staggered Entrance -->
        <div
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isClosingRevealed }"
        >
          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-all duration-200 group/btn"
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
              class="w-full sm:w-auto border-white/10 bg-[#111a26]/60 hover:bg-[#111a26] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
            >
              <Layers class="mr-2 h-4 w-4 text-brand" />
              <span>Explore Platform Products</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Corporate Attribution Footer -->
        <div
          class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 reveal-base transition-editorial duration-700 delay-400"
          :class="{ 'is-revealed': isClosingRevealed }"
        >
          <span>KAVORAX GLOBAL PRIVATE LIMITED</span>
          <span class="text-zinc-400 font-ui text-[11px]">Enterprise Technology & Operations · Direct Advisory</span>
          <span class="text-brand">CONFIDENTIAL REVIEW</span>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
