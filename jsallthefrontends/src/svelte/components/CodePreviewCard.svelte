<script>
  import { link } from "svelte-spa-router";

  const otherFrontendsAvailableMap = {
    react: {
      previewLinkPrefix: "/react",
      previewName: "React",
    },
    vue: {
      previewLinkPrefix: "/vue",
      previewName: "Vue",
    },
  };

  export let title;
  export let description;
  export let previewLink;
  export let otherFrontendsAvailable = [];

  $: otherFrontendsPreviewLinks = otherFrontendsAvailable
    .filter(
      (otherFrontendAvailable) =>
        otherFrontendsAvailableMap[otherFrontendAvailable]
    )
    .map((validOtherFrontend) => {
      const { previewName, previewLinkPrefix } = otherFrontendsAvailableMap[
        validOtherFrontend
      ];
      return {
        name: previewName,
        link: `${previewLinkPrefix}${previewLink}`,
      };
    });
</script>

<div
  class="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out duration-700 transform hover:scale-105">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-600">{description}</p>
  </div>
  <div class="flex justify-center mb-4 mx-4">
    <a
      href={previewLink}
      use:link
      class="bg-blue-200 rounded px-4 py-2 text-base font-semibold text-blue-600 hover:text-blue-800"><i
        class="fas fa-eye" />
      View</a>
  </div>

  {#if otherFrontendsPreviewLinks.length > 0}
    <div class="mt-6">
      <p class="px-6 text-sm text-gray-600">
        See it implemented in some other way!
      </p>
      <div class="px-6 py-2">
        {#each otherFrontendsPreviewLinks as otherFrontendsPreviewLink (otherFrontendsPreviewLink.name)}
          <a
            class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-600 hover:text-gray-800 mr-2 mb-2"
            href={otherFrontendsPreviewLink.link}>
            {otherFrontendsPreviewLink.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>
