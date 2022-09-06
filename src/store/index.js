import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        text: "<blockquote>asdasdsadsad</blockquote>",
      },
    ],
  },
  mutations: {
    SET_DATA: (state, payload) => (state.data = payload.data),
  },
  actions: {},
  modules: {},
});
