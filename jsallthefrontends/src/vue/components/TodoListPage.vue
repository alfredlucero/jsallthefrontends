<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-4">Todo List</h2>
      <p class="mb-6">
        We often deal with more than one thing at a time in life. Learning how
        to manage a list of anything is important.
      </p>
      <CodePreview>
        <template v-slot:preview>
          <TodoList v-bind:initialTodos="initialTodos" />
        </template>
        <template v-slot:code>
          <TodoListCode />
        </template>
      </CodePreview>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreview from "./CodePreview.vue";
import TodoList from "./TodoList.vue";
import TodoListCode from "./TodoListCode.vue";

export default {
  name: "TodoListPage",
  components: {
    Layout,
    CodePreview,
    TodoList,
    TodoListCode,
  },
  data() {
    return {
      initialTodos: [
        {
          title: "Review homework",
          done: false,
        },
        {
          title: "Take out the trash",
          done: false,
        },
        {
          title: "Cook dinner",
          done: false,
        },
      ],
    };
  },
};
</script>
