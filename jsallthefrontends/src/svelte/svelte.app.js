import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

function domElementGetter() {
  return document.getElementById("svelte");
}

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter,
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
