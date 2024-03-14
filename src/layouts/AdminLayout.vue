<script setup>
import { ref, onMounted, computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { useAuthStore } from '@/stores/auth' 

import { BeakerIcon } from "@heroicons/vue/20/solid"

const route = useRoute()

const authStore = useAuthStore()

const menuList = [
  {
    name: "Dashboard",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/home.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/dashboard",
  },
  {
    name: "Students",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/user-group.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/students",
  },
  {
    name: "Teachers",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/user.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/teachers",
  },
  {
    name: "Schedules",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/calendar-days.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/schedules",
  },
  {
    name: "Camps",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/academic-cap.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/camps",
  },
]

const subMenuList = [
  "users",
  "users-create",
  "roles",
  "topics",
  "topics-create",
  "levels",
  "stores",
]

const activeMenu = ref("")

onMounted(() => {
  activeMenu.value = route.name.toLocaleLowerCase()
})

const isActive = ((menu) => {
  return route.path.toLocaleLowerCase().split('/')[1] === menu.split('/')[1] ? 'active' : ''
})
</script>

<template>
  <!-- drawer -->
  <div class="drawer min-h-screen bg-base-200 lg:drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <!-- content -->
    <main class="drawer-content">
      <div
        class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10"
      >
        <!-- header -->
        <header class="col-span-12 flex items-center gap-2 lg:gap-4">
          <label
            for="my-drawer"
            class="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <svg
              data-src="https://unpkg.com/heroicons/20/solid/bars-3.svg"
              class="h-5 w-5"
            ></svg>
          </label>
          <div class="grow">
            <h1 class="lg:text-2xl lg:font-light">
              {{ activeMenu.toLocaleUpperCase() }}
            </h1>
          </div>
          <div><span>Store: {{ authStore.user != null ? authStore.user.Stores[0].StoreName : '' }}</span></div>
          <!-- dropdown -->
          <div class="dropdown-end dropdown z-10">
            <div tabindex="0" class="avatar btn btn-circle btn-ghost">
              <div class="w-10 rounded-full">
                <!-- <img src="https://picsum.photos/80/80?5" /> -->
                <img src="@/assets/avatar.jpg" />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
            >
              <li>
                <a>Profile</a>
              </li>
              <li><button type="button" @click="authStore.logout">Logout</button></li>
            </ul>
          </div>
          <!-- /dropdown -->
        </header>
        <!-- /header -->

        <slot></slot>
      </div>
    </main>
    <!-- /content -->
    <aside class="drawer-side z-10">
      <label for="my-drawer" class="drawer-overlay"></label>
      <!-- sidebar menu -->
      <nav
        class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-10"
      >
        <div class="mx-4 flex items-center gap-2 font-black text-2xl">
          <BeakerIcon class="h-6 w-6 text-orange-500"></BeakerIcon>
          SLS
        </div>
        <ul class="menu">
          <li v-for="menu in menuList" :key="menu.name">
            <RouterLink
              :to="menu.route"
              :class="isActive(menu.route)
                // menu.route.toLocaleLowerCase().split('/')[1] === activeMenu
                //   ? 'active'
                //   : ''
              "
            >
              <span v-html="menu.icon"></span>
              {{ menu.name }}
            </RouterLink>
          </li>
          <li>
            <details :open="subMenuList.includes(activeMenu)">
              <summary>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/adjustments-vertical.svg"
                  class="h-5 w-5"
                ></svg>
                Settings
              </summary>
              <ul>
                <li>
                  <RouterLink
                    to="/users"
                    :class="
                      ['users', 'users-create'].includes(activeMenu)
                        ? 'active'
                        : ''
                    "
                    >Users</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/roles"
                    :class="
                      ['roles', 'roles-create'].includes(activeMenu)
                        ? 'active'
                        : ''
                    "
                    >Roles</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/topics"
                    :class="
                      ['topics', 'topics-create'].includes(activeMenu)
                        ? 'active'
                        : ''
                    "
                  >
                    Topics
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/levels"
                    :class="
                      ['levels', 'levels-create'].includes(activeMenu)
                        ? 'active'
                        : ''
                    "
                  >
                    Levels
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/stores"
                    :class="
                      ['stores', 'stores-create'].includes(activeMenu)
                        ? 'active'
                        : ''
                    "
                  >
                    Stores
                  </RouterLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <!-- /sidebar menu -->
    </aside>
  </div>
  <!-- /drawer -->
</template>
