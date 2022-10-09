import { LitElement, html } from 'lit';

const tagName = 'hello-world';

export class HelloWorld extends LitElement {
  render() {
    return html` <p>Hello World!<br />Hello Alfred!</p> `;
  }
}

customElements.define(tagName, HelloWorld);