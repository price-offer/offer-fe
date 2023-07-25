import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { ConfirmModal } from './index'
import type { ConfirmModalProps } from './index'

export default {
  component: ConfirmModal,
  title: 'Components/Common/ConfirmModal'
} as Meta<ConfirmModalProps>

const Template: Story<ConfirmModalProps> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          setIsOpen(true)
        }}
      >
        click
      </button>
      <ConfirmModal
        {...args}
        isOpen={isOpen}
        onClose={(): void => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  description: '지금 바로 Offer에서 첫 거래를 시작해볼까요?',
  ghostButtonText: '괜찮아요',
  hasLogo: true,
  primaryButtonText: '첫 거래하기',
  title: '부드러운 냉장고님 반가워요!'
}
