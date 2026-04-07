<template>
  <section id="certs" class="relative py-24 md:py-32">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-primary text-xs">ls</span>
          <span class="text-text-secondary text-xs">./certificates</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('certs.title') }}
        </h2>
      </div>

      <!-- Certificates grid -->
      <div class="animate-on-scroll">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="cert in certificates"
            :key="cert.file"
            class="group cursor-pointer"
            @click="openLightbox(cert)"
          >
            <div class="bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-300 overflow-hidden hover:-translate-y-0.5">
              <div class="aspect-[4/3] relative overflow-hidden bg-surface-800">
                <img
                  :src="`/certificates/${cert.file}`"
                  :alt="cert.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <i class="pi pi-search text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
              <div class="px-3 py-2">
                <p class="text-text-secondary text-xs truncate">{{ cert.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile link -->
      <div class="text-center mt-10 animate-on-scroll">
        <a
          :href="t('certs.profileLink')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-900 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/40 text-sm transition-all duration-300"
        >
          <i class="pi pi-external-link text-xs"></i>
          {{ t('certs.profileText') }}
        </a>
      </div>

      <!-- Disclaimer -->
      <p class="text-center text-text-muted text-xs mt-6 animate-on-scroll">
        {{ t('certs.disclaimer') }}
      </p>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          @click="closeLightbox"
        >
          <div
            class="relative max-w-4xl max-h-[90vh] w-full"
            @click.stop
          >
            <button
              @click="closeLightbox"
              class="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <i class="pi pi-times text-lg"></i>
            </button>
            <img
              :src="`/certificates/${selectedCert?.file}`"
              :alt="selectedCert?.name"
              class="w-full h-full object-contain rounded"
            />
            <p class="text-center text-white/60 text-sm mt-3">{{ selectedCert?.name }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { t } = useI18n()
useScrollAnimation()

const lightboxOpen = ref(false)
const selectedCert = ref(null)

// Certificate files from /public/certificates/
// Priority: lower number = shown first
const certificateFiles = [
  { file: '1-bitrix-crm.svg', name: 'Bitrix24 CRM' },
  { file: '2-bitrix-dev.svg', name: 'Bitrix24 Developer' },
  { file: '3-bitrix-admin.svg', name: 'Bitrix24 Administrator' },
]

const certificates = computed(() => certificateFiles)

const openLightbox = (cert) => {
  selectedCert.value = cert
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  selectedCert.value = null
  document.body.style.overflow = ''
}

const handleEsc = (e) => {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
  document.body.style.overflow = ''
})
</script>
