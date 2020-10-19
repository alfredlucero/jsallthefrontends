<style scoped>
/* TODO: add code wrapper styles */
</style>

<template>
  <div class="code-wrapper">
    <pre>
      <code :class="languageClass">{{code}}</code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
import "./Code.css";

export default {
  name: "Code",
  props: {
    code: String,
    language: String,
  },
  data() {
    return {
      code: "",
      language: "javascript",
    };
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
