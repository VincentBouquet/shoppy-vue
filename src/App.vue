<template>
  <div id="app">
    <div id="nav">
      <home/>
      <router-link :to="{name: 'ProductIndex'}" v-if="$store.state.token">Liste des produits</router-link>
      <a v-if="$store.state.token"> - </a>
      <router-link :to="{name: 'Cart'}" v-if="$store.state.token">Panier</router-link>
      <a v-if="$store.state.token"> - </a>
      <button @click="unlink" v-if="$store.state.token">Se déconnecter</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "App",
  components: {Home},
  methods: {
    unlink() {
      this.$store.commit("setToken", null)
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
