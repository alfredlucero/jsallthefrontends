import { LitElement, html } from 'lit';
import { state, property, customElement } from "lit/decorators.js";

@customElement("lit-counter")
export class LitCounter extends LitElement {
  @state()
  count = 0;

  render() {
    return html`
      <div>
        <button @click=${() => this.decrementCount()}>-</button>
        ${this.count}
        <button @click=${() => this.incrementCount()}>+</button>
      </div>
    `;
  }

  incrementCount() {
    this.count += 1;
  }

  decrementCount() {
    this.count -= 1;
  }
}