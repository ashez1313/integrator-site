<template>
  <section id="about" class="relative py-24 md:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-accent text-xs">cat</span>
          <span class="text-text-secondary text-xs">./about.md</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('about.title') }}
        </h2>
        <p class="text-text-secondary text-base max-w-2xl mx-auto">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left: description + tech stack -->
        <div class="animate-on-scroll">
          <p class="text-text-secondary text-base leading-relaxed mb-8">
            {{ t('about.description') }}
          </p>

          <!-- Tech Stack -->
          <div>
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
              <span class="text-primary">$</span>
              {{ t('about.techStack.title') }}
            </h3>
            <div class="space-y-5">
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
                    class="px-2.5 py-1 text-xs font-mono bg-surface-900 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: stats -->
        <div class="animate-on-scroll delay-2">
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="group p-5 bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-500 hover:-translate-y-0.5"
            >
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-mono">
                {{ stat.value }}
              </div>
              <div class="text-text-secondary text-xs">
                {{ stat.label }}
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

const stats = computed(() => tm('about.stats'))
const techStack = computed(() => tm('about.techStack.categories'))
</script>
