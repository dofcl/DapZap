import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import LandingPage from "@/views/LandingPage.vue";
import Integrations from "@/views/Integrations.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import WorkflowBuilder from "@/views/WorkflowBuilder.vue";
import Widgets from "@/views/Widgets.vue";

const routes = [
    {
        path: "/",
        name: "/",
        component: LandingPage,
        meta: {
            public: true,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/flow-integrations",
        name: "Flow Integrations",
        component: Integrations,
        meta: {
            public: true,
        },

    },
    {
        path: "/workflow",
        name: "Workflow Builder",
        component: WorkflowBuilder,
        meta: {
            public: true,
        },

    },
    {
        path: "/ui-widgets",
        name: "UI Widgets",
        component: Widgets,
        meta: {
            public: true,
        },

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
        meta: {
            public: true,
        },
    },
    {
        path: "/sign-in",
        name: "Sign In",
        component: SignIn,
        meta: {
            public: true,
        },
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp,
        meta: {
            public: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (to.matched.some(record => record.meta.public)) {
        next()
    } else if (!user) {
        router.push('/sign-in')
    } else {
        if (to.name === 'logout') {
            router.go('/')
        }
        next()
    }
})

export default router;
