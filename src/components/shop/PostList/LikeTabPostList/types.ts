import type { LikeActivityProps } from '@components/shop/Post/BuyTabPost/types'
import type { PostSummary } from '@types'

export type LikePostListProps = {
  className?: string
  posts: PostSummary[]
  onChangeProductLikeStatus: LikeActivityProps['onChangeProductLikeStatus']
}
