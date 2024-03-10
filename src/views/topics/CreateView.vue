<script setup>
import { ref, onMounted, reactive } from "vue"
import { useRouter, useRoute, RouterLink } from "vue-router"

import { useTopicStore } from '@/stores/topic'
import { useLevelStore } from '@/stores/level'

import AdminLayout from "@/layouts/AdminLayout.vue"
import Swal from "sweetalert2"

const topicStore = useTopicStore()
const levelStore = useLevelStore()
const router = useRouter()
const route = useRoute()

const topicIndex = ref(-1)
const mode = ref('ADD')

const topicData = reactive({
  TopicId: 0,
  TopicCode: '',
  TopicName: '',
  LevelId: 0
})

onMounted(async () => {
  await levelStore.loadLevels()

  if (route.params.id) {
    topicIndex.value = route.params.id
    mode.value = 'EDIT'

    const response = await topicStore.getTopic(topicIndex.value)
    const selectedTopic = response.data
    topicData.TopicId = selectedTopic.TopicId
    topicData.TopicCode = selectedTopic.TopicCode
    topicData.TopicName = selectedTopic.TopicName
    topicData.LevelId = selectedTopic.LevelId
  }
})

const updateTopic = async () => {
  try {
    let response = null

    if (mode.value === 'ADD') {
      response = await topicStore.createTopic(topicData)
    } else {
      response = await topicStore.updateTopic(topicIndex.value, topicData)
    }
    
    if (response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
      }).then(() => {
        router.push({ name: 'topics' })
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

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  
  if (file) {
    
  }
}
</script>

<template>
  <AdminLayout>
    <section class="card col-span-12 bg-base-100">
      <form class="card-body" @submit.prevent="updateTopic">
        <input type="hidden" v-model="topicData.TopicId">
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Topic Code</span>
            </label>
            <input type="text" required="" class="input input-bordered font-mono" v-model="topicData.TopicCode" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Topic Name</span>
            </label>
            <input type="text" required="" class="input input-bordered font-mono" v-model="topicData.TopicName" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Level</span>
            </label>
            <select class="select select-bordered" required v-model="topicData.LevelId">
              <option disabled="" selected="" value="">== select ==</option>
              <option v-for="level in levelStore.list" :value="level.LevelId">{{ level.LevelName }}</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Attachment</span>
            </label>
            <input type="file" class="file-input w-full max-w-xs">
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
        <RouterLink to="/topics" class="btn btn-outline">Back</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
