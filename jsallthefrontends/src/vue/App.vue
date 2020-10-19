<style>
@import "./App.css";
</style>

<template>
  <div>
    <h1>Hello from Vue!!</h1>
    <HelloWorld />
    <HelloWorld name="Alfred" />
    <HelloWorldCode />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorldCode from "./components/HelloWorldCode.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorldCode,
  },
};
</script>
