import type { Meta, StoryObj } from '@storybook/react'
import { PostFieldList as PostFieldListComponent } from './index'

type PostFieldList = typeof PostFieldListComponent

const meta: Meta<PostFieldList> = {
  component: PostFieldListComponent,
  title: 'Post/PostFieldList'
}

export default meta

export const Default: StoryObj<PostFieldList> = {
  args: {
    date: '1시간 전',
    productCondition: '새상품',
    tradeType: '직거래',
    location: '관악구'
  },
  render: args => <PostFieldListComponent {...args} />
}
