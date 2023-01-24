import { Input } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import { PostingForm } from './index'
import type { PostingFormProps } from './index'

export default {
  title: 'Components/PostingForm',
  component: PostingForm
} as Meta<PostingFormProps>

const Template: Story<PostingFormProps> = args => <PostingForm {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '시작가',
  children: <Input />
}
