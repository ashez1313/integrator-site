<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import CasesSection from './components/CasesSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-surface-950 text-text-primary">
    <AppHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CasesSection />
      <ContactsSection />
    </main>
    <AppFooter />
  </div>
</template>
