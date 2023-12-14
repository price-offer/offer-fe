import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, Story, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { SaleTabArticleProps } from './types'
import { SaleTabArticle as SaleTabArticleComponent } from './index'
import { TRADE_STATUS } from '@constants'
import type { TradeStatus } from '@types'

type SaleTabArticle = typeof SaleTabArticleComponent

const meta: Meta<SaleTabArticle> = {
  component: SaleTabArticleComponent,
  title: 'MyPage/Article/SaleTabArticle'
}

export default meta

const PrimaryWithHooks: Story<SaleTabArticleProps> = args => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>(TRADE_STATUS[1])

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
      <SaleTabArticleComponent {...args} hasToken tradeStatus={tradeStatus} />
      <SaleTabArticleComponent
        {...args}
        hasToken
        isReviewed
        tradeStatus={tradeStatus}
      />
      <Text styleType="subtitle01B">타 사용자</Text>
      <SaleTabArticleComponent
        {...args}
        hasToken={false}
        tradeStatus={tradeStatus}
      />
      <SaleTabArticleComponent
        {...args}
        hasToken={false}
        tradeStatus={tradeStatus}
      />
    </>
  )
}
export const Primary: StoryObj<SaleTabArticle> = {
  args: {
    hasToken: false,
    sellerNickName: 'sonny',
    id: 4,
    mainImageUrl: '',
    title: '상품 이름 상품 이름',
    price: 36500,
    tradeArea: '서울시 강남구',
    tradeStatus: TRADE_STATUS[1],
    createdDate: '2021-12-10T14:25:30',
    modifiedDate: '2021-12-10T14:25:30',
    isLiked: false,
    likeCount: 0,
    isReviewed: false,
    onChangeTradeStatus: (productId: number, status: TradeStatus): void => {
      action('onChangeTradeStatus')(productId, status)
    }
  },
  render: args => <PrimaryWithHooks {...args} />
}
