import type { Meta, StoryObj } from '@storybook/react'
import { PostField as PostFieldComponent } from './index'

type PostField = typeof PostFieldComponent

const meta: Meta<PostField> = {
  component: PostFieldComponent,
  title: 'Post/PostField'
}

export default meta

export const Default: StoryObj<PostField> = {
  args: { label: '작성일', value: '1시간 전' },
  render: args => <PostFieldComponent {...args} />
}
