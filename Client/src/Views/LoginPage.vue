<template>
  <div class="loginPage">
    <div class="loginPage-title">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" placeholder="Username" v-model="username"/>
        <input type="password" placeholder="Password" v-model="password"/>
<!--        <input type="submit" value="login">-->
        <button>Go!</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "@/router/axios.js"
import router from '../router/index'
import {useStore} from "vuex"
export default {
  name: "LoginPage",

  data() {
    return {
      username: "",
      password: "",
      user: null,
      store: useStore(),
    }
  },
  watch: {
    user(newVal){
      if (newVal != null){
        console.log(this.user)
        this.store.commit("setupUser", this.user.username)
        router.push({name:"Home"})
      }
    }
  },
  methods: {
    async login() {
      await axios.post('/users/login',{
        username: this.username,
        password: this.password,
      }).then(response => {
        this.user = response.data
      }).catch(error => alert(error))
    },

  }
}
</script>

<style scoped>

</style>