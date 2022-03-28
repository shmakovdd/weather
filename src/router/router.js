import {createRouter, createWebHistory} from "vue-router";
import CurrentCity from '@/components/pages/CurrentCity'

const routes = [
    {
        path: '/',
        component: CurrentCity,
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;