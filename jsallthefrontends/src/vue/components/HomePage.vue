<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-2">Vue Code Examples</h2>
      <p class="mb-6">
        Sometimes you want a quick peek of what it is like to implement
        something in another frontend framework. Let's dive into Vue2 code
        examples! You can even open up the Vue dev tools if you have it
        installed in your browser to view the components.
      </p>
      <CodePreviewCard
        title="Hello World"
        description="The tried and true baby steps into a new world. Greetings from your first Vue component!"
        previewLink="/hello-world"
        v-bind:otherFrontendsAvailable="['react', 'svelte']"
      />
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreviewCard from "./CodePreviewCard.vue";

export default {
  name: "HomePage",
  components: {
    Layout,
    CodePreviewCard,
  },
};
</script>
