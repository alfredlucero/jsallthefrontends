<template>
  <div class="flex flex-row justify-center items-center">
    <div class="mx-2">
      <button class="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline" type="button" @click="prevSlide"><i class="fas fa-arrow-left"></i></button>
    </div>
    
    <transition-group v-bind:name="slideTransition" tag="div" mode="in-out">
      <div class="flex flex-col shadow-md" v-for="i in [activeSlide]" :key="i">
        <img :src="currentSlideImg" class="w-56 h-56 object-fit rounded-t-md" />
        <div class="p-4 text-indigo-600 rounded-b-md bg-white text-center">
          {{ currentSlideText }}
        </div>
      </div>
    </transition-group>
    <div class="mx-2">
      <button class="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline" type="button" @click="nextSlide"><i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<style>
  .slide-right-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-right-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    position: absolute;
  }
  .slide-right-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-right-fade-enter {
    transform: translateX(-20px);
    opacity: 0;
    position: absolute;
  }

  .slide-left-fade-leave-active {
    transition: all .8s ease;
  }
  .slide-left-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
    position: absolute;
  }
  .slide-left-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-left-fade-enter {
    transform: translateX(20px);
    opacity: 0;
    position: absolute;
  }
</style>

<script>
export default {
  name: "Carousel",
  props: {
    // Slides look like [{ slideImg: "", slideText: "" }, ...]
    slides: {
      type: Array,
      default: [],
    },
    initialActiveSlide: {
      type: Number,
      default: 0,
    },
    autoNextSlideInterval: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      activeSlide: this.initialActiveSlide,
      slideTransition: "slide-right-fade",
      autoNextSlideTimer: null,
    };
  },
  mounted() {
    this.startAutoNextSlideTimer();
  },
  methods: {
    startAutoNextSlideTimer() {
      this.autoNextSlideTimer = setTimeout(this.nextSlide, this.autoNextSlideInterval);
    },
    resetAutoNextSlideTimer() {
      clearTimeout(this.autoNextSlideTimer);
      this.startAutoNextSlideTimer();
    },
    nextSlide() {
      let newActiveSlide = this.activeSlide + 1;

      this.activeSlide = newActiveSlide >= this.slides.length ? 0 : newActiveSlide;
      this.slideTransition = "slide-right-fade";
      this.resetAutoNextSlideTimer();
    },
    prevSlide() {
      let newActiveSlide = this.activeSlide - 1;

      this.activeSlide = newActiveSlide < 0 ? this.slides.length - 1 : newActiveSlide;
      this.slideTransition = "slide-left-fade";
      this.resetAutoNextSlideTimer();
    },
  },
  computed: {
    currentSlideImg() {
      return this.slides[this.activeSlide].slideImg;
    },
    currentSlideText() {
      return this.slides[this.activeSlide].slideText;
    },
  },
};
</script>
