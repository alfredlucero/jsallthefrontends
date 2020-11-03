<template>
  <Layout>
    <template v-slot:children>
      <h2 class="my-4">Vue Code Examples</h2>
      <p class="mb-6">
        Sometimes you want a quick peek of what it is like to implement something in
        another frontend framework. Let's dive into Vue 2 code examples! Oh yeah,
        everything under /vue in the main content area is built with Vue 2 by the way. You can even
        <a
          href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
          target="_blank"
          class="text-blue-500 hover:text-blue-700">download</a>
        and open up the Vue dev tools if you have it installed in your browser to
        view the components.
      </p>
      <div v-if="codePreviews.length > 0" class="grid grid-cols-1 md:grid-cols-3">
        <div  
          v-for="codePreview in codePreviews"
          :key="codePreview.name"
          class="my-2 md:mx-2">
          <CodePreviewCard
            :title="codePreview.title"
            :description="codePreview.description"
            :previewLink="codePreview.previewLink"
            v-bind:otherFrontendsAvailable="codePreview.otherFrontendsAvailable"
          />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreviewCard from "./CodePreviewCard.vue";

const codePreviews = [
  {
    title: "Hello World",
    description:
      "The tried and true baby steps into a new world - your first React component!",
    previewLink: "/hello-world",
    otherFrontendsAvailable: ["react", "svelte"],
  },
  {
    title: "Counter",
    description:
      "Learn the basics of state management and event handling with a counter.",
    previewLink: "/counter",
    otherFrontendsAvailable: ["react", "svelte"],
  },
  {
    title: "Todo List",
    description:
      "Render and manage a list of anything by looking at your favorite todo list example.",
    previewLink: "/todo-list",
    otherFrontendsAvailable: ["react", "svelte"],
  },
  {
    title: "Tabs",
    description: "Showing one piece of content at a time - learn composition and state with tabs.",
    previewLink: "/tabs",
    otherFrontendsAvailable: ["react", "svelte"],
  },
];

export default {
  name: "HomePage",
  components: {
    Layout,
    CodePreviewCard,
  },
  data() {
    return {
      codePreviews,
    };
  },
};
</script>
