import axios from 'axios'
import router from '@/router'
import { useAuthStore } from './stores/auth'

const httpClient = axios.create({
    baseURL: 'https://sls-api.vercel.app/api',
    headers: {
        "Content-Type": "application/json",
        //"Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

const authInterceptor = (config) => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`
    }
    return config
}

httpClient.interceptors.request.use(authInterceptor)
httpClient.interceptors.response.use(
    response => response,
    error => {
      const status = error.response ? error.response.status : null;
      const authStore = useAuthStore()
      if (status === 401) {
        // Handle unauthorized access
        // console.log("Unauthorized access")
        authStore.logout()
      } else if (status === 404) {
        // Handle not found errors
        // console.log("Post not found")
      } else {
        // Handle other errors
        // console.error("An error occurred:", error)
      }
      
      return Promise.reject(error);
    }
)

export default httpClient