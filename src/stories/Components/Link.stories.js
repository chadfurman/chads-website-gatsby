import React from 'react';

import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    color: { control: 'color' },
    label: { control: 'text' },
  },
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  color: '#C7C7C7'
};
