import type { PostSummary } from '@types'

export type LikeTabPanelProps = PostSummary & {
  className?: string
  onChangeLikeStatus(postId: number): void
}
