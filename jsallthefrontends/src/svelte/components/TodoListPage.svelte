<script>
  import Layout from "./Layout.svelte";
  import CodePreview from "./CodePreview.svelte";
  import TodoList from "./TodoList.svelte";
  import TodoListCode from "./TodoListCode.svelte";

  const initialTodos = [
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
  ];
</script>

<Layout>
  <h2 class="mb-4">Todo List</h2>
  <p class="mb-6">
    We often deal with more than one thing at a time in life. Learning how to
    manage a list of anything is important.
  </p>
  <CodePreview>
    <div slot="preview">
      <TodoList {initialTodos} />
    </div>
    <div slot="code">
      <TodoListCode />
    </div>
  </CodePreview>
</Layout>
