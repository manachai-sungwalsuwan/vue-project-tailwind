<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const menuList = [
  {
    name: "Dashboaard",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/home.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/dashboard",
  },
  {
    name: "Student",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/user.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/students",
  },
  {
    name: "Teacher",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/user.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/teachers",
  },{
    name: "Schedule",
    icon: `<svg
                data-src="https://unpkg.com/heroicons/20/solid/calendar-days.svg"
                class="h-5 w-5"
              ></svg>`,
    route: "/schedules",
  },
];

const activeMenu = ref("");

onMounted(() => {
  activeMenu.value = route.name.toLocaleLowerCase();
});
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
            <h1 class="lg:text-2xl lg:font-light">{{ activeMenu.toLocaleUpperCase() }}</h1>
          </div>
          <!-- dropdown -->
          <div class="dropdown-end dropdown z-10">
            <div tabindex="0" class="avatar btn btn-circle btn-ghost">
              <div class="w-10 rounded-full">
                <img src="https://picsum.photos/80/80?5" />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
            >
              <li>
                <a>Profile</a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
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
        <div class="mx-4 flex items-center gap-2 font-black">
          <svg
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="256"
              y="670.72"
              width="512"
              height="256"
              rx="128"
              class="fill-base-content"
            />
            <circle cx="512" cy="353.28" r="256" class="fill-base-content" />
            <circle
              cx="512"
              cy="353.28"
              r="261"
              stroke="black"
              stroke-opacity="0.2"
              stroke-width="10"
            />
            <circle cx="512" cy="353.28" r="114.688" class="fill-base-100" />
          </svg>
          SLS
        </div>
        <ul class="menu">
          <li v-for="menu in menuList" :key="menu.name">
            <RouterLink
              :to="menu.route"
              :class="menu.route.toLocaleLowerCase().split('/')[1] === activeMenu ? 'active' : ''"
            >
              <span v-html="menu.icon"></span>
              {{ menu.name }}
            </RouterLink>
          </li>
          <li>
            <details>
              <summary>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/adjustments-vertical.svg"
                  class="h-5 w-5"
                ></svg>
                Settings
              </summary>
              <ul>
                <li><a>Users</a></li>
                <li><a>Roles</a></li>
                <li>
                  <RouterLink
                    to="/topics"
                    :class="'topics' === activeMenu ? 'active' : ''"
                  >
                    Topics
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/levels"
                    :class="'levels' === activeMenu ? 'active' : ''"
                  >
                    Levels
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
