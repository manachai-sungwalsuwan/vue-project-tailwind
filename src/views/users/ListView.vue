<script setup>
import { ref, onMounted } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useUserStore } from '@/stores/user';

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Swal from "sweetalert2"

const router = useRouter();
const userStore = useUserStore();

const headers = [
  { text: "#", value: "UserId", width: 200 },
  { text: "Username", value: "Username", sortable: true },
  { text: "Role", value: "Roles" },
  { text: "Store", value: "Stores" },
];
const searchField = ref("Username");
const searchValue = ref("");
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await userStore.loadUsers()
  loading.value = false;
});

const editUser = (item) => {
  router.push({name: 'users-edit', params: { id: item.UserId }})
}

const deleteUser= (item) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2b49ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        var response = await userStore.deleteUser(item.UserId);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await userStore.loadUsers()
        });
      }
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    })
  }
};
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2 mb-3">
          <RouterLink to="/users/create" class="btn btn-primary float-right">Create</RouterLink>
          <div class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
            <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
          </div>
        </div>
        <div class="overflow-x-auto">
          <EasyDataTable :headers="headers" :items="userStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table" :loading="loading">
            <template #item-userid="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editUser(item)"></ButtonEdit>
                <ButtonDelete @click="deleteUser(item)"></ButtonDelete>
              </div>
            </template>
            <template #item-roles="item">
              <p v-for="role in item.Roles" :key="role.RoleName">
                - {{ role.RoleName  }}
              </p>
            </template>
            <template #item-stores="item">
              <p v-for="store in item.Stores" :key="store.RoleName">
                - {{ store.StoreName  }}
              </p>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>
