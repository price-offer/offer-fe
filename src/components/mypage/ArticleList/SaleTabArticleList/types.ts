import type {
  // ArticlesElement,
  TradeStatus
} from '@types'

export type SaleTabArticleListProps = {
  // articles: ArticlesElement[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}
