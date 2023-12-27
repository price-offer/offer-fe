import type { Meta, StoryObj } from '@storybook/react'
import { PostFields as PostFieldsComponent } from './index'

type PostFields = typeof PostFieldsComponent

const meta: Meta<PostFields> = {
  component: PostFieldsComponent,
  title: 'Post/PostFields'
}

export default meta

export const Default: StoryObj<PostFields> = {
  args: {
    date: '1시간 전',
    productCondition: '새상품',
    tradeType: '직거래',
    location: '관악구'
  },
  render: args => <PostFieldsComponent {...args} />
}
