<template>
  <footer class="relative border-t border-surface-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 bg-surface-800 border border-surface-700 flex items-center justify-center">
            <span class="text-primary font-bold text-xs">&gt;_</span>
          </div>
          <span class="text-text-primary font-semibold tracking-tight">bitrix<span class="text-primary">dev</span></span>
        </div>

        <!-- Description -->
        <p class="text-text-muted text-xs text-center font-mono">
          {{ t('footer.description') }} &mdash; {{ new Date().getFullYear() }} &copy; {{ t('footer.rights') }}
        </p>

        <!-- Social links -->
        <div class="flex items-center gap-2">
          <a
            href="https://t.me/bitrix_dev"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 flex items-center justify-center bg-surface-800 border border-surface-700 text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-300"
          >
            <i class="pi pi-send text-sm"></i>
          </a>
          <a
            href="mailto:hello@bitrix-dev.ru"
            class="w-9 h-9 flex items-center justify-center bg-surface-800 border border-surface-700 text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-300"
          >
            <i class="pi pi-envelope text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
