<script setup>
import { ref, onMounted } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useTopicStore } from '@/stores/topic';

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Swal from "sweetalert2"

const topicStore = useTopicStore()
const router = useRouter()
const loading = ref(false)

const headers = [
  { text: "#", value: "TopicId", width: 200 },
  { text: "Topic Code", value: "TopicCode" },
  { text: "Topic Name", value: "TopicName" },
  { text: "Level", value: "Level.LevelName" },
]
const searchField = ref("TopicCode")
const searchValue = ref("")

onMounted(async () => {
  loading.value = true
  await topicStore.loadTopics()
  loading.value = false
});

const editTopic = (item) => {
  router.push({name: 'topics-edit', params: { id: item.TopicId }})
}

const deleteTopic = (item) => {
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
        var response = await topicStore.deleteTopic(item.TopicId);
        Swal.fire({
          title: response.data.message,
          icon: "success",
        }).then(async () => {
          await topicStore.loadTopics()
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
          <RouterLink to="/topics/create" class="btn btn-primary float-right">Create</RouterLink>
          <div class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" v-model="searchValue" />
            <MagnifyingGlassIcon class="w-4 h-4 opacity-70"></MagnifyingGlassIcon>
          </div>
        </div>
        <div class="overflow-x-auto">
          <EasyDataTable :headers="headers" :items="topicStore.list" :rows-per-page="10" :search-field="searchField"
            :search-value="searchValue" border-cell buttons-pagination header-text-direction="center"
            table-class-name="customize-table" :loading="loading">
            <template #item-topicid="item">
              <div class="flex justify-center gap-2">
                <ButtonEdit @click="editTopic(item)"></ButtonEdit>
                <ButtonDelete @click="deleteTopic(item)"></ButtonDelete>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>
