import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import boardstore from "@/store/modules/boardstore.js";
import apartstore from "@/store/modules/apartstore.js";
import bikestore from "@/store/modules/bikestore.js";
import userstore from "@/store/modules/user.js";
import marketstore from "@/store/modules/countrymarket.js";
export default new Vuex.Store({
  modules: {
    boardstore,
    apartstore,
    bikestore,
    userstore,
    marketstore,
  }

});
