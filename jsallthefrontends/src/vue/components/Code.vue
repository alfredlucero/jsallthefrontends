<template>
  <pre class="rounded-b-md lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md lg:rounded-br-md bg-gray-800 scrollbar-none m-0 p-4 text-base">
    <code :class="[languageClass, 'inline-block', 'scrolling-touch']">{{code}}</code>
  </pre>
</template>

<script>
import Prism from "prismjs";
import "./Code.css";

export default {
  name: "Code",
  props: {
    code: { type: String, default: "" },
    language: { type: String, default: "javascript" },
  },
  computed: {
    languageClass() {
      return {
        [`language-${this.language}`]: true,
      };
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>
