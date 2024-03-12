<script setup>
import { ref, onMounted, reactive } from "vue"
import { useRouter, useRoute, RouterLink } from "vue-router"
import { useUserStore } from '@/stores/user'
import { useRoleStore } from '@/stores/role'
import { useStoreStore } from '@/stores/store'

import AdminLayout from "@/layouts/AdminLayout.vue"
import Multiselect from "@vueform/multiselect"
import Swal from "sweetalert2"

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
const roleStore = useRoleStore()
const storeStore = useStoreStore()

const userIndex = ref(-1)
const mode = ref('ADD')

const userData = reactive({
  UserId: 0,
  Username: '',
  Roles: [],
  Stores: []
})

const optionRoles = ref([])
const optionStores = ref([])

onMounted(async () => {
  await roleStore.loadRoles()
  await storeStore.loadStores()

  optionRoles.value = roleStore.list.map(role => {
    return { value: role.RoleId, label: role.RoleName }
  })

  optionStores.value = storeStore.list.map(store => {
    return { value: store.StoreId, label: store.StoreName }
  })

  if (route.params.id) {
    userIndex.value = route.params.id
    mode.value = 'EDIT'

    const response = await userStore.getUser(userIndex.value)
    const selectedUser = response.data.result
    userData.UserId = selectedUser.UserId
    userData.Username = selectedUser.Username
    userData.RoleId = selectedUser.RoleId
    userData.StoreId = selectedUser.StoreId
  }
})

const updateUser = async () => {
  try {
    let response = null

    if (mode.value === 'ADD') {
      response = await userStore.createUser(userData)
    } else {
      response = await userStore.updateUser(userIndex.value, userData)
    }

    if (response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
      }).then(() => {
        router.push({ name: 'users' })
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
      <form class="card-body" @submit.prevent="updateUser">
        <input type="hidden" v-model="userData.UserId">
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input type="text" required="" class="input input-bordered font-mono" v-model="userData.Username" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" required="" class="input input-bordered font-mono" v-model="userData.Password" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">

          <div class="form-control">
            <label class="label">
              <span class="label-text">Role</span>
            </label>
            <Multiselect v-model="userData.Roles" mode="tags" placeholder="Choose a role" required :searchable="true"
              :options="optionRoles" />
            <!-- <select class="select select-bordered" multiple name="Roles[]" v-model="userData.Roles" required>
							<option disabled="" selected="" value="">== select ==</option>
							<option v-for="role in roleStore.list" :value="role.RoleId">{{ role.RoleName }}</option>
						</select> -->
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Store</span>
            </label>
            <Multiselect v-model="userData.Stores" mode="tags" placeholder="Choose a store" required :searchable="true"
              :options="optionStores" />
            <!-- <select class="select select-bordered" multiple name="Stores[]" v-model="userData.Stores" required>
							<option disabled="" selected="" value="">== select ==</option>
							<option v-for="store in storeStore.list" :value="store.StoreId">{{ store.StoreName }}</option>
						</select> -->
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
        <RouterLink to="/users" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
