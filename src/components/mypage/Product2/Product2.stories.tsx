import { action } from '@storybook/addon-actions'
import type { Meta, Story } from '@storybook/react'
import { Product2 } from '.'
import type { Product2Props } from '.'
import type { Review, TradeStatus } from '@types'

export default {
  argTypes: {},
  component: Product2,
  title: 'Components/MyPage/Product2'
} as Meta<Product2Props>

type TradeStatusKey = 'onSale' | 'soldOut'
type TradeStatusList = {
  [key in TradeStatusKey]: TradeStatus
}
const TRADE_STATUS: TradeStatusList = {
  onSale: {
    code: 4,
    name: '판매중'
  },
  soldOut: {
    code: 8,
    name: '거래완료'
  }
}

const Template: Story<Product2Props> = args => {
  return (
    <div>
      <Product2 {...args} tradeStatus={TRADE_STATUS['onSale']} />
      <Product2 {...args} tradeStatus={TRADE_STATUS['soldOut']} />
      <Product2
        {...args}
        review={{} as Review}
        tradeStatus={TRADE_STATUS['soldOut']}
      />
    </div>
  )
}
export const Primary = Template.bind({})
Primary.args = {
  tradeType: 'buy',
  id: 4,
  mainImageUrl: '',
  title: '상품 이름 상품 이름',
  price: 36500,
  tradeArea: '서울시 강남구',
  tradeStatus: {
    code: 4,
    name: '판매중'
  },
  createdDate: '2021-12-10T14:25:30',
  modifiedDate: '2021-12-10T14:25:30',
  isLiked: false,
  likeCount: 0,
  review: null,
  onChangeTradeStatus: (productId: number, status: TradeStatus): void => {
    action('onChangeTradeStatus')(productId, status)
  }
}
