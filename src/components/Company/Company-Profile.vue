<template>
  <div id='companyProfile'>
    <h1>Company Profile Page</h1>
    <app-comp :compProf="compProf"></app-comp>
  </div>
</template>

<script>
  import Companies from './Companies';
  export default {
    name: 'companyProfile',
    components: {
      appComp: CompProf
    },
    // data: function(){
    //   return {
    //     companyProf: 'earl'
    //   }
    // },
    computed: {
      companies() {
        return this.$store.getters.companies;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
