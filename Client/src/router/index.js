import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../Views/HomePage";
import LoginPage from "@/Views/LoginPage";
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        props: true
    },
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;