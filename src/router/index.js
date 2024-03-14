import { createRouter, createWebHistory } from 'vue-router' 
import { useAuthStore } from '@/stores/auth' 
import Login from '@/views/LoginView.vue'
import DashBoard from '@/views/DashBoardView.vue'

import studentRoutes from './student.routes'
import teacherRoutes from './teacher.routes'

import ScheduleList from '@/views/schedules/ListView.vue'
import ScheduleCreate from '@/views/schedules/CreateView.vue'

import CampList from '@/views/camps/ListView.vue'
import CampCreate from '@/views/camps/CreateView.vue'

import LevelList from '@/views/levels/ListView.vue'

import TopicList from '@/views/topics/ListView.vue'
import TopicCreate from '@/views/topics/CreateView.vue'

import StoreList from '@/views/stores/ListView.vue'

import UserList from '@/views/users/ListView.vue'
import UserCreate from '@/views/users/CreateView.vue'

import RoleList from '@/views/roles/ListView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { path: "/dashboard" },
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard
        },
        { ...studentRoutes },
        { ...teacherRoutes },
        {
            path: '/schedules',
            name: 'schedules',
            component: ScheduleList
        },
        {
            path: '/schedules/create',
            name: 'schedules-create',
            component: ScheduleCreate
        },
        {
            path: '/schedules/edit/:id',
            name: 'schedules-edit',
            component: ScheduleCreate
        },
        {
            path: '/camps',
            name: 'camps',
            component: CampList,
        },
        {
            path: '/camps/create',
            name: 'camps-create',
            component: CampCreate
        },
        {
            path: '/camps/edit/:id',
            name: 'camps-edit',
            component: CampCreate
        },
        {
            path: '/levels',
            name: 'levels',
            component: LevelList
        },
        {
            path: '/topics',
            name: 'topics',
            component: TopicList
        },
        {
            path: '/topics/create',
            name: 'topics-create',
            component: TopicCreate
        },
        {
            path: '/topics/edit/:id',
            name: 'topics-edit',
            component: TopicCreate
        },
        {
            path: '/stores',
            name: 'stores',
            component: StoreList
        },
        {
            path: '/users',
            name: 'users',
            component: UserList
        },
        {
            path: '/users/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/users/edit/:id',
            name: 'users-edit',
            component: UserCreate
        },
        {
            path: '/roles',
            name: 'roles',
            component: RoleList
        },
        // catch all redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
})

router.beforeEach(async (to) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path)
    const authStore = useAuthStore()
    
    if (authRequired && !authStore.user) {
        authStore.returnUrl = to.fullPath;
        return '/login';
    }
})

export default router