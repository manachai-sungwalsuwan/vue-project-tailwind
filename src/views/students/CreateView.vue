<script setup>
import { RouterLink } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body">
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้เรียน)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้เรียน)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อเล่น (ผู้เรียน)</span>
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
              <span class="label-text">วันเกิด</span>
            </label>
            <input
              type="date"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">อายุ</span>
            </label>
            <input
              type="number"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้ปกครอง)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้ปกครอง)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">เบอร์โทรที่ติดต่อได้</span>
            </label>
            <input
              type="text"
              required=""
              maxlength="10"
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Line</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">ที่อยู่</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text"
              >หมายเหตุอื่นๆ เช่น ประวัติการแพ้อาหาร หรือสารอื่นๆ เป็นต้น</span
            >
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <div class="flex items-end py-4">
            <button class="btn btn-primary grow">บันทึก</button>
          </div>
        </div>
      </form>
    </section>
    
    <div class="form-control">
        <div class="flex">
            <RouterLink to="/students" class="btn btn-outline">Back</RouterLink>
        </div>
      </div>
  </AdminLayout>
</template>
