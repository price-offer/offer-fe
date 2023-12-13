import type { Meta, StoryObj } from '@storybook/react'
import { ProductBubble as ProductBubbleComponent } from './index'

type ProductBubble = typeof ProductBubbleComponent

const meta: Meta<ProductBubble> = {
  component: ProductBubbleComponent,
  title: 'Messagebox/ProductBubble'
}

export default meta

export const Default: StoryObj<ProductBubble> = {
  args: {
    id: 1,
    title: '마르니 플랫 로퍼 (black)',
    price: 133000,
    offerPrice: 144449,
    tradeType: 'ALL',
    productImageUrl: 'https://picsum.photos/id/237/200/300'
  },
  render: args => <ProductBubbleComponent {...args} />
}
