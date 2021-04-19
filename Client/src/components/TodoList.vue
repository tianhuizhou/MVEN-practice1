<template>
  <div class="todo-list">
    <div class="todo-list_title"> {{title}} </div>
    <slot></slot>
    <button class="out-btn" v-on:click="createNewCard" v-if="!addcard">+ Add another card</button>
    <form class="form-ctn" v-if="addcard" @submit.prevent="submitNewTask">
      <div class="form-ctn_title">
        <input required type="text" v-model="newTitle" placeholder="Title"/>
      </div>
      <div class="form-ctn_content">
        <textarea required v-model="newDescription" placeholder="Enter a note...">testing</textarea>
      </div>
      <div class="form-ctn_btn">
        <button class="add-btn" type="submit">Add</button>
        <button class="cancel-btn" type="button" v-on:click="closeNewCard">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "@/router/axios.js"
import router from '../router/index'
export default {
  name: "TodoList",
  props: ['title', 'list'],
  data(){
    return {
      addcard: false,
      newTitle: "",
      newDescription: "",
    }
  },
  methods: {
    createNewCard(){
      this.addcard = true;
    },
    closeNewCard(){
      this.addcard = false;
    },
    async submitNewTask(){
      await axios.post('/tasks/', {
        username: this.$store.state.user,
        title: this.newTitle,
        description: this.newDescription,
        date: new Date(),
        status: this.list
      }).then(router.push({name:"Home"}))

      // should raise a emit to parent(homepage), and update the view locally.
      // no need to reload page

    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  border-radius: 5px;
  padding: 10px 20px;
  margin:0 10px;
  border: 1px solid #EEE;
  width: 300px;
  min-height: 50vh;
  background:#ebecf0;
  .out-btn {

    border: none;
    font-size: 16px;
    padding: 10px 55px;
    background: #ebecf0;
  }
  .out-btn:hover {
    background:gray;
    border-radius: 5px;
    padding: 10px 55px;
  }
}
.todo-list_title {
  font-weight: bold;
  padding: 10px;
  font-size:20px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #EEE;
}
.form-ctn {
  border-radius: 10px;
  background: #fff;
  .form-ctn_title input {
    margin: 10px;
    width: 85%;
    border: none;
    outline: none;
  }
  .form-ctn_content textarea {
    width: 90%;
    border-color: #e8e9ee;
    border-radius: 10px;
    resize: vertical;
    min-height: 10vh;
  }
  .form-ctn_btn {
    display: flex;
    justify-content: space-between;

    .add-btn {
      background: #54a158;
      color: white;
      border-radius: 15px;
      border: 0.5px solid #54a158;
      width: 42%;
      margin-left: 15px;
      font-size: 16px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .cancel-btn {
      background:#fafbfc;
      color: black;
      border-radius: 15px;
      border: 0.5px solid grey;
      width: 42%;
      margin-right: 15px;
      font-size: 16px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }

}
</style>