import type { PostSummary } from '@types'

export type LikeTabPostProps = PostSummary & {
  className?: string
  onChangeLikeStatus(postId: number): void
}
