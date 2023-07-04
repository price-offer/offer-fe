import type { Meta, Story } from '@storybook/react'
import { ProductField } from './index'
import type { ProductFieldProps } from './index'

export default {
  component: ProductField,
  title: 'Components/ProductDetail/ProductField'
} as Meta<ProductFieldProps>

const Template: Story<ProductFieldProps> = args => <ProductField {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '작성일',
  value: '1시간 전'
}
