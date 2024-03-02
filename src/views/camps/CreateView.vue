<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body">
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Camp</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Time</span>
            </label>
            <input
              type="time"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-1">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Topic</span>
            </label>
            <select class="select select-bordered" required>
              <option disabled="" selected="" value="">== select ==</option>
              <option value="S1004">S1004 ความหนาแน่นของของเหลว</option>
              <option value="S1026">
                S1026 ความสัมพันธ์ของสมองและภาพลวงตา
              </option>
              <option value="S1044">S1044 การแยกสารผสมอย่างง่าย</option>
              <option value="S1001">
                S1001 ประสาทสัมผัสของร่างกาย (เสริมเรื่องส่วนต่างๆของร่างกาย)
              </option>
            </select>
          </div>
        </div>
        <div class="form-control">
          <div class="text-center">
            <button type="submit" class="btn btn-primary">บันทึก</button>
          </div>
        </div>
      </form>
    </section>

    <div class="form-control">
      <div class="flex">
        <RouterLink to="/camps" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
