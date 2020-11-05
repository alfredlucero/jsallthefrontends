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
    {
      title: "Todo List",
      description:
        "Render and manage a list of anything by looking at your favorite todo list example.",
      previewLink: "/todo-list",
      otherFrontendsAvailable: ["react", "vue"],
    },
    {
      title: "Tabs",
      description:
        "Showing one piece of content at a time - learn composition and state with tabs.",
      previewLink: "/tabs",
      otherFrontendsAvailable: ["react", "vue"],
    },
    {
      title: "Carousel",
      description:
        "Check out some transitions and cycle through a list of images in a carousel.",
      previewLink: "/carousel",
      otherFrontendsAvailable: ["react", "vue"],
    },
  ];
</script>

<Layout>
  <h2 class="my-4">Svelte Code Examples</h2>
  <p class="mb-6">
    Sometimes you want a quick peek of what it is like to implement something in
    another frontend framework. Let's dive into Svelte 3 code examples! Oh yeah,
    everything under /svelte in the main content area is built with Svelte by
    the way. You can check out the
    <a
      href="https://github.com/alfredlucero/jsallthefrontends/tree/main/jsallthefrontends/src/svelte"
      target="_blank"
      class="text-blue-500 hover:text-blue-700">source code</a>
    here if you're curious.
  </p>
  {#if codePreviews.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-3">
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
