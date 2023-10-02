import type { Meta, Story } from '@storybook/react'
import type { ReadReviewModalProps } from './types'
import ReviewModal from '.'
import useModal from '@hooks/useModal'

export default {
  component: ReviewModal.Read,
  title: 'MyPage/ReadReviewModal'
} as Meta<ReadReviewModalProps>

const Template: Story<ReadReviewModalProps> = args => {
  const { open, close, isOpen } = useModal()
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open()
        }}>
        click
      </button>
      <ReviewModal.Read
        {...args}
        isOpen={isOpen}
        onClose={(): void => {
          close()
        }}
      />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  nickname: '닉네임',
  productName: '상품이름',
  content: '리뷰',
  score: 'smile'
}
