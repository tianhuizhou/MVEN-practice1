<template>
  <div class="todo-item" >
    <div class="todo-item_title">
      {{item.title}}
    </div>
    <div class="todo-item_description">
      {{item.description}}
    </div>
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

<style lang="scss" scoped>
.todo-item {
  padding: 10px 20px;
  border: 1px solid #DDD;
  background-color: #f4f6f9;
  display: grid;
  justify-items: left;
  .todo-item_title {
    font-size: 20px;
    font-weight: bold;
    color: #2767cf;
  }
  .todo-item_description {
    font-size: 12px;
    font-weight: normal;
  }
}
.todo-item:hover {
  cursor: pointer;
  background-color: slategray;
}
</style>