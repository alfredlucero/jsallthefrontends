<template>
  <Code code="carouselCode" language="javascript" />
</template>

<script>
import Code from "./Code.vue";

export default {
  name: "CarouselCode",
  components: {
    Code,
  },
  data() {
    return {
      carouselCode: `// Code`,
    };
  },
};
</script>
