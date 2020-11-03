<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import HomePage from "./components/HomePage.svelte";
  import HelloWorldPage from "./components/HelloWorldPage.svelte";
  import CounterPage from "./components/CounterPage.svelte";
  import TodoListPage from "./components/TodoListPage.svelte";
  import TabsPage from "./components/TabsPage.svelte";
  import "./App.css";

  const routes = {
    "/": HomePage,
    "/hello-world": HelloWorldPage,
    "/counter": CounterPage,
    "/todo-list": TodoListPage,
    "/tabs": TabsPage,
    "*": HomePage,
  };
</script>

<div class="mt-16">
  <Router {routes} />
</div>
