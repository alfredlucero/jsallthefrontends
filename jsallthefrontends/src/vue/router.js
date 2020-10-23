import VueRouter from "vue-router";
import HelloWorldPage from "./components/HelloWorldPage.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/hello-world", component: HelloWorldPage },
  { path: "*", component: HomePage },
];

export const router = new VueRouter({
  routes,
  mode: "hash",
  base: "/vue",
});
