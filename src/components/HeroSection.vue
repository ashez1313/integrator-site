<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
    </div>

    <!-- Terminal grid pattern -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Title -->
      <h1 class="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style="animation-delay: 0.1s;">
        <span class="text-text-primary">{{ t('hero.title') }}</span>
        <br />
        <span class="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {{ t('hero.titleHighlight') }}
        </span>
      </h1>

      <!-- Bullets -->
      <div class="animate-fade-in-up flex flex-wrap items-center justify-center gap-3 mb-10" style="animation-delay: 0.2s;">
        <span
          v-for="(bullet, i) in bullets"
          :key="i"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 text-text-secondary text-sm"
        >
          <span class="text-primary text-xs">◆</span>
          {{ bullet }}
        </span>
      </div>

      <!-- CTA Buttons -->
      <div class="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style="animation-delay: 0.3s;">
        <a
          href="#projects"
          class="group inline-flex items-center gap-2 h-11 px-6 bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
        >
          <span class="pi pi-briefcase"></span>
          <span>{{ t('hero.projects') }}</span>
          <span class="animate-blink text-white">_</span>
        </a>
        <a
          href="https://github.com/ashez1313"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 h-11 px-6 bg-surface-900 hover:bg-surface-800 text-text-primary text-sm font-semibold border border-surface-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <i class="pi pi-github text-sm"></i>
          <span>{{ t('hero.ctaSecondary') }}</span>
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="animate-fade-in-up mt-16" style="animation-delay: 0.5s;">
        <a href="#about" class="inline-flex flex-col items-center text-text-muted hover:text-primary transition-colors">
          <span class="text-xs mb-2 tracking-widest uppercase">{{ t('hero.scroll_down') }}</span>
          <span class="text-lg">▼</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const bullets = computed(() => tm('hero.bullets'))
</script>
