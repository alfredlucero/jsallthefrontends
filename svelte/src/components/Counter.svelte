<script>
  let count = 0;
  // Reactive values/statements
  $: console.log(`the count is ${count}`);

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked
  {count}
  {count === 1 ? 'time' : 'times'}
</button>
