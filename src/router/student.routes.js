import StudentList from '@/views/students/ListView.vue'
import StudentCreate from '@/views/students/CreateView.vue'
import StudentDetail from '@/views/students/DetailView.vue'
import Layout from '@/layouts/Layout.vue'

export default {  
    path: '/students',
    component: Layout,
    children: [
        {
            path: '',
            name: 'students',
            component: StudentList,
        },
        {
            path: 'create',
            name: 'students-create',
            component: StudentCreate,
        },
        {
            path: 'edit/:id',
            name: 'students-edit',
            component: StudentCreate,
        },
        {
            path: 'detail/:id',
            name: 'students-detail',
            component: StudentDetail,
        }
    ]
}