import type { TradeBuyActivityType } from '@constants'
import type { ArticlesElement } from '@types'

export type BuyTabArticleProps = {
  // 구매 활동 타입
  activityType: TradeBuyActivityType
  className?: string
} & ArticlesElement
