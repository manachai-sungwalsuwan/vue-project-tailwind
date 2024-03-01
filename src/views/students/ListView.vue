<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"

const studentList = [
  {
    studentName: "Trixy Absolon",
    nickName: "Trixy",
    parentName: "Suzie Feaviour",
  },
  {
    studentName: "Wilhelmina Spare",
    nickName: "Wilhelmina",
    parentName: "Carmencita Mettetal",
  },
  {
    studentName: "Kaela Benzies",
    nickName: "Kaela",
    parentName: "Tannie Woodson",
  },
  {
    studentName: "Rosemaria Dust",
    nickName: "Rosemaria",
    parentName: "Crissy Spencer",
  },
  {
    studentName: "Dannye Stenners",
    nickName: "Dannye",
    parentName: "Jenilee Reichartz",
  },
]
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
          <RouterLink to="/students/create" class="btn btn-primary float-right">Create</RouterLink>
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
            <tr v-for="student in studentList" :key="student">
              <td>
                <div class="flex justify-center gap-2">
                  <ButtonEdit></ButtonEdit>
                  <ButtonDelete></ButtonDelete>
                </div>
              </td>
              <td>{{ student.studentName }}</td>
              <td>{{ student.nickName }}</td>
              <td>{{ student.parentName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
