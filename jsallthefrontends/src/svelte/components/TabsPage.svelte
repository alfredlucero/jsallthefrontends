<script>
  import Layout from "./Layout.svelte";
  import CodePreview from "./CodePreview.svelte";
  import Tabs from "./Tabs.svelte";
  import TabsCode from "./TabsCode.svelte";
  import TabNav1 from "./TabNav1.svelte";
  import TabNav2 from "./TabNav2.svelte";
  import TabNav3 from "./TabNav3.svelte";
  import TabContent1 from "./TabContent1.svelte";
  import TabContent2 from "./TabContent2.svelte";
  import TabContent3 from "./TabContent3.svelte";

  const tabs = [
    {
      tabName: "Tab 1",
      tabNavComponent: TabNav1,
      tabContentComponent: TabContent1,
    },
    {
      tabName: "Tab 2",
      tabNavComponent: TabNav2,
      tabContentComponent: TabContent2,
    },
    {
      tabName: "Tab 3",
      tabNavComponent: TabNav3,
      tabContentComponent: TabContent3,
    },
  ];

  const initialActiveTab = tabs[0];
</script>

<Layout>
  <h2 class="mb-4">Tabs</h2>
  <p class="mb-6">
    Clicking a button and showing one piece of content at a time. Learn
    composition, conditionals, and state management with tabs.
  </p>
  <CodePreview>
    <div slot="preview">
      <Tabs {initialActiveTab} {tabs} />
    </div>
    <div slot="code">
      <TabsCode />
    </div>
  </CodePreview>
</Layout>
