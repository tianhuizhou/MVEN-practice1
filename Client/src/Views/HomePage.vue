<template>
  <div class="home">
    <TodoList title="Todo" list='1' @drop="dropItem($event, '1')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList1" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>

    <TodoList title="In Progress" list='2' @drop="dropItem($event, '2')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList2" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>

    <TodoList title="Done" list='3' @drop="dropItem($event, '3')" @dragover.prevent @dragenter.prevent>
      <TodoItem v-for="task in getList3" :key="task.id" :item="task" draggable="true" @dragstart="dragItem($event, task)"> </TodoItem>
    </TodoList>
  </div>
</template>

<script>

import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import axios from "@/router/axios.js"
import router from '../router/index'

export default {
  name: 'HomePage',
  components: {
    TodoList,
    TodoItem,
  },
  data() {
    return{
      tasks:[],
      user: null,
      //store: useStore(),
    }
  },
  watch: {
    tasks(newVal, oldVal) {
      console.log("I am watch tasks ....")
      console.log(newVal.length, oldVal.length)
    }
  },
  methods: {
    dragItem(event, item) {
      console.log(`I am from drag and test: ${this.user}`)
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemID', item._id)
    },
    dropItem(event, list) {
      const itemID = event.dataTransfer.getData('itemID')
      const item = this.tasks.find((item) => item._id == itemID)
      if (item.status !== list) { //status has been changed
        item.status = list
        this.updateData(item)
      }
    },
    async fetchData (){
      //e.preventDefault();
      if(this.user!=null){
      await axios.get('/tasks', {
        params: {
          username: this.user
        }
      }).then(response=> {
        this.tasks = response.data;
      }).catch(error => console.log(error))
      }
    },
    async updateData(task) {
      await axios.post('/tasks/update', {
        _id: task._id,
        title: task.title,
        description: task.description,
        date: task.date,
        status: task.status,
      })
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
    console.log(this.$store.state.user)
    this.user = this.$store.state.user
    if(this.user == null) router.push({name:"Login"})
    else this.fetchData()
  },

}
</script>

<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
</style>