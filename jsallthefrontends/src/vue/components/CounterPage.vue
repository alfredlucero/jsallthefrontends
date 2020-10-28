<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-4">Counter</h2>
      <p class="mb-6">
        Learning how to count is like learning how to say your ABCs -
        quintessential. Check out the basics of state management and event
        handling with a counter.
      </p>
      <CodePreview>
        <template v-slot:preview>
          <Counter />
        </template>
        <template v-slot:code>
          <CounterCode />
        </template>
      </CodePreview>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreview from "./CodePreview.vue";
import Counter from "./Counter.vue";
import CounterCode from "./CounterCode.vue";

export default {
  name: "CounterPage",
  components: {
    Layout,
    CodePreview,
    Counter,
    CounterCode,
  },
};
</script>
