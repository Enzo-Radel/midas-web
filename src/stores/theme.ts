import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'midas-theme'

export type Theme = 'light' | 'dark'

export function getStoredTheme(): Theme {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark') return stored
    } catch {
        /* ignore */
    }
    return 'dark'
}

function applyTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme)
}

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<Theme>(getStoredTheme())

    const isDark = computed(() => theme.value === 'dark')

    function setTheme(newTheme: Theme) {
        theme.value = newTheme
        try {
            localStorage.setItem(STORAGE_KEY, newTheme)
        } catch {
            /* ignore */
        }
        applyTheme(newTheme)
    }

    function toggleTheme() {
        setTheme(theme.value === 'dark' ? 'light' : 'dark')
    }

    return { theme, isDark, setTheme, toggleTheme }
})
