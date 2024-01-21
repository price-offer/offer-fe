import type { LikeTabPostProps } from '../LikeTabPost'
import type { PostSummary } from '@types'

export type LikePostListProps = {
  className?: string
  posts: PostSummary[]
  onChangeProductLikeStatus: LikeTabPostProps['onChangeLikeStatus']
}
