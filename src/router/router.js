import {createRouter, createWebHashHistory} from "vue-router";
import CurrentCity from '@/components/pages/CurrentCity'
import AppMain from '@/components/pages/AppMain'
import CitiesList from '@/components/pages/CitiesList'

const routes = [
    {
        path: '/',
        component: CurrentCity,
    },
    {
        path: '/main',
        component: AppMain
    },
    {
        path: '/cities',
        component: CitiesList,
    }

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;