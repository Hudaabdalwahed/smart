import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/Services-View.vue";
import ServiceDetails from "@/views/Service-Details-View.vue";
import MyRequestView from "@/views/My-Request-View.vue";
import RequestDetailsView from "@/views/Request-Details-View.vue";
import LoginView from "@/views/Login-View.vue";
import AboutView from "@/views/About-View.vue";
import NotFoundView from "@/views/NotFound-View.vue";
import AppointmentsView from "@/views/Appointments-View.vue";
import AppointmentDetailsView from "@/views/Appointment-Details-View.vue";
import SmartAssistentView from "@/views/Smart-Assistent-View.vue";

/* =========================================
   Routes
========================================= */

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    name: "services",
    path: "/services",
    component: ServicesView,
  },

  {
    name: "smart-assistant",
    path: "/smart-assistant",
    component: SmartAssistentView,
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

    meta: {
      requiresAuth: true,
    },
  },

  {
    name: "request-details",
    path: "/request/:id",
    component: RequestDetailsView,

    meta: {
      requiresAuth: true,
    },
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

  {
    name: "appointments",
    path: "/appointments",
    component: AppointmentsView,

    meta: {
      requiresAuth: true,
    },
  },

  {
    name: "appointment-details",
    path: "/appointment/:id",
    component: AppointmentDetailsView,

    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

/* =========================================
   Router
========================================= */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* =========================================
   Login Guard
========================================= */

router.beforeEach((to) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      name: "login",
    };
  }

  return true;
});

export default router;
