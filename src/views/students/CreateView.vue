<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRouter, useRoute, RouterLink } from "vue-router"
import { useStudentStore } from '@/stores/student'
import { useStoreStore } from '@/stores/store'

import AdminLayout from "@/layouts/AdminLayout.vue"
import Swal from "sweetalert2"

const router = useRouter()
const route = useRoute()

const studentStore = useStudentStore()
const storeStore = useStoreStore()

const studentIndex = ref(-1)
const mode = ref("ADD")

const studentData = reactive({
  StudentId: 0,
  StudentFirstName: "",
  StudentLastName: "",
  StudentNickName: "",
  StudentBirthDay: "",
  StudentAge: 0,
  ParentFirstName: "",
  ParentLastName: "",
  Phone: "",
  Line: "",
  Email: "",
  Address: "",
  Remark: "",
  StoreId: 0,
})

const isAdmin = ref(true)

onMounted(async () => {
  await storeStore.loadStores()
  
  if (route.params.id) {
    studentIndex.value = route.params.id
    mode.value = "EDIT"

    const response = await studentStore.getStudent(studentIndex.value)
    const selectedStudent = response.data.result
    studentData.StudentId = selectedStudent.StudentId
    studentData.StudentFirstName = selectedStudent.StudentFirstName
    studentData.StudentLastName = selectedStudent.StudentLastName
    studentData.StudentNickName = selectedStudent.StudentNickName
    studentData.StudentBirthDay = selectedStudent.StudentBirthDay.split('T')[0]
    studentData.StudentAge = selectedStudent.StudentAge
    studentData.ParentFirstName = selectedStudent.ParentFirstName
    studentData.ParentLastName = selectedStudent.ParentLastName
    studentData.Phone = selectedStudent.Phone
    studentData.Line = selectedStudent.Line
    studentData.Email = selectedStudent.Email
    studentData.Address = selectedStudent.Address
    studentData.Remark = selectedStudent.Remark
    studentData.StoreId = selectedStudent.StoreId
  }
})

const onSubmit = async () => {
  try {
    let response = null

    if (mode.value === 'ADD') {
      response = await studentStore.createStudent(studentData)
    } else {
      response = await studentStore.updateStudent(studentIndex.value, studentData)
    }

    if (response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
      }).then(() => {
        router.push({ name: 'students' })
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
        <input type="hidden" v-model="studentData.StudentId" />
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้เรียน)</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.StudentFirstName" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้เรียน)</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.StudentLastName" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อเล่น (ผู้เรียน)</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.StudentNickName" />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">วันเกิด</span>
            </label>
            <input type="date" required="" class="input input-bordered" v-model="studentData.StudentBirthDay" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">อายุ</span>
            </label>
            <input type="number" required="" class="input input-bordered" v-model="studentData.StudentAge" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สาขา</span>
            </label>
            <select class="select select-bordered" v-model="studentData.StoreId" required :disabled="!isAdmin" >
              <option disabled="" selected="" value="">== select ==</option>
              <option v-for="store in storeStore.list" :value="store.StoreId">{{ store.StoreName }}</option>
            </select>
            <!-- <div v-else>
              <input type="hidden" v-model="studentData.StoreId">
              <input type="text" class="input input-bordered w-full" value="Store 1" disabled >
            </div> -->
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้ปกครอง)</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.ParentFirstName" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้ปกครอง)</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.ParentLastName" />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">เบอร์โทรที่ติดต่อได้</span>
            </label>
            <input type="text" required="" maxlength="10" class="input input-bordered" v-model="studentData.Phone" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Line</span>
            </label>
            <input type="text" required="" class="input input-bordered" v-model="studentData.Line" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" required="" class="input input-bordered" v-model="studentData.Email" />
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">ที่อยู่</span>
          </label>
          <input type="text" class="input input-bordered" v-model="studentData.Address" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">หมายเหตุอื่นๆ เช่น ประวัติการแพ้อาหาร หรือสารอื่นๆ เป็นต้น</span>
          </label>
          <input type="text" class="input input-bordered" v-model="studentData.Remark" />
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
        <RouterLink to="/students" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
