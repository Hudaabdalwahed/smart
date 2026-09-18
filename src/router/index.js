import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/Services-View.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "services",
    path: "/Services",
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
