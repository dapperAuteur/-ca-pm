<template>
  <div class="">
    Name: {{ company.name }}
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
  import { eventBus } from '../../main';
  export default {
    props: ['company', 'companyDetails'],
    data: function(){
      return {
        companyId: null
      }
    },
    methods: {
      companySelected() {
        console.log(this.company);
        eventBus.$emit('companySelected', this.company)
        }
    },
    created() {
      eventBus.$on('companySelected', (company) => {
      });
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
