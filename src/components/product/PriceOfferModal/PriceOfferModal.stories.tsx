import type { Meta, Story } from '@storybook/react'
import type { PriceOfferModalProps } from './types'
import { PriceOfferModal } from './index'

export default {
  component: PriceOfferModal,
  title: 'Product/PriceOfferModal'
} as Meta<PriceOfferModalProps>

const Template: Story<PriceOfferModalProps> = args => (
  <PriceOfferModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}
