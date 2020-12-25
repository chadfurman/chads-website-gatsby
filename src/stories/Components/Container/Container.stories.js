import React from 'react'

import {Container as ContainerComponent} from './Container'

export default {
  title: 'Components/Container',
  component: ContainerComponent,
}

export const Container = (args) => <ContainerComponent {...args} />