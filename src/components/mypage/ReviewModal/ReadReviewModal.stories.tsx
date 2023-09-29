import type { Meta, Story } from '@storybook/react'
import type { ReadReviewModalProps } from './Read/types'
import ReviewModal from '.'
import useModal from '@hooks/useModal'

export default {
  component: ReviewModal.Read,
  title: 'MyPage/ReadReviewModal'
} as Meta<ReadReviewModalProps>

const Template: Story<ReadReviewModalProps> = args => {
  const { openModal, closeModal, isOpen } = useModal()
  return (
    <>
      <button type="button" onClick={openModal}>
        click
      </button>
      <ReviewModal.Read {...args} isOpen={isOpen} onClose={closeModal} />
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