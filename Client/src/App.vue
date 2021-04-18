<template>
  <div class="app">
    <TodoList title="Todo" @drop="dropItem($event, '1')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList1" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>

    <TodoList title="In Progress" @drop="dropItem($event, '2')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList2" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>

    <TodoList title="Done" @drop="dropItem($event, '3')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList3" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>
  </div>
</template>

<script>

import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import axios from "./router/axios";

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem,
  },
  data() {
    return{
      tasks:[]
    }
  },
  watch: {
    tasks(newVal){

    }
  },
  methods: {
    dragItem(event, item) {
      console.log(item)
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemID', item._id)
    },
    dropItem(event, list) {
      console.log(`this is list param: ${list}`)
      const itemID = event.dataTransfer.getData('itemID')
      console.log(`This is itemID: ${itemID}`)
      const item = this.tasks.find((item) => item._id == itemID)
      console.log(`this is item: ${item}`)
      item.status = list
    },
    async fetchData (){
      //e.preventDefault();
      await axios.get('/tasks', {
        params: {
          username: "bobby123"
        }
      }).then(response=> {
        console.log(`before change: ${this.tasks}`)
        console.log(response.data)
        this.tasks = response.data;
        console.log(`Right after change: ${this.tasks}`)
      }).catch(error => console.log(error))
      },
    async updateData() {
      
    }
  },
  computed: {
    getList1(){
      return this.tasks.filter((item) => item.status === '1')
    },
    getList2(){
      return this.tasks.filter((item) => item.status === '2')
    },
    getList3(){
      return this.tasks.filter((item) => item.status === '3')
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
</style>
