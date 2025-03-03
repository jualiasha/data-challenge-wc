import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/button/data-button';
import './components/slider/data-slider';
import './components/number-input/data-number-input';

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Array })
  public range: number[] = [0, 100];

  @property({ type: Number })
  private error: string = '';

  @property({ type: Number })
  public number: number = 50;

  render() {
    return html`
      <h2>Slider play</h2>
      <data-slider
        .range=${this.range}
        .value=${this.number}
        @slider-change=${this.handleChange}
      ></data-slider>
      <data-number-input
        .value=${this.number}
        .range=${this.range}
        @number-input-change=${this.handleChange}
        @number-input-error=${this.handleError}
      ></data-number-input>
      <data-button
        .variant=${'outlined'}
        .theme=${'secondary'}
        @click=${this.handleClear}
        >Clear</data-button
      >
      <data-button
        .disabled=${this.error.length > 0}
        .variant=${'contained'}
        .theme=${'primary'}
        @click=${this.handleSubmit}
        >Submit</data-button
      >
      <h2>Button play</h2>
      <data-button>Click me</data-button>
      <data-button .disabled=${true}>Click me</data-button>
      <data-button>
        <span slot="icon">&#128077;</span>
        Click me</data-button
      >
    `;
  }

  handleError(event: CustomEvent) {
    this.error = event.detail.error;
  }

  handleChange = (event: CustomEvent) => {
    this.number = Number(event.detail.value);
  };

  handleClear() {
    this.number = 50;
  }

  handleSubmit() {
    alert(`Submitted Value: ${this.number}`);
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
