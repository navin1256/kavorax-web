<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle } from 'lucide-vue-next'
import { useKavoraxApi } from '~/composables/useKavoraxApi'

useHead({
  title: 'Contact KavoraX',
  meta: [
    {
      name: 'description',
      content:
        'Contact KavoraX on WhatsApp, by email or with the form. Questions about pricing, a demo, or whether KavoraX fits your restaurant or shop.'
    }
  ]
})

const config = useRuntimeConfig()
const whatsappNumber = config.public.whatsappNumber || '919629579358'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi KavoraX, I have a question.')}`
const whatsappDisplay = `+${whatsappNumber.slice(0, 2)} ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`

// Form
const contactSchema = z.object({
  fullName: z.string().trim().min(2, { message: 'Please enter your name.' }).max(100, { message: 'Name is too long.' }),
  workEmail: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .trim()
    .max(20, { message: 'Phone number is too long.' })
    .regex(/^[+\d\s()-]*$/, { message: 'Use digits only, with an optional + at the start.' })
    .optional(),
  companyName: z.string().trim().max(120, { message: 'Business name is too long.' }).optional(),
  inquiryType: z.string().min(1, { message: 'Please choose one.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Please write a little more (at least 10 characters).' })
    .max(2000, { message: 'Please keep it under 2000 characters.' })
})
type ContactFormData = z.infer<typeof contactSchema>

const defaultForm: ContactFormData = {
  fullName: '',
  workEmail: '',
  phone: '',
  companyName: '',
  inquiryType: '',
  message: ''
}

const inquiryOptions = [
  'Pricing',
  'A demo',
  'A question about a product',
  'Help with my KavoraX account',
  'Partnership or reselling',
  'Something else'
]

const { isSubmitting, submitContactMessage } = useKavoraxApi()
const formData = reactive<ContactFormData>({ ...defaultForm })
const errors = ref<Record<string, string>>({})
const apiError = ref<string | null>(null)
const submittedName = ref('')
const submissionStatus = ref<'idle' | 'success'>('idle')
const turnstileToken = ref('')
const turnstileRef = ref<{ reset?: () => void } | null>(null)

const firstName = computed(() => submittedName.value.split(' ')[0] || 'there')

const validateField = (field: keyof ContactFormData) => {
  const res = contactSchema.shape[field].safeParse(formData[field])
  const next = { ...errors.value }
  if (res.success) delete next[field]
  else next[field] = res.error.issues[0]?.message || 'Please check this field.'
  errors.value = next
}

const handleInput = (field: keyof ContactFormData) => {
  if (errors.value[field]) validateField(field)
}

const handleSubmit = async () => {
  errors.value = {}
  apiError.value = null
  const result = contactSchema.safeParse(formData)
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

  const subject = formData.companyName ? `[${formData.inquiryType}] ${formData.companyName}` : formData.inquiryType
  try {
    const response = await submitContactMessage({
      name: formData.fullName,
      email: formData.workEmail,
      phone: formData.phone || undefined,
      subject,
      message: formData.message,
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
        if (v.phone) backendErrors.phone = v.phone
        if (v.message) backendErrors.message = v.message
        if (v.subject) backendErrors.inquiryType = v.subject
        errors.value = { ...errors.value, ...backendErrors }
      }
      apiError.value = response.error || 'Your message could not be sent. Please try again, or use WhatsApp.'
      nextTick(() => document.getElementById('contact-api-error')?.focus())
    }
  } finally {
    turnstileToken.value = ''
    turnstileRef.value?.reset?.()
  }
}

const handleReset = () => {
  submissionStatus.value = 'idle'
  apiError.value = null
  turnstileToken.value = ''
  turnstileRef.value?.reset?.()
}
</script>

