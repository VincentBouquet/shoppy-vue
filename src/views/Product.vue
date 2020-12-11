<template>
  <div>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <h3>Ref: </h3><p>{{ product.reference }}</p>
      <h3>Descrition: </h3><p v-html="product.description"/>
      <h3>Prix: </h3><p>{{ product.price }}</p>
      <h3>Quantité en stock: </h3><p>{{ product.stock }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
