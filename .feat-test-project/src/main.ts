import { i18n } from './i18n'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'uno.css'
import initUnocssRuntime from '@unocss/runtime'
initUnocssRuntime()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
