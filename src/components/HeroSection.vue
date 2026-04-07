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
      <!-- Terminal-style badge -->
      <div class="animate-fade-in-up inline-flex items-center gap-3 px-4 py-2 bg-surface-900 border border-surface-700 mb-8 font-mono">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 bg-green-400 animate-pulse"></span>
        </span>
        <span class="text-text-muted">|</span>
        <span class="text-text-secondary text-sm">{{ t('hero.badge') }}</span>
      </div>

      <!-- Title -->
      <h1 class="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style="animation-delay: 0.1s;">
        <span class="text-text-primary">{{ t('hero.title') }}</span>
        <br />
        <span class="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-gradient">
          {{ t('hero.titleHighlight') }}
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="animate-fade-in-up text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style="animation-delay: 0.2s;">
        {{ t('hero.subtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div class="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style="animation-delay: 0.3s;">
        <a
          href="#contacts"
          class="group inline-flex items-center gap-2 h-11 px-6 bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
        >
          <i class="pi pi-envelope"></i>
          <span>{{ t('hero.cta') }}</span>
          <span class="animate-blink text-white">_</span>
        </a>
        <a
          href="#cases"
          class="inline-flex items-center gap-2 h-11 px-6 bg-surface-900 hover:bg-surface-800 text-text-primary text-sm font-semibold border border-surface-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span class="text-text-muted mr-0.5">#</span>
          <span>{{ t('hero.ctaSecondary') }}</span>
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="animate-fade-in-up mt-16" style="animation-delay: 0.5s;">
        <a href="#services" class="inline-flex flex-col items-center text-text-muted hover:text-primary transition-colors">
          <span class="text-xs mb-2 tracking-widest uppercase">scroll down</span>
          <span class="text-lg">▼</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
