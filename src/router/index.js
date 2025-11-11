import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Plans from "../views/Plans.vue";
import Equipo from "../views/Equipo.vue";
import Empleos from "../views/Empleos.vue";
import Blog from "../views/Blog.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/planes", component: Plans },
  { path: "/equipo", component: Equipo },
  { path: "/empleos", component: Empleos },
  { path: "/blog", component: Blog }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
