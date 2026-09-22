import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/Services-View.vue";
import ServiceDetails from "@/views/Service-Details-View.vue";
import MyRequestView from "@/views/My-Request-View.vue";
import RequestDetailsView from "@/views/Request-Details-View.vue";
import LoginView from "@/views/Login-View.vue";
import AboutView from "@/views/About-View.vue";
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
  {
    name: "request-details",
    path: "/request/:id",
    component: RequestDetailsView,
  },
  {
    name: "login",
    path: "/login",
    component: LoginView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
