<template>
  <section id="work" class="relative py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-primary text-xs">ls</span>
          <span class="text-text-secondary text-xs">./work</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('work.title') }}
        </h2>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, index) in workItems"
          :key="index"
          class="animate-on-scroll"
          :class="`delay-${(index % 2) + 1}`"
        >
          <div class="glow-border h-full bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-500 hover:-translate-y-0.5">
            <!-- Terminal bar -->
            <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-700">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              <span class="ml-2 text-text-muted text-xs truncate">{{ item.title.toLowerCase().replace(/\s+/g, '_') }}</span>
            </div>

            <!-- Content -->
            <div class="p-5 md:p-6">
              <div class="flex items-start gap-3 mb-3">
                <span class="text-primary text-lg mt-0.5">
                  <i :class="item.icon"></i>
                </span>
                <h3 class="text-base font-semibold text-text-primary">
                  {{ item.title }}
                </h3>
              </div>
              <p class="text-text-secondary leading-relaxed text-sm">
                {{ item.description }}
              </p>
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

const workItems = computed(() => tm('work.items'))
</script>
