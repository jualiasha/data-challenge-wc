import { Slider } from './Slider.ts';

if (!customElements.get('data-slider')) {
  customElements.define('data-slider', Slider);
}

declare global {
  interface HTMLElementTagNameMap {
    readonly 'data-slider': Slider;
  }
}
