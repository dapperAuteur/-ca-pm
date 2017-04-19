import companies from '../../data/stocks';

const state = {
  companies: [],
  company: {}
};

const mutations = {
  'SET_COMPANIES' (state, companies) {
    state.companies = companies;
  },
  'SET_COMPANY' (state, company) {
    state.company = company;
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
  },
  company: state => {
    return state.company;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
