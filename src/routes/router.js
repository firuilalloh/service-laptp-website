import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../view/LandingPage.vue";
import LayananPage from "../view/LayananPage.vue";
import TestimoniPage from "../view/TestimoniPage.vue";
import ContactPage from "../view/ContactPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/layanan", component: LayananPage },
  { path: "/testimoni", component: TestimoniPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
