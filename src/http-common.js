import axios from 'axios'

export default axios.create({
    baseURL: 'https://sls-api.vercel.app/api',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})