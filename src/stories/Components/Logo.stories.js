import React from 'react'

import { Logo as LogoComponent } from './Logo'

export default {
  title: 'Components/Logo',
  component: LogoComponent,
  argTypes: {
    fontSize: { control: 'number'},
    color: { control: 'color'},
    label: { control: 'text'}
  },
};

const Template = (args) => <LogoComponent {...args} />

export const Logo = Template.bind({})
