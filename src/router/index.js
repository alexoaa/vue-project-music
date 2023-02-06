// Route documentation - https://router.vuejs.org/installation.html#direct-download-cdn

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "about", path: "/about", component: About },
  { name: "manage", path: "/manage-music", component: Manage },
  { path: "/manage", redirect: { name: "manage" } },
  { name: "notFound", path: "/:catchAll(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
