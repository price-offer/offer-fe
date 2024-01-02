import type { Meta, StoryObj } from '@storybook/react'
import { PriceOfferCard as PriceOfferCardComponent } from './index'

type PriceOfferCard = typeof PriceOfferCardComponent
const meta: Meta<PriceOfferCard> = {
  component: PriceOfferCardComponent,
  title: 'Post/PriceOfferCard'
}

export default meta

export const Default: StoryObj<PriceOfferCard> = {
  args: { postId: 10 },
  render: args => <PriceOfferCardComponent {...args} />
}
