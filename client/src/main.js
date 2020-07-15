import Vue from "vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import routes from "./routes";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2, {
  toast: true,
  icon: "success",
  timer: 3000,
  position: "top-end",
  showConfirmButton: false,
});

const router = new VueRouter({ mode: "history", routes });

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
