import type { Meta, StoryObj } from '@storybook/react'
import type { PriceOfferCardProps } from './types'
import { PriceOfferCard as PriceOfferCardComponent } from './index'

type PriceOfferCard = typeof PriceOfferCardComponent
const meta: Meta<PriceOfferCard> = {
  component: PriceOfferCardComponent,
  title: 'Post/PriceOfferCard'
}

export default meta

const OFFERLISTS_MOCKS: PriceOfferCardProps['offerList'] = [
  {
    id: 23,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 22343,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 2223433,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 224323,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 215913,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 217813,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 210913,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 215613,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 211473,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 2187913,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 214513,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 215613,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 277113,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  },
  {
    id: 21138,
    nickname: '신효정',
    level: '23',
    location: '시당구 동작동',
    date: '1시간 전',
    price: 234233,
    profileImageUrl: '',
    tradeType: 'ALL'
  }
]
export const Default: StoryObj<PriceOfferCard> = {
  args: { offerList: OFFERLISTS_MOCKS, likeCount: 3, isLike: true },
  render: args => <PriceOfferCardComponent {...args} />
}
