<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/NavBar"
export default {
  name: 'App',
  components: {Navbar},
  data() {
    return {
      username: "Welcome"
    }
  },
  mounted() {
    this.username = this.$store.state.username
    console.log(`I am from app page: ${this.username}`)
  }
}
</script>

<style lang="scss">
body {
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#f4f6f9;
  min-height: 100vh;
  background-image: url("./assets/photo-1529257414772-1960b7bea4eb.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
