import type { UpdateLikeStatusReq } from './types'
import { http } from '@utils/http'

export const updateLikeStatus = (postId: number) =>
  http.put<UpdateLikeStatusReq, null>('/posts/likes', { postId })
