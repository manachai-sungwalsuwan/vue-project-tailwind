<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRouter, RouterLink } from "vue-router"
import { useTeacherStore } from "@/stores/teacher"

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid"
import Swal from "sweetalert2"

const router = useRouter()
const teacherStore = useTeacherStore()

const headers = [
  { text: "#", value: "TeacherId", width: 200 },
  { text: "Student", value: "TeacherFullName", sortable: true },
  { text: "Nickname", value: "TeacherNickName", sortable: true },
]
const searchField = ref(["TeacherFullName", "TeacherNickName"])
const searchValue = ref("")
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await teacherStore.loadTeachers()
  loading.value = false
})

const editTeacher = (item) => {
  router.push({ name: 'teachers-edit', params: { id: item.TeacherId } })
}

const deleteTeacher = (item) => {
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
        var response = await teacherStore.deleteTeacher(item.TeacherId)
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await teacherStore.loadTeachers()
        })
      }
    })
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    })
  }
}
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="overflow-x-auto">
          <div class="flex justify-between gap-2 mb-3">
            <RouterLink to="/teachers/create" class="btn btn-primary float-right">Create</RouterLink>
            <div class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
              <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
            </div>
          </div>
          <EasyDataTable :headers="headers" :items="teacherStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table" :loading="loading">
            <template #item-TeacherId="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editTeacher(item)"></ButtonEdit>
                <ButtonDelete @click="deleteTeacher(item)"></ButtonDelete>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>
