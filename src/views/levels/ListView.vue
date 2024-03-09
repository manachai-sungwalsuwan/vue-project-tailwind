<script setup>
import { ref, onMounted } from "vue";
import { useLevelStore } from '@/stores/level';

import AdminLayout from "@/layouts/AdminLayout.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import Swal from "sweetalert2";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const levelStore = useLevelStore();

const levelData = ref({
  LevelId: 0,
  LevelName: "",
});
const mode = ref("create");

const headers = [
  { text: "#", value: "LevelId", width: 200 },
  { text: "Level", value: "LevelName" },
];
//const themeColor = "#f48225";
const searchField = ref("LevelName");
const searchValue = ref("");

onMounted(async () => {
  await levelStore.loadLevels()
});

const submitForm = async () => {
  try {
    if (mode.value === "create") {
      const response = await levelStore.createLevel(levelData.value);
      if (response.data) {
        showModal(false);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await levelStore.loadLevels()
        });
      }
    } else {
      const response = await levelStore.updateLevel(levelData.value.LevelId, levelData.value);
      if (response.data) {
        showModal(false);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await levelStore.loadLevels()
        });
      }
    }
  } catch (error) {
    showModal(false);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

const createLevel = () => {
  mode.value = "create";
  levelData.value.LevelId = 0
  levelData.value.LevelName = ''
  showModal(true);
};

const editLevel = async (item) => {
  mode.value = "update";
  const response = await levelStore.getLevel(item.LevelId);
  if (response.data) {
    levelData.value = response.data;
    showModal(true);
  }
};

const deleteLevel = (item) => {
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
        var response = await levelStore.deleteLevel(item.LevelId);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await levelStore.loadLevels()
        });
      }
    });
  } catch (error) {
    console.log("error", error);
  }
};

const showModal = (isShow) => {
  if (isShow) {
    document.getElementById("levelModal").showModal();
  } else {
    document.getElementById("levelModal").close();
  }
};
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="overflow-x-auto">
          <div class="flex justify-between gap-2 mb-3">
            <button class="btn btn-primary" @click="createLevel()">
              Create
            </button>
            <div class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
              <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
            </div>
          </div>
          <EasyDataTable :headers="headers" :items="levelStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table">
            <template #item-levelid="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editLevel(item)"></ButtonEdit>
                <ButtonDelete @click="deleteLevel(item)"></ButtonDelete>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>

    <dialog id="levelModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">{{ mode === 'create' ? 'Create' : 'Edit' }} Level</h3>
        <form @submit.prevent="submitForm">
          <input type="hidden" v-model="levelData.LevelId" />
          <div class="form-control w-full mt-3">
            <div class="label">
              <span class="label-text">Level</span>
            </div>
            <input type="text" v-model="levelData.LevelName" class="input input-bordered w-full" required />
          </div>
          <div class="modal-action">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  </AdminLayout>
</template>
