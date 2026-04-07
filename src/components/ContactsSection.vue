<template>
  <section id="contacts" class="relative py-24 md:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-accent text-xs">echo</span>
          <span class="text-text-secondary text-xs">"let's talk"</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('contacts.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact info -->
        <div class="animate-on-scroll">
          <p class="text-text-secondary text-base leading-relaxed mb-8">
            {{ t('contacts.description') }}
          </p>

          <div class="space-y-3">
            <a
              :href="`mailto:${contacts.email}`"
              class="group flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-300 hover:-translate-x-1"
            >
              <div class="w-9 h-9 flex items-center justify-center bg-surface-800 border border-surface-700 group-hover:border-primary/40 transition-colors">
                <i class="pi pi-envelope text-primary text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-text-muted mb-0.5">{{ t('contacts.email.label') }}</div>
                <div class="text-text-primary text-sm font-mono group-hover:text-primary transition-colors">{{ contacts.email }}</div>
              </div>
            </a>

            <a
              :href="`tel:${contacts.phoneClean}`"
              class="group flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-300 hover:-translate-x-1"
            >
              <div class="w-9 h-9 flex items-center justify-center bg-surface-800 border border-surface-700 group-hover:border-primary/40 transition-colors">
                <i class="pi pi-phone text-primary text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-text-muted mb-0.5">{{ t('contacts.phone.label') }}</div>
                <div class="text-text-primary text-sm font-mono group-hover:text-primary transition-colors">{{ contacts.phone }}</div>
              </div>
            </a>

            <a
              :href="contacts.telegramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 p-4 bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-300 hover:-translate-x-1"
            >
              <div class="w-9 h-9 flex items-center justify-center bg-surface-800 border border-surface-700 group-hover:border-primary/40 transition-colors">
                <i class="pi pi-send text-primary text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-text-muted mb-0.5">{{ t('contacts.telegram.label') }}</div>
                <div class="text-text-primary text-sm font-mono group-hover:text-primary transition-colors">{{ contacts.telegram }}</div>
              </div>
            </a>

          </div>
        </div>

        <!-- Contact form -->
        <div class="animate-on-scroll delay-2">
          <div class="bg-surface-900 border border-surface-700">
            <!-- Terminal bar -->
            <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-700">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              <span class="ml-2 text-text-muted text-xs">message.sh</span>
            </div>

            <div class="p-5 md:p-6">
              <!-- Success state -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div v-if="submitStatus === 'success'" class="text-center py-8">
                  <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <i class="pi pi-check-circle text-green-400 text-3xl"></i>
                  </div>
                  <h3 class="text-lg font-semibold text-text-primary mb-2">
                    {{ t('contacts.form.successTitle') }}
                  </h3>
                  <p class="text-text-secondary text-sm mb-6">
                    {{ t('contacts.form.successMessage') }}
                  </p>
                  <button
                    @click="resetForm"
                    class="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-800 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/50 text-sm transition-all duration-300"
                  >
                    <i class="pi pi-plus text-xs"></i>
                    {{ t('contacts.form.sendAnother') }}
                  </button>
                </div>
              </Transition>

              <!-- Error state -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div v-if="submitStatus === 'error'" class="text-center py-8">
                  <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <i class="pi pi-times-circle text-red-400 text-3xl"></i>
                  </div>
                  <h3 class="text-lg font-semibold text-text-primary mb-2">
                    {{ t('contacts.form.errorTitle') }}
                  </h3>
                  <p class="text-text-secondary text-sm mb-6">
                    {{ t('contacts.form.errorMessage') }}
                  </p>
                  <button
                    @click="submitStatus = null"
                    class="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-800 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/50 text-sm transition-all duration-300"
                  >
                    <i class="pi pi-refresh text-xs"></i>
                    {{ t('contacts.form.tryAgain') }}
                  </button>
                </div>
              </Transition>

              <!-- Form -->
              <form v-if="submitStatus !== 'success'" @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label class="block text-xs font-mono text-text-muted mb-1.5">
                    <span class="text-primary">$</span> {{ t('contacts.form.name') }}
                    <span v-if="errors.name" class="text-red-400 ml-1">*</span>
                  </label>
                  <InputText
                    v-model="form.name"
                    type="text"
                    class="w-full"
                    :class="{ 'border-red-500/50': errors.name }"
                    :placeholder="t('contacts.form.name')"
                    :disabled="isSubmitting"
                  />
                  <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
                </div>

                <div>
                  <label class="block text-xs font-mono text-text-muted mb-1.5">
                    <span class="text-primary">$</span> {{ t('contacts.form.email') }}
                    <span v-if="errors.email" class="text-red-400 ml-1">*</span>
                  </label>
                  <InputText
                    v-model="form.email"
                    type="email"
                    class="w-full"
                    :class="{ 'border-red-500/50': errors.email }"
                    :placeholder="t('contacts.form.email')"
                    :disabled="isSubmitting"
                  />
                  <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
                </div>

                <div>
                  <label class="block text-xs font-mono text-text-muted mb-1.5">
                    <span class="text-primary">$</span> {{ t('contacts.form.message') }}
                    <span v-if="errors.message" class="text-red-400 ml-1">*</span>
                  </label>
                  <Textarea
                    v-model="form.message"
                    rows="4"
                    class="w-full"
                    :class="{ 'border-red-500/50': errors.message }"
                    :placeholder="t('contacts.form.message')"
                    :disabled="isSubmitting"
                  />
                  <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
                </div>

                <!-- Form-level error -->
                <Transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <p v-if="formError" class="text-red-400 text-xs">{{ formError }}</p>
                </Transition>

                <Button
                  type="submit"
                  :label="isSubmitting ? t('contacts.form.sending') : t('contacts.form.send')"
                  :icon="isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-send'"
                  :disabled="isSubmitting"
                  class="w-full"
                  severity="primary"
                  size="large"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const { t } = useI18n()
useScrollAnimation()

const FORMSPREE_URL = 'https://formspree.io/f/mgopdzao'

const contactData = {
  email: 'aishalapanov@gmail.com',
  phone: '+7 (921) 927-45-00',
  phoneClean: '79219274500',
  telegram: '@Ashez1313',
  telegramUrl: 'https://t.me/bitrix_dev',
}

const contacts = computed(() => contactData)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitStatus = ref(null)
const formError = ref('')

function validate() {
  errors.name = ''
  errors.email = ''
  errors.message = ''
  let valid = true

  if (!form.name.trim()) {
    errors.name = t('contacts.form.errors.nameRequired')
    valid = false
  } else if (form.name.trim().length < 2) {
    errors.name = t('contacts.form.errors.nameMin')
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = t('contacts.form.errors.emailRequired')
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('contacts.form.errors.emailInvalid')
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = t('contacts.form.errors.messageRequired')
    valid = false
  } else if (form.message.trim().length < 10) {
    errors.message = t('contacts.form.errors.messageMin')
    valid = false
  }

  return valid
}

async function submitForm() {
  formError.value = ''

  if (!validate()) return

  isSubmitting.value = true

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      }),
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      const data = await response.json().catch(() => ({}))
      formError.value = data.errors
        ? data.errors.map((e) => e.message).join(', ')
        : t('contacts.form.errors.serverError')
      submitStatus.value = 'error'
    }
  } catch {
    formError.value = t('contacts.form.errors.networkError')
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  submitStatus.value = null
  form.name = ''
  form.email = ''
  form.message = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
  formError.value = ''
}
</script>
