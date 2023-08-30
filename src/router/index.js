import Vue from "vue";
import VueRouter from "vue-router";

import AboutView from "../views/AboutView.vue";
import OurProduct from "../views/OurProduct.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

const routes = [
  //{ path: '/', name: 'defualt', component:  Homepage},
  //{ path: '/home', name: 'home', component: HomeView },

  { path: "/about", name: "about", component: AboutView },
  { path: "/", name: "OurProduct", component: OurProduct },
  { path: "/ItemView/:id", name: "ItemView", component: ItemView },
];

const router = new VueRouter({
  //history - hash
  mode: "hash",
  //process.env.BASE_PATH
  base: process.env.BASE_URL,
  routes,
});

export default router;
