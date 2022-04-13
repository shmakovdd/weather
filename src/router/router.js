import {createRouter, createWebHashHistory} from "vue-router";
import CurrentCity from '@/views/CurrentCity'
import CitiesList from '@/views/CitiesList'
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