<template>
<div class="task-card my-style">
    <div>
        <h3>{{ model.title }}</h3>
        <p>{{ model.description }}</p>
    </div>
    <div>
        <button @click="emitOnDone" v-if="!model.status">&#10004;</button>
        <button @click="emitOnRemove" v-else>&#10006;</button>
    </div>
</div>
</template>

<script>

export default {
    props: {
        model: {
            required: true,
            default: {
                id: 0,
                title: 'Task title',
                description: 'Task description',
                status: false
            }
        }

    },
    setup(props, {emit}){
        const emitOnDone = () => {
            emit('onDone');
        }
        const emitOnRemove = () => {
            emit('onRemove');
        }
        return {
            emitOnDone, 
            emitOnRemove
        }
    }
}
</script>

<style>
.task-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h3 {
    font-weight: 500;
}
p {
    font-size: 12px;
}
</style>