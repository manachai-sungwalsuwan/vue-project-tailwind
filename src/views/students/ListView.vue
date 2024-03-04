<script setup>
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import Pagination from "@/components/Pagination.vue";
import { TableCellsIcon } from "@heroicons/vue/20/solid";

const studentList = [
  {
    studentId: 1,
    studentName: "Trixy Absolon",
    nickName: "Trixy",
    parentName: "Suzie Feaviour",
  },
  {
    studentId: 2,
    studentName: "Wilhelmina Spare",
    nickName: "Wilhelmina",
    parentName: "Carmencita Mettetal",
  },
  {
    studentId: 3,
    studentName: "Kaela Benzies",
    nickName: "Kaela",
    parentName: "Tannie Woodson",
  },
  {
    studentId: 4,
    studentName: "Rosemaria Dust",
    nickName: "Rosemaria",
    parentName: "Crissy Spencer",
  },
  {
    studentId: 5,
    studentName: "Dannye Stenners",
    nickName: "Dannye",
    parentName: "Jenilee Reichartz",
  },
];
</script>

<template>
  <AdminLayout>
    <!-- card -->
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <!-- <a class="link-hover link">Recent user transactions</a> -->
          </h2>
          <RouterLink to="/students/create" class="btn btn-primary float-right"
            >Create</RouterLink
          >
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">ชื่อนักเรียน</th>
              <th class="text-center">ชื่อเล่นนักเรียน</th>
              <th class="text-center">ชื่อผู้ปกครอง</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in studentList" :key="student.studentId">
              <td>
                <div class="flex justify-center gap-2">
                  <ButtonEdit></ButtonEdit>
                  <ButtonDelete></ButtonDelete>
                  <div class="tooltip" data-tip="view detail">
                    <RouterLink :to="`/students/detail/${student.studentId}`" class="btn btn-success btn-sm">
                      <TableCellsIcon class="w-4 h-4"></TableCellsIcon>
                    </RouterLink>
                  </div>
                </div>
              </td>
              <td>{{ student.studentName }}</td>
              <td>{{ student.nickName }}</td>
              <td>{{ student.parentName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
