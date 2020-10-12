<style scoped>
#tabs {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

<template>
  <div id="tabs">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import TabHome from "./TabHome.vue";
import TabPosts from "./TabPosts.vue";
import TabArchive from "./TabArchive.vue";

export default {
  name: "Tabs",
  components: {
    TabHome,
    TabPosts,
    TabArchive,
  },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
    };
  },
  computed: {
    currentTabComponent() {
      return "Tab" + this.currentTab;
    },
  },
};
</script>
