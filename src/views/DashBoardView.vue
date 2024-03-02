<script setup>
import { ref, onMounted } from "vue";

import AdminLayout from "@/layouts/AdminLayout.vue";

const searchDate = ref('')

onMounted(() => {
  searchDate.value = new Date().toISOString().slice(0,10)
})
</script>

<template>
  <AdminLayout>
    <section
      class="stats stats-vertical col-span-12 w-full shadow-sm xl:stats-horizontal"
    >
      <div class="stat">
        <div class="stat-title">Total</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </section>

    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <label class="input input-bordered flex items-center gap-2"
              ><input type="date" v-model="searchDate" />
            </label>
          </h2>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th class="text-center w-32">Date</th>
              <th class="text-center">Camp</th>
              <th class="text-center w-32">Time</th>
              <th class="text-center">Topic</th>
              <th class="text-center">Q1</th>
              <th class="text-center">Q2</th>
              <th class="text-center">Q3</th>
              <th class="text-center">Q4</th>
              <th class="text-center">Teacher</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in [0,1,2,3,4]" :key="item" class="hover">
              <td class="text-center">2024-03-01</td>
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
              <td>
                <tr>
                  <td>Trixy Absolon</td>
                </tr>
                <tr>
                  <td>-</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>Wilhelmina Spare</td>
                </tr>
                <tr>
                  <td>-</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>Kaela Benzies</td>
                </tr>
                <tr>
                  <td>-</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>Rosemaria Dust</td>
                </tr>
                <tr>
                  <td>-</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>Dannye</td>
                </tr>
                <tr>
                  <td>-</td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </AdminLayout>
</template>
