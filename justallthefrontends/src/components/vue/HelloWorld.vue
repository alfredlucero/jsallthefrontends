<script lang="ts">
export default {
	props: {
    name: {
      default: "World"
    }
  }
};
</script>

<template>
  <p>Hello {{name}}!</p>
</template>