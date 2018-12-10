<template>
  <b-row class="mb-2">
    <b-col cols="2">{{ todo.text }}</b-col>
    <b-col cols="1">{{ todo.done }}</b-col>
    <b-col>
      <b-button
        @click="goToUpdateTodo"
        variant="primary"
      >Editar</b-button>
      <b-button
        @click="updateTodoStatus"
        class="ml-2"
        variant="warning"
      >Estado</b-button>
      <b-button
        @click="removeTodo"
        class="ml-2"
        variant="danger"
      >Eliminar</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      _updateTodoStatus: "todos/updateTodoStatus",
      _removeTodo: "todos/removeTodo"
    }),
    ...mapMutations("todos", ["setTodo"]),
    goToUpdateTodo() {
      this.setTodo(this.todo);
      this.$router.push({
        name: "todos-update",
        params: { id: this.todo.id }
      });
    },
    updateTodoStatus() {
      this._updateTodoStatus(this.todo);
    },
    removeTodo() {
      this._removeTodo(this.todo.id);
    }
  }
};
</script>

<style scoped>
</style>