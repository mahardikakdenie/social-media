export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_DATA: (state, payload) => state.data.push(payload),
  },
  actions: {
    setData({ commit }, payload) {
      commit("SET_DATA", payload);
    },
  },
};
