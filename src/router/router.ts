import HomePage from "../pages/HomePage.vue";
import BossesPage from "../pages/BossesPage.vue";
import InvitationsPage from "../pages/InvitationsPage.vue";
import MapsPage from "../pages/MapsPage.vue";
import BossesPageById from "../pages/BossesPageById.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/bosses",
        component: BossesPage
    },
    {
        path: "/invitations",
        component: InvitationsPage
    },
    {
        path: "/maps",
        component: MapsPage
    },
    {
        path: "/bosses/:id",
        component: BossesPageById
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;