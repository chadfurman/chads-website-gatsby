import React from 'react'

import { Sidebar } from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color'},
    opacity: { control: 'number'},
    width: { control: 'string'},
  },
};

const Template = (args) => <Sidebar {...args} />

export const MySidebar = Template.bind({})
MySidebar.args = {
  backgroundColor: '#FFFFFF',
  opacity: '.1',
  width: '100px'
}
