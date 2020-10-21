<script>
  import HelloWorld from "./components/HelloWorld.svelte";
  import HelloWorldCode from "./components/HelloWorldCode.svelte";
  import "./App.css";
  console.log("over here in svelte!");
</script>

<style>
</style>

<h1>
  Hello from a Svelte file
  <HelloWorld />
  <HelloWorld name="Alfred" />
  <HelloWorldCode />
</h1>
