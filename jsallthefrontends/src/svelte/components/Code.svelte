<script>
  import Prism from "prismjs";
  import { onMount } from "svelte/index.js";
  import "./Code.css";

  export let code = "";
  export let language = "javascript";

  onMount(async () => {
    Prism.highlightAll();
  });
</script>

<style>
</style>

<div class="code-wrapper">
  <pre>
    <code class="language-{language}">{code}</code>
  </pre>
</div>
