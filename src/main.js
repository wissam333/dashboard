import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

/* import bootstrap icons */
import "bootstrap-icons/font/bootstrap-icons.css";

//import directive from './directive'
//import '@/hammer.min.v2.0.7.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
