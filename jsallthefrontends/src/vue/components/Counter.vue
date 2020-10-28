<template>
  <div>
    <div class="text-color-700 font-bold text-6xl text-center mb-4">
      {{ count }}
    </div>

    <div>
      <button
        type="button"
        class="bg-red-200 text-red-600 hover:text-red-800 py-2 px-4 rounded mr-4"
        v-on:click="decrement"
      >
        Decrement
      </button>
      <button
        type="button"
        class="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-4 rounded"
        v-on:click="increment"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    },
  },
};
</script>
