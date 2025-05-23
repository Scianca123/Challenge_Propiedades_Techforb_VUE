import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './core/router'
import GoogleLoginPlugin from 'vue3-google-login'
import { createPinia } from 'pinia'
import { useAuth } from './core/store/useAuth'
import { createI18n } from 'vue-i18n';

import es from '../src/assets/i18n/es.json';
import en from '../src/assets/i18n/en.json';
import pt from '../src/assets/i18n/pt.json';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const auth = useAuth()
auth.restoreSession()

const i18n = createI18n({
  legacy: false, 
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en',
  messages: {
    es,
    en,
    pt
  }
});

app
  .use(router)
  .use(GoogleLoginPlugin, {
    clientId: import.meta.env.VITE_GOOGLE_CREDENTIAL_ID,
  })
  .use(i18n)
  .mount('#app')
