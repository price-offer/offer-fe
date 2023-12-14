import type { ArticlesElement, TradeStatus } from '@types'

// NOTE: ArticlesElement 타입에 없어서 임시로 추가한 부분 : likeCount, review, sellerName
export type SaleTabArticleProps = {
  // 내 사용자 프로필, 타 사용자 프로필 구분
  hasToken: boolean
  className?: string
  // tradeStatus 변경 시, 이벤트
  onChangeTradeStatus(productId: number, status: TradeStatus): void
} & ArticlesElement
