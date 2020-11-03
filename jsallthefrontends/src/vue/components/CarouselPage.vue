<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-4">Carousel</h2>
      <p class="mb-6">
        Check out some transitions and cycle through a list of images in a carousel.
      </p>
      <CodePreview>
        <template v-slot:preview>
          <Carousel :slides="slides" :currentSlide="currentSlide" />
        </template>
        <template v-slot:code>
          <CarouselCode />
        </template>
      </CodePreview>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreview from "./CodePreview.vue";
import Carousel from "./Carousel.vue";
import CarouselCode from "./CarouselCode.vue";

export default {
  name: "CarouselPage",
  components: {
    Layout,
    CodePreview,
    Carousel,
    CarouselCode,
  },
  data() {
    return {
      slides: [
        "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/03/27/21/07/animal-1284286_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/08/04/06/29/pets-4383143_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/05/11/08/11/pet-3389729_1280.jpg"
      ],
      initialActiveSlide: 0,
    };
  },
};
</script>
