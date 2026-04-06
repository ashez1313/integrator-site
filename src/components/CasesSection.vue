<template>
  <section id="cases" class="relative py-24 md:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-40 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-primary text-xs">ls</span>
          <span class="text-text-secondary text-xs">./cases</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('cases.title') }}
        </h2>
        <p class="text-text-secondary text-base max-w-2xl mx-auto">
          {{ t('cases.subtitle') }}
        </p>
      </div>

      <!-- Cases grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(caseItem, index) in cases"
          :key="index"
          class="animate-on-scroll"
          :class="`delay-${(index % 2) + 1}`"
        >
          <div class="glow-border h-full bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-500 overflow-hidden">
            <!-- Terminal bar -->
            <div class="flex items-center justify-between px-4 py-2.5 border-b border-surface-700">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              </div>
              <div class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20">
                <i class="pi pi-arrow-up text-green-400 text-[10px]"></i>
                <span class="text-green-400 text-xs font-semibold">{{ caseItem.result }}</span>
              </div>
            </div>

            <div class="p-5 md:p-6">
              <h3 class="text-lg font-semibold text-text-primary mb-3">
                <span class="text-text-muted mr-2">$</span>{{ caseItem.title }}
              </h3>
              <p class="text-text-secondary leading-relaxed text-sm mb-4">
                {{ caseItem.description }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="(tag, tagIndex) in caseItem.tags"
                  :key="tagIndex"
                  class="px-2 py-0.5 text-xs font-mono bg-surface-800 text-text-muted border border-surface-700"
                >
                  {{ tag }}
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

const cases = computed(() => tm('cases.items'))
</script>
