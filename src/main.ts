import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './core/router'
import GoogleLoginPlugin from 'vue3-google-login'
import { createPinia } from 'pinia'


createApp(App)
.use(router)
.use(createPinia())
.use(GoogleLoginPlugin, {
    clientId: import.meta.env.VITE_GOOGLE_CREDENTIAL_ID,
  })
.mount('#app')
