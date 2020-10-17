import { registerApplication, start } from "single-spa";

registerApplication({
  name: "react",
  app: () => import("./src/react/main.app.js"),
  activeWhen: "/react",
});

registerApplication({
  name: "vue",
  app: () => import("./src/vue/vue.app.js"),
  activeWhen: "/vue",
});

registerApplication({
  name: "svelte",
  app: () => import("./src/svelte/svelte.app.js"),
  activeWhen: "/svelte",
});

start();
