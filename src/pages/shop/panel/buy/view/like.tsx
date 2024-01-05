import { useGetLikedPostsQuery, useUpdateLikeStatusMutation } from '@apis'
import { LikeTabPostList } from '@components'
import type { SortOptionCodes } from '@types'

type LikePanelViewProps = {
  sortOptionCode: SortOptionCodes
}
export const LikePanelView = ({ sortOptionCode }: LikePanelViewProps) => {
  const likedPosts = useGetLikedPostsQuery({ sort: sortOptionCode })
  const likeStatusMutation = useUpdateLikeStatusMutation()

  const handleChangeProductLikeStatus = async (postId: number) => {
    await likeStatusMutation.mutateAsync({ postId })
    likedPosts.refetch()
  }

  return (
    <LikeTabPostList
      posts={likedPosts.data?.posts || []}
      onChangeProductLikeStatus={handleChangeProductLikeStatus}
    />
  )
}