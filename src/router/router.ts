import HomePage from "../pages/HomePage.vue";
import BossesPage from "../pages/BossesPage.vue";
import InvitationsPage from "../pages/InvitationsPage.vue";;
import BossesPageById from "../pages/BossesPageById.vue";
import { createRouter, createWebHistory } from "vue-router";
import InvitationPageById from "../pages/InvitationPageById.vue";

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
        path: "/bosses/:id",
        component: BossesPageById
    },
    {
        path: "/invitation/:id",
        component: InvitationPageById
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;