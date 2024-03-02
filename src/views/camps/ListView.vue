<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";

const searchDate = ref('')

onMounted(() => {
  searchDate.value = new Date().toISOString().slice(0,10)
})
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <!-- <label class="input input-bordered flex items-center gap-2"
              ><input type="date" v-model="searchDate" />
            </label> -->
          </h2>
          <RouterLink to="/camps/create" class="btn btn-primary float-right"
            >Create</RouterLink
          >
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th class="text-center w-20">Camp</th>
              <th class="text-center w-32">Time</th>
              <th class="text-center">Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in [0,1,2,3,4]" :key="item" class="hover">
              <td class="text-center">
                <tr>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
              </td>
              <td class="text-center">
                <tr>
                  <td>9.30-11.50</td>
                </tr>
                <tr>
                  <td>13.10-15.30</td>
                </tr>
              </td>
              <td class="w-96">
                <tr>
                  <td>S1001 ประสาทสัมผัสของร่างกาย</td>
                </tr>
                <tr>
                  <td>S1002 การละลายของสาร</td>
                </tr>
                <tr>
                  <td>S1003 อินดิเคเตอร์จากธรรมชาติ</td>
                </tr>
                <tr>
                  <td>S1004 ความหนาแน่นของของเหลว</td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </AdminLayout>
</template>
