<script>
  // initialTodos prop looks like [{ title: "Some todo", done: false}, ...]
  export let initialTodos = [];

  let todoInput = "";
  let todos = initialTodos;

  const addTodo = () => {
    const newTodo = {
      title: todoInput,
      done: false,
    };
    const newTodos = [...todos, newTodo];
    todos = newTodos;
    todoInput = "";
  };

  const toggleDoneTodo = (todoId) => {
    const newTodos = todos.map((todo, currentTodoId) => {
      if (currentTodoId === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
    todos = newTodos;
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(
      (todo, currentTodoId) => currentTodoId !== todoId
    );
    todos = newTodos;
  };
</script>

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
        bind:value={todoInput} />
    </div>
    <button
      type="button"
      class="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-3 rounded"
      on:click={addTodo}>
      Add
    </button>
  </div>

  {#if todos.length > 0}
    <div>
      {#each todos as todo, todoId (todoId)}
        <div
          class="flex justify-between items-center p-4 rounded bg-gray-100 shadow-md my-2">
          <p class="w-3/4 break-words" class:line-through={todo.done}>
            {todo.title}
          </p>
          <div class="w-1/4 flex justify-end ml-2">
            <button
              type="button"
              class="text-sm bg-green-200 text-green-600 hover:text-green-800 py-2 px-3 rounded mr-2 flex justify-center items-center"
              on:click={toggleDoneTodo(todoId)}>
              <i class="fas fa-check-square" />
            </button>
            <button
              type="button"
              class="text-sm bg-red-200 text-red-600 hover:text-red-800 py-2 px-3 rounded flex justify-center items-center"
              on:click={deleteTodo(todoId)}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
