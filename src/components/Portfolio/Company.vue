<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <h1>Company Details</h1>
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ company.name }}
          <small>{{ company.website }} (Price: ${{ company.price }} | Quantity: {{ company.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{ danger: insufficientQuantity }"
                  >
        </div>
        <div class="pull-right">
          <button
                  class="btn btn-success"
                  @click="sellCompany"
                  :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)"
                  >{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell' }}</button>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['company'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      quantity() {
        return this.company.quantity;
      },
      insufficientQuantity() {
        return this.quantity > this.company.quantity;
      }
    },
    methods: {
      ...mapActions({
          placeSellOrder: 'sellCompany'
      }),
      sellCompany() {
        const order = {
          companyId: this.company.id,
          companyPrice: this.company.price,
          quantity: this.quantity
        };
        console.log(order);
        this.placeSellOrder(order);
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
