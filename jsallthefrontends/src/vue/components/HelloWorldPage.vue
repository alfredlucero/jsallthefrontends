<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-4">Hello World</h2>
      <p class="mb-6">
        The tried and true baby steps into a new world. Greetings from your
        first React component!
      </p>
      <CodePreview>
        <template v-slot:preview>
          <HelloWorld />
          <HelloWorld name="Alfred" />
        </template>
        <template v-slot:code>
          <HelloWorldCode />
        </template>
      </CodePreview>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreview from "./CodePreview.vue";
import HelloWorld from "./HelloWorld.vue";
import HelloWorldCode from "./HelloWorldCode.vue";

export default {
  name: "HelloWorldPage",
  components: {
    HelloWorld,
    HelloWorldCode,
    CodePreview,
    Layout,
  },
};
</script>
