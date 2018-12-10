<template>

    <b-form @submit.prevent="$emit('processTodo', todo)">
      <b-form-group
        id="todo"
        label="Todo"
        label-for="todo"
      >
        <b-form-input
          :state="!$v.todo.text.$invalid"
          @input="$v.todo.$touch"
          autocomplete="off"
          id="todo"
          placeholder="Introduce la tarea"
          v-model="todo.text"
        >
        </b-form-input>
          <b-form-invalid-feedback
            id="todoInfo"
            v-if="$v.todo.$dirty"
          >Este campo es requerido y debe tener longitud mínima de 4</b-form-invalid-feedback>
      </b-form-group>
      <b-button
        :disabled="$v.todo.$invalid"
        type="submit"
        variant="primary"
      >{{ todoSubmit}}</b-button>
    </b-form>

</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  props: {
    todo: {
      type: Object,
      required: true
    },
    todoSubmit: {
      type: String,
      default: "Crear todo"
    }
  },
  validations: {
    // this.$v ->vuelidate // se definen los campos
    todo: {
      text: {
        required,
        minlength: minLength(4)
      }
    }
  }
};
</script>

<style scoped>
</style>