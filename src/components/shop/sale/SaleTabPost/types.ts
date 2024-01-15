import type { PostSummary, TradeStatusType } from '@types'

export type SaleTabPostProps = {
  isLogin: boolean
  className?: string
  // tradeStatus 변경 시, 이벤트
  onChangeTradeStatus(productId: number, status: TradeStatusType): void
} & PostSummary
