import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import initIcons from './services/icons.service'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initIcons()
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
