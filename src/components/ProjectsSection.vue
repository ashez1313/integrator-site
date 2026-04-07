<template>
  <section id="projects" class="relative py-24 md:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-40 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Proj section header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-900 border border-surface-700 mb-4 font-mono">
          <span class="text-text-muted">$</span>
          <span class="text-primary text-xs">ls</span>
          <span class="text-text-secondary text-xs">./projects</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {{ t('projects.title') }}
        </h2>
      </div>

      <!-- Proj grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="animate-on-scroll"
          :class="`delay-${(index % 2) + 1}`"
        >
          <div class="glow-border h-full bg-surface-900 border border-surface-700 hover:border-primary/40 transition-all duration-500 overflow-hidden">
            <!-- Terminal bar -->
            <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-700">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              <span class="ml-2 text-text-muted text-xs truncate">{{ project.title.toLowerCase().replace(/\s+/g, '_') }}</span>
            </div>

            <div class="p-6 md:p-8">
              <!-- Title -->
              <h3 class="text-xl font-semibold text-text-primary mb-3">
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-text-secondary text-sm leading-relaxed mb-6">
                {{ project.description }}
              </p>

              <!-- Features -->
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Что реализовано
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(feature, fi) in project.features"
                    :key="fi"
                    class="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span class="text-primary mt-0.5 text-xs">-</span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span
                  v-for="(tag, ti) in project.tags"
                  :key="ti"
                  class="px-2.5 py-1 text-xs font-mono bg-surface-800 text-text-muted border border-surface-700"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- GitHub link -->
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-surface-800 border border-surface-700 text-text-secondary hover:text-primary hover:border-primary/50 text-sm transition-all duration-300"
              >
                <i class="pi pi-github text-xs"></i>
                <span>GitHub</span>
                <i class="pi pi-external-link text-[10px] text-text-muted"></i>
              </a>
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

const projects = computed(() => tm('projects.items'))
</script>
