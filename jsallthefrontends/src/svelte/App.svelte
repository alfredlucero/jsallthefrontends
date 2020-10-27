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

<div class="mt-16">
  <Router {routes} />
</div>
