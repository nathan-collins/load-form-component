import CachedTask from '../cached-task/CachedTask.js';

const FormComponentProvider = (superclass) => class extends superclass {
  constructor() {
    super();
  }

  static get properties() {
    return {
      team: {
        type: String,
      }
    }
  }

  render() {
    return html`
      <${this.component()}></${this.component()}>
    `;
  }

  component() {
    return html`
      
    `;
  }
}
