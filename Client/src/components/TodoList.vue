<template>
  <div class="todo-list">
    <div class="todo-list_title">
      {{title}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ['title'],
  setup(){}
}
</script>

<style scoped>
.todo-list {
  padding: 10px 20px;
  margin:0 10px;
  border: 1px solid #EEE;
  width: 300px;
  min-height: 100vh;
}
.todo-list_title {
  font-weight: bold;
  padding: 10px;
  font-size:20px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #EEE;
}
</style>