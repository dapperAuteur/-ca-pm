<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <router-link class="button" :to="{ name: 'Company', params: { id: company.id } }"> {{ company.id }} </router-link>
      <h1>{{ company.name }} <img :src ="company.logo.url" class="img-thumbnail"/></h1>
      <div class="panel-heading">
        <h3 class="panel-title">
          Company Details
          <small>{{ company.website }} (ID: {{ company.id }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{ danger: insufficientFunds }"
                  >
        </div>
        <div class="pull-right">
          <button
                  class="btn btn-success"
                  @click="buyCompany"
                  :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
                  >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['company'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.company.price > this.funds;
      }
    },
    methods: {
      buyCompany() {
        const order = {
          companyId: this.company.id,
          companyPrice: this.company.price,
          quantity: this.quantity
        };
        console.log(order);
        this.$store.dispatch('buyCompany', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
