<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation_logo">
          Bobbbbbbb
        </div>
      </router-link>
      <div class="navigation_user">
        @Tianhui Zhou
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

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
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deepskyblue;

    .navigation_logo {
      font-weight: bold;
      font-size: 25px;
    }
    .navigation_user {
      font-weight: bold;
    }
  }
}
</style>
