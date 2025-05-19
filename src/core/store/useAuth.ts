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
          email: userData.email,
          name: userData.name,
          image: userData.picture,
          googleId: userData.sub,
        }
  
        // const res = await axios.post(import.meta.env.VITE_API_URL+'user/register/google', dto)

        //prueba
        this.user=userData
        this.token=userData.googleToken
        console.log("login "+this.user);
        //fin prueba
  
        // this.user = res.data.user
        // this.token = res.data.token
  
        // Guardar en localStorage
        localStorage.setItem('token', this.token!)
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      },
  
      logout() {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
      },
  
      restoreSession() {
        const token = localStorage.getItem('token')
        if (token) {
          this.token = token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          // Podés hacer una petición para traer los datos del usuario si querés
        }
      },
  
      decodeGoogleToken(token: string) {
        return JSON.parse(atob(token.split('.')[1]))
      },
    },
  })