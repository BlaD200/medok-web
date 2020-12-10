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
        },
        {
            path: '/fruits/banana',
            name: 'BananaInfo',
            component: () => import("@/views/fruits/BananaInfo")
        },
        {
            path: '/vegetables/zucchini',
            name: 'ZucchiniInfo',
            component: () => import("@/views/vegetables/ZucchiniInfo")
        },
        {
            path: '/meat/turkey',
            name: 'TurkeyInfo',
            component: () => import("@/views/meat/TurkeyInfo")
        },
        {
            path: '/videos',
            name: 'Videos',
            component: () => import("@/views/Videos")
        },
        {
            path: '/myths',
            name: 'Myths',
            component: () => import("@/views/Myths")
        }
    ]
})
