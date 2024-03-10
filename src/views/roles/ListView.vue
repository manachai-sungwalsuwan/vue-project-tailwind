<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRoleStore } from "@/stores/role"

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import Swal from "sweetalert2";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid"

const roleStore = useRoleStore()

const roleData = reactive({
  RoleId: 0,
  RoleName: "",
})
const mode = ref('ADD')

const headers = [
  { text: "#", value: "RoleId", width: 200 },
  { text: "Role", value: "RoleName" },
];
const searchField = ref("RoleName");
const searchValue = ref("");

onMounted(async () => {
  await roleStore.loadRoles()
})

const submitForm = async () => {
  try {
    let response = null

    if (mode.value === "ADD") {
      response = await roleStore.createRole(roleData)
    } else {
      response = await roleStore.updateRole(roleData.RoleId, roleData)
    }

    if (response.data) {
      showModal(false)
      if (response.data.status) {
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await roleStore.loadRoles()
        })
      } else {
        Swal.fire({
          title: response.data.message,
          icon: "warning",
        })
      }
    }
  } catch (error) {
    showModal(false)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    })
  }
}

const createRole = () => {
  mode.value = 'ADD'
  roleData.RoleId = 0
  roleData.RoleName = ''
  showModal(true)
}

const editRole = async (item) => {
  mode.value = 'EDIT'
  const response = await roleStore.getRole(item.RoleId);
  if (response.data) {
    roleData.RoleId = response.data.RoleId
    roleData.RoleName = response.data.RoleName
    showModal(true)
  }
}

const deleteRole = (item) => {
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
        var response = await roleStore.deleteRole(item.RoleId);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await roleStore.loadRoles()
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
}

const showModal = (isShow) => {
  if (isShow) {
    document.getElementById("roleModal").showModal()
  } else {
    document.getElementById("roleModal").close()
  }
}
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="overflow-x-auto">
          <div class="flex justify-between gap-2 mb-3">
            <button class="btn btn-primary" @click="createRole()">
              Create
            </button>
            <div class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
              <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
            </div>
          </div>
          <EasyDataTable :headers="headers" :items="roleStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table">
            <template #item-roleid="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editRole(item)"></ButtonEdit>
                <ButtonDelete @click="deleteRole(item)"></ButtonDelete>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>

    <dialog id="roleModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">{{ mode === 'ADD' ? 'Create' : 'Edit' }} Role</h3>
        <form @submit.prevent="submitForm">
          <input type="hidden" v-model="roleData.RoleId">
          <div class="form-control w-full mt-3">
            <div class="label">
              <span class="label-text">Role</span>
            </div>
            <input type="text" class="input input-bordered w-full" v-model="roleData.RoleName" required />
          </div>
          <div class="modal-action">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  </AdminLayout>
</template>
