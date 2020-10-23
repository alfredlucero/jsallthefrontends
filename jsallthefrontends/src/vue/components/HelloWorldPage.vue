<template>
  <div>
    <HelloWorld />
    <HelloWorld name="Alfred" />
    <HelloWorldCode />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import HelloWorldCode from "./HelloWorldCode.vue";

export default {
  name: "HelloWorldPage",
  components: {
    HelloWorld,
    HelloWorldCode,
  },
};
</script>
