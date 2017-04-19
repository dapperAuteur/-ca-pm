import companies from '../../data/stocks';

const state = {
  companies: []
};

const mutations = {
  'SET_COMPANIES' (state, companies) {
    state.companies = companies;
  },
  'RND_COMPANIES' (state) {
      state.companies.forEach(company => {
        company.price = Math.round(company.price * (1 + Math.random() - 0.5));
      })
  }
};

const actions = {
  buyCompany: ({ commit}, order) => {
    commit('BUY_COMPANY', order);
  },
  initCompanies: ({commit}) => {
    commit('SET_COMPANIES', companies);
  },
  randomizeCompanies: ({commit}) => {
    commit('RND_COMPANIES');
  }
};

const getters = {
  companies: state => {
    return state.companies; //refers to companies array from state on line 4
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
