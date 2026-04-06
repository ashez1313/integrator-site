<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-surface-800 border border-surface-700 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50">
            <span class="text-primary font-bold text-sm">&gt;_</span>
          </div>
          <span class="text-text-primary font-semibold text-lg tracking-tight">ashez13<span class="text-primary">dev</span><span class="animate-blink text-primary"> </span></span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="px-3 py-2 text-text-secondary hover:text-primary transition-all duration-300 text-sm"
          >
            <span class="text-text-muted mr-1">/</span>{{ item.label }}
          </a>
        </nav>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <!-- CTA group -->
          <a
            href="#contacts"
            class="hidden sm:inline-flex items-center gap-2 h-9 px-4 bg-primary hover:bg-primary-light text-white text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <span>~</span>
            <span>{{ t('hero.cta') }}</span>
          </a>

          <!-- Divider -->
          <div class="hidden sm:block w-px h-5 bg-surface-700"></div>

          <!-- Settings group -->
          <div class="flex items-center gap-1">
            <!-- Theme toggle -->
            <button
              @click="toggleTheme"
              class="w-9 h-9 flex items-center justify-center border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
              :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
            >
              <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" class="text-sm"></i>
            </button>

            <!-- Language switcher -->
            <button
              @click="toggleLang"
              class="w-9 h-9 flex items-center justify-center gap-1.5 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
              :title="currentLang === 'ru' ? 'Switch to English' : 'Переключить на русский'"
            >
              <span :class="`fi fi-${currentLang === 'ru' ? 'ru' : 'us'} fis`"></span>
            </button>
          </div>

          <!-- Mobile menu toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="sm:hidden w-9 h-9 flex items-center justify-center border border-surface-700 text-text-secondary hover:text-primary transition-colors"
          >
            <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-sm"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-surface-900/95 backdrop-blur-xl border-t border-surface-700/50">
        <div class="px-4 py-4 space-y-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface-800/50 transition-all duration-300"
          >
            <span class="text-text-muted mr-2">$</span>{{ item.label }}
          </a>
          <a
            href="#contacts"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 bg-primary/10 text-primary hover:bg-primary/20 text-center font-medium transition-all duration-300 mt-2"
          >
            ~ {{ t('hero.cta') }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale } = useI18n()
const { theme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const currentLang = computed(() => locale.value)

const toggleLang = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}

const navItems = computed(() => [
  { id: 'services', label: t('nav.services') },
  { id: 'about', label: t('nav.about') },
  { id: 'cases', label: t('nav.cases') },
  { id: 'contacts', label: t('nav.contacts') },
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  background: transparent;
}

header.scrolled {
  background: var(--surface-900);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}
</style>
