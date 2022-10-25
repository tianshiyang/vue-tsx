import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.js"),
    },
    {
      path: "/study",
      name: "study",
      component: () => import("@/views/Study.js"),
    },
    {
      path: "/v-if",
      name: "vIf",
      component: () => import("@/views/v-if/v-if.js"),
    },
    {
      path: "/v-for",
      name: "vFor",
      component: () => import("@/views/v-for/index.js"),
    },
    {
      path: "/dynamic-class",
      name: "dynamicClass",
      component: () => import("@/views/dynamic-class/dynamicClass.js"),
    },
    {
      path: "/components-plus",
      name: "componentsPlus",
      component: () => import("@/views/plus-page/index.js"),
    },
  ],
});

export default router;
