import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path:'/',
        name: 'home',
        component: HomeView,
        },
        {
        path:'/Backstage',
        name: 'Backstage',
        component: () =>import('../components/Backstage.vue'),
        },
        {
        path:'/Frontstage',
        name: 'Frontstage',
        component: () =>import('../components/Frontstage.vue'),
        },
    ]
})

export default router
