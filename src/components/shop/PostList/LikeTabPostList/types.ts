import type { LikeTabPostProps } from '@components/shop/Post'
import type { PostSummary } from '@types'

export type LikePostListProps = {
  className?: string
  posts: PostSummary[]
  onChangeProductLikeStatus: LikeTabPostProps['onChangeLikeStatus']
}
