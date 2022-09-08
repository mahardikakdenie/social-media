import Vue from "vue";
import Vuex from "vuex";
import list from "./modules/list";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: user,
    list: list,
  },
});
