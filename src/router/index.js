import Vue from "vue";
import VueRouter from "vue-router";

import AboutView from "../views/AboutView.vue";
import OurProduct from "../views/OurProduct.vue";
import ItemView from "../views/ItemView.vue";
import OrderView from "../views/OrderView.vue";
import OrderDetails from "../views/OrderDetails.vue";
import CategoryView from "../views/CategoryView.vue";

Vue.use(VueRouter);

const routes = [
  //{ path: '/', name: 'defualt', component:  Homepage},
  //{ path: '/home', name: 'home', component: HomeView },

  { path: "/about", name: "about", component: AboutView },
  { path: "/", name: "OurProduct", component: OurProduct },
  { path: "/ItemView/:id", name: "ItemView", component: ItemView },
  { path: "/OrderView", name: "OrderView", component: OrderView },
  { path: "/OrderDetails/:id", name: "OrderDetails", component: OrderDetails },
  { path: "/CategoryView", name: "CategoryView", component: CategoryView },
];

const router = new VueRouter({
  //history - hash
  mode: "hash",
  //process.env.BASE_PATH
  base: process.env.BASE_URL,
  routes,
});

export default router;
