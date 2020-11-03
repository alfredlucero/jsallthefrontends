<template>
  <Layout>
    <template v-slot:children>
      <h2 class="mb-4">Tabs</h2>
      <p class="mb-6">
        Clicking a button and showing one piece of content at a time. Learn composition, conditionals, and state management with tabs.
      </p>
      <CodePreview>
        <template v-slot:preview>
          <Tabs :tabs="tabs" :initialActiveTab="initialActiveTab">
            <template slot="tab-nav-tab1">
              Tab 1
            </template>
            <template slot="tab-content-tab1">
              Tab 1 Content
            </template>
            <template slot="tab-nav-tab2">
              Tab 2
            </template>
            <template slot="tab-content-tab2">
              Tab 2 Content
            </template>
            <template slot="tab-nav-tab3">
              Tab 3
            </template>
            <template slot="tab-content-tab3">
              Tab 3 Content
            </template>
          </Tabs>
        </template>
        <template v-slot:code>
          <TabsCode />
        </template>
      </CodePreview>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import CodePreview from "./CodePreview.vue";
import Tabs from "./Tabs.vue";
import TabsCode from "./TabsCode.vue";

export default {
  name: "TabsPage",
  components: {
    Layout,
    CodePreview,
    Tabs,
    TabsCode,
  },
  data() {
    return {
      initialActiveTab: "tab1",
      tabs: ["tab1", "tab2", "tab3"],
    };
  },
};
</script>
