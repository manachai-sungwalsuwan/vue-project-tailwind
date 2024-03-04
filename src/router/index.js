import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import DashBoard from '@/views/DashBoardView.vue'

import StudentList from '@/views/students/ListView.vue'
import StudentCreate from '@/views/students/CreateView.vue'
import StudentDetail from '@/views/students/DetailView.vue'

import TeacherList from '@/views/teachers/ListView.vue'
import TeacherCreate from '@/views/teachers/CreateView.vue'

import ScheduleList from '@/views/schedules/ListView.vue'
import ScheduleCreate from '@/views/schedules/CreateView.vue'

import CampList from '@/views/camps/ListView.vue'
import CampCreate from '@/views/camps/CreateView.vue'

import LevelViewList from '@/views/levels/ListView.vue'

import TopicViewList from '@/views/topics/ListView.vue'
import TopicCreate from '@/views/topics/CreateView.vue'

import StoreList from '@/views/stores/ListView.vue'

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
        {
            path: '/students',
            name: 'students',
            component: StudentList
        },
        {
            path: '/students/create',
            name: 'students-create',
            component: StudentCreate
        },
        {
            path: '/students/edit/:id',
            name: 'students-edit',
            component: StudentCreate
        },
        {
            path: '/students/detail/:id',
            name: 'students-detail',
            component: StudentDetail
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: TeacherList
        },
        {
            path: '/teachers/create',
            name: 'teachers-create',
            component: TeacherCreate
        },
        {
            path: '/teachers/edit/:id',
            name: 'teachers-edit',
            component: TeacherCreate
        },
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
            component: LevelViewList
        },
        {
            path: '/topics',
            name: 'topics',
            component: TopicViewList
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
    ]
})

export default router