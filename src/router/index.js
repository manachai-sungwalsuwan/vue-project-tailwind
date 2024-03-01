import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/views/DashBoardView.vue'
import StudentList from '@/views/students/ListView.vue'
import StudentCreate from '@/views/students/CreateView.vue'

import TeacherList from '@/views/teachers/ListView.vue'
import ScheduleList from '@/views/schedules/ListView.vue'
import LevelViewList from '@/views/levels/ListView.vue'
import TopicViewList from '@/views/topics/ListView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
            path: '/teachers',
            name: 'teachers',
            component: TeacherList
        },
        {
            path: '/schedules',
            name: 'schedules',
            component: ScheduleList
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
        }
    ]
})

export default router