import axios from 'axios'

export default axios.create({
    baseURL: 'https://node-api-sls.vercel.app/api',
    headers: {
        "Content-Type": "application/json"
    }
})