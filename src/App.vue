<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import WorkSection from './components/WorkSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechSection from './components/TechSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div v-cloak class="min-h-screen bg-surface-950 text-text-primary">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <TechSection />
      <CertificatesSection />
      <ContactsSection />
    </main>
    <AppFooter />
  </div>
</template>
