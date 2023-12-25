import type {
  GetCategoriesRes,
  GetPostsReq,
  GetPostsRes,
  UpdateTradeStatusReq,
  UpdateTradeStatusRes
} from './types'
import { http } from '@utils/http'

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPosts = (params: GetPostsReq) =>
  http.get<GetPostsReq, GetPostsRes>('/posts', params)

export const updatePostTradeStatus = (params: UpdateTradeStatusReq) =>
  http.put<UpdateTradeStatusReq, UpdateTradeStatusRes>(
    `/posts/trade-status/${params.postId}`,
    params
  )
