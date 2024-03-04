<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";
import Pagination from "@/components/Pagination.vue";

const searchDate = ref("");

const dataList = [
  {
    campId: "1",
    campName: "1",
    campTime: "9.30-11.50",
    topics: ["S1001 ประสาทสัมผัสของร่างกาย", "S1002 การละลายของสาร"],
  },
  {
    campId: "2",
    campName: "2",
    campTime: "13.10-15.30",
    topics: ["S1003 อินดิเคเตอร์จากธรรมชาติ", "S1004 ความหนาแน่นของของเหลว"],
  },
  {
    campId: "3",
    campName: "3",
    campTime: "9.30-11.50",
    topics: ["S1003 อินดิเคเตอร์จากธรรมชาติ", "S1004 ความหนาแน่นของของเหลว"],
  },
  {
    campId: "4",
    campName: "4",
    campTime: "13.10-15.30",
    topics: ["S1001 ประสาทสัมผัสของร่างกาย", "S1002 การละลายของสาร"],
  },
  {
    campId: "5",
    campName: "5",
    campTime: "9.30-11.50",
    topics: ["S1005 แรงตึงผิวของน้ำ", "S1006 แรงดันของของเหลว"],
  },
];

onMounted(() => {
  searchDate.value = new Date().toISOString().slice(0, 10);
});
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
        <table class="table">
          <thead>
            <tr>
              <th class="text-center w-20">Camp</th>
              <th class="text-center w-32">Time</th>
              <th class="text-center">Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="camp in dataList" :key="camp.campId" class="hover">
              <td class="text-center">{{ camp.campName }}</td>
              <td class="text-center">{{ camp.campTime }}</td>
              <td class="w-96">
                <p v-for="topic in camp.topics" :key="topic">{{ topic }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </section>
  </AdminLayout>
</template>
