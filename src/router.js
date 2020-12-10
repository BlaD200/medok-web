import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: () => import("@/views/AboutUs")
        }
        // {
        //     path: '/users/:id',
        //     name: 'UserDetails',
        //     component: () => import("@/views/UserDetails")
        // },
        // {
        //     path: '/products',
        //     name: 'Products',
        //     component: () => import("@/views/Products")
        // },
        // {
        //     path: '/groups',
        //     name: 'Groups',
        //     component: () => import("@/views/Group")
        // },
        // {
        //     path: '/producers',
        //     name: 'Producers',
        //     component: () => import("@/views/Producer")
        // }
    ]
})
