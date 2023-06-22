<template>
<div class="task-input tasks-list">
    <input v-model="title" type="text" placeholder="Название">
    <input v-model="description" type="text" placeholder="Описание">
    <button @click="onAddTask">Добавить</button>
</div>
</template>

<script>
import {ref} from 'vue'

export default {
    
    setup(props, { emit }){
        const title = ref('')
        const description = ref('')
        const onAddTask = () => {
            emit('onAddTask', {title: title.value, description: description.value}) 
        }
        return {
            title, 
            description,
            onAddTask
        }
    },
}
</script>

<style scoped>
    .task-input {
        margin: 10px 0;
    }
</style>