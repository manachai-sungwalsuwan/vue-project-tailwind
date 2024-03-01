<script setup>
import { ref, onMounted } from "vue";
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
          <button class="btn btn-primary float-right">Create</button>
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

    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <label class="input input-bordered flex items-center gap-2"
              ><input type="date" v-model="searchDate" />
            </label>
          </h2>
          <button class="btn btn-primary float-right">Create</button>
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
