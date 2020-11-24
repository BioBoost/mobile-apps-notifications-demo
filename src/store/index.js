import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    notification: {
      message: '',
      type: '',      // error, warning, success, info
      show: false,
      timeout: null
    },
  },

  mutations: {    // Commit and track state changes

    showNotification (state, { message, type, timeout }) {
      state.notification.message = message;
      state.notification.type = type;
      state.notification.timeout = timeout;
      state.notification.show = true;
    },

    hideNotification (state) {
      state.notification.show = false;
      clearTimeout(state.notification.timeout);
    },

  },

  actions: {  // Async API requests and updating state through mutations

    showNotification ({ commit, dispatch }, { message, type }) {
      let timeout = setTimeout(() => { dispatch('hideNotification') }, 8000);
      commit("showNotification", { message, type, timeout });
    },

    hideNotification ({ commit }) {
      commit("hideNotification");
    }

  },

  getters: {    // Access state (can also filter state data here)

    notification(state) {
      return state.notification;
    }

  },

});
