<script>
  import { count } from "./stores.js";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";
  // import { onDestroy } from "svelte";

  // let count_value;

  // const unsubscribe = count.subscribe((value) => {
  //   count_value = value;
  // });

  // Results in memory leak without onDestroy or you can do $count
  // onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
