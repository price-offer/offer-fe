import { action } from '@storybook/addon-actions'
import type { Meta, Story } from '@storybook/react'
import { Product } from './index'
import type { ProductProps } from './index'
import type { ProductStatusKeys } from '@constants/app'

export default {
  argTypes: {},
  component: Product,
  title: 'Components/Product'
} as Meta<ProductProps>

const Template: Story<ProductProps> = args => <Product {...args} />
export const Primary = Template.bind({})
Primary.args = {
  date: '2023.01.17',
  favorite: 3,
  id: 1,
  imgUrl: 'https://picsum.photos/400',
  name: '상품 이름',
  onChangeStatus: (id: number, status: ProductStatusKeys): void => {
    action('onChangeStatus')(id, status)
  },
  price: 155000,
  status: 'sell'
}
