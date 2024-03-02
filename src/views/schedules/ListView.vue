<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";

const dataList = [
  {
    time: "09:00-10:00",
    monday: "Trixy Absolon <br> Wilhelmina Spare",
    tuesday: "-",
    wednesday: "Trixy Absolon",
    thursday: "-",
    friday: "Trixy Absolon",
    saturday: "-",
    sunday: "-",
  },
  {
    time: "11:00-12:00",
    monday: "Wilhelmina Spare",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
    saturday: "-",
    sunday: "-",
  },
  {
    time: "13:00-14:00",
    monday: "Trixy Absolon",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
    saturday: "-",
    sunday: "-",
  },
  {
    time: "14:00-15:00",
    monday: "Trixy Absolon",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
    saturday: "-",
    sunday: "-",
  },
  {
    time: "16:00-17:00",
    monday: "Trixy Absolon",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
    saturday: "-",
    sunday: "-",
  },{
    time: "17:00-18:00",
    monday: "Trixy Absolon",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
    saturday: "-",
    sunday: "-",
  },
]
const searchDate = ref('')
const firstDay = ref('')
const lastDay = ref('')

onMounted(() => {
  // const date = new Date();
  // firstDay.value = getFirstDayOfMonth(date.getFullYear(), date.getMonth()).getDate()
  // lastDay.value = getLastDayOfMonth(date.getFullYear(), date.getMonth()).getDate()
  searchDate.value = new Date().toISOString().slice(0,10)
})

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1);
}

const getLastDayOfMonth = (year, month) => {
  return new Date(year, month + 1, 0);
}
</script>

<template>
  <AdminLayout>
    <!-- card -->
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <label class="input input-bordered flex items-center gap-2"
              ><input type="date" v-model="searchDate" />
            </label>
          </h2>
          <RouterLink to="/schedules/create" class="btn btn-primary float-right"
            >Create</RouterLink
          >
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">Time</th>
              <th class="text-center">Monday</th>
              <th class="text-center">Tuesday</th>
              <th class="text-center">Wednesday</th>
              <th class="text-center">Thursday</th>
              <th class="text-center">Friday</th>
              <th class="text-center">Saturday</th>
              <th class="text-center">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.time" class="hover">
              <td>{{ data.time }}</td>
              <td v-html="data.monday"></td>
              <td>{{ data.tuesday }}</td>
              <td>{{ data.wednesday }}</td>
              <td>{{ data.thursday }}</td>
              <td>{{ data.friday }}</td>
              <td>{{ data.saturday }}</td>
              <td>{{ data.sunday }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
