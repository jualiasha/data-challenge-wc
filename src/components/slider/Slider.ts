import { LitElement, html, TemplateResult } from 'lit';
import styles from './slider-styles.ts';
import { property } from 'lit/decorators.js';
import { sliderRangeIndexes } from '../../common/consts.ts';

export class Slider extends LitElement {
  @property({ type: Number })
  public value: number | null = null;

  public range: number[] = [];

  protected render(): TemplateResult {
    return html`
      <div class="slider-container">
        <input
          type="range"
          .min=${this.range[sliderRangeIndexes.minRange]}
          .max=${this.range[sliderRangeIndexes.maxRange]}
          .value=${this.value}
          aria-valuemin=${this.range[sliderRangeIndexes.minRange]}
          aria-valuemax=${this.range[sliderRangeIndexes.maxRange]}
          aria-valuenow=${this.value}
          class="slider"
          id="myRange"
          @input=${this.sendSliderChangeEvent}
        />
      </div>
    `;
  }

  private sendSliderChangeEvent(event: Event) {
    const options = {
      detail: {
        value: event.target?.value,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('slider-change', options));
  }
  /** Component own styles */
  public static styles = styles;
}
