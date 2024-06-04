import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Accommodation from "@/views/Accommodation.vue";
import Contact from "@/views/Contact.vue";
import Gift from "@/views/Gift.vue";
import Reservations from "@/views/Reservations.vue";
import Experience from "@/views/Experience.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Accomodation",
      name: "Accomodation",
      component: Accommodation,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/Gift",
      name: "Gift",
      component: Gift,
    },
    {
      path: "/Reservations",
      name: "Reservations",
      component: Reservations,
    },
    {
      path: "/Experience",
      name: "Experience",
      component: Experience,
    },
  ],
});

export default router;
