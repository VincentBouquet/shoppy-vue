<template>
  <div>
    <h1>Connection</h1>
    <p>
      <label for="email">eMail : </label>
      <input
          id="email"
          v-model="email"
          type="text"
          name="email"
      >
    </p>
    <p>
      <label for="password">Mot de passe : </label>
      <input
          id="password"
          v-model="password"
          type="text"
          name="password"
      >
    </p>
    <p>
      <router-link :to="{name: 'Register'}">Créer un compte</router-link>
    </p>
    <button @click="tryToConnect">Se connecter</button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return{
      email: 'william@codecolliders.com',
      password: 'password'
    };
  },
  methods: {
    async tryToConnect (){
      const response = await Axios.post("http://localhost:8000/api/login_check",{
        username: this.email,
        password: this.password
      })
      /*console.log(response.data.token)*/
      this.$store.commit("setToken", response.data.token)
      await this.$router.push({name: 'ProductIndex'})
    }
  }
}
</script>

<style scoped>

</style>
