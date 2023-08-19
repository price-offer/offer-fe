import type { Meta, Story } from '@storybook/react'
import { PriceOfferModal } from './index'

export default {
  component: PriceOfferModal,
  title: 'Product/PriceOfferModal'
} as Meta

const Template: Story = args => <PriceOfferModal {...args} />

export const Default = Template.bind({})
Default.args = {}
