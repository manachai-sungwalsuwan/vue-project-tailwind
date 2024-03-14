<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRouter, useRoute, RouterLink } from "vue-router"
import { useTeacherStore } from '@/stores/teacher'
import { useStoreStore } from '@/stores/store'

import AdminLayout from "@/layouts/AdminLayout.vue"
import Swal from "sweetalert2"

const router = useRouter()
const route = useRoute()

const teacherStore = useTeacherStore()
const storeStore = useStoreStore()

const teacherIndex = ref(-1)
const mode = ref("ADD")

const teacherData = reactive({
  TeacherId: 0,
  TeacherFirstName: "",
  TeacherLastName: "",
  TeacherNickName: "",
  StoreId: 0,
})

onMounted(async () => {
  await storeStore.loadStores()

  if (route.params.id) {
    teacherIndex.value = route.params.id
    mode.value = "EDIT"

    const response = await teacherStore.getTeacher(teacherIndex.value)
    const selectedTeacher = response.data.result
    teacherData.TeacherId = selectedTeacher.TeacherId
    teacherData.TeacherFirstName = selectedTeacher.TeacherFirstName
    teacherData.TeacherLastName = selectedTeacher.TeacherLastName
    teacherData.TeacherNickName = selectedTeacher.TeacherNickName
    teacherData.StoreId = selectedTeacher.StoreId
  }
})

const onSubmit = () => {
  try {
    let response = null

    if (mode.value === 'ADD') {
      response = await teacherStore.createTeacher(teacherData)
    } else {
      response = await teacherStore.updateTeacher(teacherIndex.value, teacherData)
    }

    if (response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
      }).then(() => {
        router.push({ name: 'teachers' })
      })
    }
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
    <section class="card col-span-12 bg-base-100">
      <form class="card-body" @submit.prevent="onSubmit">
        <input type="hidden" v-model="teacherData.TeacherId" />
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="teacherData.TeacherFirstName" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="teacherData.TeacherLastName" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อเล่น</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="teacherData.TeacherNickName" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สาขา</span>
            </label>
            <select class="select select-bordered" v-model="teacherData.StoreId" required>
              <option disabled="" selected="" value="">== select ==</option>
              <option v-for="store in storeStore.list" :value="store.StoreId">{{ store.StoreName }}</option>
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
        <RouterLink to="/teachers" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
