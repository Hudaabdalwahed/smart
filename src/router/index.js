import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/Services-View.vue";
import ServiceDetails from "@/views/Service-Details-View.vue";
import MyRequestView from "@/views/My-Request-View.vue";
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
  {
    name: "service-details",
    path: "/service/:id",
    component: ServiceDetails,
  },
  {
    name: "my-requests",
    path: "/my-requests",
    component: MyRequestView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
