import Vue from 'vue'
import vueRouter from 'vue-router'

import lizi from '../components/Lizi.vue'
import parent from '../components/parent.vue'

Vue.use(vueRouter)

const router = new vueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/lizi',
            name: 'Canvas',
            component: lizi,
            // children: [{
            //     path: '/',
            //     name: 'Lizi',
            //     component: parent
            // }]
        }
    ]
})

export default router