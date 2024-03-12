<script setup>
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";
import { PrinterIcon } from "@heroicons/vue/20/solid";
import PathCertificate from "@/assets/certificate.png";

const dataList = [
  {
    id: 1,
    studyDate: new Date().toLocaleDateString(),
    campId: "1",
    campName: "1",
    campTime: "9.30-11.50",
    topics: ["S1001 ประสาทสัมผัสของร่างกาย", "S1002 การละลายของสาร"],
    isCertificate: false,
  },
  {
    id: 2,
    studyDate: new Date().toLocaleDateString(),
    campId: "2",
    campName: "2",
    campTime: "13.10-15.30",
    topics: ["S1003 อินดิเคเตอร์จากธรรมชาติ", "S1004 ความหนาแน่นของของเหลว"],
    isCertificate: true,
  },
  {
    id: 3,
    studyDate: new Date().toLocaleDateString(),
    campId: "3",
    campName: "3",
    campTime: "9.30-11.50",
    topics: ["S1003 อินดิเคเตอร์จากธรรมชาติ", "S1004 ความหนาแน่นของของเหลว"],
    isCertificate: false,
  },
  {
    id: 4,
    studyDate: new Date().toLocaleDateString(),
    campId: "4",
    campName: "4",
    campTime: "13.10-15.30",
    topics: ["S1001 ประสาทสัมผัสของร่างกาย", "S1002 การละลายของสาร"],
    isCertificate: true,
  },
  {
    id: 5,
    studyDate: new Date().toLocaleDateString(),
    campId: "5",
    campName: "5",
    campTime: "9.30-11.50",
    topics: ["S1005 แรงตึงผิวของน้ำ", "S1006 แรงดันของของเหลว"],
    isCertificate: false,
  },
];
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Date</th>
              <th class="text-center">Time</th>
              <th class="text-center">Camp</th>
              <th class="text-center">Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.id">
              <td>
                <div class="flex justify-center gap-2">
                  <div
                    class="tooltip"
                    data-tip="print certificate"
                    v-if="data.isCertificate"
                  >
                    <button
                      class="btn btn-success btn-sm"
                      onclick="modalCertificate.showModal()"
                    >
                      <PrinterIcon class="w-4 h-4"></PrinterIcon>
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ data.studyDate }}</td>
              <td>{{ data.campTime }}</td>
              <td>{{ data.campName }}</td>
              <td>
                <p v-for="topic in data.topics" :key="topic">{{ topic }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <dialog id="modalCertificate" class="modal">
      <div class="modal-box">
        <!-- <h3 class="font-bold text-lg">Hello!</h3> -->
        <img :src="PathCertificate" />
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    <div class="form-control">
      <div class="flex">
        <RouterLink to="/students" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
