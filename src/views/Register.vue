<template>
  <div>
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
    <button @click="addRegister">Valider</button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Register",
  data() {
    return{
      email: '',
      password: ''
    };
  },
  methods: {
    async addRegister (){
      await Axios.post("http://localhost:8000/api/register",{
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
