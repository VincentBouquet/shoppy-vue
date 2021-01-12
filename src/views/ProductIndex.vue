<template>
<div>
  <router-link
      v-for="product in $store.state.productList"
      :to="{name: 'Product', params: {id:product.id}}"
  >
    <ul>{{ product.name }}</ul>
  </router-link>
  <router-link :to="{name: 'Login'}" v-if="$store.state.token === null">Connectez vous</router-link>
</div>
</template>

<script>
export default {
name: "ProductIndex",
  mounted() {
    this.$store.dispatch("fetchProductList")
  }
}
</script>

<style scoped>

</style>
