import { DataInput } from './Input.ts';

if (!customElements.get('data-input')) {
  customElements.define('data-input', DataInput);
}

declare global {
  interface HTMLElementTagNameMap {
    readonly 'data-input': DataInput;
  }
}
