<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"

const dataList = [
  {
    levelId: "1",
    levelName: "Level 1",
  },
  {
    levelId: "2",
    levelName: "Level 2",
  },
  {
    levelId: "3",
    levelName: "Level 3",
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
              <th class="text-center">Level Name</th>
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
              <td>{{ data.levelName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
