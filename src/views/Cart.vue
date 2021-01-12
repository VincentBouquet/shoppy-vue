<template>
  <div>
    <ul v-for="line in $store.state.cart.orderLines">{{ line.product.name }} | Quantité : {{ line.quantity }}</ul>
  </div>

</template>

<script>
export default {
  name: "Cart",
  mounted() {
    this.$store.dispatch("fetchCart")
    console.log(this.$store.state.cart)
  }
}
</script>

<style scoped>

</style>
