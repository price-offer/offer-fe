import type { Meta, Story } from '@storybook/react'
import type { SelectBuyerModalProps } from './types'
import { SelectBuyerModal } from './index'

export default {
  component: SelectBuyerModal,
  title: 'Mypage/SelectBuyerModal'
} as Meta<SelectBuyerModalProps>

const Template: Story<SelectBuyerModalProps> = args => {
  return <SelectBuyerModal {...args} />
}

export const Default = Template.bind({})
Default.args = {
  productName: '맥북 에어 판매',
  buyers: [
    {
      id: 1,
      avatarSrc: '',
      nickname: '효정짱',
      latestMessage: '사고싶어요용',
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
}
