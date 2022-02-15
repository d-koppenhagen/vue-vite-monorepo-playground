import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import MyButton from '../MyButton.vue';

describe('MyButton', () => {
  it('renders properly', () => {
    const wrapper = mount(MyButton, { props: { title: 'My Button Text' } });
    expect(wrapper.text()).toContain('My Button Text');
  });
});
