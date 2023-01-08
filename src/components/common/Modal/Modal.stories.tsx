import type { Meta, Story } from '@storybook/react'
import { Modal } from './index'
import type { ModalProps } from './index'
import { useState } from 'react'

export default {
  component: Modal,
  title: 'Components/Common/Modal'
} as Meta<ModalProps>

const Template: Story<ModalProps> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          setIsOpen(true)
        }}>
        click
      </button>
      <Modal
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
