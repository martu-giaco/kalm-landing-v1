import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Plans from "../views/Plans.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contacto", component: Contact },
  { path: "/planes", component: Plans }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
