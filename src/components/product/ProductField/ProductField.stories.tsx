import type { Meta, StoryObj } from '@storybook/react'
import { ProductField as ProductFieldComponent } from './index'

type ProductField = typeof ProductFieldComponent

const meta: Meta<ProductField> = {
  component: ProductFieldComponent,
  title: 'Product/ProductField'
}

export default meta

export const Default: StoryObj<ProductField> = {
  args: { label: '작성일', value: '1시간 전' },
  render: args => <ProductFieldComponent {...args} />
}
