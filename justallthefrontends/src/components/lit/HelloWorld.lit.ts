// import { LitElement, html } from 'lit';
// import { customElement, property } from 'lit/decorators'

// @customElement("hello-world")
// export class HelloWorld extends LitElement {
//   @property()
//   name = "World";

//   render() {
//     return html`<p>Hello ${this.name}!</p>`;
//   }
// }
import { LitElement, html } from 'lit';
import { property } from "lit/decorators.js";

export class HelloWorld extends LitElement {
  @property()
  name = 'World';

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}

customElements.define('hello-world', HelloWorld);