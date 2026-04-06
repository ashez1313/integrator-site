import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'
import App from './App.vue'
import i18n from './i18n'
import './style.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
})

app.use(i18n)

app.mount('#app')
