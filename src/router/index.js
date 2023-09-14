import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import OurProduct from "../views/OurProduct.vue";
import ItemView from "../views/ItemView.vue";
import OrderView from "../views/OrderView.vue";
import OrderDetails from "../views/OrderDetails.vue";
import CategoryView from "../views/CategoryView.vue";
import NewProduct from "../views/NewProduct.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/HomeView", name: "HomeView", component: HomeView },
  { path: "/", name: "OurProduct", component: OurProduct },
  { path: "/ItemView/:id", name: "ItemView", component: ItemView },
  { path: "/OrderView", name: "OrderView", component: OrderView },
  { path: "/OrderDetails/:id", name: "OrderDetails", component: OrderDetails },
  { path: "/CategoryView", name: "CategoryView", component: CategoryView },
  { path: "/NewProduct", name: "NewProduct", component: NewProduct },
];

const router = new VueRouter({
  //history - hash
  mode: "hash",
  //process.env.BASE_PATH
  base: process.env.BASE_URL,
  routes,
});

export default router;
