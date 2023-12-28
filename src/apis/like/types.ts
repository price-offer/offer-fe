import type { PostSummaries } from '@types'

export type GetLikedPostsReq = {
  sort: string
  lastId: number
  limit: number
}
export type GetLikedPostsRes = PostSummaries

export type UpdateLikeStatusReq = {
  postId: number
}
// TODO: 정확한 타입 BE 확인 필요
export type UpdateLikeStatusRes = UnknownObject
