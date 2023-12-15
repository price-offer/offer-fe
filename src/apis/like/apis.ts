import type { PutPostLikeReq } from './types'
import { http } from '@utils/http'

export const putPostLike = (postId: number) =>
  http.put<PutPostLikeReq, null>('/posts/likes', { postId })
