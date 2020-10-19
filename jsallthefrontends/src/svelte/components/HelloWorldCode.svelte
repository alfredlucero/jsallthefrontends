<script>
  import Code from "./Code.svelte";

  const helloWorldCode = `<script>
  export let name = "World";
<\/script>

<div>Hello {name}!</div>`;
</script>

<Code code={helloWorldCode} language="javascript" />
