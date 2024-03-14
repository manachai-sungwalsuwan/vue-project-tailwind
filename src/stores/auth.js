import { defineStore } from 'pinia'
import router from '@/router'
import http from "@/http-common"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        isAdmin: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        returnUrl: null
    }),
    actions: {
        async login (username, password) {
            try {
                const response = await http.post("/auth/signin", { Username: username, Password: password })
                
                const result = response.data.result
                const user = {
                    Id: result.id,
                    Username: result.username,
                    Roles: result.roles,
                    Stores: result.stores
                }
                this.isLoggedIn = true
                this.isAdmin = true
                this.user = user
                localStorage.setItem('token', result.accessToken)
                localStorage.setItem('user', JSON.stringify(user))

                router.push(this.returnUrl || '/')
            } catch (error) {
                throw error
                // console.log('error', error)
            }
        },
        async logout () {
            this.isLoggedIn = false
            this.isAdmin = false
            this.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/login')
        }
    }
})