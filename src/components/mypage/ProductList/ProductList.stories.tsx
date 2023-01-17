import { action } from '@storybook/addon-actions'
import type { Meta, Story } from '@storybook/react'
import { ProductList } from './index'
import type { ProductListProps } from './index'
import type { ProductStatusKeys } from '@constants'

export default {
  argTypes: {},
  component: ProductList,
  title: 'Components/MyPage/ProductList'
} as Meta<ProductListProps>

const Template: Story<ProductListProps> = args => <ProductList {...args} />
export const Primary = Template.bind({})

const products = Array.from({ length: 15 }, () => 0).map((_, index) => {
  return {
    date: '2023.01.17',
    favorite: 3,
    id: index + 1,
    imgUrl: 'https://picsum.photos/400',
    name: `상품 이름${index + 1}`,
    price: 155000
  }
})

Primary.args = {
  onChangeProductStatus: (id: number, status: ProductStatusKeys): void => {
    action('onChangeProductStatus')(id, status)
  },
  products,
  status: 'sell'
}
