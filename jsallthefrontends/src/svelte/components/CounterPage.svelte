<script>
  import Layout from "./Layout.svelte";
  import CodePreview from "./CodePreview.svelte";
  import Counter from "./Counter.svelte";
  import CounterCode from "./CounterCode.svelte";
</script>

<Layout>
  <h2 class="mb-4">Counter</h2>
  <p class="mb-6">
    Learning how to count is like learning how to say your ABCs -
    quintessential. Check out the basics of state management and event handling
    with a counter.
  </p>
  <CodePreview>
    <div slot="preview">
      <Counter />
    </div>
    <div slot="code">
      <CounterCode />
    </div>
  </CodePreview>
</Layout>
