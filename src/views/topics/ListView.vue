<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useTopicStore } from '@/stores/topic';

import AdminLayout from "@/layouts/AdminLayout.vue"
import ButtonEdit from "@/components/ButtonEdit.vue"
import ButtonDelete from "@/components/ButtonDelete.vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const topicStore = useTopicStore();

const headers = [
  { text: "#", value: "TopicId", width: 200 },
  { text: "Topic Code", value: "TopicCode" },
  { text: "Topic Name", value: "TopicName" },
  { text: "Level", value: "Level.LevelName" },
];
const searchField = ref("TopicCode");
const searchValue = ref("");

onMounted(async () => {
  await topicStore.loadTopics()
});

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
    console.log("error", error);
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
            table-class-name="customize-table">
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
