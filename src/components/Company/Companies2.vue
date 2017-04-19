<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <app-company
          v-for="company in companies"
          :company="company">
        </app-company>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p v-if="company">
        Please Select A Company
      </p>
      <p v-else>
        Company: {{ company.id }}
        {{ company.website }}
        <img :src="company.logo.url" class="img-thumbnail"/>
      </p>
      <button @click="logCompany">Log Company</button>
    </div>
  </div>
</template>

<script>
  import Company from './Company';
  import { eventBus } from '../../main';
  export default {
    data: function(){
      return {
        company: null
      }
    },
    components: {
      appCompany: Company,
    },
    computed: {
      companies() {
        return this.$store.getters.companies;
      }
    },
    methods: {
      logCompany(data) {
        console.log(data);
      }
    },
    created() {
      eventBus.$on('companySelected', (company) => {
        this.company = company;
      });
    }
  }
</script>
