<template>
  <div class="loginPage">
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div class = "loginPage-input">
        <input type="text" required v-model="username"/>
        <span></span>
        <label>Username</label>
      </div>
      <div class = "loginPage-input">
        <input type="password" required v-model="password"/>
        <span></span>
        <label>Password</label>
      </div>
      <button><a>Sign Up</a></button>
      <div class="signup_link">
        Already a member? <a><router-link to="/">Sign In</router-link></a>
      </div>
    </form>

  </div>
</template>

<script>
//importing
import axios from "@/router/axios.js"
import router from '../router/index'
import {useStore} from "vuex"
export default {
  name: "SignupPage",

  data() {
    return {
      username: "",
      password: "",

      store: useStore(),
    }
  },

  methods: {
    async signUp() {
      await axios.post('/users/',{
        username: this.username,
        password: this.password,
      }).then(response => {
        console.log(`After sign up: ${response.status}`)
        console.log(`the is: ${this.username}`)
        if(response.status == 201){
          this.$store.commit("setupUser",this.username)
          router.push({name:"Home"})
        }
      }).catch(error => alert(error))
    },

  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: ".AppleSystemUIFont",serif;
  background:linear-gradient(120deg, #2980b9, #8e44ad);
}
.loginPage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  h1 {
    text-align: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid silver;
  }
  form {
    padding: 0 40px;
    box-sizing: border-box;

    .loginPage-input {
      position: relative;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
      input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
      }
      label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: 0.5s ease;
      }
      span::before {
        content: '';
        position:absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2691d9;
        transition: 0.5s ease;
      }
      input:focus ~ label,
      input:valid ~ label{
        top: -5px;
        color: #2691d9;
      }
      input:focus ~ span::before,
      input:valid ~ span::before{
        width: 100%;
      }
    }
    button {

      width: 100%;
      height: 50px;
      border: 1px solid;
      border-radius: 25px;
      font-size: 16px;
      background: #2193b0;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      padding: 20px 60px;
      color: #fff;
      margin-top: 2rem;
      cursor: pointer;
      position: relative;
      transition: all 0.35s;
      outline: none;
      a {
        position: relative;
        z-index: 2;
        color: #fff;
        text-decoration: none;
        margin-bottom: 10px;
      }

    }
    button::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #6dd5ed;
      transition: all 0.35s;
      border-radius: 25px;
    }
    button:hover {
      color: #fff;
      border-radius: 25px;
    }
    button:hover:after {
      width: 100%;
      border-radius: 25px;
    }
    .signup_link {
      margin: 30px 0;
      text-align: center;
      font-size: 16px;
      color: #666666;
      a {
        color: #2691d9;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>