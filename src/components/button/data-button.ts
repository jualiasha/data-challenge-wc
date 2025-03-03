import { DataButton } from './Button.ts';

if (!customElements.get('data-button')) {
  customElements.define('data-button', DataButton);
}

declare global {
  interface HTMLElementTagNameMap {
    readonly 'data-button': DataButton;
  }
}
