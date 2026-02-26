import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faGauge,
    faRightLeft,
    faWallet,
    faChartLine,
    faBullseye,
    faChartColumn,
    faGear,
    faBell,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import { getStoredTheme } from './stores/theme'

// Aplica o tema salvo antes da primeira renderização para evitar flash
document.documentElement.setAttribute('data-theme', getStoredTheme())

library.add(
    faGauge,
    faRightLeft,
    faWallet,
    faChartLine,
    faBullseye,
    faChartColumn,
    faGear,
    faBell,
    faSun,
    faMoon,
)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
