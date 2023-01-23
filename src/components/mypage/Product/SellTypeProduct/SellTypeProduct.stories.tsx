import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { SellTypeProductProps } from './index'
import { SellTypeProduct } from './index'
import { TRADE_STATUS_OPTIONS } from '@constants'
import type { TradeStatus } from '@types'

export default {
  argTypes: {},
  component: SellTypeProduct,
  title: 'Components/MyPage/Product/SellTypeProduct'
} as Meta<SellTypeProductProps>

const Template: Story<SellTypeProductProps> = args => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>(
    TRADE_STATUS_OPTIONS[0]
  )

  return (
    <>
      <div>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS_OPTIONS[0])}>
          판매중
        </button>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS_OPTIONS[1])}>
          거래 완료
        </button>
      </div>
      <Text styleType="subtitle01B">내 사용자</Text>
      <SellTypeProduct {...args} hasToken tradeStatus={tradeStatus} />
      <SellTypeProduct
        {...args}
        hasToken
        isReviewed
        tradeStatus={tradeStatus}
      />
      <Text styleType="subtitle01B">타 사용자</Text>
      <SellTypeProduct {...args} hasToken={false} tradeStatus={tradeStatus} />
      <SellTypeProduct {...args} hasToken={false} tradeStatus={tradeStatus} />
    </>
  )
}
export const Primary = Template.bind({})
Primary.args = {
  hasToken: false,
  sellerNickName: 'sonny',
  id: 4,
  mainImageUrl: '',
  title: '상품 이름 상품 이름',
  price: 36500,
  tradeArea: '서울시 강남구',
  tradeStatus: TRADE_STATUS_OPTIONS[0],
  createdDate: '2021-12-10T14:25:30',
  modifiedDate: '2021-12-10T14:25:30',
  isLiked: false,
  likeCount: 0,
  isReviewed: false,
  onChangeTradeStatus: (productId: number, status: TradeStatus): void => {
    action('onChangeTradeStatus')(productId, status)
  }
}