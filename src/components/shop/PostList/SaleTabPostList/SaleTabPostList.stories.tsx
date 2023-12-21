import { Text } from '@offer-ui/react'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { SaleTabPostListProps } from './types'
import { SaleTabPostList as SaleTabPostListComponent } from './index'
import { TRADE_STATUS } from '@constants'
import type { PostSummary, TradeStatusType } from '@types'

type SaleTabPostList = typeof SaleTabPostListComponent

const meta: Meta<SaleTabPostList> = {
  component: SaleTabPostListComponent,
  title: 'MyPage/ArticleList/SaleTabPostList'
}

export default meta

const PrimaryWithHooks = (args: SaleTabPostListProps) => {
  const [token, setToken] = useState<boolean>(false)
  const [tradeStatus, setTradeStatus] = useState<TradeStatusType>(
    TRADE_STATUS[1]
  )
  const posts = [] as PostSummary[]

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
      <SaleTabPostListComponent {...args} hasToken={token} posts={posts} />
    </>
  )
}

export const Primary: StoryObj<SaleTabPostList> = {
  args: {
    hasToken: true,
    posts: [],
    onChangeTradeStatus: (id: number, status: TradeStatusType): void => {
      action('onChangeTradeStatus')(id, status)
    }
  },
  render: args => <PrimaryWithHooks {...args} />
}
