<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Company Details {{ company.id }}</h1>
    <button @click="logCompany">Log Company {{ company.id }}</button>
  </div>
</template>

<script>
  import Company from './Company';
  import { eventBus } from '../../main';
  export default {
    props: ['companyDetails'],
    data: function(){
      return {
        company: this
      }
    },
    methods: {
      logCompany() {
        console.log();
      }
    },
    created() {
      eventBus.$on('companySelected', (company) => {
        this.company = company;
        // console.log(this.company);
      });
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
