import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { SaleTabArticleListProps } from './types'
import { SaleTabArticleList as SaleTabArticleListComponent } from './index'
import { TRADE_STATUS } from '@constants'
import type { ArticlesElement, TradeStatus, TradeStatusCodes } from '@types'

type SaleTabArticleList = typeof SaleTabArticleListComponent

const meta: Meta<SaleTabArticleList> = {
  component: SaleTabArticleListComponent,
  title: 'MyPage/ArticleList/SaleTabArticleList'
}

export default meta

const PrimaryWithHooks = (args: SaleTabArticleListProps) => {
  const [token, setToken] = useState<boolean>(false)
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>(TRADE_STATUS[1])
  const articles = getArticles(tradeStatus.code)

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
          onClick={(): void => setTradeStatus(TRADE_STATUS[0])}>
          판매중
        </button>
        <button
          type="button"
          onClick={(): void => setTradeStatus(TRADE_STATUS[1])}>
          거래완료
        </button>
      </div>
      <div>
        <Text styleType="subtitle01B">{tradeStatus.name}</Text>
      </div>
      <SaleTabArticleListComponent
        {...args}
        articles={articles}
        hasToken={token}
      />
    </>
  )
}

const getArticles = (tradeStatusCode: TradeStatusCodes): ArticlesElement[] => {
  const isOnSale = tradeStatusCode === 'SELLING'
  const tradeStatus = isOnSale ? TRADE_STATUS[0] : TRADE_STATUS[1]

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

export const Primary: StoryObj<SaleTabArticleList> = {
  args: {
    hasToken: true,
    articles: [],
    onChangeTradeStatus: (id: number, status: TradeStatus): void => {
      action('onChangeTradeStatus')(id, status)
    }
  },
  render: args => <PrimaryWithHooks {...args} />
}
