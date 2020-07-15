import Vue from "vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const router = new VueRouter({ mode: "history", routes });

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
