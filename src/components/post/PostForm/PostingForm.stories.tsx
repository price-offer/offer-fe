import { Input } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { PostForm as PostFormComponent } from './index'

type PostForm = typeof PostFormComponent

const meta: Meta<PostForm> = {
  title: 'Post/PostForm',
  component: PostFormComponent
}

export default meta

export const Default: StoryObj<PostForm> = {
  args: { label: '시작가', children: <Input /> },
  render: args => <PostFormComponent {...args} />
}
