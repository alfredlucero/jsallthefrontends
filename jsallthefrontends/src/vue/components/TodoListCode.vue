<template>
  <Code v-bind:code="todoListCode" language="javascript" />
</template>

<script>
import Code from "./Code.vue";

export default {
  name: "TodoListCode",
  components: {
    Code,
  },
  data() {
    return {
      todoListCode:
`<template>
  <div class="w-full">
    <div class="flex justify-start items-end mb-4">
      <div class="w-3/4 mr-3">
        <label class="block text-gray-700 font-bold mb-2" for="todoInput">
          Todo
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="todoInput"
          type="text"
          placeholder="What do you have to do today?"
          v-model="todoInput"
        />
      </div>
      <button
        type="button"
        class="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-3 rounded"
        v-on:click="addTodo"
      >
        Add
      </button>
    </div>

    <div v-if="todos.length > 0">
      <div
        class="flex justify-between items-center p-4 rounded bg-gray-100 shadow-md my-2"
        v-for="(todo, todoId) in todos"
        :key="todoId"
      >
        <p
          v-bind:class="['w-3/4', 'break-words', todo.done ? 'line-through' : '']"
        >
          {{ todo.title }}
        </p>
        <div class="w-1/4 flex justify-end ml-2">
          <button
            type="button"
            class="text-sm bg-green-200 text-green-600 hover:text-green-800 py-2 px-3 rounded mr-2 flex justify-center items-center"
            v-on:click="toggleDoneTodo(todoId)"
          >
            <i class="fas fa-check-square"></i>
          </button>
          <button
            type="button"
            class="text-sm bg-red-200 text-red-600 hover:text-red-800 py-2 px-3 rounded flex justify-center items-center"
            v-on:click="deleteTodo(todoId)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    // initialTodos prop looks like [{ title: "Some todo", done: false}, ...]
    initialTodos: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      todos: this.initialTodos,
      todoInput: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.todoInput,
        done: false,
      };
      const newTodos = [...this.todos, newTodo];
      this.todos = newTodos;
      this.todoInput = "";
    },
    toggleDoneTodo(todoId) {
      const newTodos = this.todos.map((todo, currentTodoId) => {
        if (currentTodoId === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
      this.todos = newTodos;
    },
    deleteTodo(todoId) {
      const newTodos = this.todos.filter(
        (todo, currentTodoId) => currentTodoId !== todoId
      );
      this.todos = newTodos;
    },
  },
};
<\/script>
`
    };
  },
};
</script>
