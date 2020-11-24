import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import notification from "./mixins/notification"

Vue.config.productionTip = false

// Globally available helpers
// Bit dangerous !
// Can collide with existing global functions
Vue.mixin(notification);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
