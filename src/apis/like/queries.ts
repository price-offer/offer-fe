import type { DefaultError } from '@tanstack/react-query'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getLikedPosts, updateLikeStatus } from './apis'
import type { GetLikedPostsReq, UpdateLikeStatusReq } from './types'

export const useGetLikedPostsQuery = (searchOptions: GetLikedPostsReq) =>
  useQuery({
    queryKey: ['likedPosts', searchOptions],
    queryFn: () => getLikedPosts(searchOptions)
  })

export const useUpdateLikeStatusMutation = () =>
  useMutation<null, DefaultError, UpdateLikeStatusReq['postId']>({
    mutationFn: postId => updateLikeStatus(postId)
  })
