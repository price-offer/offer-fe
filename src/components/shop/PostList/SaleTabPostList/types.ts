import type { SaleTabPostProps } from '@components/shop/Post/SaleTabPost'
import type { PostSummary } from '@types'

export type SaleTabPostListProps = {
  posts: PostSummary[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus: SaleTabPostProps['onChangeTradeStatus']
}
