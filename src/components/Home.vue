<template>
  <div>
    <h1>Trade or View Your Portfolio</h1>
    <h6>You May Save & Load Your Data</h6>
    <h6>Click On 'End Day' To Begin A New Day!</h6>
    <hr />
    <p>
      Your Funds: {{ funds | currency }}
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>
