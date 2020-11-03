<script>
  import Code from "./Code.svelte";

  const tabsCode = `<script>
  // initialActiveTab looks like { tabName: "", tabNavComponent: TabNavComponent, tabContentComponent: TabContentComponent }
  export let initialActiveTab = {
    tabName: "",
    tabNavComponent: null,
    tabContentComponent: null,
  };
  // tabs structure looks like [{ tabName: "", tabNavComponent: TabNavComponent, tabContentComponent: TabContentComponent }, ...]
  export let tabs = [];

  let activeTab = initialActiveTab;

  const selectTab = (tab) => {
    activeTab = tab;
  };
<\/script>

<div class="flex flex-col">
  <nav class="flex flex-row bg-white">
    {#each tabs as tab, tabId (tabId)}
      <button
        class={activeTab.tabName === tab.tabName ? 'text-blue-500 border-b-2 font-medium border-blue-500 py-4 px-6 block hover:text-blue-500 focus:outline-none' : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'}
        type="button"
        on:click={selectTab(tab)}>
        <svelte:component this={tab.tabNavComponent} />
      </button>
    {/each}
  </nav>
  <div class="p-6 bg-gray-100">
    <svelte:component this={activeTab.tabContentComponent} />
  </div>
</div>`;
</script>

<Code code={tabsCode} language="javascript" />
