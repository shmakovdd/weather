import {createRouter, createWebHashHistory} from "vue-router";
import CurrentCity from '@/components/pages/CurrentCity'
import CitiesList from '@/components/pages/CitiesList'
import LoginForm from '@/views/LoginForm'
import RegisterForm from '@/views/RegisterForm'

const routes = [
    {
        path: '/',
        component: CurrentCity,
    },
    {
        path: '/cities',
        component: CitiesList,
    },
    {
        path: '/login',
        component: LoginForm
    },
    {
        path: '/reg',
        component: RegisterForm
    }

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;