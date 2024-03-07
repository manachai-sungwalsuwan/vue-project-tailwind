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
              <span class="label-text">Topic Code</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Topic Name</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
						<label class="label">
							<span class="label-text">Level</span>
						</label>
						<select class="select select-bordered" required>
							<option disabled="" selected="" value="">== select ==</option>
							<option value="level1">Level 1</option>
							<option value="level2">Level 2</option>
							<option value="level3">Level 3</option>
						</select>
					</div>
          <div class="form-control">
						<label class="label">
							<span class="label-text">Attachment</span>
						</label>
						<input type="file" class="file-input w-full max-w-xs">
					</div>
        </div>
        <div class="form-control mt-3">
          <div class="text-center">
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </section>
    
    <div class="form-control">
        <div class="flex">
            <RouterLink to="/topics" class="btn btn-outline">Back</RouterLink>
        </div>
      </div>
  </AdminLayout>
</template>
