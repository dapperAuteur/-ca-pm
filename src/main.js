// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'https://vuejs-stock-trader-14b84.firebaseio.com/';

import store from './store/store';
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
