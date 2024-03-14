<script setup>
import { reactive, onMounted } from "vue"
import { useRouter } from "vue-router"

import { useAuthStore } from '@/stores/auth' 

import { BeakerIcon } from "@heroicons/vue/20/solid"
import Swal from "sweetalert2"

const router = useRouter()

const authStore = useAuthStore()

const loginData = reactive({
  Username: '',
  Password: ''
})

onMounted(() => {
  if (authStore.user) {
    router.push({ name: 'dashboard' })
  }
})

const onSubmit = async () => {
  try {
    await authStore.login(loginData.Username, loginData.Password)
  } catch (error) {
    Swal.fire({
      icon: "warning",
      title: "Login failed",
      text: "Invalid Username or Password",
    }) 
  }
}
</script>

<template>
  <div class="min-h-screen bg-base-100 flex items-center">
    <section class="card mx-auto w-full max-w-2xl shadow-xl">
      <form class="card-body" @submit.prevent="onSubmit">
        <div class="flex items-center justify-center gap-2">
            <BeakerIcon class="h-10 w-10 text-orange-500"></BeakerIcon>
            <span class="text-2xl font-bold">SLS Login</span>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" class="input input-bordered" required v-model="loginData.Username" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" class="input input-bordered" required v-model="loginData.Password" />
        </div>
        <div class="form-control">
          <div class="flex items-end py-4">
            <button type="submit" class="btn btn-primary grow">Login</button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
