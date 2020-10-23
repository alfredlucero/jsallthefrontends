import Vue from "vue";
import VueRouter from "vue-router";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import { router } from "./router";

Vue.use(VueRouter);
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue",
    render: (r) => r(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
