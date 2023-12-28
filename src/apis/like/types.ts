import type { PostSummary } from '@types'

export type GetLikedPostsReq = {
  sort: string
  lastId: number
  limit: number
}
export type GetLikedPostsRes = PostSummary[]

export type UpdateLikeStatusReq = {
  postId: number
}
// TODO: 정확한 타입 BE 확인 필요
export type UpdateLikeStatusRes = UnknownObject
