import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Text } from './index'

export default {
  component: Text,
  title: 'Example/Text'
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = () => <Text />

export const Primary = Template.bind({})
