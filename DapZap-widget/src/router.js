import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/LoginView.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/*',
            redirect: {name: 'login'}
        }
    ],
    mode: 'abstract',
    linkActiveClass: 'active'
})