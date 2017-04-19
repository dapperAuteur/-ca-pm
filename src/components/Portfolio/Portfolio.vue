<template>
  <div class="col-sm-6 col-md-4">
    <app-company v-for="company in companies" :company="company"></app-company>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex';
  import Company from './Company.vue';

  export default {
    computed: {
      ...mapGetters({
          companies: 'companyPortfolio'
      })
    },
    components: {
      appCompany: Company
    }
  }
</script>
