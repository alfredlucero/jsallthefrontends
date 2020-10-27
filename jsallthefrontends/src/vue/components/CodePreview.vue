<template>
  <div class="flex flex-col lg:flex-row">
    <div class="rounded-t-md lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none overflow-hidden bg-blue-100 p-4 flex-1 flex justify-center items-center">
      <div><slot name="preview"></slot></div>
    </div>
    <div class="flex-1 w-full lg:w-1/2"><slot name="code"></slot></div>
  </div>
</template>

<script>
export default {
  name: "CodePreview",
};
</script>
