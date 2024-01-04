import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, Story, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { SaleTabPostProps } from './types'
import { SaleTabPost as SaleTabPostComponent } from './index'
import { TRADE_STATUS } from '@constants'
import type { TradeStatusType } from '@types'

type SaleTabPost = typeof SaleTabPostComponent

const meta: Meta<SaleTabPost> = {
  component: SaleTabPostComponent,
  title: 'MyPage/Article/SaleTabPost'
}

export default meta

const PrimaryWithHooks: Story<SaleTabPostProps> = args => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatusType>(
    TRADE_STATUS[1]
  )

  return (
    <>
      <div>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS[0])}>
          판매중
        </button>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS[1])}>
          거래 완료
        </button>
      </div>
      <Text styleType="subtitle01B">내 사용자</Text>
      <SaleTabPostComponent {...args} hasToken tradeStatus={tradeStatus} />
      <SaleTabPostComponent
        {...args}
        hasToken
        // isReviewed
        tradeStatus={tradeStatus}
      />
      <Text styleType="subtitle01B">타 사용자</Text>
      <SaleTabPostComponent
        {...args}
        hasToken={false}
        tradeStatus={tradeStatus}
      />
      <SaleTabPostComponent
        {...args}
        hasToken={false}
        tradeStatus={tradeStatus}
      />
    </>
  )
}
export const Primary: StoryObj<SaleTabPost> = {
  args: {
    hasToken: false,
    // sellerNickName: 'sonny',
    id: 4,
    thumbnailImageUrl: '',
    title: '상품 이름 상품 이름',
    price: 36500,
    location: '서울시 강남구',
    tradeStatus: TRADE_STATUS[1],
    createdAt: '2021-12-10T14:25:30',
    // isLiked: false,
    likeCount: 0,
    // isReviewed: false,
    onChangeTradeStatus: (productId: number, status: TradeStatusType): void => {
      action('onChangeTradeStatus')(productId, status)
    }
  },
  render: args => <PrimaryWithHooks {...args} />
}
