<script setup>
import { RouterLink } from "vue-router";

import { BeakerIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div class="min-h-screen bg-base-100 flex items-center">
    <section class="card mx-auto w-full max-w-2xl shadow-xl">
      <form class="card-body">
        <div class="flex items-center justify-center gap-2">
            <BeakerIcon class="h-10 w-10 text-orange-500"></BeakerIcon>
            <span class="text-2xl font-bold">SLS Login</span>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="passsword" class="input input-bordered" />
        </div>
        <div class="form-control">
          <div class="flex items-end py-4">
            <RouterLink to="/" class="btn btn-primary grow">Login</RouterLink>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
