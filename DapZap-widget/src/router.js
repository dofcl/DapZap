import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/LoginView.vue'
import Home from './views/HomeView.vue'
import Examples from './views/ExampleView.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/examples',
            name: 'examples',
            component: Examples
        },
        {
            path: '/*',
            redirect: {name: 'home'}
        }
    ],
    linkActiveClass: 'active'
})