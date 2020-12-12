import React from 'react'

import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    fontSize: { control: 'number'},
    color: { control: 'color'},
    label: { control: 'text'}
  },
};

const Template = (args) => <Logo {...args} />

export const BigLogo = Template.bind({})
BigLogo.args = {
  fontSize: '48pt',
  color: '#C7C7C7',

}