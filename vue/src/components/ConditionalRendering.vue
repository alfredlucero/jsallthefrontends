<template>
  <div id="conditional-rendering">
    <button v-on:click="toggleSeen">Toggle Seen</button>
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    toggleSeen() {
      this.seen = !this.seen;
    },
  },
};
</script>
