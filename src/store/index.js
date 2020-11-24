import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    notification: {
      message: '',
      type: ''      // error, warning, success, info
    },
  },

  mutations: {    // Commit and track state changes

    showNotification (state, { message, type }) {
      state.notification.message = message;
      state.notification.type = type;
    },

  },

  actions: {  // Async API requests and updating state through mutations

    showNotification ({ commit }, { message, type }) {
      commit("showNotification", { message, type });
    },

  },

  getters: {    // Access state (can also filter state data here)

  },

});
