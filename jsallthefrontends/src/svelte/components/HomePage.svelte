<script>
  import Layout from "./Layout.svelte";
  import CodePreviewCard from "./CodePreviewCard.svelte";
</script>

<Layout>
  <h2 class="mb-2">Svelte Code Examples</h2>
  <p class="mb-6">
    Sometimes you want a quick peek of what it is like to implement something in
    another frontend framework. Let's dive into Svelte 3 code examples! You can
    even open up the Svelte dev tools if you have it installed in your browser
    to view the components.
  </p>
  <CodePreviewCard
    title="Hello World"
    description="The tried and true baby steps into a new world. Greetings from your first Svelte component!"
    previewLink="/hello-world"
    otherFrontendsAvailable={['react', 'vue']} />
</Layout>
