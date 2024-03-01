<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";

const dataList = [
  {
    topicCode: "S1001",
    topicName: "Body sensory",
  },
  {
    topicCode: "S1002",
    topicName: "Dissolution",
  },
  {
    topicCode: "S1003",
    topicName: "Natural indicator",
  },
  {
    topicCode: "S1004",
    topicName: "Liquid density",
  },
  {
    topicCode: "S1005",
    topicName: "Water surface tension",
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
          <button class="btn btn-primary float-right">Create</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center w-32">#</th>
              <th class="text-center">Topic Code</th>
              <th class="text-center">Topic Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.levelId" class="hover">
              <td>
                <div class="flex justify-center gap-2">
                  <button type="button" class="btn btn-warning btn-sm">
                    <svg
                      data-src="https://unpkg.com/heroicons/20/solid/pencil-square.svg"
                      class="h-4 w-4"
                    ></svg>
                  </button>
                  <button type="button" class="btn btn-error btn-sm">
                    <svg
                      data-src="https://unpkg.com/heroicons/20/solid/trash.svg"
                      class="h-4 w-4"
                    ></svg>
                  </button>
                </div>
              </td>
              <td>{{ data.topicCode }}</td>
              <td>{{ data.topicName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
