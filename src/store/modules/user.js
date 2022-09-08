export default {
  namespaced: true,
  state: {
    user: {
      username: "Dummy Data",
      description: "Programmer",
    },
  },
  mutations: {
    SET_USER: (state, payload) => {
      for (const key in payload) {
        if (Object.hasOwnProperty.call(payload, key)) {
          state.user[key] = payload[key];
        }
      }
    },
  },
  actions: {
    setUser: ({ commit }, payload) => {
      commit("SET_USER", payload);
    },
  },
};
