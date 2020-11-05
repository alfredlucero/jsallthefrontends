<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  // Slides look like [{ slideImg: "", slideText: "" }, ...]
  export let slides = [];
  export let initialActiveSlide = 0;
  export let autoNextSlideInterval = 5000;

  let activeSlide = initialActiveSlide;
  let autoNextSlideTimer = null;

  onMount(() => {
    startAutoNextSlideTimer();
  });

  const startAutoNextSlideTimer = () => {
    autoNextSlideTimer = setTimeout(nextSlide, autoNextSlideInterval);
  };
  const resetAutoNextSlideTimer = () => {
    clearTimeout(autoNextSlideTimer);
    startAutoNextSlideTimer();
  };

  const nextSlide = () => {
    let newActiveSlide = activeSlide + 1;

    activeSlide = newActiveSlide >= slides.length ? 0 : newActiveSlide;
    resetAutoNextSlideTimer();
  };
  const prevSlide = () => {
    let newActiveSlide = activeSlide - 1;

    activeSlide = newActiveSlide < 0 ? slides.length - 1 : newActiveSlide;
    resetAutoNextSlideTimer();
  };

  $: currentSlideImg = slides[activeSlide].slideImg;
  $: currentSlideText = slides[activeSlide].slideText;
  $: currentSlideImgAltText = `Image of ${slides[activeSlide].slideText}`;
</script>

<style>
  .slide {
    grid-column: 1/2;
    grid-row: 1/2;
  }
</style>

<div class="flex flex-row justify-center items-center">
  <div class="mx-2">
    <button
      class="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
      type="button"
      on:click={prevSlide}><i class="fas fa-arrow-left" /></button>
  </div>

  <div class="grid">
    {#each [slides[activeSlide]] as currentSlide (activeSlide)}
      <!-- We resort to fading in and out as it is difficult to match the Vue transition out-in and sliding right/left depending on the button clicked. -->
      <!-- We also do a grid column trick so the in/out images take up the same place rather than jumping between two rows -->
      <div class="flex flex-col shadow-md slide" transition:fade>
        <img
          src={currentSlideImg}
          alt={currentSlideImgAltText}
          class="w-56 h-56 object-fit rounded-t-md" />
        <div class="p-4 text-indigo-600 rounded-b-md bg-white text-center">
          {currentSlideText}
        </div>
      </div>
    {/each}
  </div>

  <div class="mx-2">
    <button
      class="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
      type="button"
      on:click={nextSlide}><i class="fas fa-arrow-right" /></button>
  </div>
</div>
