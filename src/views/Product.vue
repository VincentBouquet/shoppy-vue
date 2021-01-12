<template>
  <div>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <h3>Ref: </h3><p>{{ product.reference }}</p>
      <h3>Descrition: </h3><p v-html="product.description"/>
      <h3>Prix: </h3><p>{{ product.price }}</p>
      <h3>Quantité en stock: </h3><p>{{ product.stock }}</p>
    </div>
    <button @click="addToCart" v-if="$store.state.token">Ajouter au panier</button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Product",
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id)
    /*console.log(this.$store.state.userLogin)
    console.log(this.product.id)*/
  },
  methods: {
    async addToCart() {
      await Axios.put("http://localhost:8000/api/add-to-cart",{
        username: this.$store.state.userLogin,
        product: this.product.id
      },{headers:
            {'Authorization': this.$store.state.token}})
    }
  }
}
</script>

<style scoped>

</style>
