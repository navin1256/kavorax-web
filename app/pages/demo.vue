<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { z } from 'zod'
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-vue-next'
import { useKavoraxApi } from '~/composables/useKavoraxApi'
import { productNavItems } from '~/utils/productNav'

useHead({
  title: 'Book a demo | KavoraX',
  meta: [
    {
      name: 'description',
      content:
        'Book a KavoraX demo. A video call or a visit where we show billing, the kitchen screen, stock and loyalty using your own menu or products.'
    },
    { property: 'og:title', content: 'Book a demo | KavoraX' }
  ]
})

const config = useRuntimeConfig()
const whatsappUrl = `https://wa.me/${config.public.whatsappNumber || '919629579358'}?text=${encodeURIComponent('Hi KavoraX, I would like to book a demo.')}`

const demoSchema = z.object({
  fullName: z.string().trim().min(2, { message: 'Please enter your name.' }).max(100, { message: 'Name is too long.' }),
  workEmail: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .trim()
    .max(20, { message: 'Phone number is too long.' })
    .regex(/^[+\d\s()-]*$/, { message: 'Use digits only, with an optional + at the start.' })
    .optional(),
  companyName: z.string().trim().min(2, { message: 'Please enter your business name.' }).max(120, { message: 'Business name is too long.' }),
  industry: z.string().min(1, { message: 'Please choose one.' }),
  areaOfInterest: z.string().min(1, { message: 'Please choose one.' }),
  businessChallenge: z
    .string()
    .trim()
    .min(10, { message: 'Please write a little more (at least 10 characters).' })
    .max(800, { message: 'Please keep it under 800 characters.' })
})
type DemoFormData = z.infer<typeof demoSchema>

const defaultForm: DemoFormData = {
  fullName: '',
  workEmail: '',
  phone: '',
  companyName: '',
  industry: '',
  areaOfInterest: '',
  businessChallenge: ''
}

const businessTypes = ['Restaurant', 'Cafe or bakery', 'Cloud kitchen', 'Retail or convenience store', 'Salon', 'Online seller', 'Other']
const interestOptions = [...productNavItems.map((p) => p.name), 'Not sure yet, show me everything']

const { isSubmitting, submitDemoRequest } = useKavoraxApi()
const formData = reactive<DemoFormData>({ ...defaultForm })
const errors = ref<Record<string, string>>({})
const apiError = ref<string | null>(null)
const submittedName = ref('')
const submissionStatus = ref<'idle' | 'success'>('idle')
const turnstileToken = ref('')
const turnstileRef = ref<{ reset?: () => void } | null>(null)

const firstName = computed(() => submittedName.value.split(' ')[0] || 'there')

const route = useRoute()
onMounted(() => {
  const slug = route.query.module
  const match = productNavItems.find((p) => p.slug === slug)
  if (match) formData.areaOfInterest = match.name
})

const validateField = (field: keyof DemoFormData) => {
  const res = demoSchema.shape[field].safeParse(formData[field])
  const next = { ...errors.value }
  if (res.success) delete next[field]
  else next[field] = res.error.issues[0]?.message || 'Please check this field.'
  errors.value = next
}

