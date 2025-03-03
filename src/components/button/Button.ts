import { LitElement, html, TemplateResult } from 'lit';
import styles from './button-styles.ts';
import { ButtonSize, ButtonTheme, ButtonVariant } from './types.ts';
import { property } from 'lit/decorators.js';

export class DataButton extends LitElement {
  public theme: ButtonTheme = 'primary';
  public size: ButtonSize = 'medium';
  public variant: ButtonVariant = 'contained';
  @property({ type: Boolean })
  public disabled: boolean = false;

  /** Component own styles */
  public static styles = styles;

  protected render(): TemplateResult {
    return html`
      <button
        class="${this.size} ${this.theme} ${this.variant} ${this.disabled
          ? 'disabled'
          : ''}"
        type="button"
        .disabled=${this.disabled}
      >
        <span class="icon"><slot name="icon"></slot></span>
        <slot></slot>
      </button>
    `;
  }
}
