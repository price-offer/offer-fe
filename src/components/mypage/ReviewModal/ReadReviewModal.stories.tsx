import type { Meta, Story } from '@storybook/react'
import type { ReadReviewModalProps } from './types'
import { ReadReviewModal } from '.'
import useModals from '@hooks/useModals'

export default {
  component: ReadReviewModal,
  title: 'MyPage/ReadReviewModal'
} as Meta<ReadReviewModalProps>

const Template: Story<ReadReviewModalProps> = args => {
  const { modals, open, close } = useModals(['ReadReviewModal'])
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open('ReadReviewModal')
        }}>
        click
      </button>
      <ReadReviewModal
        {...args}
        isOpen={modals.ReadReviewModal?.isOpen}
        onClose={(): void => {
          close('ReadReviewModal')
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
