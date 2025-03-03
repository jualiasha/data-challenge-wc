import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import styles from './numberInput-styles.ts';
import { property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import '../button/data-button.ts';
import '../input/data-input.ts';
import { sliderRangeIndexes } from '../../common/consts.ts';

export class NumberInput extends LitElement {
  @property({ type: Number })
  public value: number = 0;

  @property({ type: String })
  private error: string = '';

  public range: number[] = [];

  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('error')) {
      this.dispatchEvent(
        new CustomEvent('number-input-error', {
          detail: { error: this.error },
        }),
      );
    }
  }

  protected render(): TemplateResult {
    return html`
      <div class="number-input">
        <data-button @click=${() => this.handleValueChange(this.value, -1)}
          >-</data-button
        >
        <data-input
          .value=${this.value}
          @input-change=${(e: CustomEvent) =>
            this.handleValueChange(Number(e.detail.value), 0)}
        ></data-input>
        ${when(
          this.error,
          () => html`<span class="error">${this.error}</span>`,
        )}
        <data-button @click=${() => this.handleValueChange(this.value, 1)}
          >+</data-button
        >
      </div>
    `;
  }

  handleValueChange(value: number, delta: number) {
    const min = this.range[sliderRangeIndexes.minRange];
    const max = this.range[sliderRangeIndexes.maxRange];
    const newValue = value + delta;
    if (newValue < min || isNaN(value)) {
      this.error = `Value cannot be lower than ${min}`;
      return;
    }

    if (newValue > max) {
      this.error = `Value cannot be higher than ${max}`;
      return;
    }
    this.value = newValue;
    this.sendChangeEvent(this.value);
    this.error = '';
  }

  sendChangeEvent(value: number) {
    const options = {
      detail: {
        value,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('number-input-change', options));
  }

  /** Component own styles */
  public static styles = styles;
}
