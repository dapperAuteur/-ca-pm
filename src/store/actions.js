import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.axios.get('data.json')
    .then(response => response.data)
    .then(data => {
      if (data) {
        const companies = data.companies;
        const funds = data.funds;
        const companyPortfolio = data.companyPortfolio;

        const portfolio = {
          companyPortfolio,
          funds
        };

        commit('SET_COMPANIES', companies);
        commit('SET_PORTFOLIO', portfolio);

      }
    });
};
