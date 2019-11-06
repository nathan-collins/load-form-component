/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../load-form-component.js';

export default {
  title: 'LoadFormComponent|Playground',
  component: 'load-form-component',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <load-form-component></load-form-component>
`;

export const manualContent = () => html`
  <load-form-component>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </load-form-component>
`;
