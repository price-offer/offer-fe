import { useQuery, useMutation } from '@tanstack/react-query'
import { getLikedPosts, updateLikeStatus } from './apis'
import type { GetLikedPostsReq } from './types'

export const useGetLikedPostsQuery = (searchOptions: GetLikedPostsReq) =>
  useQuery({
    queryKey: ['likedPosts', searchOptions],
    queryFn: () => getLikedPosts(searchOptions)
  })

export const useUpdateLikeStatusMutation = () =>
  useMutation({
    mutationFn: (postId: number) => updateLikeStatus(postId)
  })
