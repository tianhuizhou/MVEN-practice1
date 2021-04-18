<template>
  <div class="todo-item">
    {{ item.title }}
    {{ item.description }}
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['item'],
  setup(){

    return {

    }
  }
}
</script>

<style scoped>
.todo-item {
  padding: 10px 20px;
  border: 1px solid #DDD;
}
.todo-item:hover {
  cursor: move;
}
</style>