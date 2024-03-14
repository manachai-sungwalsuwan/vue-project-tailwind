import TeacherList from '@/views/teachers/ListView.vue'
import TeacherCreate from '@/views/teachers/CreateView.vue'
import Layout from '@/layouts/Layout.vue'

export default {  
    path: '/teachers',
    component: Layout,
    children: [
        {
            path: '',
            name: 'teachers',
            component: TeacherList,
        },
        {
            path: 'create',
            name: 'teachers-create',
            component: TeacherCreate,
        },
        {
            path: 'edit/:id',
            name: 'teachers-edit',
            component: TeacherCreate,
        }
    ]
}