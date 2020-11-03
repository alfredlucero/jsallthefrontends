<template>
  <div class="flex flex-row items-center">
    <div class="mx-2">
      <button type="button" @click="prevSlide">Prev</button>
    </div>
    <div>
      <img :src="currentSlideImg" width="200" height="200" />
    </div>
    <div class="mx-2">
      <button type="button" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    slides: {
      type: Array,
      default: [],
    },
    initialActiveSlide: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeSlide: this.initialActiveSlide,
    };
  },
  computed: {
    currentSlideImg() {
      return this.slides[this.activeSlide];
    },
  },
  methods: {
    nextSlide() {
      let newActiveSlide = this.activeSlide + 1;

      this.activeSlide = newActiveSlide >= this.slides.length ? 0 : newActiveSlide;
    },
    prevSlide() {
      let newActiveSlide = this.activeSlide - 1;

      this.activeSlide = newActiveSlide < 0 ? this.slides.length - 1 : newActiveSlide;
    },
  },
  mounted() {
    // Automatically go to next slide over certain duration
  },
};
</script>
