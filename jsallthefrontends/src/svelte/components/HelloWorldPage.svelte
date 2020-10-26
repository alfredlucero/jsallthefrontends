<script>
  import Layout from "./Layout.svelte";
  import CodePreview from "./CodePreview.svelte";
  import HelloWorld from "./HelloWorld.svelte";
  import HelloWorldCode from "./HelloWorldCode.svelte";
</script>

<Layout>
  <h2 class="mb-4">Hello World</h2>
  <p class="mb-6">
    The tried and true baby steps into a new world. Greetings from your first
    Svelte component!
  </p>
  <CodePreview>
    <div slot="preview">
      <HelloWorld />
      <HelloWorld name="Alfred" />
    </div>
    <div slot="code">
      <HelloWorldCode />
    </div>
  </CodePreview>
</Layout>
