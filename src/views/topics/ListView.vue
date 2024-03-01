<script setup>
import { RouterLink } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import Pagination from "@/components/Pagination.vue"

const dataList = [
  {
    topicCode: "S1001",
    topicName: "Body sensory",
    levelName: "Level 1"
  },
  {
    topicCode: "S1002",
    topicName: "Dissolution",
    levelName: "Level 1"
  },
  {
    topicCode: "S1003",
    topicName: "Natural indicator",
    levelName: "Level 1"
  },
  {
    topicCode: "S1004",
    topicName: "Liquid density",
    levelName: "Level 1"
  },
  {
    topicCode: "S1005",
    topicName: "Water surface tension",
    levelName: "Level 1"
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
          <RouterLink to="/topics/create" class="btn btn-primary float-right">Create</RouterLink>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center w-32">#</th>
              <th class="text-center">Topic Code</th>
              <th class="text-center">Topic Name</th>
              <th class="text-center">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.levelId" class="hover">
              <td>
                <div class="flex justify-center gap-2">
                  <ButtonEdit></ButtonEdit>
                  <ButtonDelete></ButtonDelete>
                </div>
              </td>
              <td>{{ data.topicCode }}</td>
              <td>{{ data.topicName }}</td>
              <td>{{ data.levelName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
