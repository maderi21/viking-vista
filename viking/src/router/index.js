import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Accommodation from "@/views/Accommodation.vue";
import Gift from "@/views/Gift.vue";
import Experience from "@/views/Experience.vue";
import Activities from "@/views/Activities.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/accomodation",
      name: "Accomodation",
      component: Accommodation,
    },
    {
      path: "/gift",
      name: "Gift",
      component: Gift,
    },
    {
      path: "/activities",
      name: "Reservations",
      component: Activities,
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience,
    },
  ],
});

export default router;
