import type { Meta, Story } from '@storybook/react'
import type { PriceOfferCardProps } from './types'
import { PriceOfferCard } from './index'

export default {
  component: PriceOfferCard,
  title: 'ProductDetail/PriceOfferCard'
} as Meta<PriceOfferCardProps>

const Template: Story<PriceOfferCardProps> = args => (
  <PriceOfferCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  offerList: [
    {
      id: 23,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 22343,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 2223433,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 224323,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 215913,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 217813,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 210913,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 215613,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 211473,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 2187913,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 214513,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 215613,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 277113,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    },
    {
      id: 21138,
      name: '신효정',
      level: 23,
      tradeArea: '시당구 동작동',
      date: '1시간 전',
      offerPrice: 234233,
      profileUrl: '',
      tradeMethod: 'all'
    }
  ],
  likeCount: 3,
  isLike: true
}
