<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import Pagination from "@/components/Pagination.vue";

const dataList = [
  {
    roleId: 1,
    roleName: "Administration",
  },
  {
    roleId: 2,
    roleName: "Manager",
  },
  {
    roleId: 3,
    roleName: "Teacher",
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
          <button
            class="btn btn-primary float-right"
            onclick="roleModal.showModal()"
          >
            Create
          </button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center w-32">#</th>
              <th class="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.roleId" class="hover">
              <td>
                <div class="flex justify-center gap-2">
                  <ButtonEdit></ButtonEdit>
                  <ButtonDelete></ButtonDelete>
                </div>
              </td>
              <td>{{ data.roleName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </section>
    <!-- /card -->

    <dialog id="roleModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">Create Role</h3>
        <div class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">Role</span>
          </div>
          <input type="text" class="input input-bordered w-full" />
        </div>
        <div class="modal-action">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </dialog>
  </AdminLayout>
</template>
