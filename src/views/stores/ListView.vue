<script setup>
import { ref, reactive, onMounted } from "vue"
import { useStoreStore } from "@/stores/store"

import AdminLayout from "@/layouts/AdminLayout.vue";
import ButtonEdit from "@/components/ButtonEdit.vue";
import ButtonDelete from "@/components/ButtonDelete.vue";
import Swal from "sweetalert2";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid"

const storeStore = useStoreStore()

const storeData = reactive({
  StoreId: 0,
  StoreName: "",
})
const mode = ref('ADD')

const headers = [
  { text: "#", value: "StoreId", width: 200 },
  { text: "Store", value: "StoreName" },
  { text: "Head Quarter", value: "IsStoreHQ", width: 200 },
]
const searchField = ref("StoreName")
const searchValue = ref("")
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await storeStore.loadStores()
  loading.value = false
})

const submitForm = async () => {
  try {
    let response = null

    if (mode.value === "ADD") {
      response = await storeStore.createStore(storeData)
    } else {
      response = await storeStore.updateStore(storeData.StoreId, storeData)
    }

    if (response.data) {
      showModal(false)
      if (response.data.status) {
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await storeStore.loadStores()
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

const createStore = () => {
  mode.value = 'ADD'
  storeData.StoreId = 0
  storeData.StoreName = ''
  showModal(true)
}

const editStore = async (item) => {
  mode.value = 'EDIT'
  const response = await storeStore.getStore(item.StoreId);
  if (response.data) {
    storeData.StoreId = response.data.result.StoreId
    storeData.StoreName = response.data.result.StoreName
    showModal(true)
  }
}

const deleteStore = (item) => {
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
        var response = await storeStore.deleteStore(item.StoreId);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await storeStore.loadStores()
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
    document.getElementById("storeModal").showModal()
  } else {
    document.getElementById("storeModal").close()
  }
}
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm">
      <div class="card-body grow-0">
        <div class="overflow-x-auto">
          <div class="flex justify-between gap-2 mb-3">
            <button class="btn btn-primary" @click="createStore()">
              Create
            </button>
            <div class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
              <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
            </div>
          </div>
          <EasyDataTable :headers="headers" :items="storeStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table" :loading="loading">
            <template #item-storeid="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editStore(item)"></ButtonEdit>
                <ButtonDelete @click="deleteStore(item)"></ButtonDelete>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>

    <dialog id="storeModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">{{ mode === 'ADD' ? 'Create' : 'Edit' }} Store</h3>
        <form @submit.prevent="submitForm">
          <input type="hidden" v-model="storeData.StoreId">
          <div class="form-control w-full mt-3">
            <div class="label">
              <span class="label-text">Store</span>
            </div>
            <input type="text" class="input input-bordered w-full" v-model="storeData.StoreName" required />
          </div>
          <div class="modal-action">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  </AdminLayout>
</template>
