import type { Meta, Story } from '@storybook/react'
import { Header } from '.'

export default {
  argTypes: {},
  component: Header,
  title: 'Common/Header'
} as Meta

const Template: Story = () => {
  return <Header />
}
export const Default = Template.bind({})
