<template>
  <nav>
    <div class="navigation-container">
      <div class="navigation_logo">
        TaskTracker
      </div>
      <div class="navigation_user">
        {{username}}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      username: "Welcome"
    }
  },
  watch: {

  },
  methods: {
    changeUsername(){
      this.username = this.store.state.user
    }
  },
  updated() {
    this.$store.state.user(()=>{
      this.username = this.$store.state.user
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5%;
  background-color: #2b69a2;
  margin-bottom: 20px;
  .navigation_logo {
    font-weight: bold;
    font-size: 25px;
    color: #96b4d0
  }
  .navigation_logo:hover {
    color: white;
  }

  .navigation_user {
    font-weight: bold;
  }
}
</style>