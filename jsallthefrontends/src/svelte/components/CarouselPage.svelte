<script>
  import Layout from "./Layout.svelte";
  import CodePreview from "./CodePreview.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselCode from "./CarouselCode.svelte";

  const slides = [
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
      slideText: "Corgi on railroad",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2016/03/27/21/07/animal-1284286_1280.jpg",
      slideText: "Corgi walkin",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2019/08/04/06/29/pets-4383143_1280.jpg",
      slideText: "Corgi on tren",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2018/05/11/08/11/pet-3389729_1280.jpg",
      slideText: "Corgi hoppin",
    },
  ];
</script>

<Layout>
  <h2 class="mb-4">Carousel</h2>
  <p class="mb-6">
    Check out some transitions and cycle through a list of images in a carousel.
  </p>
  <CodePreview>
    <div slot="preview">
      <Carousel {slides} initialActiveSlide={0} autoNextSlideInterval={5000} />
    </div>
    <div slot="code">
      <CarouselCode />
    </div>
  </CodePreview>
</Layout>
