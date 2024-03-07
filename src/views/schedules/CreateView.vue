<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";

const studentList = [
  {
    id: 1,
    studentName: "Trixy Absolon",
    nickName: "Trixy",
    parentName: "Suzie Feaviour",
  },
  {
    id: 2,
    studentName: "Wilhelmina Spare",
    nickName: "Wilhelmina",
    parentName: "Carmencita Mettetal",
  },
  {
    id: 3,
    studentName: "Kaela Benzies",
    nickName: "Kaela",
    parentName: "Tannie Woodson",
  },
  {
    id: 4,
    studentName: "Rosemaria Dust",
    nickName: "Rosemaria",
    parentName: "Crissy Spencer",
  },
  {
    id: 5,
    studentName: "Dannye Stenners",
    nickName: "Dannye",
    parentName: "Jenilee Reichartz",
  },
];
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body">
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Date</span>
            </label>
            <input
              type="date"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Camp</span>
            </label>
            <select class="select select-bordered" required>
              <option disabled="" selected="" value="">== select ==</option>
              <option value="1">Level 1 รอบ 1 เวลา 9.30-11.50</option>
              <option value="2">Level 1 รอบ 2 เวลา 13.10-15.30</option>
              <option value="3">Level 1 รอบ 3 เวลา 9.30-11.50</option>
              <option value="4">Level 1 รอบ 4 เวลา 13.10-15.30</option>
              <option value="5">Level 1 รอบ 5 เวลา 9.30-11.50</option>
              <option value="6">Level 1 รอบ 5 เวลา 13.10-15.30</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Student</span>
            </label>
            <select class="select select-bordered" required>
              <option disabled="" selected="" value="">== select ==</option>
              <option v-for="student in studentList" :key="student.id" :value="student.id">{{ student.nickName }}</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Teacher</span>
            </label>
            <select class="select select-bordered" required>
              <option disabled="" selected="" value="">== select ==</option>
              <option v-for="student in studentList" :key="student.id" :value="student.id">{{ student.nickName }}</option>
            </select>
          </div>
        </div>
        <div class="form-control mt-3">
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </section>

    <div class="form-control">
      <div class="flex">
        <RouterLink to="/schedules" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
