<script>
  import Code from "./Code.svelte";

  const counterCode = `<script>
  let count = 0;

  const increment = () => {
    count = count + 1;
  };

  const decrement = () => {
    count = count - 1;
  };
<\/script>

<div>
  <div class="text-color-700 font-bold text-6xl text-center mb-4">{count}</div>

  <div>
    <button
      type="button"
      class="bg-red-200 text-red-600 hover:text-red-800 py-2 px-4 rounded mr-4"
      on:click={decrement}>
      Decrement
    </button>
    <button
      type="button"
      class="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-4 rounded"
      on:click={increment}>
      Increment
    </button>
  </div>
</div>
`;
</script>

<Code code={counterCode} language="javascript" />
