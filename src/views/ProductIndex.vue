<template>
<div>
  <router-link
      v-for="product in $store.state.productList"
      :to="{name: 'Product', params: {id:product.id}}"
  >
    <ul>{{ product.name }}</ul>
  </router-link>
</div>
</template>

<script>
export default {
name: "ProductIndex"
}
</script>

<style scoped>

</style>
