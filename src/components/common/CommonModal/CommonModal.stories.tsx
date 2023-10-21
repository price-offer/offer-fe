import { Button } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { CommonModalProps } from './types'
import { CommonModal as CommonModalComponent } from './index'

type CommonModal = typeof CommonModalComponent

const meta: Meta<CommonModal> = {
  component: CommonModalComponent,
  title: 'Common/CommonModal'
}

export default meta

const DefaultWithHooks = (args: CommonModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button">open</button>
      <CommonModalComponent
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export const Default: StoryObj<CommonModal> = {
  args: {
    description: '지금 바로 Offer에서 첫 거래를 시작해볼까요?',
    hasLogo: true,
    title: '부드러운 냉장고님 반가워요!',
    buttons: [
      <Button key="first">첫 판매하기</Button>,
      <Button key="ok" styleType="ghost">
        괜찮아요
      </Button>
    ]
  },
  render: args => <DefaultWithHooks {...args} />
}
