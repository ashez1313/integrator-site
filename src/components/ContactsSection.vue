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
        <p class="text-text-secondary text-base max-w-2xl mx-auto">
          {{ t('contacts.subtitle') }}
        </p>
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
          <form @submit.prevent="submitForm" class="bg-surface-900 border border-surface-700">
            <!-- Terminal bar -->
            <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-700">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              <span class="ml-2 text-text-muted text-xs">message.sh</span>
            </div>

            <div class="p-5 md:p-6 space-y-4">
              <div>
                <label class="block text-xs font-mono text-text-muted mb-1.5">
                  <span class="text-primary">$</span> {{ t('contacts.form.name') }}
                </label>
                <InputText
                  v-model="form.name"
                  type="text"
                  class="w-full"
                  :placeholder="t('contacts.form.name')"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-text-muted mb-1.5">
                  <span class="text-primary">$</span> {{ t('contacts.form.email') }}
                </label>
                <InputText
                  v-model="form.email"
                  type="email"
                  class="w-full"
                  :placeholder="t('contacts.form.email')"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-text-muted mb-1.5">
                  <span class="text-primary">$</span> {{ t('contacts.form.message') }}
                </label>
                <Textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full"
                  :placeholder="t('contacts.form.message')"
                />
              </div>

              <Button
                type="submit"
                :label="t('contacts.form.send')"
                icon="pi pi-send"
                class="w-full"
                severity="primary"
                size="large"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const { t } = useI18n()
useScrollAnimation()

const contactData = {
  email: 'hello@bitrix-dev.ru',
  phone: '+7 (999) 123-45-67',
  phoneClean: '79991234567',
  telegram: '@bitrix_dev',
  telegramUrl: 'https://t.me/bitrix_dev',
  whatsapp: '+7 (999) 123-45-67',
  whatsappUrl: 'https://wa.me/79991234567',
}

const contacts = computed(() => contactData)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
