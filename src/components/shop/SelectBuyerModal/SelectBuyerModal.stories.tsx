import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { SelectBuyerModalProps } from './types'
import { SelectBuyerModal as SelectBuyerModalComponent } from './index'

type SelectBuyerModal = typeof SelectBuyerModalComponent

const meta: Meta = {
  component: SelectBuyerModalComponent,
  title: 'Mypage/SelectBuyerModal'
}

export default meta

const BUYERS_MOCK = [
  {
    id: 1,
    avatarSrc: '',
    nickname: '효정짱',
    latestMessage: ' 사고싶어요용  사고싶어요용 사고싶어요용 사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 2,
    avatarSrc: '',
    nickname: '효정짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 3,
    avatarSrc: '',
    nickname: '수림짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 4,
    avatarSrc: '',
    nickname: '주영짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 5,
    avatarSrc: '',
    nickname: '효정짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 6,
    avatarSrc: '',
    nickname: '수림짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  },
  {
    id: 7,
    avatarSrc: '',
    nickname: '주영짱',
    latestMessage: '사고싶어요용',
    offerTime: '2시간 전',
    offerPrice: 200000
  }
]

const DefaultWithHooks = (args: SelectBuyerModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}>
        open
      </button>
      <SelectBuyerModalComponent
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export const Default: StoryObj<SelectBuyerModal> = {
  args: { productName: '맥북 에어 판매', buyers: BUYERS_MOCK },
  render: args => <DefaultWithHooks {...args} />
}
