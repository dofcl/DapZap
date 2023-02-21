import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import LandingPage from "@/views/LandingPage.vue";
import Tables from "@/views/Tables.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
    {
        path: "/",
        name: "/",
        component: LandingPage,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/flow-integrations",
        name: "Flow Integrations",
        component: Tables,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/rtl-page",
        name: "Rtl",
        component: Rtl,
    },
    {
        path: "/sign-in",
        name: "Sign In",
        component: SignIn,
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

export default router;
