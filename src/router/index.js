// Route documentation - https://router.vuejs.org/installation.html#direct-download-cdn

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import NotFound from "@/views/NotFound.vue";
import useUserStore from "@/stores/user";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "about", path: "/about", component: About },
  {
    name: "manage",
    path: "/manage-music",
    component: Manage,
    meta: { requiresAuth: true },
  },
  { path: "/manage", redirect: { name: "manage" } },
  { name: "notFound", path: "/:catchAll(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

// Global Guard function --- https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {
  /* If the condition ends up not passing, we know that the route does require authentication.
  This means we should check the store for the user's authentication status.
  First, we need the store at the top of the router file.
  https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25064040#questions*/
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
