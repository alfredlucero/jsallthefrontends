import { registerApplication, start } from "single-spa";

registerApplication({
  name: "nav",
  app: () => import("./src/nav/nav.app.js"),
  activeWhen: "",
});

registerApplication({
  name: "home",
  app: () => import("./src/home/home.app.js"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "react",
  app: () => import("./src/react/react.app.js"),
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
