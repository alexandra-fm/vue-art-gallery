import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/Delivery",
    name: "Delivery",
    component: () => import("../views/Delivery.vue"),
  },
  {
    path: "/Payment",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/AboutCompany",
    name: "AboutCompany",
    component: () => import("../views/AboutCompany.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
