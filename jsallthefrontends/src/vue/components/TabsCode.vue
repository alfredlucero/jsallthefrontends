<template>
  <Code :code="tabsCode" language="javascript" />
</template>

<script>
import Code from "./Code.vue";

export default {
  name: "TabsCode",
  components: {
    Code,
  },
  data() {
    return {
      tabsCode:
`<template>
  <div class="flex flex-col">
    <nav class="flex flex-row bg-white">
      <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          type="button"
          v-for="tab in tabs"
          :key="tab"
          v-bind:class="{
            'text-blue-500 border-b-2 font-medium border-blue-500': activeTab === tab
          }"
          v-on:click="switchTab(tab)"
        >
          <slot :name="tabNavSlotName(tab)">{{ tab }}</slot>
      </button>
    </nav>
    <div class="p-6 bg-gray-100">
      <slot :name="tabContentSlotName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    initialActiveTab: {
      type: String,
      default: "",
    },
    tabs: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      activeTab: this.initialActiveTab,
    };
  },
  methods: {
    tabNavSlotName(tabName) {
      return \`tab-nav-$\{tabName}\`;
    },

    selectTab(tabName) {
      this.activeTab = tabName;
    },
  },
  computed: {
    tabContentSlotName() {
      return \`tab-content-$\{this.activeTab}\`
    },
  },
};
<\/script>
`,
    };
  },
};
</script>
