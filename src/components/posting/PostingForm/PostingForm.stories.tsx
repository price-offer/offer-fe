import { Input } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { PostingForm as PostingFormComponent } from './index'

type PostingForm = typeof PostingFormComponent

const meta: Meta<PostingForm> = {
  title: 'Posting/PostingForm',
  component: PostingFormComponent
}

export default meta

export const Default: StoryObj<PostingForm> = {
  args: { label: '시작가', children: <Input /> },
  render: args => <PostingFormComponent {...args} />
}
