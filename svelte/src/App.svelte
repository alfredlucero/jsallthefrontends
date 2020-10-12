<script>
  import Counter from "./components/Counter.svelte";
  import Props from "./components/Props.svelte";
  import Conditionals from "./components/Conditionals.svelte";
  import Loops from "./components/Loops.svelte";

  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <h2>Counter</h2>
  <Counter />
  <h2>Props</h2>
  <Props answer={42} />
  <h2>Conditionals</h2>
  <Conditionals />
  <h2>Loops</h2>
  <Loops />
</main>
