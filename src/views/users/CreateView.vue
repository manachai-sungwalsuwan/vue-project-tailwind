<script setup>
import { RouterLink } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body">
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Fullname</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Role</span>
            </label>
            <select class="select select-bordered" required>
							<option disabled="" selected="" value="">== select ==</option>
							<option value="1">Administration</option>
							<option value="2">Manager</option>
							<option value="3">Teacher</option>
						</select>
          </div>
        </div>
        <div class="form-control">
          <div class="text-center">
            <button class="btn btn-primary">บันทึก</button>
          </div>
        </div>
      </form>
    </section>
    
    <div class="form-control">
        <div class="flex">
            <RouterLink to="/users" class="btn btn-outline">Back</RouterLink>
        </div>
      </div>
  </AdminLayout>
</template>
