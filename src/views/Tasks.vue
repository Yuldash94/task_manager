<template>
  <div class="tasks">
    <TaskInput @onAddTask="addTask"></TaskInput>
    <div class="task-list">

        <TaskCard v-for="item in taskList" :key="item.id" @onRemove="removeTask(item.id)" @onDone="setDoneTask(item.id)"  :model="item"></TaskCard>

    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import TaskInput from "../components/TaskInput.vue"
import { ref, onMounted } from "vue";
export default {
  components: {
    TaskCard,
    TaskInput,
  },
  setup() {
    const taskList = ref([{id: 0, title: 'Список', description: 'Написать список задач на сегодня', status: false}])
    onMounted(() => {
      if (localStorage.getItem('taskList')) {
        taskList.value = JSON.parse(localStorage.getItem('taskList'))
      }
    } )
    const setToLocalStorage = (list) => {
      localStorage.setItem('taskList', JSON.stringify(list))
    }
    const addTask = ({title, description}) => {
      if (title === '' || description === '') {
          alert('Заполните все поля')
        return
      }
      taskList.value = [...taskList.value, {id: taskList.value.length === 0 ? 0 : taskList.value[taskList.value.length - 1].id + 1 , title: title, description: description, status: false}]
      setToLocalStorage(taskList.value)
    }

    const setDoneTask = (id) => {
      taskList.value = taskList.value.map(task => {
          if(task.id === id) {
            task.status = true
          }
        return task
      })
      setToLocalStorage(taskList.value)
    }
    const removeTask = (id) => {
      taskList.value = taskList.value.filter(task => task.id !== id)
      setToLocalStorage(taskList.value)
    }
    return {
      taskList,
      addTask,
      setDoneTask,
      removeTask
    }
  }
}

</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
