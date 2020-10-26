<template>
  <Code v-bind:code="helloWorldCode" language="javascript" />
</template>

<script>
import Code from "./Code.vue";

export default {
  name: "HelloWorldCode",
  components: {
    Code,
  },
  data() {
    return {
      helloWorldCode: 
`<template>
  <div>Hello {{ name }}!</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      default: "World",
    },
  },
};
<\/script>`,
    };
  },
};
</script>
