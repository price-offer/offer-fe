import type { Meta, Story } from '@storybook/react'
import type { ProductBubbleProps } from './types'
import { ProductBubble } from './index'

export default {
  component: ProductBubble,
  title: 'Messagebox/ProductBubble'
} as Meta<ProductBubbleProps>

const Template: Story<ProductBubbleProps> = args => <ProductBubble {...args} />
export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: '마르니 플랫 로퍼 (black)',
  price: 133000,
  offerPrice: 144449,
  tradeType: 2,
  productImageUrl: 'https://picsum.photos/id/237/200/300'
}
