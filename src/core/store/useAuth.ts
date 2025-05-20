import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuth = defineStore('auth', {
    state: () => ({
      user: null as any,
      token: null as string | null,
    }),
    actions: {
      async loginWithGoogle(googleToken: string) {
        const userData = this.decodeGoogleToken(googleToken)
  
        const dto = {
          name: userData.name,
          email: userData.email,
          urlPhoto: userData.picture,
        }
        const res = await axios.post(import.meta.env.VITE_API_URL+'/user/register/google', dto)

        this.token=userData.googleToken
        this.user = res.data.user
      
  
        // Guardar en localStorage
        localStorage.setItem('token', this.token!)
        localStorage.setItem('user', JSON.stringify(this.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      },
  
      logout(router: any) {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        router.push('/')
      },
  
      restoreSession() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token) {
          this.token = token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        if (user) {
          this.user = JSON.parse(user)
        }
      },
  
      decodeGoogleToken(token: string) {
        return JSON.parse(atob(token.split('.')[1]))
      },
    },
  })