const handleSubmit = async () => {
  errors.value = {}
  apiError.value = null
  const result = demoSchema.safeParse(formData)
  if (!result.success) {
    const newErrors: Record<string, string> = {}
    for (const issue of result.error.issues) {
      const field = String(issue.path[0] || '')
      if (field && !newErrors[field]) newErrors[field] = issue.message
    }
    errors.value = newErrors
    const firstKey = Object.keys(newErrors)[0]
    if (firstKey) document.getElementById(firstKey)?.focus()
    return
  }
  if (!turnstileToken.value) {
    errors.value = { ...errors.value, turnstile: 'Please complete the spam check above.' }
    return
  }

  const reqs = `[${formData.industry}] [${formData.areaOfInterest}]${formData.phone ? ` Phone: ${formData.phone} |` : ''} ${formData.businessChallenge}`.slice(0, 1000)
  try {
    const response = await submitDemoRequest({
      name: formData.fullName,
      email: formData.workEmail,
      company: formData.companyName,
      reqs,
      turnstileToken: turnstileToken.value
    })
    if (response.success && response.data) {
      submittedName.value = formData.fullName
      submissionStatus.value = 'success'
      Object.assign(formData, defaultForm)
      errors.value = {}
    } else {
      const v = response.validationErrors
      if (v) {
        const backendErrors: Record<string, string> = {}
        if (v.name) backendErrors.fullName = v.name
        if (v.email) backendErrors.workEmail = v.email
        if (v.company) backendErrors.companyName = v.company
        if (v.reqs) backendErrors.businessChallenge = v.reqs
        errors.value = { ...errors.value, ...backendErrors }
      }
      apiError.value = response.error || 'Your request could not be sent. Please try again, or book on WhatsApp.'
      nextTick(() => document.getElementById('demo-api-error')?.focus())
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
  submissionStatus.value = 'idle'
  turnstileToken.value = ''
  turnstileRef.value?.reset?.()
}

const demoSteps = [
  { title: 'You fill this in', text: 'Two minutes. The more you tell us about how the shop runs, the less of the call we spend on questions.' },
  { title: 'We get in touch to fix a time', text: 'By email, or by phone or WhatsApp if you leave a number.' },
  { title: 'The demo', text: 'On a video call, or in person if you are nearby. We show the parts you picked, with your items if you send them.' },
  { title: 'You decide', text: 'You get a price for your setup afterwards. No follow-up calls unless you ask for them.' }
]
</script>

<template>
  <div>
    <section class="pt-14 pb-20 md:pt-20 md:pb-28">
      <div class="kx-wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <!-- What happens -->
        <div class="lg:col-span-5">
          <h1 class="font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl">Book a demo</h1>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-[#A3A3A3]">
            We show you KavoraX doing the things your shop does every day, not a tour of every menu.
          </p>

          <h2 class="mt-12 font-ui text-sm font-semibold text-[#A3A3A3]">What happens next</h2>
          <ol class="mt-4 space-y-7">
            <li v-for="(s, i) in demoSteps" :key="s.title" class="grid grid-cols-[2rem_1fr] gap-3">
              <span class="font-editorial text-xl text-brand tabular-nums">{{ i + 1 }}</span>
              <div>
                <h3 class="font-semibold text-white">{{ s.title }}</h3>
                <p class="mt-1 leading-relaxed text-[#A3A3A3]">{{ s.text }}</p>
              </div>
            </li>
          </ol>

          <p class="mt-12 border-t border-white/[0.08] pt-6 text-[#A3A3A3]">
            Prefer to just message?
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="kx-link ms-1 inline-flex items-center gap-1.5">
              <MessageCircle class="h-4 w-4 text-brand" />
              Book on WhatsApp
            </a>
          </p>
        </div>

        <!-- Form -->
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="rounded-xl border border-white/[0.08] bg-[#111111] p-6 md:p-10">
            <div v-if="submissionStatus === 'success'" class="py-6" role="status">
              <CheckCircle2 class="h-8 w-8 text-brand" />
              <h2 class="mt-5 font-editorial text-3xl text-white">Thanks, {{ firstName }}.</h2>
              <p class="mt-3 text-lg text-[#A3A3A3]">
                We have your request and will get in touch to fix a time. If you have a menu or product
                list, reply to our email with it and we will use it in the demo.
              </p>
              <button type="button" class="kx-btn-line mt-8" @click="handleReset">Book another</button>
            </div>

            <form v-else novalidate @submit.prevent="handleSubmit">
              <div
                v-if="apiError"
                id="demo-api-error"
                tabindex="-1"
                role="alert"
                class="mb-6 rounded-lg border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200"
              >
                {{ apiError }}
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="fullName" class="kx-label">Your name</label>
                  <input id="fullName" v-model="formData.fullName" type="text" autocomplete="name" class="kx-input"
                    :aria-invalid="!!errors.fullName" :aria-describedby="errors.fullName ? 'fullName-error' : undefined"
                    @blur="validateField('fullName')" />
                  <p v-if="errors.fullName" id="fullName-error" class="kx-error">{{ errors.fullName }}</p>
                </div>
                <div>
                  <label for="companyName" class="kx-label">Business name</label>
                  <input id="companyName" v-model="formData.companyName" type="text" autocomplete="organization" class="kx-input"
                    :aria-invalid="!!errors.companyName" :aria-describedby="errors.companyName ? 'companyName-error' : undefined"
                    @blur="validateField('companyName')" />
                  <p v-if="errors.companyName" id="companyName-error" class="kx-error">{{ errors.companyName }}</p>
                </div>
                <div>
                  <label for="workEmail" class="kx-label">Email</label>
                  <input id="workEmail" v-model="formData.workEmail" type="email" autocomplete="email" class="kx-input"
                    :aria-invalid="!!errors.workEmail" :aria-describedby="errors.workEmail ? 'workEmail-error' : undefined"
                    @blur="validateField('workEmail')" />
                  <p v-if="errors.workEmail" id="workEmail-error" class="kx-error">{{ errors.workEmail }}</p>
                </div>
                <div>
                  <label for="phone" class="kx-label">Phone or WhatsApp <small>optional</small></label>
                  <input id="phone" v-model="formData.phone" type="tel" autocomplete="tel" inputmode="tel" class="kx-input"
                    :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? 'phone-error' : undefined"
                    @blur="validateField('phone')" />
                  <p v-if="errors.phone" id="phone-error" class="kx-error">{{ errors.phone }}</p>
                </div>
                <div>
                  <label for="industry" class="kx-label">Type of business</label>
                  <select id="industry" v-model="formData.industry" class="kx-input"
                    :aria-invalid="!!errors.industry" :aria-describedby="errors.industry ? 'industry-error' : undefined"
                    @change="validateField('industry')">
                    <option value="" disabled>Choose one</option>
                    <option v-for="t in businessTypes" :key="t" :value="t">{{ t }}</option>
                  </select>
                  <p v-if="errors.industry" id="industry-error" class="kx-error">{{ errors.industry }}</p>
                </div>
                <div>
                  <label for="areaOfInterest" class="kx-label">Most interested in</label>
                  <select id="areaOfInterest" v-model="formData.areaOfInterest" class="kx-input"
                    :aria-invalid="!!errors.areaOfInterest" :aria-describedby="errors.areaOfInterest ? 'areaOfInterest-error' : undefined"
                    @change="validateField('areaOfInterest')">
                    <option value="" disabled>Choose one</option>
                    <option v-for="o in interestOptions" :key="o" :value="o">{{ o }}</option>
                  </select>
                  <p v-if="errors.areaOfInterest" id="areaOfInterest-error" class="kx-error">{{ errors.areaOfInterest }}</p>
                </div>
                <div class="sm:col-span-2">
                  <label for="businessChallenge" class="kx-label">Tell us about the business</label>
                  <textarea id="businessChallenge" v-model="formData.businessChallenge" rows="5" class="kx-input resize-y"
                    placeholder="How many outlets and counters, what you use today, and what bothers you most about it."
                    :aria-invalid="!!errors.businessChallenge" :aria-describedby="errors.businessChallenge ? 'businessChallenge-error' : undefined"
                    @blur="validateField('businessChallenge')" />
                  <p v-if="errors.businessChallenge" id="businessChallenge-error" class="kx-error">{{ errors.businessChallenge }}</p>
                </div>
              </div>

              <div class="mt-6">
                <NuxtTurnstile ref="turnstileRef" v-model="turnstileToken" :options="{ theme: 'dark', size: 'normal' }" />
                <p v-if="errors.turnstile" class="kx-error" role="alert">{{ errors.turnstile }}</p>
              </div>

              <button type="submit" class="kx-btn mt-8 w-full sm:w-auto" :disabled="isSubmitting">
                <Loader2 v-if="isSubmitting" class="h-4 w-4 animate-spin" />
                {{ isSubmitting ? 'Sending…' : 'Request a demo' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
