import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import css from "./css/styles.css";
import * as VueGoogleMaps from "vue2-google-maps";
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAjZt39bdV9uc3fxitQpzQBztXaIsEUA1Y",
    libraries: 'places',
  },
});
new Vue({
  router,
  store,
  css,
  render: (h) => h(App),
  
}).$mount("#app");
