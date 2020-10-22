<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import HomePage from "./components/HomePage.svelte";
  import HelloWorldPage from "./components/HelloWorldPage.svelte";
  import "./App.css";

  const routes = {
    "/": HomePage,
    "/hello-world": HelloWorldPage,
    "*": HomePage,
  };
</script>

<style>
</style>

<h1>SVELTE</h1>
<a href="https://svelte.dev/" target="_blank">Docs</a>

<div>
  <Router {routes} />
</div>
