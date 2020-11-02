import VueRouter from "vue-router";
import HelloWorldPage from "./components/HelloWorldPage.vue";
import HomePage from "./components/HomePage.vue";
import CounterPage from "./components/CounterPage.vue";
import TodoListPage from "./components/TodoListPage.vue";
import TabsPage from "./components/TabsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/hello-world", component: HelloWorldPage },
  { path: "/counter", component: CounterPage },
  { path: "/todo-list", component: TodoListPage },
  { path: "/tabs", component: TabsPage },
  { path: "*", component: HomePage },
];

export const router = new VueRouter({
  routes,
  mode: "history",
  base: "/vue",
});
