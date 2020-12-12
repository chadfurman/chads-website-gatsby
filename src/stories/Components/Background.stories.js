import React from 'react'

import {Background} from './Background'
import backgroundImage from './background.png'

export default {
  title: 'Components/Background',
  component: Background,
}

export const Basic = (args) => <Background image={backgroundImage} {...args} />