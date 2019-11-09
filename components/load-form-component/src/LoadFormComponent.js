import { LitElement, html, css, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import LazyLoad from '../../lazy-load-component/LazyLoadComponent.js';
import { FormComponentMixin } from '../../form-component-provider/FormComponentProviderMixin.js';

export class LoadFormComponent extends FormComponentProviderMixin(LitElement) {
  static get properties() {
    return {
      team: { type: String },
    }
  }
  
  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Hello</h1>   
    `;
  }

  static get styles() {
  }
}
