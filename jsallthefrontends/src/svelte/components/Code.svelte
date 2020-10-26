<script>
  import Prism from "prismjs";
  import { onMount } from "svelte";
  import "./Code.css";

  export let code = "";
  export let language = "javascript";

  onMount(async () => {
    Prism.highlightAll();
  });
</script>

<pre
  class="rounded-b-md lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md lg:rounded-br-md bg-gray-800 scrollbar-none m-0 p-4 text-base">
  <code
    class="language-{language} inline-block scrolling-touch">{code}</code>
</pre>
