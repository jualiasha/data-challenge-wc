import { NumberInput } from './NumberInput.ts';

if (!customElements.get('data-number-input')) {
  customElements.define('data-number-input', NumberInput);
}

declare global {
  interface HTMLElementTagNameMap {
    readonly 'data-number-input': NumberInput;
  }
}
