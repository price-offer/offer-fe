import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { SellTypeProductList } from './index'
import type { SellTypeProductListProps } from './index'
import { TRADE_STATUS_OPTIONS } from '@constants'
import type { ArticlesElement, TradeStatus, TradeStatusCode } from '@types'

export default {
  argTypes: {},
  component: SellTypeProductList,
  title: 'Components/MyPage/ProductList/SellTypeProductList'
} as Meta<SellTypeProductListProps>

const Template: Story<SellTypeProductListProps> = args => {
  const [token, setToken] = useState<boolean>(false)
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>(
    TRADE_STATUS_OPTIONS[0]
  )
  const products = getProducts(tradeStatus.code)

  return (
    <>
      <div>
        <button type="button" onClick={(): void => setToken(true)}>
          로그인
        </button>
        <button type="button" onClick={(): void => setToken(false)}>
          로그아웃
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS_OPTIONS[0])}>
          판매중
        </button>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS_OPTIONS[1])}>
          거래완료
        </button>
      </div>
      <div>
        <Text styleType="subtitle01B">{tradeStatus.name}</Text>
      </div>
      <SellTypeProductList {...args} hasToken={token} products={products} />
    </>
  )
}

const getProducts = (tradeStatusCode: TradeStatusCode): ArticlesElement[] => {
  const isOnSale = tradeStatusCode === 4
  const tradeStatus = isOnSale
    ? TRADE_STATUS_OPTIONS[0]
    : TRADE_STATUS_OPTIONS[1]

  return Array.from({ length: 10 }, () => 0).map((_, index) => ({
    id: index,
    mainImageUrl: '',
    title: `${tradeStatus.name}인 상품`,
    price: 36500,
    tradeArea: '서울시 강남구',
    tradeStatus,
    createdDate: '2021-12-10T14:25:30',
    modifiedDate: '2021-12-10T14:25:30',
    isLiked: false,
    likeCount: 0,
    isReviewed: !!(index % 2 !== 0),
    sellerNickName: 'hypeboy'
  }))
}

export const Primary = Template.bind({})
Primary.args = {
  hasToken: true,
  products: [],
  onChangeTradeStatus: (id: number, status: TradeStatus): void => {
    action('onChangeTradeStatus')(id, status)
  }
}
