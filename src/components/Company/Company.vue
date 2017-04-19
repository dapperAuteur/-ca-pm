<template>
  <div class="">
    Name: {{ company.name }}
      <router-link
        :to="{ name: 'Company',
              params: {
                id: company.id }}"
                class="btn btn-primary" @click.native="companySelected" tag="li">
        Company Id: {{ company.id }}
      </router-link>
  </div>
</template>

<script>
  import store from './../../store/store';
  import { state, mutations, getters, } from './../../store/modules/companies';

  export default {
    props: ['company', 'companyDetails'],
    data: function(){
      return {
        companyId: null
      }
    },
    methods: {
      companySelected() {
        this.$store.state.company = this.company;
        }
    },
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
