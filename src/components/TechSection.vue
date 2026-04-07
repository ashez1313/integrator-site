<template>
  <section id="tech" class="relative py-24 md:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-accent text-xs">cat</span>
          <span class="text-text-secondary text-xs">./tech.json</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('tech.title') }}
        </h2>
      </div>

      <!-- Tech categories -->
      <div class="animate-on-scroll">
        <div class="bg-surface-900 border border-surface-700">
          <!-- Terminal bar -->
          <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-700">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
            <span class="ml-2 text-text-muted text-xs">tech.json</span>
          </div>

          <div class="p-6 md:p-8 space-y-6">
            <div
              v-for="(category, key) in techStack"
              :key="key"
              class="group"
            >
              <div class="flex items-center gap-2 mb-2.5">
                <span class="text-text-muted text-xs">→</span>
                <i :class="category.icon" class="text-primary text-xs"></i>
                <h4 class="text-sm font-semibold text-text-primary">{{ category.label }}</h4>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="(skill, index) in category.skills"
                  :key="index"
                  class="px-2.5 py-1 text-xs font-mono bg-surface-800 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { t, tm } = useI18n()
useScrollAnimation()

const techStack = computed(() => tm('tech.categories'))
</script>
