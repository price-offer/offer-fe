import type {
  GetLikedPostsReq,
  GetLikedPostsRes,
  UpdateLikeStatusReq
} from './types'
import { http } from '@utils/http'

export const updateLikeStatus = (postId: number) =>
  http.put<UpdateLikeStatusReq, null>('/posts/likes', { postId })

export const getLikedPosts = (params: GetLikedPostsReq) =>
  http.get<GetLikedPostsReq, GetLikedPostsRes>('/posts/likes', params)
