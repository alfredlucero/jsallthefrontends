<template>
  <div id="computed">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // a computed getter that is cached based on reactive dependencies
    // can use a method if you don't want caching and want to re-compute on every render
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
</script>
