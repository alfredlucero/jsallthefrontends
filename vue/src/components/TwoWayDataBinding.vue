<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "TwoWayDataBinding",
  data() {
    return {
      message: "Two way data binding",
    };
  },
};
</script>
