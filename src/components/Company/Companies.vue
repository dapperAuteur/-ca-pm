<template>
  <div>
    <app-company v-for="company in companies" :company="company"></app-company>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Company from './Company';
  export default {
    components: {
      appCompany: Company
    },
    computed: {
      companies() {
        return this.$store.getters.companies;
      }
    }
  }
</script>
