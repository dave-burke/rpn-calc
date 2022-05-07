import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

registerSW()

createApp(App).mount('#app')
