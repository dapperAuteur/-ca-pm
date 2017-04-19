import Vue from 'vue';
import Vuex from 'vuex';

import companies from './modules/companies';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    companies,
    portfolio
  }
});
