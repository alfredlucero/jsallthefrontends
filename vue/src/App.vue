<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <h2>Bind Attribute</h2>
    <BindAttribute />
    <h2>Event Handling</h2>
    <EventHandling />
    <h2>Two Way Data Binding</h2>
    <TwoWayDataBinding />
    <h2>Conditional Rendering</h2>
    <ConditionalRendering />
    <h2>List Rendering</h2>
    <ListRendering />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BindAttribute from "./components/BindAttribute.vue";
import EventHandling from "./components/EventHandling.vue";
import TwoWayDataBinding from "./components/TwoWayDataBinding.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ListRendering from "./components/ListRendering.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BindAttribute,
    EventHandling,
    TwoWayDataBinding,
    ConditionalRendering,
    ListRendering,
  },
};
</script>