<template>
  <div>
    <section class="pt-14 pb-20 md:pt-20 md:pb-28">
      <div class="kx-wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <!-- Direct channels -->
        <div class="lg:col-span-5">
          <h1 class="font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl">Talk to us</h1>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-[#A3A3A3]">
            WhatsApp is the fastest way to reach us. For anything longer, use the form or send an email.
          </p>

          <ul class="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            <li>
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4 py-5">
                <MessageCircle class="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span>
                  <span class="block font-semibold text-white group-hover:text-brand">WhatsApp</span>
                  <span class="block text-[#A3A3A3]">{{ whatsappDisplay }}</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@kavorax.com" class="group flex items-start gap-4 py-5">
                <Mail class="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span>
                  <span class="block font-semibold text-white group-hover:text-brand">Email</span>
                  <span class="block text-[#A3A3A3]">contact@kavorax.com</span>
                </span>
              </a>
            </li>
            <li>
              <NuxtLink to="/demo" class="group flex items-start gap-4 py-5">
                <ArrowRight class="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span>
                  <span class="block font-semibold text-white group-hover:text-brand">Book a demo</span>
                  <span class="block text-[#A3A3A3]">See KavoraX on a call, with your own items.</span>
                </span>
              </NuxtLink>
            </li>
          </ul>

          <p class="mt-10 text-sm leading-relaxed text-[#737373]">
            KavoraX Global Private Limited<br />
            Bengaluru, Karnataka, India
          </p>
        </div>

        <!-- Form -->
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="rounded-xl border border-white/[0.08] bg-[#111111] p-6 md:p-10">
            <div v-if="submissionStatus === 'success'" class="py-6" role="status">
              <CheckCircle2 class="h-8 w-8 text-brand" />
              <h2 class="mt-5 font-editorial text-3xl text-white">Thanks, {{ firstName }}.</h2>
              <p class="mt-3 text-lg text-[#A3A3A3]">
                We have your message and will reply by email. If it is urgent, WhatsApp us.
              </p>
              <button type="button" class="kx-btn-line mt-8" @click="handleReset">Send another message</button>
            </div>

            <form v-else novalidate @submit.prevent="handleSubmit">
              <h2 class="font-editorial text-2xl text-white md:text-3xl">Send a message</h2>

              <div
                v-if="apiError"
                id="contact-api-error"
                tabindex="-1"
                role="alert"
                class="mt-6 rounded-lg border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200"
              >
                {{ apiError }}
              </div>

              <div class="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="fullName" class="kx-label">Your name</label>
                  <input id="fullName" v-model="formData.fullName" type="text" autocomplete="name" class="kx-input"
                    :aria-invalid="!!errors.fullName" :aria-describedby="errors.fullName ? 'fullName-error' : undefined"
                    @blur="validateField('fullName')" @input="handleInput('fullName')" />
                  <p v-if="errors.fullName" id="fullName-error" class="kx-error">{{ errors.fullName }}</p>
                </div>
                <div>
                  <label for="companyName" class="kx-label">Business name <small>optional</small></label>
                  <input id="companyName" v-model="formData.companyName" type="text" autocomplete="organization" class="kx-input"
                    :aria-invalid="!!errors.companyName" @input="handleInput('companyName')" />
                  <p v-if="errors.companyName" class="kx-error">{{ errors.companyName }}</p>
                </div>
                <div>
                  <label for="workEmail" class="kx-label">Email</label>
                  <input id="workEmail" v-model="formData.workEmail" type="email" autocomplete="email" class="kx-input"
                    :aria-invalid="!!errors.workEmail" :aria-describedby="errors.workEmail ? 'workEmail-error' : undefined"
                    @blur="validateField('workEmail')" @input="handleInput('workEmail')" />
                  <p v-if="errors.workEmail" id="workEmail-error" class="kx-error">{{ errors.workEmail }}</p>
                </div>
                <div>
                  <label for="phone" class="kx-label">Phone <small>optional</small></label>
                  <input id="phone" v-model="formData.phone" type="tel" autocomplete="tel" inputmode="tel" class="kx-input"
                    :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? 'phone-error' : undefined"
                    @blur="validateField('phone')" @input="handleInput('phone')" />
                  <p v-if="errors.phone" id="phone-error" class="kx-error">{{ errors.phone }}</p>
                </div>
                <div class="sm:col-span-2">
                  <label for="inquiryType" class="kx-label">What is it about?</label>
                  <select id="inquiryType" v-model="formData.inquiryType" class="kx-input"
                    :aria-invalid="!!errors.inquiryType" :aria-describedby="errors.inquiryType ? 'inquiryType-error' : undefined"
                    @change="validateField('inquiryType')">
                    <option value="" disabled>Choose one</option>
                    <option v-for="o in inquiryOptions" :key="o" :value="o">{{ o }}</option>
                  </select>
                  <p v-if="errors.inquiryType" id="inquiryType-error" class="kx-error">{{ errors.inquiryType }}</p>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="kx-label">Message</label>
                  <textarea id="message" v-model="formData.message" rows="5" class="kx-input resize-y"
                    placeholder="For example: we run a 40-seat restaurant with one counter and want to move off paper KOTs."
                    :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'message-error' : undefined"
                    @blur="validateField('message')" @input="handleInput('message')" />
                  <p v-if="errors.message" id="message-error" class="kx-error">{{ errors.message }}</p>
                </div>
              </div>

              <div class="mt-6">
                <NuxtTurnstile ref="turnstileRef" v-model="turnstileToken" :options="{ theme: 'dark', size: 'normal' }" />
                <p v-if="errors.turnstile" class="kx-error" role="alert">{{ errors.turnstile }}</p>
              </div>

              <button type="submit" class="kx-btn mt-8 w-full sm:w-auto" :disabled="isSubmitting">
                <Loader2 v-if="isSubmitting" class="h-4 w-4 animate-spin" />
                {{ isSubmitting ? 'Sending…' : 'Send message' }}
              </button>
              <p class="mt-4 text-sm text-[#737373]">
                We only use these details to reply to you. See our
                <NuxtLink to="/privacy-policy" class="kx-link">privacy policy</NuxtLink>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
