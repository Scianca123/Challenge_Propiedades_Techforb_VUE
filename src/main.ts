import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './core/router'
import GoogleLoginPlugin from 'vue3-google-login'
import { createPinia } from 'pinia'
import { useAuth } from './core/store/useAuth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const auth = useAuth()
auth.restoreSession()

app
  .use(router)
  .use(GoogleLoginPlugin, {
    clientId: import.meta.env.VITE_GOOGLE_CREDENTIAL_ID,
  })
  .mount('#app')
