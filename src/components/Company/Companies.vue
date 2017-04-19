<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-company
        v-for="company in companies"
        :company="company">
      </app-company>
    </ul>
  </div>
</template>

<script>
  import Company from './Company';
  import CompanyDetails from './CompanyDetails';
  export default {
    components: {
      appCompany: Company,
      appCompanyDetails: CompanyDetails
    },
    computed: {
      companies() {
        return this.$store.getters.companies;
      }
    }
  }
</script>
