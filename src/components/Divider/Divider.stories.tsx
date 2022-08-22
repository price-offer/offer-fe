import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider } from './index'

export default {
  argTypes: {},
  component: Divider,
  title: 'Component/Divider'
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />
export const Horizontal = Template.bind({})
Horizontal.args = {
  orientation: 'horizontal',
  size: 'regular'
}

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
  size: 'regular'
}
