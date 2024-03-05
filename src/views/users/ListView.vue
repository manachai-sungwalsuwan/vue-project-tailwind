<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import Pagination from "@/components/Pagination.vue"

const dataList = [
  {
    userId: 1,
    userName: "tkurtis0",
    fullName: "Robbi Moreinu",
    roleName: "Administration",
  },
  {
    userId: 2,
    userName: "fblunt1",
    fullName: "Tallie McKyrrelly",
    roleName: "Manager",
  },
  {
    userId: 3,
    userName: "gorrock2",
    fullName: "Caresse Fellgatt",
    roleName: "Teacher",
  }
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
          <RouterLink to="/users/create" class="btn btn-primary float-right"
            >Create</RouterLink
          >
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center w-32">#</th>
              <th class="text-center">Username</th>
              <th class="text-center">Fullname</th>
              <th class="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.userId" class="hover">
              <td>
                <div class="flex justify-center gap-2">
                  <ButtonEdit></ButtonEdit>
                  <ButtonDelete></ButtonDelete>
                </div>
              </td>
              <td>{{ data.userName }}</td>
              <td>{{ data.fullName }}</td>
              <td>{{ data.roleName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </section>
    <!-- /card -->
  </AdminLayout>
</template>
