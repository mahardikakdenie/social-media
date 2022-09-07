import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    user: {
      username: "Dummy Data",
      description: "Programmer",
    },
  },
  mutations: {
    SET_DATA: (state, payload) => state.data.push(payload),
    SET_USER: (state, payload) => {
      for (const key in payload) {
        if (Object.hasOwnProperty.call(payload, key)) {
          state.user[key] = payload[key];
        }
      }
    },
  },
  actions: {},
  modules: {},
});
