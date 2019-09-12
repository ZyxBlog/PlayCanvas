import Vue from 'vue'
import vueRouter from 'vue-router'

import lizi from '../components/Lizi.vue'
import parent from '../components/parent.vue'

Vue.use(vueRouter)

const router = new vueRouter({
    routes: [
        {
            path: '/lizi',
            name: 'liziCanvas',
            component: lizi
        }
    ]
})

export default router