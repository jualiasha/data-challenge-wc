import { LitElement, html, TemplateResult } from 'lit';
import styles from './input-styles.ts';
import { property } from 'lit/decorators.js';

export class DataInput extends LitElement {
  @property({ type: Number })
  public value: number | null = null;

  /** Component own styles */
  public static styles = styles;

  protected render(): TemplateResult {
    return html`
      <label for="data-input"></label>
      <input
        id="data-input"
        type="text"
        .value=${this.value}
        @input=${this.handleInputChange}
      />
    `;
  }

  handleInputChange(e: Event) {
    const options = {
      detail: {
        value: e.target?.value ? e.target.value : this.value,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('input-change', options));
  }
}
