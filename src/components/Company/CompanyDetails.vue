<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Company Details {{ companyDetails.name }}
    {{ companyDetails.id }} </h1>
    <!-- <button @click="logCompany">Log Company {{ company.id }}</button> -->
  </div>
</template>

<script>
  import Company from './Company';
  import { state, mutations, getters, } from './../../store/modules/companies';
  export default {
    computed: {
      companyDetails() {
        return this.$store.state.company;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
