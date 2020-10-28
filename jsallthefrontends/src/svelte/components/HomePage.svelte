<script>
  import Layout from "./Layout.svelte";
  import CodePreviewCard from "./CodePreviewCard.svelte";

  const codePreviews = [
    {
      title: "Hello World",
      description:
        "The tried and true baby steps into a new world - your first React component!",
      previewLink: "/hello-world",
      otherFrontendsAvailable: ["react", "vue"],
    },
    {
      title: "Counter",
      description:
        "Learn the basics of state management and event handling with a counter.",
      previewLink: "/counter",
      otherFrontendsAvailable: ["react", "vue"],
    },
  ];
</script>

<Layout>
  <h2 class="my-4">Svelte Code Examples</h2>
  <p class="mb-6">
    Sometimes you want a quick peek of what it is like to implement something in
    another frontend framework. Let's dive into Svelte 3 code examples! You can
    even open up the Svelte dev tools if you have it installed in your browser
    to view the components.
  </p>
  {#if codePreviews.length > 0}
    <div class="flex justify-start flex-col md:flex-row">
      {#each codePreviews as codePreview (codePreviews.name)}
        <div class="my-2 md:mx-2">
          <CodePreviewCard
            title={codePreview.title}
            description={codePreview.description}
            previewLink={codePreview.previewLink}
            otherFrontendsAvailable={codePreview.otherFrontendsAvailable} />
        </div>
      {/each}
    </div>
  {/if}
</Layout>
