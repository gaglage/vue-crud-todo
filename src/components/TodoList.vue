<template>
  <div v-if="todos.length">
    <todo-item
      :key="todo.id"
      :todo="todo"
      v-for="todo in todos"
    ></todo-item>
  </div>
  <b-alert
    show
    v-else
    variant="info"
  >No hay todos</b-alert>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>