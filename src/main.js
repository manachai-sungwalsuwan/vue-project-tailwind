import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style.css'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
