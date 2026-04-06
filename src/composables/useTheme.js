import { ref, onMounted, watch } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const setTheme = (value) => {
    theme.value = value
    localStorage.setItem('theme', value)
    document.documentElement.setAttribute('data-theme', value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      theme.value = stored
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  onMounted(() => {
    initTheme()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme.value)
      }
    })
  })

  return { theme, setTheme, toggleTheme }
}
