<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import Swal from "sweetalert2";
import AdminLayout from "@/layouts/AdminLayout.vue";

const router = useRouter();
const route = useRoute();

const studentIndex = ref(-1);
const mode = ref("ADD");

const formData = reactive({
  studentFirstName: "",
  studentLastName: "",
  studentNickName: "",
});

const submitHandle = () => {
  try {
    if (mode.value === "EDIT") {
    } else {
    }
    Swal.fire({
      title: "Successfully",
      text: mode.value === "EDIT" ? "updated" : "created",
      icon: "success",
    }).then(() => {
      router.push({ name: "students" });
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

onMounted(() => {
  if (route.params.id) {
    studentIndex.value = route.params.id;
    mode.value = "EDIT";
    console.log(route.params.id);
    // get data
  }
});
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body" @submit.prevent="submitHandle">
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้เรียน)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
              v-model="formData.studentFirstName"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้เรียน)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
              v-model="formData.studentLastName"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อเล่น (ผู้เรียน)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
              v-model="formData.studentNickName"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">วันเกิด</span>
            </label>
            <input
              type="date"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">อายุ</span>
            </label>
            <input
              type="number"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ชื่อ (ผู้ปกครอง)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">สกุล (ผู้ปกครอง)</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">เบอร์โทรที่ติดต่อได้</span>
            </label>
            <input
              type="text"
              required=""
              maxlength="10"
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Line</span>
            </label>
            <input
              type="text"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              required=""
              class="input input-bordered font-mono"
            />
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">ที่อยู่</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text"
              >หมายเหตุอื่นๆ เช่น ประวัติการแพ้อาหาร หรือสารอื่นๆ เป็นต้น</span
            >
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <div class="text-center">
            <button type="submit" class="btn btn-primary">บันทึก</button>
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
