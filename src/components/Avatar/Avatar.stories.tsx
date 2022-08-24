import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from './index'

export default {
  argTypes: {},
  component: Avatar,
  title: 'Component/Avatar'
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />
export const Large = Template.bind({})
Large.args = {
  cursor: true,
  name: 'Large Avatar',
  size: 'lg'
}

export const Medium = Template.bind({})
Medium.args = {
  cursor: true,
  name: 'Medium Avatar',
  size: 'md'
}

export const Small = Template.bind({})
Small.args = {
  cursor: true,
  name: 'Small Avatar',
  size: 'sm'
}

export const XSmall = Template.bind({})
XSmall.args = {
  cursor: true,
  name: 'XSmall Avatar',
  size: 'sm'
}
